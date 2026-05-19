import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const { name, email, nachricht } = await req.json()
    const resend = new Resend(process.env.RESEND_API_KEY)
    const empfaenger = (process.env.BOOKING_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean)
    await resend.emails.send({
      from: 'SmartTalk <onboarding@resend.dev>',
      to: empfaenger,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>E-Mail:</strong> ${email}</p><p><strong>Nachricht:</strong></p><p>${nachricht}</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
