'use client'
import { useState } from 'react'

export default function KontaktFormular() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', nachricht: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/kontakt', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') return <div className="text-center py-8"><div className="text-4xl mb-3">✅</div><p className="font-semibold text-gray-900">Danke für deine Nachricht!</p><p className="text-sm text-gray-500 mt-1">Wir melden uns innerhalb von 1–2 Werktagen.</p></div>

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label><input required type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label><textarea required rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F]" value={form.nachricht} onChange={e => setForm({...form, nachricht: e.target.value})} /></div>
      {status === 'error' && <p className="text-red-600 text-sm">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>}
      <button type="submit" disabled={status === 'sending'} className="w-full btn-primary py-3 px-6">{status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}</button>
    </form>
  )
}
