// pages/api/contact.js

import AWS from 'aws-sdk';

// Initialize the SES client
const ses = new AWS.SES({ region: 'us-east-1' }); // Make sure to use the correct region for SES

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, reason, message } = req.body;

    // Prepare the email content
    const emailContent = `
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phone}
      Reason: ${reason}
      Message: ${message}
    `;

    // Set SES parameters for sending the email
    const params = {
      Destination: {
        ToAddresses: ['your-email@example.com'], // Replace with your email address
      },
      Message: {
        Body: {
          Text: { Data: emailContent },
        },
        Subject: { Data: `New Contact Message from ${firstname} ${lastname}` },
      },
      Source: email, // The sender's email address
    };

    try {
      // Send the email via SES
      await ses.sendEmail(params).promise();
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
