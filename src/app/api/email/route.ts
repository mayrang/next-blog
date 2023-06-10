import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { object, string } from "yup";
export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  try {
    const emailSchema = object({
      email: string().email("형식은 이메일 형식이여야 합니다."),
      subject: string().max(255),
      content: string(),
    });
    await emailSchema.validate({ email, subject, message });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.USER_EMAIL, pass: process.env.USER_PASSWORD },
    });

    const mailOptions = {
      to: email,
      subject: subject,
      html: message,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: "저장 성공" });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: "이메일 저장과정에서 에러가 발생했습니다." }, { status: 500 });
  }
}
