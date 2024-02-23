import { connectToDb } from '@/dbConfig/connectToDb';
import { Contact } from '@/models/contactSchema';
import { NextResponse } from 'next/server';

connectToDb();

export async function POST(req, res) {
  try {
    const data = await req.json();
    const { fullname, email, message } = data;

    const newUserDetails = new Contact({
      fullname: fullname,
      email: email,
      message: message,
    });

    const savedUser = await newUserDetails.save();

    return NextResponse.json({
      message: 'User details saved successfully',
      success: 400,
      savedUser: savedUser,
    });
  } catch (error) {
    console.log('Something went wrong', error);
  }
}
