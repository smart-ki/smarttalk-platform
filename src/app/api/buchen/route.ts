import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const resend = new Resend(process.env.RESEND_API_KEY)
    const empfaenger = (process.env.BOOKING_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean)
    await resend.emails.send({
      from: 'SmartTalk <onboarding@resend.dev>',
      to: empfaenger,
      subject: `Neue Buchungsanfrage: ${body.kursTitel}`,
      html: `
        <p><strong>Kurs:</strong> ${body.kursTitel}</p>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>E-Mail:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.telefon || '–'}</p>
        <p><strong>Firma:</strong> ${body.firma || '–'}</p>
        <p><strong>Personen:</strong> ${body.personen}</p>
        <p><strong>Nachricht:</strong> ${body.nachricht || '–'}</p>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
