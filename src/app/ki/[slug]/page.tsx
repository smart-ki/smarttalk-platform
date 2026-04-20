import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKursBySlug, kiKurse } from '@/data/ki-kurse'
import BuchungsFormular from '@/components/BuchungsFormular'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return kiKurse.map((k) => ({ slug: k.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const kurs = getKursBySlug(params.slug)
  if (!kurs) return {}
  return {
    title: kurs.seoTitel,
    description: kurs.metaBeschreibung,
    keywords: kurs.keywords,
  }
}

export default function KiKursDetailPage({ params }: Props) {
  const kurs = getKursBySlug(params.slug)
  if (!kurs) notFound()

  const andere = kiKurse.filter((k) => k.slug !== kurs.slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-5xl mx-auto text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#F5821F] transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/#ki-digital" className="hover:text-[#F5821F] transition-colors">KI & Digital</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{kurs.titel}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${kurs.levelFarbe}`}>
              {kurs.level}
            </span>
            <span className="text-sm text-gray-400">KI Kurs {kurs.nummer} von {kiKurse.length}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {kurs.titel}
          </h1>
          <p className="text-lg text-[#6B6B6B] italic mb-8">{kurs.untertitel}</p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: '⏱', label: kurs.dauer },
              { icon: '📍', label: kurs.format },
              { icon: '👥', label: kurs.zielgruppe },
              { icon: '💰', label: kurs.preisDetail ?? kurs.preisAb },
            ].map(({ icon, label }) => (
              <span key={label} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 shadow-sm flex items-center gap-2">
                <span>{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: details */}
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Über diesen Kurs</h2>
              <p className="text-gray-600 leading-relaxed">{kurs.ausfuehrlicheBeschreibung}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Das lernst du</h2>
              <ul className="space-y-3">
                {kurs.lernziele.map((ziel) => (
                  <li key={ziel} className="flex items-start gap-3">
                    <span className="text-[#F5821F] mt-0.5 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sessions / Kursplan */}
            {kurs.sessions && kurs.sessions.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Kursplan</h2>
                <p className="text-sm text-gray-500 mb-5">
                  {kurs.anzahlSessions}x {kurs.minutenProSession} Minuten · 1 Lektion pro Woche
                </p>
                <div className="space-y-3">
                  {kurs.sessions.map((session) => (
                    <div key={session.woche} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-3 bg-orange-50 border-b border-orange-100">
                        <div className="w-7 h-7 rounded-full bg-[#F5821F] flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {session.woche}
                        </div>
                        <div>
                          <span className="text-xs text-orange-600 font-semibold uppercase tracking-wide">Woche {session.woche}</span>
                          <h3 className="text-sm font-bold text-gray-900 leading-tight">{session.titel}</h3>
                        </div>
                      </div>
                      <ul className="px-5 py-3 space-y-1.5">
                        {session.inhalt.map((punkt) => (
                          <li key={punkt} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-[#F5821F] shrink-0 mt-0.5">›</span>
                            {punkt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Kursdetails</h2>
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                {[
                  { label: 'Dauer', value: kurs.dauer },
                  { label: 'Format', value: kurs.format },
                  { label: 'Zielgruppe', value: kurs.zielgruppe },
                  { label: 'Preis', value: kurs.preisDetail ?? kurs.preisAb },
                ].map(({ label, value }, i) => (
                  <div key={label} className={`flex px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <span className="font-semibold text-gray-600 w-32 shrink-0">{label}</span>
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Buchungsanfrage</h2>
              <p className="text-sm text-gray-500 mb-6">
                Unverbindlich anfragen – wir melden uns innerhalb von 1–2 Werktagen.
              </p>
              <BuchungsFormular kursTitel={kurs.titel} kursSlug={kurs.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Andere Kurse */}
      {andere.length > 0 && (
        <section className="bg-gray-50 py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere KI-Kurse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {andere.map((k) => (
                <Link key={k.slug} href={`/ki/${k.slug}`} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#F5821F] hover:shadow-sm transition-all group">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${k.levelFarbe}`}>{k.level}</span>
                  <h3 className="font-semibold text-gray-900 mt-3 mb-1 text-sm group-hover:text-[#F5821F] transition-colors leading-snug">{k.titel}</h3>
                  <p className="text-xs text-gray-500">{k.dauer} · ab {k.preisAb}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/#ki-digital" className="btn-outline text-sm py-2.5 px-6">
                Alle KI-Kurse anzeigen
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
