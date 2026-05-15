import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKiKurse, getKiKursBySlug } from '@/lib/strapi'
import BuchungsFormular from '@/components/BuchungsFormular'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const kurse = await getKiKurse()
    return kurse.map((k) => ({ slug: k.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const kurs = await getKiKursBySlug(slug)
  if (!kurs) return {}
  return { title: kurs.seoTitel, description: kurs.metaBeschreibung, keywords: kurs.keywords }
}

export default async function KiKursDetailPage({ params }: Props) {
  const { slug } = await params
  const kurs = await getKiKursBySlug(slug)
  if (!kurs) notFound()

  const alleKurse = await getKiKurse()
  const andere = alleKurse.filter((k) => k.slug !== kurs.slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-200 py-3 px-4">
        <div className="max-w-5xl mx-auto text-sm text-ink-muted flex items-center gap-2">
          <Link href="/" className="hover:text-apricot-600 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/#ki-digital" className="hover:text-apricot-600 transition-colors">KI & Digital</Link>
          <span>/</span>
          <span className="text-ink truncate">{kurs.titel}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-apricot-50 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob bg-apricot-200 opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-700 bg-apricot-100 px-3 py-1 rounded-full">{kurs.level}</span>
            <span className="text-xs text-ink-muted">KI Kurs {kurs.nummer} von {alleKurse.length}</span>
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
                <dt className="text-xs uppercase tracking-widest text-apricot-700 mb-1">{label}</dt>
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
                    <span className="text-apricot-500 shrink-0 mt-1">›</span>
                    <span className="text-ink-soft font-serif text-base leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            </div>

            {kurs.sessions && kurs.sessions.length > 0 && (
              <div className="bg-white rounded-3xl shadow-soft p-7">
                <h2 className="font-serif text-2xl text-ink mb-2">Kursplan</h2>
                <p className="text-sm text-ink-muted mb-6">
                  {kurs.anzahlSessions}× {kurs.minutenProSession} Minuten · 1 Lektion pro Woche
                </p>
                <div className="space-y-6">
                  {kurs.sessions.map((session) => (
                    <div key={session.woche} className="border-l-2 border-apricot-300 pl-5">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-serif text-2xl text-apricot-500">0{session.woche}</span>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-700">Woche {session.woche}</span>
                          <h3 className="font-serif text-xl text-ink leading-tight mt-1">{session.titel}</h3>
                        </div>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {session.inhalt.map((punkt) => (
                          <li key={punkt} className="flex items-start gap-2 text-sm text-ink-soft font-serif">
                            <span className="text-apricot-500 shrink-0">›</span>
                            {punkt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Buchungsformular */}
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
            <h2 className="font-serif text-2xl text-ink mb-8">Weitere KI-Kurse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {andere.map((k) => (
                <Link key={k.slug} href={`/ki/${k.slug}`} className="bg-white rounded-3xl shadow-soft p-6 hover:shadow-soft-lg transition-shadow group">
                  <span className="text-xs font-semibold uppercase tracking-widest text-apricot-700">{k.level}</span>
                  <h3 className="font-serif text-xl text-ink mt-2 mb-2 leading-tight group-hover:text-apricot-600 transition-colors">{k.titel}</h3>
                  <p className="text-xs text-ink-muted">{k.dauer} · ab {k.preisAb}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/#ki-digital" className="btn-outline text-sm py-2.5 px-5">Alle KI-Kurse anzeigen →</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
