// app/api/contact/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  const formData = await req.json(); // Parsing the JSON body

  try {
    // Handle your contact form submission logic here (e.g., sending an email)
    console.log(formData); // For debugging purposes
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
  }
}
