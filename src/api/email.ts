import nodemailer from "nodemailer";

export type EmailData = {
  email: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: { user: process.env.USER_EMAIL, pass: process.env.USER_PASSWORD },
});

export async function sendEmail({ email, subject, message }: EmailData) {
  const mailOptions = {
    to: process.env.USER_EMAIL,
    from: email,
    subject: subject,
    html: `
    <h2>${subject}</h2>
    <div>${message}</div>
    <br/>
    <p>보낸사람: ${email}</p>
    `,
  };
  return transporter.sendMail(mailOptions);
}
