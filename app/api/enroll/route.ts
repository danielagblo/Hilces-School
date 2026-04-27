import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Enrollment from '@/models/Enrollment';
import { sendSMS } from '@/lib/sms';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Create new enrollment record
    const newEnrollment = await Enrollment.create(body);
    
    // Format the parent's phone number to standard format if needed
    const parentPhone = body.parentPhone;
    const schoolPhone = process.env.SCHOOL_PHONE || '0247704801'; 
    
    // Send SMS to Parent
    const parentMessage = `Dear ${body.parentName}, thank you for applying to Hilces International School for ${body.studentFirstName}. We have received your application and will contact you shortly regarding the next steps.`;
    await sendSMS(parentPhone, parentMessage);
    
    // Send SMS to School
    const schoolMessage = `New Admission Alert! ${body.parentName} just applied for ${body.studentFirstName} (${body.gradeApplyingFor}). Contact: ${parentPhone}.`;
    await sendSMS(schoolPhone, schoolMessage);
    
    return NextResponse.json({ success: true, data: newEnrollment }, { status: 201 });
  } catch (error: any) {
    console.error('Enrollment error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to process enrollment' }, { status: 500 });
  }
}
