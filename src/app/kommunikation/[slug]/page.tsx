import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKommKurse, getKommKursBySlug } from '@/lib/strapi'
import BuchungsFormular from '@/components/BuchungsFormular'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const kurse = await getKommKurse()
    return kurse.map((k) => ({ slug: k.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const kurs = await getKommKursBySlug(params.slug)
  if (!kurs) return {}
  return { title: kurs.seoTitel, description: kurs.metaBeschreibung, keywords: kurs.keywords }
}

export default async function KommKursDetailPage({ params }: Props) {
  const kurs = await getKommKursBySlug(params.slug)
  if (!kurs) notFound()

  const alleKurse = await getKommKurse()
  const andere = alleKurse.filter((k) => k.slug !== kurs.slug)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-200 py-3 px-4">
        <div className="max-w-5xl mx-auto text-sm text-ink-muted flex items-center gap-2">
          <Link href="/" className="hover:text-mauve-600 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/#kommunikation" className="hover:text-mauve-600 transition-colors">Kommunikation</Link>
          <span>/</span>
          <span className="text-ink truncate">{kurs.titel}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-mauve-50 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob-2 bg-mauve-200 opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-700 bg-mauve-100 px-3 py-1 rounded-full">{kurs.level}</span>
            <span className="text-xs text-ink-muted">Kommunikation Kurs {kurs.nummer} von {alleKurse.length}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-tight tracking-tight mb-4">{kurs.titel}</h1>
          <p className="text-lg text-ink-soft font-serif mb-10">{kurs.untertitel}</p>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Dauer', value: kurs.dauer },
              { label: 'Format', value: kurs.format },
              { label: 'Zielgruppe', value: kurs.zielgruppe },
              { label: 'Preis', value: kurs.preisDetail ?? kurs.preisAb },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-2xl shadow-soft p-4">
                <dt className="text-xs uppercase tracking-widest text-mauve-700 mb-1">{label}</dt>
                <dd className="text-sm text-ink leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Content + Form */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-10">
            <div className="bg-white rounded-3xl shadow-soft p-7">
              <h2 className="font-serif text-2xl text-ink mb-4">Über diesen Kurs</h2>
              <p className="text-ink-soft leading-relaxed font-serif">{kurs.ausfuehrlicheBeschreibung}</p>
            </div>

            <div className="bg-white rounded-3xl shadow-soft p-7">
              <h2 className="font-serif text-2xl text-ink mb-5">Das lernst du</h2>
              <ul className="space-y-3">
                {kurs.lernziele.map((ziel) => (
                  <li key={ziel} className="flex items-start gap-3">
                    <span className="text-mauve-500 shrink-0 mt-1">›</span>
                    <span className="text-ink-soft font-serif text-base leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-soft p-7">
              <h2 className="font-serif text-2xl text-ink mb-5">Inhalte</h2>
              <ul className="space-y-3">
                {kurs.inhalte.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3">
                    <span className="text-mauve-500 shrink-0 mt-1">›</span>
                    <span className="text-ink-soft font-serif text-base leading-relaxed">{punkt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-soft p-6 sticky top-24">
              <h2 className="font-serif text-xl text-ink mb-1">Buchungsanfrage</h2>
              <p className="text-sm text-ink-muted mb-6 font-serif">
                Unverbindlich anfragen — wir melden uns innerhalb von 1–2 Werktagen.
              </p>
              <BuchungsFormular kursTitel={kurs.titel} kursSlug={kurs.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Andere Kurse */}
      {andere.length > 0 && (
        <section className="bg-cream-200 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl text-ink mb-8">Weitere Kommunikations-Kurse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {andere.map((k) => (
                <Link key={k.slug} href={`/kommunikation/${k.slug}`} className="bg-white rounded-3xl shadow-soft p-6 hover:shadow-soft-lg transition-shadow group">
                  <span className="text-xs font-semibold uppercase tracking-widest text-mauve-700">{k.level}</span>
                  <h3 className="font-serif text-xl text-ink mt-2 mb-2 leading-tight group-hover:text-mauve-600 transition-colors">{k.titel}</h3>
                  <p className="text-xs text-ink-muted">{k.dauer} · ab {k.preisAb}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/#kommunikation" className="btn-mauve text-sm py-2.5 px-5">Alle Kommunikations-Kurse anzeigen →</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
