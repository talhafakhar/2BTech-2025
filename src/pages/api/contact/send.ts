import type { NextApiRequest, NextApiResponse } from 'next';
import {Resend} from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
        }

        const { name, email, phone, subject, service, message, token } = req.body;
        if (!token) return res.status(400).json({ ok: false, message: 'reCAPTCHA token is missing' });

        const secret = process.env.RECAPTCHA_SECRET_KEY || '6Les270rAAAAABk2acGnsxki6HnZvCRHCWu2uT25';
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secret}&response=${token}`,
        });

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return res.status(400).json({ ok: false, message: 'reCAPTCHA verification failed' });
        }
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'thetalhafakhar@gmail.com',
            subject: `${subject}`,
            html: `
       <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    
    <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #111827;">
      Contact Form Submission
    </h2>
    
    <p style="font-size: 14px; color: #374151; margin: 8px 0;">
      <strong style="color:#111827;">Name:</strong> ${name}
    </p>
    
    <p style="font-size: 14px; color: #374151; margin: 8px 0;">
      <strong style="color:#111827;">Email:</strong> ${email}
    </p>
    
    <p style="font-size: 14px; color: #374151; margin: 8px 0;">
      <strong style="color:#111827;">Phone:</strong> ${phone}
    </p>
    
    <p style="font-size: 14px; color: #374151; margin: 12px 0 4px;">
      <strong style="color:#111827;">How Can We Help You?:</strong>
    </p>
    <div style="font-size: 14px; color: #374151; line-height: 1.6; background:#f3f4f6; padding:12px; border-radius:8px;">
      ${service}
    </div>
    
    <p style="font-size: 14px; color: #374151; margin: 12px 0 4px;">
      <strong style="color:#111827;">Special Requirement:</strong>
    </p>
    <div style="font-size: 14px; color: #374151; line-height: 1.6; background:#f3f4f6; padding:12px; border-radius:8px;">
      ${message}
    </div>
    
  </div>
</div>


      `,
        });

        return res.status(200).json({ ok: true,message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        });

    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({
            ok: false,
            message:  'Internal Server Error',
        });
    }
}
