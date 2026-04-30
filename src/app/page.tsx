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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Der Mensch{' '}
            <span className="text-[#7C3AED]">im Mittelpunkt.</span>
            <br />
            <span className="text-[#F5821F]">Future Skills</span> für morgen.
          </h1>

          <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-3 leading-relaxed">
            Die Arbeitswelt verändert sich rasant. Was bleibt, bist du – mit deinen Fähigkeiten,
            deiner Stimme, deiner Klarheit.
          </p>
          <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
            Wir begleiten Menschen und Organisationen beim Aufbau der Kompetenzen,
            die wirklich zählen – digital, menschlich und mit New Work Haltung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="#ki-digital" className="btn-primary text-base py-3.5 px-8 shadow-lg shadow-orange-200">
              KI & Digital →
            </Link>
            <Link href="#kommunikation" className="bg-[#7C3AED] text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-block text-center text-base py-3.5 px-8 shadow-lg shadow-purple-200">
              Kommunikation →
            </Link>
            <Link href="#beratung" className="bg-[#0D9488] text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-block text-center text-base py-3.5 px-8 shadow-lg shadow-teal-200">
              New Work & Beratung →
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
              Future Skills für die Arbeitswelt von morgen
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Vier Kompetenzbereiche definieren, was Menschen in der Zukunft brauchen.
              SmartTalk adressiert alle vier – heute mit Schwerpunkt auf Digitales, Kommunikation und New Work.
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
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Digitale Mündigkeit & KI</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">KI verstehen, digitale Tools souverän nutzen, digitale Ethik</p>
              <div className="text-xs font-semibold text-[#F5821F]">→ KI & Digital Kurse</div>
            </div>

            {/* Zwischenmenschliches */}
            <div className="bg-white rounded-2xl border-2 border-[#7C3AED]/30 p-6 hover:border-[#7C3AED]/60 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Zwischenmenschliches</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Kommunikation & Teamarbeit</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Klar kommunizieren, zuhören, Verbindung schaffen, auftreten</p>
              <div className="text-xs font-semibold text-[#7C3AED]">→ Kommunikationskurse</div>
            </div>

            {/* Selbstmanagement */}
            <div className="bg-white rounded-2xl border-2 border-[#0D9488]/30 p-6 hover:border-[#0D9488]/60 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-1">Selbstmanagement</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">New Work & Ziele</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">OKRs leben, New Work Haltung, Unternehmertum, Resilienz</p>
              <div className="text-xs font-semibold text-[#0D9488]">→ New Work Beratung</div>
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
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Strukturiert denken, agil arbeiten, Kreativität, Anpassungsfähigkeit</p>
              <div className="text-xs font-semibold text-gray-400">→ Folgt in Kürze</div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">
            Quelle: McKinsey Global Institute, «Defining the skills citizens will need in the future world of work», 2021
          </p>
        </div>
      </section>

      {/* ─── MANIFEST BANNER ─── */}
      <section className="bg-[#1B2E4B] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Der Mensch steht im Zentrum.
          </p>
          <p className="text-lg sm:text-xl font-light text-gray-300 leading-relaxed mb-6">
            Nicht die KI. Nicht die Technik. Nicht das Tool.{' '}
            <span className="text-[#F5821F] font-semibold">Du.</span>
          </p>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Future Skills bedeutet: digitale Werkzeuge souverän nutzen, klar und wirksam kommunizieren
            – und Organisationen mit New Work Haltung auf die Zukunft ausrichten.
          </p>
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
              <p className="text-gray-500 mt-2 max-w-lg">Online und Präsenz · 3 Kurse vom Einstieg bis zum verantwortungsvollen Umgang</p>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-5 py-3 text-sm text-orange-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              2 Slots im Juni verfügbar
            </div>
          </div>

          {/* KI Course grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {kiKurse.map((kurs) => (
              <KiKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>

          {/* Kompakt-Tageskurs Bundle */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-[#F5821F]/40 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#F5821F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Alles in einem</span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">2 Slots im Juni</span>
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">KI Kompakt-Tageskurs</h3>
                <p className="text-gray-600 text-sm max-w-lg leading-relaxed">
                  Alle drei KI-Kurse in einem kompakten Tag: Einstieg, Prompting & Tools und verantwortungsvoller Umgang.
                  Ideal für alle, die in einem Tag einen vollständigen Überblick gewinnen wollen.
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="text-[#F5821F]">✓</span> KI einfach ausprobieren</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#F5821F]">✓</span> Prompting & KI-Tools</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#F5821F]">✓</span> Datenschutz & Ethik</span>
                </div>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Ganztag</div>
                <div className="text-3xl font-extrabold text-gray-900">CHF 450</div>
                <div className="text-xs text-gray-500 mb-4">/ Person</div>
                <Link
                  href="#kontakt"
                  className="btn-primary text-sm py-2.5 px-6 whitespace-nowrap"
                >
                  Platz reservieren →
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
              Auch als Inhouse buchbar
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
                  Wir hören zu, verstehen eure Situation und zeigen, was möglich ist. Kein Verkaufsgespräch –
                  ein ehrliches Kennenlernen. <span className="font-semibold text-white">4 freie Slots pro Monat.</span>
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

          {/* Stufe 2: Bestandesaufnahme */}
          <div className="bg-white border-2 border-[#0D9488]/30 rounded-2xl p-7 mb-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-2">Stufe 2 · Diagnose</div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">Bestandesaufnahme — 1 Tag</h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  In einem eintägigen Workshop prüfen wir gemeinsam, wo eure Organisation steht, wo Hebel angesetzt werden können
                  und in welcher Reihenfolge vorzugehen ist. Output: ein konkreter Massnahmenplan.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Status quo erfassen</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Potenziale identifizieren</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">›</span> Massnahmenplan erstellen</span>
                </div>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Tagessatz</div>
                <div className="text-2xl font-extrabold text-gray-900">CHF 1'600</div>
              </div>
            </div>
          </div>

          {/* Stufe 3: Massnahmen */}
          <div className="mb-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-4 px-1">Stufe 3 · Massnahmen — individuell nach Aufwand & Dauer</div>
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
                  Sämtliche KI- und Kommunikationskurse sind als massgeschneiderte Inhouse-Trainings buchbar –
                  angepasst an eure Prozesse, Tools und Branche. Teams ab 5 Personen.
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> KI-Kurse inhouse</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Kommunikationstrainings</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Kombinationspakete möglich</span>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Über SmartTalk</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Unser Ansatz</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="font-bold text-gray-900 mb-2">Der Mensch im Mittelpunkt</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  KI entfaltet ihren vollen Wert, wenn sie Menschen stärkt und wachsen lässt. In unseren Kursen steht stets die Frage im Vordergrund: Was hilft dir konkret, heute, in deinem Alltag?
                </p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="font-bold text-gray-900 mb-2">Wir leben, was wir lehren</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SmartTalk ist selbst ein Future Skills Unternehmen: digitale Prozesse, New Work Haltung, OKRs und agile Strukturen sind bei uns nicht Theorie – sie sind gelebter Alltag.
                </p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="font-bold text-gray-900 mb-2">Beratung, die wirklich begleitet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vom kostenlosen Erstgespräch über die Bestandesaufnahme bis zur Umsetzung: Wir begleiten Organisationen nicht nur im Kursraum, sondern direkt in der Transformation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-2 border-gray-100 shadow-lg mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="SmartTalk" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SmartTalk</h3>
              <p className="text-[#F5821F] font-semibold text-sm mb-4">Future Skills · Zentralschweiz</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Wir begleiten Menschen und Organisationen in ihrer Entwicklung – mit Leidenschaft für echte Kompetenz,
                digitale Werkzeuge und New Work Haltung. Fundiert durch akademische Forschung, erprobt in der Praxis.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:jeannine.germann@smarttalk.ch"
                  className="inline-flex items-center gap-2 text-sm text-[#F5821F] font-semibold hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  jeannine.germann@smarttalk.ch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Fragen? Meld dich gerne.</h2>
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
                <p className="text-sm text-orange-700">Wir melden uns innerhalb von 1–2 Werktagen bei dir.</p>
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
