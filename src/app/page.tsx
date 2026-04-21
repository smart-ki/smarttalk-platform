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
        {/* Decorative blobs */}
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
            die wirklich zählen – digital und menschlich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#ki-digital" className="btn-primary text-base py-3.5 px-8 shadow-lg shadow-orange-200">
              KI & Digital entdecken →
            </Link>
            <Link href="#kommunikation" className="bg-[#7C3AED] text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-block text-center text-base py-3.5 px-8 shadow-lg shadow-purple-200">
              Kommunikation & Auftreten →
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {['Mensch zuerst', '7 KI-Kurse', '3 Kommunikationskurse', 'Online & Präsenz', 'Zentralschweiz'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-[#7C3AED]">✓</span>
                {item}
              </span>
            ))}
          </div>
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
            Future Skills bedeutet: digitale Werkzeuge souverän nutzen und als Mensch
            klar, wirksam und authentisch kommunizieren. Beides zusammen macht den Unterschied.
          </p>
        </div>
      </section>

      {/* ─── PILLAR 1: KI & DIGITAL ─── */}
      <section id="ki-digital" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Pillar 1</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">KI & Digital</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Online und Präsenz · 4x 90 Min. pro Woche · 7 Kurse vom Einstieg bis zur Strategie</p>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-5 py-3 text-sm text-orange-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Online oder Präsenz verfügbar
            </div>
          </div>

          {/* KI Course grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kiKurse.map((kurs) => (
              <KiKursCard key={kurs.slug} kurs={kurs} />
            ))}
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
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Pillar 2</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Kommunikation & Auftreten</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Präsenz · Halbtag oder Ganztag · 3 Kurse für mehr Wirkung und Klarheit</p>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-xl px-5 py-3 text-sm text-purple-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nur Präsenz · Zentralschweiz
            </div>
          </div>

          {/* Kommunikation Course grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kommKurse.map((kurs) => (
              <KommKursCard key={kurs.slug} kurs={kurs} />
            ))}
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
                <h3 className="font-bold text-gray-900 mb-2">Zwei Kompetenzen, ein Ziel</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Digitale Kompetenz und menschliche Kommunikation sind die zwei Seiten derselben Medaille. Bei SmartTalk bieten wir beides – weil Future Skills mehr sind als nur Tools.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Praxisnah, verständlich, wirksam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jede Lektion bringt konkreten Nutzen – direkt umsetzbar im Berufsalltag. Verständlich aufgebaut, praxisnah gestaltet und auf dein Tempo abgestimmt.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-2 border-gray-100 shadow-lg mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="SmartTalk" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SmartTalk</h3>
              <p className="text-[#F5821F] font-semibold text-sm mb-4">Bildungszentrum · Zentralschweiz · 100 Mitarbeitende</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Wir begleiten Menschen und Organisationen seit Jahren in ihrer Entwicklung – mit Leidenschaft für echte Kompetenz, digitale Werkzeuge und wirkungsvolle Kommunikation.
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

      {/* ─── B2B SECTION ─── */}
      <section id="fuer-unternehmen" className="py-20 px-4 bg-[#1B2E4B]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5821F]">Für Unternehmen & Teams</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Future Skills für Ihre Organisation
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Alle Kurse sind als Inhouse-Trainings buchbar – massgeschneidert auf Ihre Prozesse, Ihre Tools und Ihre Menschen. Teams ab 5 Personen.
            </p>
          </div>

          {/* B2B Pakete */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Paket 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#F5821F]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Inhouse Team-Training</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Alle KI- und Kommunikationskurse direkt bei Ihnen im Unternehmen – angepasst an Ihre Aufgaben, Tools und Branche.
              </p>
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">ab</span>
                <p className="text-white font-bold text-lg">Firmenpreise auf Anfrage</p>
                <p className="text-[#F5821F] text-sm font-semibold mt-1">20% Rabatt auf alle Kurse</p>
              </div>
            </div>

            {/* Paket 2 */}
            <div className="bg-[#F5821F]/10 border border-[#F5821F]/30 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#F5821F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Empfohlen</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F5821F]/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">KI-Team-Training + Beratung</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Kombination aus Kursreihe und begleitender KI-Beratung: Wir trainieren Ihr Team und begleiten die Implementierung.
              </p>
              <div className="border-t border-[#F5821F]/20 pt-4">
                <span className="text-xs text-gray-400 uppercase tracking-wide">Paketpreis</span>
                <p className="text-white font-bold text-lg">Auf Anfrage</p>
                <p className="text-[#F5821F] text-sm font-semibold mt-1">Training + Beratung aus einer Hand</p>
              </div>
            </div>

            {/* Paket 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">KI-Beratung & Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Analyse Ihrer Prozesse, Identifikation von KI-Potenzialen und massgeschneiderte Roadmap für die KI-Einführung in Ihrem Unternehmen.
              </p>
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Tagessatz</span>
                <p className="text-white font-bold text-lg">CHF 1'600</p>
                <p className="text-gray-400 text-sm mt-1">Individuelle Projektpakete möglich</p>
              </div>
            </div>
          </div>

          {/* Future Lab */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-white text-lg mb-1">Future Lab – Raum für Innovation</h3>
              <p className="text-gray-400 text-sm">Modernste Tech-Infrastruktur für Ihre Workshops, Trainings und Innovation-Sessions. Miete inklusive Technik-Setup.</p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <p className="text-white font-bold text-xl">CHF 600 / Tag</p>
              <p className="text-gray-400 text-xs mt-1">inkl. Tech-Infrastruktur</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="#kontakt" className="bg-[#F5821F] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors inline-block text-center py-3.5 px-10 text-base shadow-lg shadow-orange-900/30">
              Firmenlösung anfragen →
            </Link>
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
              Ob Kursfragen, Firmenkurs-Anfragen oder einfach ein erstes Gespräch – wir freuen uns von dir zu hören.
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
