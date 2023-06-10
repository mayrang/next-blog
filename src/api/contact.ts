import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "aplication/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "이메일을 보내는 과정에서 서버 에러");
  }
  return result;
}
