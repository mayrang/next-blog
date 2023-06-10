import { NextResponse } from "next/server";
import { sendEmail } from "@/api/email";
import { object, string } from "yup";

const emailSchema = object().shape({
  email: string().email("형식은 이메일 형식이여야 합니다.").required(),
  subject: string().max(255).required(),
  content: string(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!emailSchema.validateSync(body)) {
    return NextResponse.json({ message: "유효한 값이 아닙니다." }, { status: 400 });
  }
  return sendEmail(body)
    .then(() => NextResponse.json({ message: "이메일을 성공적으로 보냈습니다." }, { status: 200 }))
    .catch((err) => {
      console.log(err);
      return NextResponse.json({ message: "이메일 전송 과정에서 서버 에러" }, { status: 500 });
    });
}
