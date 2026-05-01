import Link from 'next/link'
import { kiKurse } from '@/data/ki-kurse'
import { kommKurse } from '@/data/komm-kurse'
import KiKursCard from '@/components/KiKursCard'
import KommKursCard from '@/components/KommKursCard'
import KontaktFormular from '@/components/KontaktFormular'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-orange-50 py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-40 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            Future Skills · Zentralschweiz
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            <span className="text-[#F5821F]">Future Skills</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
            Kompetenz macht den Unterschied.
          </p>

          <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-10 leading-relaxed">
            Wir begleiten Menschen und Organisationen beim Aufbau zentraler Kompetenzen für die heutige Arbeitswelt.
          </p>

          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Hier geht es direkt zu den Angeboten</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="#ki-digital" className="btn-primary text-base py-3.5 px-8 shadow-lg shadow-orange-200">
              KI →
            </Link>
            <Link href="#kommunikation" className="bg-[#7C3AED] text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-block text-center text-base py-3.5 px-8 shadow-lg shadow-purple-200">
              Kommunikation →
            </Link>
            <Link href="#beratung" className="bg-[#0D9488] text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-block text-center text-base py-3.5 px-8 shadow-lg shadow-teal-200">
              Beratung →
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {['Mensch zuerst', '3 KI-Kurse + Tageskurs', '3 Kommunikationskurse', 'Beratung & New Work', 'Zentralschweiz'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-[#7C3AED]">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FUTURE SKILLS FRAMEWORK ─── */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Das Fundament</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 mb-3">
              Der Mensch im Zentrum.
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Wir leben, wachsen und entwickeln in den 4 Kompetenzbereichen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Digitales */}
            <div className="bg-white rounded-2xl border-2 border-[#F5821F]/30 p-6 hover:border-[#F5821F]/60 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#F5821F] mb-1">Digitales</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Digitale Kompetenz & KI</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Digitale Kompetenz, KI-Kenntnisse, digitale Zusammenarbeit, Datenkompetenz</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <span className="text-xs bg-orange-50 text-[#F5821F] font-semibold px-2 py-0.5 rounded-full">KI & Digital Kurse</span>
                <span className="text-xs bg-teal-50 text-[#0D9488] font-semibold px-2 py-0.5 rounded-full">Beratung</span>
              </div>
            </div>

            {/* Zwischenmenschliches */}
            <div className="bg-white rounded-2xl border-2 border-[#7C3AED]/30 p-6 hover:border-[#7C3AED]/60 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Zwischenmenschliches</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Teamarbeit & Führung</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Rollenmodellierung, Vertrauen aufbauen, Kollaboration, Konfliktfähigkeit</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <span className="text-xs bg-purple-50 text-[#7C3AED] font-semibold px-2 py-0.5 rounded-full">Kommunikation & Führung Kurse</span>
                <span className="text-xs bg-teal-50 text-[#0D9488] font-semibold px-2 py-0.5 rounded-full">New Work Beratung</span>
              </div>
            </div>

            {/* Selbstmanagement */}
            <div className="bg-white rounded-2xl border-2 border-[#0D9488]/30 p-6 hover:border-[#0D9488]/60 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-1">Selbstmanagement</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Eigenverantwortung & Resilienz</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Selbstführung, Integrität, Unternehmertum, Leistungsorientierung</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <span className="text-xs bg-orange-50 text-[#F5821F] font-semibold px-2 py-0.5 rounded-full">Im KI Desktop-Kurs enthalten</span>
              </div>
            </div>

            {/* Kognitiv */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Kognitiv</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Kritisches Denken & Agilität</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Problemlösung, Planung, geistige Beweglichkeit, Anpassungsfähigkeit</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">In Entwicklung</span>
                <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">Kurs auf Anfrage</span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">
            In Anlehnung an: McKinsey Global Institute, «Defining the skills citizens will need in the future world of work», 2021
          </p>
        </div>
      </section>

      {/* ─── ZITAT & BILD ─── */}
      <section className="bg-[#1B2E4B] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* Bild */}
            <div className="w-full md:w-2/5 shrink-0">
              <div className="rounded-2xl overflow-hidden aspect-[40/29]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jeannine-v7.jpg"
                  alt="Jeannine Germann bei SmartTalk"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Zitat */}
            <div className="flex-1">
              <div className="text-[#F5821F] text-5xl font-serif leading-none mb-4">"</div>
              <p className="text-xl sm:text-2xl font-light text-white leading-relaxed mb-6">
                Ich glaube, dass jeder Mensch das Potenzial hat, mit den richtigen Kompetenzen
                wirklich vorwärtszukommen. Genau dafür bin ich hier.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-[#F5821F]" />
                <div>
                  <p className="text-white font-semibold text-sm">Jeannine Germann</p>
                  <p className="text-gray-400 text-xs">Mitglied der Geschäftsleitung, SmartTalk</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PILLAR 1: KI & DIGITAL ─── */}
      <section id="ki-digital" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Bildung · KI & Digital</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">KI & Digital</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Online und Präsenz · 3 Kurse vom Einstieg bis zum persönlichen KI-Arbeitsplatz</p>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-5 py-3 text-sm text-orange-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Nächster Start: Juli 2026
            </div>
          </div>

          {/* KI Course grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {kiKurse.map((kurs) => (
              <KiKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>

          {/* KI für Teams Firmenkurs */}
          <div className="bg-[#1B2E4B] rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#F5821F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Firmenkurs</span>
                  <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Ab 5 Personen</span>
                </div>
                <h3 className="font-extrabold text-white text-xl mb-2">KI für Teams einführen</h3>
                <p className="text-gray-300 text-sm max-w-lg leading-relaxed">
                  Euer Team arbeitet täglich mit Daten, Texten und Prozessen. KI kann dabei entlasten. Dieser Tageskurs bringt alle auf denselben Stand: Was ist KI, wie nutzen wir sie sicher, und wo fangen wir an? Massgeschneidert auf eure Branche und Tools.
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-[#F5821F]">✓</span> Auf euren Alltag zugeschnitten</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#F5821F]">✓</span> Datenschutz & Regeln für das Team</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#F5821F]">✓</span> Direkt anwendbare Werkzeuge</span>
                </div>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Ganztag · auf Anfrage</div>
                <div className="text-3xl font-extrabold text-white">CHF 1'800</div>
                <div className="text-xs text-gray-400 mb-4">/ Gruppe</div>
                <Link
                  href="#kontakt"
                  className="bg-[#F5821F] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors inline-block text-center py-2.5 px-6 text-sm whitespace-nowrap"
                >
                  Kurs anfragen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ─── PILLAR 2: KOMMUNIKATION ─── */}
      <section id="kommunikation" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Bildung · Kommunikation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Kommunikation & Auftreten</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Präsenz · 3 Tageskurse für mehr Wirkung, Klarheit und Verbindung</p>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-xl px-5 py-3 text-sm text-purple-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Auch als Inhouse-Training buchbar
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kommKurse.map((kurs) => (
              <KommKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ─── BERATUNG & NEW WORK ─── */}
      <section id="beratung" className="py-20 px-4 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Beratung & New Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Beratung & New Work</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Für Organisationen, die Future Skills leben wollen – mit Begleitung, die wirklich etwas bewegt</p>
            </div>
            <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-5 py-3 text-sm text-teal-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              4 freie Slots pro Monat
            </div>
          </div>

          {/* Stufe 1: Erstgespräch */}
          <div className="bg-[#0D9488] rounded-2xl p-7 mb-5 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-teal-200 mb-2">Stufe 1 · Einstieg</div>
                <h3 className="font-extrabold text-xl mb-2">Erstgespräch — kostenlos</h3>
                <p className="text-teal-100 text-sm max-w-lg">
                  Wir hören zu, verstehen eure Situation und zeigen, was möglich ist. Ein offenes Gespräch auf Augenhöhe. <span className="font-semibold text-white">4 freie Slots pro Monat.</span>
                </p>
              </div>
              <Link
                href="#kontakt"
                className="bg-white text-[#0D9488] font-bold rounded-lg hover:bg-teal-50 transition-colors inline-block text-center py-3 px-7 text-sm whitespace-nowrap shadow"
              >
                Gespräch anfragen →
              </Link>
            </div>
          </div>

          {/* Stufe 2: KI-Readiness Check */}
          <div className="bg-white border-2 border-[#0D9488]/30 rounded-2xl p-7 mb-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Stufe 2 · Diagnose</div>
                  <span className="bg-teal-50 text-[#0D9488] text-xs font-semibold px-2 py-0.5 rounded-full">Sehr gefragt</span>
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">KI-Readiness Check</h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  Wo steht euer Unternehmen beim Thema KI? Was ist sinnvoll, was zu früh, was dringend? In einem halben Tag analysieren wir eure Ausgangslage und liefern einen konkreten Aktionsplan mit klaren nächsten Schritten.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> KI-Potenziale in euren Prozessen sichtbar machen</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Risiken und Spielregeln klären</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Aktionsplan mit 3 konkreten nächsten Schritten</span>
                </div>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Halbtag</div>
                <div className="text-2xl font-extrabold text-gray-900">CHF 900</div>
                <div className="text-xs text-gray-500 mb-4">/ Unternehmen</div>
                <Link
                  href="#kontakt"
                  className="bg-[#0D9488] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors inline-block text-center py-2.5 px-6 text-sm whitespace-nowrap shadow"
                >
                  Check buchen →
                </Link>
              </div>
            </div>
          </div>

          {/* Stufe 3: Future Skills Diagnose */}
          <div className="bg-white border-2 border-[#0D9488]/30 rounded-2xl p-7 mb-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-2">Stufe 3 · Gesamtbild</div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">Future Skills Diagnose</h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  Wo steht eure Organisation in allen vier Kompetenzbereichen? In einem eintägigen Workshop analysieren wir gemeinsam Digitales, Kommunikation, Selbstmanagement und kognitives Potenzial. Das Ergebnis ist ein klares Bild eurer Stärken und ein priorisierter Entwicklungsplan.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Alle 4 Kompetenzbereiche einschätzen</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Stärken und Entwicklungsfelder sichtbar machen</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Priorisierter Entwicklungsplan als Output</span>
                </div>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Ganztag</div>
                <div className="text-2xl font-extrabold text-gray-900">CHF 1'600</div>
                <div className="text-xs text-gray-500 mb-4">/ Unternehmen</div>
                <Link
                  href="#kontakt"
                  className="bg-[#0D9488] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors inline-block text-center py-2.5 px-6 text-sm whitespace-nowrap shadow"
                >
                  Diagnose anfragen →
                </Link>
              </div>
            </div>
          </div>

          {/* Stufe 3: Massnahmen */}
          <div className="mb-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-4 px-1">Stufe 4 · Massnahmen: individuell nach Aufwand und Dauer</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* KI in Geschäftsprozessen */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
                <div className="h-1.5 bg-[#0D9488]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">KI in Geschäftsprozessen</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    KI-Tools in bestehende Abläufe integrieren, Automatisierungspotenziale nutzen und Teams befähigen –
                    mit klaren Prioritäten und messbaren Ergebnissen.
                  </p>
                </div>
              </div>

              {/* New Work: OKRs & Lohnmodelle */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
                <div className="h-1.5 bg-[#0D9488]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">New Work: OKRs & Lohnmodelle</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    OKRs einführen, Lohnmodelle überdenken, agile Strukturen etablieren –
                    New Work nicht nur als Konzept, sondern gelebt in der Organisation.
                  </p>
                </div>
              </div>

              {/* Mitarbeitende schulen */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
                <div className="h-1.5 bg-[#0D9488]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">Mitarbeitende schulen</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    Inhouse-Trainings zu KI, Kommunikation und Future Skills – massgeschneidert auf eure Prozesse,
                    Tools und Branche. Direkt aus der Bildung in die Beratung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inhouse Training Banner */}
          <div className="bg-[#1B2E4B] rounded-2xl p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-2 block">Für Teams & Unternehmen</span>
                <h3 className="font-bold text-white text-xl mb-2">Alle Kurse auch als Inhouse-Training</h3>
                <p className="text-gray-300 text-sm max-w-lg">
                  Sämtliche KI- und Kommunikationskurse sind als massgeschneiderte Inhouse-Trainings buchbar.
                  Angepasst an eure Prozesse, Tools und Branche. Teams ab 5 Personen.
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> KI-Kurse inhouse</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Kommunikationstrainings</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Kombinationspakete möglich</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Ab CHF 1'800 / Gruppe</span>
                </div>
              </div>
              <Link
                href="#kontakt"
                className="bg-[#0D9488] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors inline-block text-center py-3 px-7 text-sm whitespace-nowrap shadow-lg"
              >
                Inhouse anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueber-uns" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Titel */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Über SmartTalk</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Das Team hinter SmartTalk</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Gegründet 2016. Rund 100 Menschen in Kursleitung, Administration, Marketing und Geschäftsleitung.
              Alle vereint durch eine Haltung: Kompetenz wächst, wenn Menschen wachsen dürfen.
            </p>
          </div>

          {/* Fakten-Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-14 text-sm font-medium text-gray-500">
            {[
              { zahl: '2016', label: 'Gegründet' },
              { zahl: '100+', label: 'Mitarbeitende' },
              { zahl: '8 Jahre', label: 'Agile Führung' },
              { zahl: 'Zentralschweiz', label: 'Unser Zuhause' },
            ].map(({ zahl, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold text-gray-900">{zahl}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Florian */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-[#F5821F] font-extrabold text-lg">F</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">Florian</h3>
              <p className="text-xs font-semibold text-[#F5821F] uppercase tracking-wide mb-3">Inhaber & Geschäftsleiter</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Wirtschaftsinformatiker und Informatiker mit Leidenschaft für Prozessoptimierung und zeitgemässe Führung. Florian baut SmartTalk seit der Gründung 2016 agil auf, setzt KI täglich in Führung und Betrieb ein und lebt New Work als Haltung, nicht als Konzept.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="text-xs bg-orange-50 text-[#F5821F] font-semibold px-2 py-0.5 rounded-full">KI & Prozesse</span>
                <span className="text-xs bg-orange-50 text-[#F5821F] font-semibold px-2 py-0.5 rounded-full">New Work</span>
                <span className="text-xs bg-orange-50 text-[#F5821F] font-semibold px-2 py-0.5 rounded-full">Führung</span>
              </div>
            </div>

            {/* Jeannine */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-[#7C3AED] font-extrabold text-lg">J</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">Jeannine</h3>
              <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wide mb-3">Mitglied der Geschäftsleitung</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Bildungsdesignerin, Lerntherapeutin und Dozentin. Jeannine gestaltet Lernerfahrungen, die wirklich wirken, unterrichtet KI in der sozialen Arbeit und verantwortet bei SmartTalk die Entwicklung des Future Skills Angebots.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="text-xs bg-purple-50 text-[#7C3AED] font-semibold px-2 py-0.5 rounded-full">Bildungsdesign</span>
                <span className="text-xs bg-purple-50 text-[#7C3AED] font-semibold px-2 py-0.5 rounded-full">KI in Sozialer Arbeit</span>
                <span className="text-xs bg-purple-50 text-[#7C3AED] font-semibold px-2 py-0.5 rounded-full">Lerntherapie</span>
              </div>
            </div>

            {/* Chris */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-[#0D9488] font-extrabold text-lg">C</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">Chris</h3>
              <p className="text-xs font-semibold text-[#0D9488] uppercase tracking-wide mb-3">Marketing & Teamentwicklung</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Spezialist für Teamentwicklung, New Work und Menschlichkeit in der Führung. Chris setzt KI gezielt im Marketing ein und sorgt dafür, dass SmartTalk sichtbar wird und die Botschaft ankommt, bei wem sie ankommen soll.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="text-xs bg-teal-50 text-[#0D9488] font-semibold px-2 py-0.5 rounded-full">Teamentwicklung</span>
                <span className="text-xs bg-teal-50 text-[#0D9488] font-semibold px-2 py-0.5 rounded-full">KI im Marketing</span>
                <span className="text-xs bg-teal-50 text-[#0D9488] font-semibold px-2 py-0.5 rounded-full">New Work</span>
              </div>
            </div>

            {/* Ruth */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-500 font-extrabold text-lg">R</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">Ruth</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">People & HR</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ruth begleitet das SmartTalk-Team in seiner Entwicklung. Durch Partizipation, Projektarbeiten und echte Beteiligung sorgt sie dafür, dass das Team wächst und zusammenwächst. Auch sie nutzt KI täglich in ihrer Arbeit.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">HR</span>
                <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">Partizipation</span>
                <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">KI im Alltag</span>
              </div>
            </div>

          </div>

          {/* Haltung */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Wir leben, was wir lehren. SmartTalk arbeitet agil, nutzt KI-Tools im Alltag, führt mit OKRs und glaubt daran, dass Unternehmen dann wirklich stark sind, wenn ihre Menschen stark sind.
            </p>
          </div>

        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Meld dich gerne.</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              Ob Kursfragen, Inhouse-Anfragen, Erstgespräch Beratung oder einfach ein erstes Hallo – wir freuen uns von dir zu hören.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-3 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <KontaktFormular />
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Direkt in Kontakt</h3>
                <div className="space-y-3 text-sm">
                  <a href="mailto:jeannine.germann@smarttalk.ch" className="flex items-center gap-3 text-gray-600 hover:text-[#F5821F] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    jeannine.germann@smarttalk.ch
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Zentralschweiz
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-2xl border border-orange-200 p-6">
                <p className="text-sm font-semibold text-orange-800 mb-1">Schnelle Antwort</p>
                <p className="text-sm text-orange-700">Wir melden uns innerhalb von zwei Werktagen.</p>
              </div>
              <div className="bg-teal-50 rounded-2xl border border-teal-200 p-6">
                <p className="text-sm font-semibold text-teal-800 mb-1">Beratungs-Erstgespräch</p>
                <p className="text-sm text-teal-700">Kostenlos · 4 freie Slots pro Monat · Jetzt anfragen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
