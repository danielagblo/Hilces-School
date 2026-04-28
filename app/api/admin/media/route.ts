import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import DynamicImage from '@/models/DynamicImage';
import { uploadToS3, deleteFromS3 } from '@/lib/s3';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'hilcesadmin123';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const password = formData.get('password') as string;
    const action = formData.get('action') as string;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    if (action === 'list') {
      const images = await DynamicImage.find({});
      return NextResponse.json({ success: true, data: images });
    }

    if (action === 'upload') {
      const sectionId = formData.get('sectionId') as string;
      const file = formData.get('file') as File;
      const isMultiple = formData.get('isMultiple') === 'true';

      if (!sectionId || !file) {
        return NextResponse.json({ success: false, error: 'Missing sectionId or file' }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `dynamic/${sectionId}-${Date.now()}-${file.name}`;
      const contentType = file.type;

      const imageUrl = await uploadToS3(buffer, fileName, contentType);

      // Update or create the record
      let updatedImage;
      if (isMultiple) {
        updatedImage = await DynamicImage.findOneAndUpdate(
          { sectionId },
          { 
            $push: { images: imageUrl }, 
            $set: { updatedAt: new Date(), imageUrl: imageUrl } // Also set main imageUrl for safety
          },
          { upsert: true, new: true }
        );
      } else {
        updatedImage = await DynamicImage.findOneAndUpdate(
          { sectionId },
          { imageUrl, updatedAt: new Date(), images: [] }, // Reset images if not multiple
          { upsert: true, new: true }
        );
      }

      return NextResponse.json({ success: true, data: updatedImage });
    }

    if (action === 'remove_image') {
      const sectionId = formData.get('sectionId') as string;
      const imageUrl = formData.get('imageUrl') as string;

      if (!sectionId || !imageUrl) {
        return NextResponse.json({ success: false, error: 'Missing details' }, { status: 400 });
      }

      // 1. Delete from S3
      try {
        await deleteFromS3(imageUrl);
      } catch (err) {
        console.warn('S3 delete failed (might be already gone):', err);
      }

      // 2. Update DB
      const updated = await DynamicImage.findOneAndUpdate(
        { sectionId },
        { $pull: { images: imageUrl } },
        { new: true }
      );

      return NextResponse.json({ success: true, data: updated });
    }

    if (action === 'delete') {
      const sectionId = formData.get('sectionId') as string;
      if (!sectionId) {
        return NextResponse.json({ success: false, error: 'Missing sectionId' }, { status: 400 });
      }

      // 1. Find the record to get all image URLs
      const record = await DynamicImage.findOne({ sectionId });
      if (record) {
        // Delete main image
        if (record.imageUrl) {
          try {
            await deleteFromS3(record.imageUrl);
          } catch (err) {
            console.warn('S3 delete failed for main image:', err);
          }
        }
        // Delete all gallery images
        if (record.images && record.images.length > 0) {
          for (const imgUrl of record.images) {
            try {
              await deleteFromS3(imgUrl);
            } catch (err) {
              console.warn('S3 delete failed for gallery image:', err);
            }
          }
        }
      }

      // 2. Remove from DB
      await DynamicImage.findOneAndDelete({ sectionId });

      return NextResponse.json({ success: true, message: 'Reverted to default and cleaned up S3' });
    }

    return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('Media API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
