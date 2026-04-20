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
                  Wir glauben, dass KI nur dann Sinn macht, wenn sie Menschen besser macht – nicht ersetzt. In unseren Kursen steht immer die Frage im Vordergrund: Was hilft dir konkret, heute, in deinem Alltag?
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
                  Keine Theorie-Schlachten, keine Tech-Überwältigung. Unsere Kurse sind so aufgebaut, dass du nach jeder Lektion etwas Konkretes mitnimmst und sofort umsetzen kannst.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-2 border-gray-100 shadow-lg mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="SmartTalk" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jeannine Germann</h3>
              <p className="text-[#F5821F] font-semibold text-sm mb-4">Gründerin · SmartTalk</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Future Skills Trainerin aus der Zentralschweiz. Leidenschaft für Menschen, KI und echte Kommunikation. Weil beides zusammengehört.
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

      {/* ─── FIRMENKURS CTA BANNER ─── */}
      <section className="py-14 px-4 bg-[#F5821F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Kurse für Ihr Unternehmen
          </h2>
          <p className="text-orange-100 text-base mb-8 max-w-xl mx-auto">
            Alle Kurse sind auch als massgeschneiderte Firmenkurse buchbar – in Ihren Räumlichkeiten, auf Ihre Bedürfnisse zugeschnitten. Für Teams ab 5 Personen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#kontakt" className="bg-white text-[#F5821F] font-bold rounded-lg hover:bg-orange-50 transition-colors inline-block text-center py-3.5 px-8 text-base shadow-lg">
              Firmenkurs anfragen →
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
