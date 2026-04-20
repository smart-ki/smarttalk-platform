'use client'
import { useState } from 'react'

interface Props { kursTitel: string; kursSlug: string }

export default function BuchungsFormular({ kursTitel, kursSlug }: Props) {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', telefon: '', firma: '', format: 'Präsenz', personen: '1', nachricht: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/buchen', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, kursTitel, kursSlug }) })
    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') return <div className="text-center py-6"><div className="text-4xl mb-3">✅</div><p className="font-semibold text-gray-900">Anfrage gesendet!</p><p className="text-sm text-gray-500 mt-1">Wir melden uns innerhalb von 1–2 Werktagen.</p></div>

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div><label className="block text-xs font-medium text-gray-700 mb-1">Name *</label><input required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
      <div><label className="block text-xs font-medium text-gray-700 mb-1">E-Mail *</label><input required type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
      <div><label className="block text-xs font-medium text-gray-700 mb-1">Telefon</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.telefon} onChange={e => setForm({...form, telefon: e.target.value})} /></div>
      <div><label className="block text-xs font-medium text-gray-700 mb-1">Firma / Organisation</label><input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.firma} onChange={e => setForm({...form, firma: e.target.value})} /></div>
      <div><label className="block text-xs font-medium text-gray-700 mb-1">Anzahl Personen</label><select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.personen} onChange={e => setForm({...form, personen: e.target.value})}><option>1</option><option>2–5</option><option>6–10</option><option>11–20</option><option>Mehr als 20</option></select></div>
      <div><label className="block text-xs font-medium text-gray-700 mb-1">Nachricht</label><textarea rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.nachricht} onChange={e => setForm({...form, nachricht: e.target.value})} /></div>
      {status === 'error' && <p className="text-red-600 text-xs">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>}
      <button type="submit" disabled={status === 'sending'} className="w-full btn-primary py-2.5 px-5 text-sm">{status === 'sending' ? 'Wird gesendet...' : 'Anfrage senden →'}</button>
    </form>
  )
}
