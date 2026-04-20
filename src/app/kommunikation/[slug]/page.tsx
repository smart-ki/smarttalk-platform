import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKommKursBySlug, kommKurse } from '@/data/komm-kurse'
import BuchungsFormular from '@/components/BuchungsFormular'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return kommKurse.map((k) => ({ slug: k.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const kurs = getKommKursBySlug(params.slug)
  if (!kurs) return {}
  return {
    title: kurs.seoTitel,
    description: kurs.metaBeschreibung,
    keywords: kurs.keywords,
  }
}

export default function KommKursDetailPage({ params }: Props) {
  const kurs = getKommKursBySlug(params.slug)
  if (!kurs) notFound()

  const andere = kommKurse.filter((k) => k.slug !== kurs.slug)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-5xl mx-auto text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-purple-600 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/#kommunikation" className="hover:text-purple-600 transition-colors">Kommunikation & Auftreten</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{kurs.titel}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${kurs.levelFarbe}`}>
              {kurs.level}
            </span>
            <span className="text-sm text-gray-400">Kommunikation Kurs {kurs.nummer} von {kommKurse.length}</span>
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
                    <span className="text-purple-600 mt-0.5 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inhalte */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Kursinhalt</h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3 bg-purple-50 border-b border-purple-100">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900">Alle Inhalte im Überblick</span>
                </div>
                <ul className="px-5 py-4 space-y-2">
                  {kurs.inhalte.map((inhalt) => (
                    <li key={inhalt} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-purple-500 shrink-0 mt-0.5">›</span>
                      {inhalt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="h-1 bg-purple-600 -mx-6 -mt-6 mb-6 rounded-t-2xl" />
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
        <section className="bg-purple-50 py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Kommunikationskurse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {andere.map((k) => (
                <Link key={k.slug} href={`/kommunikation/${k.slug}`} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-purple-400 hover:shadow-sm transition-all group">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${k.levelFarbe}`}>{k.level}</span>
                  <h3 className="font-semibold text-gray-900 mt-3 mb-1 text-sm group-hover:text-purple-700 transition-colors leading-snug">{k.titel}</h3>
                  <p className="text-xs text-gray-500">{k.dauer} · ab {k.preisAb}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/#kommunikation" className="border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors inline-block text-center text-sm py-2.5 px-6">
                Alle Kommunikationskurse anzeigen
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
