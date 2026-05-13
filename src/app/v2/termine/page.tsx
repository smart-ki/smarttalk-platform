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
  ki: { label: 'KI & Digital', cls: 'text-apricot-600', bg: 'bg-apricot-100' },
  kommunikation: { label: 'Kommunikation', cls: 'text-mauve-600', bg: 'bg-mauve-100' },
}

function detailLink(e: Eintrag): string {
  return e.kursTyp === 'ki' ? `/v2/ki/${e.kursSlug}` : `/v2/kommunikation/${e.kursSlug}`
}

export default async function V2TerminePage() {
  const eintraege = (await alleTermine()).filter((e) => !isVergangen(e.termin.datum))

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-200 py-3 px-4">
        <div className="max-w-5xl mx-auto text-sm text-ink-muted flex items-center gap-2">
          <Link href="/v2" className="hover:text-apricot-600 transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-ink">Termine</span>
        </div>
      </div>

      <section className="relative bg-cream py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob bg-apricot-100 opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 blob-2 bg-mauve-100 opacity-50 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-600 block mb-4">Übersicht</span>
            <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-tight mb-5">Termine</h1>
            <p className="text-ink-soft max-w-xl mx-auto text-lg">
              Alle anstehenden Kurstermine auf einen Blick. Klick auf einen Kurs für Details und Anmeldung.
            </p>
          </div>

          {eintraege.length === 0 ? (
            <div className="bg-white rounded-4xl shadow-soft p-12 text-center">
              <p className="text-ink-soft font-serif text-lg mb-6">
                Aktuell sind keine Termine ausgeschrieben. Schreib uns für ein Inhouse-Training oder lass dich auf die Warteliste setzen.
              </p>
              <Link href="/v2#kontakt" className="btn-v2-primary py-3 px-6 text-sm">Kontakt aufnehmen</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {eintraege.map((e, i) => {
                const status = statusLabel(e.termin.status)
                const typ = TYP_BADGE[e.kursTyp]
                const kannBuchen = e.termin.status !== 'ausgebucht' && e.termin.status !== 'abgesagt'
                return (
                  <article key={`${e.kursSlug}-${e.termin.datum}-${i}`} className="bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-shadow p-6 sm:p-7">
                    <div className="grid grid-cols-12 gap-4 items-start">
                      <div className="col-span-12 md:col-span-3">
                        <div className="font-serif text-xl text-ink leading-tight">{formatTerminBereich(e.termin)}</div>
                        {e.termin.uhrzeit && <div className="text-sm text-ink-muted mt-1">{e.termin.uhrzeit}</div>}
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${typ.bg} ${typ.cls}`}>{typ.label}</span>
                          <span className="text-xs text-ink-soft">{status.text}</span>
                          {e.termin.bemerkung && <span className="text-xs text-ink-muted">· {e.termin.bemerkung}</span>}
                        </div>
                        <h2 className="font-serif text-xl text-ink leading-tight mb-2">
                          <Link href={detailLink(e)} className="hover:text-apricot-600 transition-colors">{e.kursTitel}</Link>
                        </h2>
                        <div className="text-sm text-ink-muted flex flex-wrap gap-x-4 gap-y-1">
                          <span>{e.termin.ort}</span>
                          {e.termin.maxTeilnehmer && <span>· max. {e.termin.maxTeilnehmer} Plätze</span>}
                          {e.termin.anmeldefrist && <span>· Anmeldung bis {formatTerminBereich({ datum: e.termin.anmeldefrist, ort: '' })}</span>}
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-3 md:text-right">
                        {kannBuchen ? (
                          <Link href={detailLink(e)} className="btn-v2-primary text-sm py-2.5 px-5 inline-block">Details & Anmeldung →</Link>
                        ) : (
                          <span className="text-sm text-ink-muted">—</span>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <div className="mt-12 bg-eucalyptus-50 rounded-3xl p-6">
            <p className="text-sm text-ink-soft font-serif">
              Kein passender Termin? Wir bieten alle Kurse auch als <strong className="text-ink">Inhouse-Training</strong> für Teams an. <Link href="/v2#kontakt" className="text-eucalyptus-700 font-medium hover:underline underline-offset-4">Jetzt anfragen →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
