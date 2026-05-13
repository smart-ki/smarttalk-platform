import Link from 'next/link'
import type { Metadata } from 'next'
import { getKiKurse, getKommKurse } from '@/lib/strapi'
import type { Termin } from '@/data/termin'
import { formatTerminBereich, isVergangen, statusLabel } from '@/data/termin'

export const metadata: Metadata = {
  title: 'Termine | SmartTalk Future Skills',
  description: 'Alle Kurstermine von SmartTalk auf einen Blick: KI & Digital, Kommunikation, Beratung.',
}

type Eintrag = {
  termin: Termin
  kursTitel: string
  kursSlug: string
  kursTyp: 'ki' | 'kommunikation'
}

async function alleTermine(): Promise<Eintrag[]> {
  const [kiKurse, kommKurse] = await Promise.all([getKiKurse(), getKommKurse()])
  const eintraege: Eintrag[] = []
  for (const k of kiKurse) {
    for (const t of k.termine ?? []) eintraege.push({ termin: t, kursTitel: k.titel, kursSlug: k.slug, kursTyp: 'ki' })
  }
  for (const k of kommKurse) {
    for (const t of k.termine ?? []) eintraege.push({ termin: t, kursTitel: k.titel, kursSlug: k.slug, kursTyp: 'kommunikation' })
  }
  return eintraege.sort((a, b) => a.termin.datum.localeCompare(b.termin.datum))
}

const TYP_BADGE = {
  ki: { label: 'KI & Digital', cls: 'text-terracotta-600' },
  kommunikation: { label: 'Kommunikation', cls: 'text-plum-600' },
}

function detailLink(e: Eintrag): string {
  return e.kursTyp === 'ki' ? `/v3/ki/${e.kursSlug}` : `/v3/kommunikation/${e.kursSlug}`
}

export default async function V3TerminePage() {
  const eintraege = (await alleTermine()).filter((e) => !isVergangen(e.termin.datum))

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper-200 border-b border-ink/10 py-3 px-6">
        <div className="max-w-5xl mx-auto text-sm text-ink-muted flex items-center gap-2">
          <Link href="/v3" className="hover:text-terracotta-500 transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-ink">Termine</span>
        </div>
      </div>

      <section className="bg-paper py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-12 pb-6 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 block mb-4">Übersicht</span>
              <h1 className="font-serif text-4xl sm:text-5xl leading-[0.98] tracking-tight">Termine</h1>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-base text-ink-soft leading-relaxed font-serif">
                Alle anstehenden Kurstermine auf einen Blick. Klick auf einen Kurs für Details und Anmeldung.
              </p>
            </div>
          </div>

          {eintraege.length === 0 ? (
            <div className="border-y border-ink/10 py-12 text-center">
              <p className="text-ink-soft font-serif text-lg mb-6">
                Aktuell sind keine Termine ausgeschrieben. Schreib uns für ein Inhouse-Training oder lass dich auf die Warteliste setzen.
              </p>
              <Link href="/v3#kontakt" className="btn-v3-primary py-3 px-6 text-sm">Kontakt aufnehmen</Link>
            </div>
          ) : (
            <div className="border-t border-ink/10">
              {eintraege.map((e, i) => {
                const status = statusLabel(e.termin.status)
                const typ = TYP_BADGE[e.kursTyp]
                const kannBuchen = e.termin.status !== 'ausgebucht' && e.termin.status !== 'abgesagt'
                return (
                  <article key={`${e.kursSlug}-${e.termin.datum}-${i}`} className="grid grid-cols-12 gap-4 py-7 border-b border-ink/10 items-start group">
                    <div className="col-span-12 md:col-span-3">
                      <div className="font-serif text-xl text-ink leading-tight">{formatTerminBereich(e.termin)}</div>
                      {e.termin.uhrzeit && <div className="text-sm text-ink-muted mt-1">{e.termin.uhrzeit}</div>}
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${typ.cls}`}>{typ.label}</span>
                        <span className="text-ink-muted text-xs">·</span>
                        <span className="text-xs text-ink-soft">{status.text}</span>
                        {e.termin.bemerkung && <span className="text-xs text-ink-muted">· {e.termin.bemerkung}</span>}
                      </div>
                      <h2 className="font-serif text-2xl text-ink leading-tight mb-2">
                        <Link href={detailLink(e)} className="hover:text-terracotta-500 transition-colors">{e.kursTitel}</Link>
                      </h2>
                      <div className="text-sm text-ink-muted flex flex-wrap gap-x-4 gap-y-1">
                        <span>{e.termin.ort}</span>
                        {e.termin.maxTeilnehmer && <span>· max. {e.termin.maxTeilnehmer} Plätze</span>}
                        {e.termin.anmeldefrist && <span>· Anmeldung bis {formatTerminBereich({ datum: e.termin.anmeldefrist, ort: '' })}</span>}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 md:text-right">
                      {kannBuchen ? (
                        <Link href={detailLink(e)} className="btn-v3-outline text-sm py-2">Details & Anmeldung →</Link>
                      ) : (
                        <span className="text-sm text-ink-muted">—</span>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <div className="mt-12 bg-paper-200 p-6 border border-ink/10">
            <p className="text-sm text-ink-soft font-serif">
              Kein passender Termin? Wir bieten alle Kurse auch als <strong className="text-ink">Inhouse-Training</strong> für Teams an. <Link href="/v3#kontakt" className="text-terracotta-600 font-medium hover:underline underline-offset-4">Jetzt anfragen →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
