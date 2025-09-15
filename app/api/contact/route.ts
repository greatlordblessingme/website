import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, company, title, need } = data || {};
    if (!name || !phone || !company || !need) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE) === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const subject = `【官网留资】${company} - ${name} (${phone})`;
    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial">
        <h2>官网留资（AI才神）</h2>
        <p><b>姓名：</b>${name}</p>
        <p><b>手机号：</b>${phone}</p>
        <p><b>公司：</b>${company}</p>
        <p><b>职位：</b>${title || "-"}</p>
        <p><b>需求：</b></p>
        <pre style="white-space:pre-wrap;background:#fafafa;border:1px solid #eee;border-radius:8px;padding:12px">${need}</pre>
        <hr/><p style="color:#888">该邮件由官网表单自动发送。</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject,
      html,
    });

    console.log("Mail sent:", info.messageId);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("CONTACT_FORM_ERROR", e);
    return NextResponse.json({ ok: false, error: e?.message || "Send failed" }, { status: 500 });
  }
}