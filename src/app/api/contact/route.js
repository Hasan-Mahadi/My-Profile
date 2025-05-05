import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, phone, service, message } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hasanmahadiius22@gmail.com",  
      pass: "drje swct nsya cqap",  
    },
  });

  const mailOptions = {
    from: email,
    to: " hasanmahadiius22@gmail.com ",
    subject: `New Contact Message from ${firstname} ${lastname}`,
    html: `
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
