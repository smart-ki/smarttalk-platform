import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    const { name, email, nachricht } = await req.json()
    await sendMail({
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>E-Mail:</strong> ${email}</p><p><strong>Nachricht:</strong></p><p>${nachricht}</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('kontakt/route Fehler:', (err as Error).message)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
