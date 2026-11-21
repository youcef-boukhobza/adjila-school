import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/content/site';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (data.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 }); // honeypot triggered
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Falling back to success for UI demonstration.');
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { data: resData, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [siteConfig.email],
      subject: `Nouveau message de ${data.name}: ${data.subject}`,
      text: `Nom: ${data.name}\nTéléphone: ${data.phone}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
