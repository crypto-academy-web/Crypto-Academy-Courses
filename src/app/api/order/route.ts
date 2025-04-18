import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: NextRequest) {
  try {
    const formdata = await request.json();

    // Initialize the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: 'developer@innovativemojo.com', // Your email address
        pass: 'tjjs zgqd koej xpvf', 
      },
    });

    // Calculate grand total (just the price of the selected course)
    const grandTotal = formdata.price;

    // Create product details HTML table (since we only have one course, this is simplified)
    const productListHTML = `
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <th style="border-bottom: 2px solid #000; text-align: left;">Title</th>
          <th style="border-bottom: 2px solid #000;  text-align: left;">Price</th>
        </tr>
        <tr class="product-row">
          <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">${formdata.courseTitle}</td>
          <td style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">$${formdata.price}</td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: right; padding: 8px; margin-right:15px;">
            <strong>Grand Total: $${grandTotal}</strong>
          </td>
        </tr>
      </table>
    `;

    // Email to admin (you)
    const mailOptionToYou = {
      from: "developer@innovativemojo.com",
      to: "Crypto Course <developer@innovativemojo.com>",
      subject: "New Order Received",
      html: `
        <h3>New Order Submission</h3>
        <ul>
          <li>First Name: ${formdata.firstName}</li>
          <li>Last Name: ${formdata.lastName}</li>
          <li>Email: ${formdata.email}</li>
          <li>Street Address: ${formdata.streetAddress}</li>
          <li>State: ${formdata.state}</li>
          <li>Zip Code: ${formdata.zipCode}</li>
        </ul>
        <div style="text-align: center; font-size:25px; padding: 8px;">Order Details</div>
        ${productListHTML}
      `,
    };

    // Email to the customer (user)
    const mailOptionToUser = {
      from: "Crypto Course <developer@innovativemojo.com>",
      to: formdata.email,
      subject: "Your Order is Confirmed",
      html: `
        <h3>Dear ${formdata.firstName} ${formdata.lastName},</h3>
        <p> Your placing your order is purchased successfully.</p>
        <p>Best Regards,</p>
        <p>Crypto Course</p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    
  } catch (error) {
    // Log and return an error response
    console.error("Error processing order:", error);
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
