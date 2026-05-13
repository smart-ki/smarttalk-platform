'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-paper border-b border-ink/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/v3" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="SmartTalk Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-ink text-xl leading-none">SmartTalk</span>
              <span className="text-[10px] text-ink-soft font-medium uppercase tracking-[0.2em] leading-none mt-1">Future Skills</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#ki-digital" className="text-ink text-sm hover:text-terracotta-500 transition-colors">KI & Digital</Link>
            <Link href="/#kommunikation" className="text-ink text-sm hover:text-plum-500 transition-colors">Kommunikation</Link>
            <Link href="/#beratung" className="text-ink text-sm hover:text-sage-500 transition-colors">Beratung</Link>
            <Link href="/termine" className="text-ink text-sm hover:text-terracotta-500 transition-colors">Termine</Link>
            <Link href="/#ueber-uns" className="text-ink text-sm hover:text-terracotta-500 transition-colors">Über uns</Link>
            <Link href="/termine" className="btn-v3-primary text-sm py-2.5 px-6">Kurs buchen</Link>
          </nav>
          <button className="md:hidden p-2 text-ink" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-6 border-t border-ink/10">
            <nav className="flex flex-col gap-4">
              <Link href="/#ki-digital" className="text-ink" onClick={() => setMenuOpen(false)}>KI & Digital</Link>
              <Link href="/#kommunikation" className="text-ink" onClick={() => setMenuOpen(false)}>Kommunikation</Link>
              <Link href="/#beratung" className="text-ink" onClick={() => setMenuOpen(false)}>Beratung</Link>
              <Link href="/termine" className="text-ink" onClick={() => setMenuOpen(false)}>Termine</Link>
              <Link href="/#ueber-uns" className="text-ink" onClick={() => setMenuOpen(false)}>Über uns</Link>
              <Link href="/#kontakt" className="text-ink" onClick={() => setMenuOpen(false)}>Kontakt</Link>
              <Link href="/termine" className="btn-v3-primary text-sm text-center py-2.5 px-6" onClick={() => setMenuOpen(false)}>Kurs buchen</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
