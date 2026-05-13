import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getKiKurse, getKiKursBySlug } from '@/lib/strapi'
import BuchungsFormular from '@/components/BuchungsFormular'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const kurse = await getKiKurse()
  return kurse.map((k) => ({ slug: k.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const kurs = await getKiKursBySlug(params.slug)
  if (!kurs) return {}
  return { title: kurs.seoTitel, description: kurs.metaBeschreibung, keywords: kurs.keywords }
}

export default async function V3KiKursDetailPage({ params }: Props) {
  const kurs = await getKiKursBySlug(params.slug)
  if (!kurs) notFound()

  const alleKurse = await getKiKurse()
  const andere = alleKurse.filter((k) => k.slug !== kurs.slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper-200 border-b border-ink/10 py-3 px-6">
        <div className="max-w-5xl mx-auto text-sm text-ink-muted flex items-center gap-2">
          <Link href="/v3" className="hover:text-terracotta-500 transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/v3#ki-digital" className="hover:text-terracotta-500 transition-colors">KI & Digital</Link>
          <span>/</span>
          <span className="text-ink truncate">{kurs.titel}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-terracotta-50 py-16 sm:py-20 px-6 border-b border-ink/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600">{kurs.level}</span>
            <span className="text-ink-muted text-xs">·</span>
            <span className="text-xs text-ink-muted">KI Kurs {kurs.nummer} von {alleKurse.length}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-[1.02] tracking-tight mb-4">{kurs.titel}</h1>
          <p className="text-lg text-ink-soft font-serif mb-8">{kurs.untertitel}</p>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-y border-ink/15">
            {[
              { label: 'Dauer', value: kurs.dauer },
              { label: 'Format', value: kurs.format },
              { label: 'Zielgruppe', value: kurs.zielgruppe },
              { label: 'Preis', value: kurs.preisDetail ?? kurs.preisAb },
            ].map(({ label, value }, i) => (
              <div key={label} className={`py-4 px-3 ${i < 3 ? 'sm:border-r border-ink/15' : ''} ${i < 2 ? 'border-b sm:border-b-0 border-ink/15' : ''} ${i === 0 ? 'border-r border-ink/15 sm:border-r' : ''}`}>
                <dt className="text-xs uppercase tracking-widest text-ink-muted mb-1">{label}</dt>
                <dd className="text-sm text-ink leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Content + Form */}
      <section className="bg-paper py-16 px-6 border-b border-ink/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Über diesen Kurs</h2>
              <p className="text-ink-soft leading-relaxed font-serif">{kurs.ausfuehrlicheBeschreibung}</p>
            </div>

            <div className="border-t border-ink/10 pt-10">
              <h2 className="font-serif text-2xl text-ink mb-5">Das lernst du</h2>
              <ul className="space-y-3">
                {kurs.lernziele.map((ziel) => (
                  <li key={ziel} className="flex items-start gap-3">
                    <span className="text-terracotta-500 shrink-0 mt-1">›</span>
                    <span className="text-ink-soft font-serif text-base leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            </div>

            {kurs.sessions && kurs.sessions.length > 0 && (
              <div className="border-t border-ink/10 pt-10">
                <h2 className="font-serif text-2xl text-ink mb-2">Kursplan</h2>
                <p className="text-sm text-ink-muted mb-6">
                  {kurs.anzahlSessions}× {kurs.minutenProSession} Minuten · 1 Lektion pro Woche
                </p>
                <div className="border-t border-ink/10">
                  {kurs.sessions.map((session) => (
                    <div key={session.woche} className="border-b border-ink/10 py-6">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="font-serif text-2xl text-terracotta-500">0{session.woche}</span>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">Woche {session.woche}</span>
                          <h3 className="font-serif text-xl text-ink leading-tight mt-1">{session.titel}</h3>
                        </div>
                      </div>
                      <ul className="space-y-1.5 pl-12">
                        {session.inhalt.map((punkt) => (
                          <li key={punkt} className="flex items-start gap-2 text-sm text-ink-soft font-serif">
                            <span className="text-terracotta-500 shrink-0">›</span>
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
            <div className="bg-paper-200 p-6 border border-ink/10 sticky top-24">
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
        <section className="bg-paper-200 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl text-ink mb-8">Weitere KI-Kurse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-ink/10">
              {andere.map((k) => (
                <Link key={k.slug} href={`/v3/ki/${k.slug}`} className="border-b sm:border-b-0 sm:border-r last:border-r-0 border-ink/10 py-6 sm:px-6 first:sm:pl-0 hover:bg-terracotta-50/50 transition-colors group">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">{k.level}</span>
                  <h3 className="font-serif text-xl text-ink mt-2 mb-2 leading-tight group-hover:text-terracotta-600 transition-colors">{k.titel}</h3>
                  <p className="text-xs text-ink-muted">{k.dauer} · ab {k.preisAb}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/v3#ki-digital" className="btn-v3-outline text-sm py-2">Alle KI-Kurse anzeigen →</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
