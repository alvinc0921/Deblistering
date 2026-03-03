import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, message } = parsed.data;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || 'zhuochen@portalsgroup.org';
    // Use Resend test sender by default. Replace with your verified domain sender in production.
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    const subject = `New PM1000 enquiry from ${name}`;
    const text = [
      'New enquiry received from website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'N/A'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const html = `
      <h2>New PM1000 enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('[Contact API][Resend]', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again later.' },
        { status: 502 }
      );
    }

    console.log('[Contact Form]', {
      name,
      email,
      company: company ?? '(not provided)',
      message,
      toEmail,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. We will get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('[Contact API]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
