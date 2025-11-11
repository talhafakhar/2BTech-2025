import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
        }
        const { fullName, email, businessName, phone, signNDA, ticketSize, goals } = req.body;
        if (!fullName || !email || !phone || !ticketSize) {
            return res.status(400).json({
                ok: false,
                message: 'Please fill in all required fields'
            });
        }
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'info@2btechinc.com',
            subject: `New Lead: ${businessName || fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
                    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        
                        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; color: #111827; border-bottom: 3px solid #3b82f6; padding-bottom: 12px;">
                            🚀 New Hero Form Submission
                        </h2>
                        
                        <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                            <h3 style="font-size: 16px; font-weight: 600; color: #111827; margin: 0 0 12px 0;">Contact Information</h3>
                            
                            <p style="font-size: 14px; color: #374151; margin: 8px 0;">
                                <strong style="color:#111827;">Full Name:</strong> ${fullName}
                            </p>
                            
                            <p style="font-size: 14px; color: #374151; margin: 8px 0;">
                                <strong style="color:#111827;">Email:</strong> ${email}
                            </p>
                            
                            <p style="font-size: 14px; color: #374151; margin: 8px 0;">
                                <strong style="color:#111827;">Phone:</strong> ${phone}
                            </p>
                            
                            ${businessName ? `
                            <p style="font-size: 14px; color: #374151; margin: 8px 0;">
                                <strong style="color:#111827;">Business Name:</strong> ${businessName}
                            </p>
                            ` : ''}
                        </div>
                        
                        <div style="background: #eff6ff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid #3b82f6;">
                            <h3 style="font-size: 16px; font-weight: 600; color: #111827; margin: 0 0 12px 0;">Project Details</h3>
                            
                            <p style="font-size: 14px; color: #374151; margin: 8px 0;">
                                <strong style="color:#111827;">Ticket Size:</strong> 
                                <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 6px; display: inline-block; margin-left: 8px;">
                                    ${ticketSize}
                                </span>
                            </p>
                            
                            <p style="font-size: 14px; color: #374151; margin: 8px 0;">
                                <strong style="color:#111827;">NDA Required:</strong> ${signNDA || 'Not specified'}
                            </p>
                        </div>
                        
                        ${goals ? `
                        <div style="background: #f3f4f6; padding: 16px; border-radius: 8px;">
                            <h3 style="font-size: 16px; font-weight: 600; color: #111827; margin: 0 0 12px 0;">Project Goals</h3>
                            <div style="font-size: 14px; color: #374151; line-height: 1.6;">
                                ${goals}
                            </div>
                        </div>
                        ` : ''}
                        
                        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
                            Submitted from Hero Section Form
                        </div>
                    </div>
                </div>
            `,
        });

        return res.status(200).json({
            ok: true,
            message: 'Thank you! We\'ve received your request and will contact you shortly.',
        });

    } catch (error) {
        console.error('Hero form API error:', error);
        return res.status(500).json({
            ok: false,
            message: 'Something went wrong. Please try again.',
        });
    }
}