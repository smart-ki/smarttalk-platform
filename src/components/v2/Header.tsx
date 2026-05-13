'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-cream/85 backdrop-blur-md border-b border-cream-300 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/v2" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-v2.svg" alt="SmartTalk Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-ink text-lg leading-none">SmartTalk</span>
              <span className="text-[10px] text-apricot-600 font-medium uppercase tracking-widest leading-none mt-1">Future Skills</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/v2#ki-digital" className="text-ink-soft hover:text-apricot-600 transition-colors text-sm">KI & Digital</Link>
            <Link href="/v2#kommunikation" className="text-ink-soft hover:text-mauve-600 transition-colors text-sm">Kommunikation</Link>
            <Link href="/v2#beratung" className="text-ink-soft hover:text-eucalyptus-600 transition-colors text-sm">Beratung</Link>
            <Link href="/v2/termine" className="text-ink-soft hover:text-ink transition-colors text-sm">Termine</Link>
            <Link href="/v2#ueber-uns" className="text-ink-soft hover:text-ink transition-colors text-sm">Über uns</Link>
            <Link href="/v2#kontakt" className="text-ink-soft hover:text-ink transition-colors text-sm">Kontakt</Link>
            <Link href="/v2/termine" className="btn-v2-primary text-sm py-2 px-5">Kurs buchen</Link>
          </nav>
          <button className="md:hidden p-2 rounded-full text-ink-soft hover:bg-cream-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-5 border-t border-cream-300">
            <nav className="flex flex-col gap-4">
              <Link href="/v2#ki-digital" className="text-ink-soft" onClick={() => setMenuOpen(false)}>KI & Digital</Link>
              <Link href="/v2#kommunikation" className="text-ink-soft" onClick={() => setMenuOpen(false)}>Kommunikation</Link>
              <Link href="/v2#beratung" className="text-ink-soft" onClick={() => setMenuOpen(false)}>Beratung</Link>
              <Link href="/v2/termine" className="text-ink-soft" onClick={() => setMenuOpen(false)}>Termine</Link>
              <Link href="/v2#ueber-uns" className="text-ink-soft" onClick={() => setMenuOpen(false)}>Über uns</Link>
              <Link href="/v2#kontakt" className="text-ink-soft" onClick={() => setMenuOpen(false)}>Kontakt</Link>
              <Link href="/v2/termine" className="btn-v2-primary text-sm text-center" onClick={() => setMenuOpen(false)}>Kurs buchen</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
