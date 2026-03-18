import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // 중요 (Vercel 사용 시 필수)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "필수 값이 누락되었습니다." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NAVER_EMAIL,
        pass: process.env.NAVER_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.NAVER_EMAIL,
      to: process.env.NAVER_EMAIL,
      subject: "상담 신청 요청",
      text: `
이름: ${name}
이메일: ${email}
전화번호: ${phone}
문의사항: ${message}
      `.trim(),
      html: `
        <h2>상담 신청 정보</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>전화번호:</strong> ${phone}</p>
        <p><strong>문의사항:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "메일 전송 실패" }, { status: 500 });
  }
}
