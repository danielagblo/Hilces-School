import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import DynamicImage from '@/models/DynamicImage';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const images = await DynamicImage.find({});
    
    // Convert to a simple key-value map for easier lookup
    const imageMap = images.reduce((acc: any, img: any) => {
      acc[img.sectionId] = img.imageUrl;
      return acc;
    }, {});

    return NextResponse.json({ success: true, data: imageMap });
  } catch (error: any) {
    console.error('Fetch media map error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch media map' }, { status: 500 });
  }
}
