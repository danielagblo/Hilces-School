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

      if (!sectionId || !file) {
        return NextResponse.json({ success: false, error: 'Missing sectionId or file' }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `dynamic/${sectionId}-${Date.now()}-${file.name}`;
      const contentType = file.type;

      const imageUrl = await uploadToS3(buffer, fileName, contentType);

      // Update or create the record
      const updatedImage = await DynamicImage.findOneAndUpdate(
        { sectionId },
        { imageUrl, updatedAt: new Date() },
        { upsert: true, new: true }
      );

      return NextResponse.json({ success: true, data: updatedImage });
    }

    if (action === 'delete') {
      const sectionId = formData.get('sectionId') as string;
      if (!sectionId) {
        return NextResponse.json({ success: false, error: 'Missing sectionId' }, { status: 400 });
      }

      // We might want to delete from S3 too, but for simplicity we'll just remove the DB record
      // to "revert" to the static image. 
      // If we want to be thorough, we'd store the S3 key in the DB.
      await DynamicImage.findOneAndDelete({ sectionId });

      return NextResponse.json({ success: true, message: 'Reverted to default' });
    }

    return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('Media API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
