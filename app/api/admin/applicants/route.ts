import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Enrollment from '@/models/Enrollment';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // In a real app, use a strong hashed password. 
    // For now, we use an environment variable or a default fallback.
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'hilcesadmin123';

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    
    // Fetch all enrollments, sorted by newest first
    const applicants = await Enrollment.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: applicants }, { status: 200 });
  } catch (error: any) {
    console.error('Fetch applicants error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch applicants' }, { status: 500 });
  }
}
