import Link from 'next/link'
import type { Metadata } from 'next'
import { kiKurse } from '@/data/ki-kurse'
import { kommKurse } from '@/data/komm-kurse'
import type { Termin } from '@/data/termin'
import { formatTerminBereich, isVergangen, statusLabel } from '@/data/termin'

export const metadata: Metadata = {
  title: 'Termine | SmartTalk Future Skills',
  description: 'Alle Kurstermine von SmartTalk auf einen Blick: KI & Digital, Kommunikation, Beratung. Online und in Luzern.',
}

type Eintrag = {
  termin: Termin
  kursTitel: string
  kursSlug: string
  kursTyp: 'ki' | 'kommunikation'
}

function alleTermine(): Eintrag[] {
  const eintraege: Eintrag[] = []
  for (const k of kiKurse) {
    for (const t of k.termine ?? []) {
      eintraege.push({ termin: t, kursTitel: k.titel, kursSlug: k.slug, kursTyp: 'ki' })
    }
  }
  for (const k of kommKurse) {
    for (const t of k.termine ?? []) {
      eintraege.push({ termin: t, kursTitel: k.titel, kursSlug: k.slug, kursTyp: 'kommunikation' })
    }
  }
  return eintraege.sort((a, b) => a.termin.datum.localeCompare(b.termin.datum))
}

const TYP_BADGE = {
  ki: { label: 'KI & Digital', klasse: 'bg-orange-50 text-[#F5821F] border-orange-200' },
  kommunikation: { label: 'Kommunikation', klasse: 'bg-purple-50 text-purple-700 border-purple-200' },
}

function detailLink(e: Eintrag): string {
  return e.kursTyp === 'ki' ? `/ki/${e.kursSlug}` : `/kommunikation/${e.kursSlug}`
}

export default function TerminePage() {
  const eintraege = alleTermine().filter((e) => !isVergangen(e.termin.datum))

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-5xl mx-auto text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#F5821F] transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Termine</span>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">Termine</h1>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            Alle anstehenden Kurstermine auf einen Blick. Klick auf einen Kurs für Details und Anmeldung.
          </p>

          {eintraege.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
              <p className="text-gray-500">Aktuell sind keine Termine ausgeschrieben. Schreib uns für ein Inhouse-Training oder lass dich auf die Warteliste setzen.</p>
              <Link href="/#kontakt" className="btn-primary mt-6 inline-block">Kontakt aufnehmen</Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {eintraege.map((e, i) => {
                const status = statusLabel(e.termin.status)
                const typ = TYP_BADGE[e.kursTyp]
                const kannBuchen = e.termin.status !== 'ausgebucht' && e.termin.status !== 'abgesagt'
                return (
                  <article key={`${e.kursSlug}-${e.termin.datum}-${i}`} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="md:w-48 shrink-0">
                        <div className="text-2xl font-extrabold text-gray-900">{formatTerminBereich(e.termin)}</div>
                        {e.termin.uhrzeit && <div className="text-sm text-gray-500 mt-1">{e.termin.uhrzeit}</div>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typ.klasse}`}>{typ.label}</span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${status.klasse}`}>{status.text}</span>
                          {e.termin.bemerkung && (
                            <span className="text-xs font-medium text-gray-500">· {e.termin.bemerkung}</span>
                          )}
                        </div>
                        <h2 className="font-bold text-gray-900 text-lg mb-1">
                          <Link href={detailLink(e)} className="hover:text-[#F5821F] transition-colors">{e.kursTitel}</Link>
                        </h2>
                        <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                          <span>📍 {e.termin.ort}</span>
                          {e.termin.maxTeilnehmer && <span>· max. {e.termin.maxTeilnehmer} Plätze</span>}
                          {e.termin.anmeldefrist && <span>· Anmeldung bis {formatTerminBereich({ datum: e.termin.anmeldefrist, ort: '' })}</span>}
                        </div>
                      </div>
                      <div className="md:shrink-0">
                        {kannBuchen ? (
                          <Link href={detailLink(e)} className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">Details & Anmeldung →</Link>
                        ) : (
                          <span className="inline-block text-sm font-semibold text-gray-400 py-2.5 px-5">—</span>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 p-6">
            <p className="text-sm text-gray-600">
              Kein passender Termin? Wir bieten alle Kurse auch als <strong>Inhouse-Training</strong> für Teams an. <Link href="/#kontakt" className="text-[#F5821F] font-semibold hover:underline">Jetzt anfragen →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
