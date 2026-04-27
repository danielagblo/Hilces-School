import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Enrollment from '@/models/Enrollment';
import { sendSMS } from '@/lib/sms';

export async function POST(request: Request) {
  try {
    const { id, password } = await request.json();

    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'hilcesadmin123';
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    
    const enrollment = await Enrollment.findById(id);
    if (!enrollment) {
      return NextResponse.json({ success: false, error: 'Enrollment not found' }, { status: 404 });
    }

    if (enrollment.status === 'admitted') {
      return NextResponse.json({ success: false, error: 'Already admitted' }, { status: 400 });
    }

    // Update status
    enrollment.status = 'admitted';
    await enrollment.save();

    // Send Admission SMS
    const admissionMessage = `Congratulations! ${enrollment.studentFirstName} has been ADMITTED to Hilces International School. We are excited to welcome you to our family! Please visit the school office for your admission pack.`;
    await sendSMS(enrollment.parentPhone, admissionMessage);

    return NextResponse.json({ success: true, message: 'Applicant admitted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Approve error:', error);
    return NextResponse.json({ success: false, error: 'Failed to approve admission' }, { status: 500 });
  }
}
