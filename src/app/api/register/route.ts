import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Registration from '@/models/Registration';
import { appendToSheet } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, registrationNumber, specialization, institution } = body;

    if (!name || !email || !registrationNumber || !specialization || !institution) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Save to MongoDB
    await connectDB();
    const registration = await Registration.create({
      name,
      email,
      registrationNumber,
      specialization,
      institution,
    });

    // Append to Google Sheet (non-blocking)
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    appendToSheet({ timestamp, name, email, registrationNumber, specialization, institution })
      .catch(err => console.error('Google Sheets write failed:', err));

    return NextResponse.json({ success: true, id: registration._id }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
