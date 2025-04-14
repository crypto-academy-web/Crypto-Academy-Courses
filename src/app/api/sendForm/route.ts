import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();
    console.log({ email, name, message }, "Received request data");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'developer@innovativemojo.com', // Your email address
        pass: 'tjjs zgqd koej xpvf', // Your app password
      },
    });

    const mailOptionToYou = {
      from: "developer@innovativemojo.com",
      to: "Crypto Course <developer@innovativemojo.com>",
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };
    console.log({ mailOptionToYou }, "Mail options for sending to you");

    const mailOptionToUser = {
      from: "Crypto Course <developer@innovativemojo.com>",
      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
        <p>Best Regards,</p>
        <p>Crypto Course</p>
      `,
    };
    console.log({ mailOptionToUser }, "Mail options for sending to user");

    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    console.log("Emails sent successfully");

    return NextResponse.json({ error: "" });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("API error:", errorMessage);
    return NextResponse.json({ error: errorMessage });
  }
}
