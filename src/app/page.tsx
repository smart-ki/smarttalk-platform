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

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="#ki-digital" className="btn-primary text-base py-3.5 px-8 shadow-lg shadow-orange-200">
              KI & Digital →
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
            {['Mensch zuerst', '5 KI-Kurse', '3 Kommunikationskurse', 'Beratung & Strategie', 'Zentralschweiz'].map((item) => (
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
            Future Skills bedeutet: digitale Werkzeuge souverän nutzen, klar und wirksam kommunizieren
            – und Organisationen strategisch auf die Zukunft ausrichten. Drei Kompetenzen, ein Ziel.
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
              <p className="text-gray-500 mt-2 max-w-lg">Online und Präsenz · 5 Kurse vom Einstieg bis zur sicheren Nutzung</p>
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
              <p className="text-gray-500 mt-2 max-w-lg">Präsenz · Halbtag oder Ganztag · 3 Kurse für mehr Wirkung, Klarheit und Verbindung</p>
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

      {/* ─── DIVIDER ─── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ─── PILLAR 3: BERATUNG ─── */}
      <section id="beratung" className="py-20 px-4 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Pillar 3</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Beratung & Strategie</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Für Unternehmen, die KI und Future Skills strategisch einführen – mit Begleitung, die über Kurse hinausgeht</p>
            </div>
            <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-5 py-3 text-sm text-teal-700 font-medium self-start sm:self-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Individuell & auf Anfrage
            </div>
          </div>

          {/* Beratungs-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group">
              <div className="h-1.5 bg-[#0D9488]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">KI-Strategie & Einführung</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                  Wir analysieren Ihre Organisation, entwickeln eine KI-Roadmap und begleiten Sie beim strukturierten Einstieg – mit klaren Prioritäten und messbaren Zielen.
                </p>
                <ul className="space-y-1.5 mb-5">
                  {['Standortbestimmung & Potenzialanalyse', 'KI-Roadmap für Ihre Organisation', 'Priorisierung: Quick Wins & Langfristprojekte', 'Stakeholder-Einbindung & Kommunikation'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-[#0D9488] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Tagessatz</span>
                  <p className="font-bold text-gray-900 text-lg">CHF 1'600</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group">
              <div className="h-1.5 bg-[#0D9488]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">KI-Audit & Prozessanalyse</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                  Wir prüfen Ihre bestehenden Abläufe systematisch auf KI-Potenziale – und zeigen konkret, wo Automatisierung und KI-Tools den grössten Mehrwert bringen.
                </p>
                <ul className="space-y-1.5 mb-5">
                  {['Prozess-Mapping und Schwachstellenanalyse', 'KI-Potenzialmatrix für alle Abteilungen', 'Tool-Empfehlungen mit Make-or-Buy-Entscheid', 'Schriftlicher Auditbericht mit Handlungsplan'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-[#0D9488] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">ab</span>
                  <p className="font-bold text-gray-900 text-lg">CHF 2'400</p>
                  <p className="text-xs text-gray-400">Pauschalpreis je nach Grösse</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-[#0D9488]/30 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group relative">
              <div className="h-1.5 bg-[#0D9488]" />
              <div className="absolute top-4 right-4">
                <span className="bg-[#0D9488] text-white text-xs font-bold px-2.5 py-1 rounded-full">Beliebt</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">Begleitende Implementierung</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                  Von der Strategie zur Praxis: Wir begleiten Ihr Team bei der Einführung, unterstützen bei der Tool-Auswahl und sorgen für echte Adoption – nicht nur auf dem Papier.
                </p>
                <ul className="space-y-1.5 mb-5">
                  {['Monatliche Beratungstage vor Ort', 'Tool-Setup und Konfiguration', 'Mitarbeitenden-Onboarding & Schulung', 'Fortschritts-Reviews und Anpassungen'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-[#0D9488] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">ab</span>
                  <p className="font-bold text-gray-900 text-lg">CHF 1'600 / Tag</p>
                  <p className="text-xs text-gray-400">Monatspakete auf Anfrage</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group">
              <div className="h-1.5 bg-[#0D9488]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">Change Management & Kultur</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                  Technologie verändert Arbeitsweisen – Menschen müssen mitgenommen werden. Wir begleiten den kulturellen Wandel und stärken Führungskräfte im Umgang mit KI und Veränderung.
                </p>
                <ul className="space-y-1.5 mb-5">
                  {['Führungskräfte-Coaching zu KI & Wandel', 'Workshop: Ängste adressieren, Chancen sehen', 'Kommunikationsstrategie für KI-Einführung', 'Individuelle Begleitung auf Anfrage'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-[#0D9488] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Tagessatz</span>
                  <p className="font-bold text-gray-900 text-lg">CHF 1'600</p>
                  <p className="text-xs text-gray-400">Coaching-Pakete möglich</p>
                </div>
              </div>
            </div>

          </div>

          {/* Inhouse Training – integriert in Beratung */}
          <div className="bg-[#1B2E4B] rounded-2xl p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488] mb-2 block">Für Unternehmen & Teams</span>
                <h3 className="font-bold text-white text-xl mb-2">Alle Kurse auch als Inhouse-Training</h3>
                <p className="text-gray-300 text-sm max-w-lg">
                  Sämtliche KI- und Kommunikationskurse sind als massgeschneiderte Inhouse-Trainings buchbar –
                  angepasst an Ihre Prozesse, Tools und Branche. Teams ab 5 Personen. <span className="text-[#0D9488] font-semibold">20% Rabatt auf alle Kurse.</span>
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> KI-Kurse inhouse</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Kommunikationstrainings</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Kombinationspakete möglich</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#0D9488]">✓</span> Future Lab mieten: CHF 600 / Tag</span>
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

          {/* Beratungs-CTA */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Bereit für das erste Gespräch?</h3>
              <p className="text-gray-600 text-sm max-w-md">
                Jedes Beratungsprojekt beginnt mit einem kostenfreien Erstgespräch. Wir hören zu, verstehen Ihre Situation und zeigen, was möglich ist.
              </p>
            </div>
            <Link
              href="#kontakt"
              className="bg-[#0D9488] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors inline-block text-center py-3 px-8 text-sm whitespace-nowrap shadow-lg shadow-teal-200"
            >
              Erstgespräch anfragen →
            </Link>
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
                <h3 className="font-bold text-gray-900 mb-2">Drei Kompetenzen, ein Ziel</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  KI & Digital, Kommunikation & Auftreten und strategische Beratung – drei Säulen, die zusammengehören. Bei SmartTalk bekommst du alles aus einer Hand.
                </p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="font-bold text-gray-900 mb-2">Beratung, die wirklich begleitet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strategieentwicklung, KI-Audit und Change Management: Wir begleiten Organisationen nicht nur im Kursraum, sondern direkt in der Umsetzung.
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
