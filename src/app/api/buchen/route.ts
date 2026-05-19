import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    await sendMail({
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
  } catch (err) {
    console.error('buchen/route Fehler:', (err as Error).message)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
