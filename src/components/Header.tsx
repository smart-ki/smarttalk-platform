'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="SmartTalk Logo" style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-gray-900 text-base leading-none">SmartTalk</span>
              <span className="text-[10px] text-[#F5821F] font-semibold uppercase tracking-widest leading-none mt-0.5">Future Skills</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#ki-digital" className="text-gray-600 hover:text-[#F5821F] font-medium transition-colors">KI & Digital</Link>
            <Link href="/#kommunikation" className="text-gray-600 hover:text-[#F5821F] font-medium transition-colors">Kommunikation</Link>
            <Link href="/#ueber-uns" className="text-gray-600 hover:text-[#F5821F] font-medium transition-colors">Über uns</Link>
            <Link href="/#kontakt" className="text-gray-600 hover:text-[#F5821F] font-medium transition-colors">Kontakt</Link>
            <Link href="/#ki-digital" className="btn-primary text-sm py-2 px-5">Kurs finden</Link>
          </nav>
          <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="/#ki-digital" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>KI & Digital</Link>
              <Link href="/#kommunikation" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Kommunikation</Link>
              <Link href="/#ueber-uns" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Über uns</Link>
              <Link href="/#kontakt" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Kontakt</Link>
              <Link href="/#ki-digital" className="btn-primary text-sm text-center" onClick={() => setMenuOpen(false)}>Kurs finden</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
