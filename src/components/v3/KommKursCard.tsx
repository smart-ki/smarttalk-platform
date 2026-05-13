import Link from 'next/link'
import type { KommKurs } from '@/data/komm-kurse'

export default function KommKursCard({ kurs }: { kurs: KommKurs }) {
  return (
    <div className="border-b sm:border-b-0 sm:border-r last:border-r-0 border-ink/10 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0 flex flex-col bg-transparent hover:bg-plum-100/40 transition-colors group">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-plum-700">
          {kurs.level}
        </span>
        <span className="font-serif text-2xl text-plum-500">0{kurs.nummer}</span>
      </div>

      {kurs.highlight && (
        <p className="text-xs text-plum-700 font-serif mb-3">{kurs.highlight}</p>
      )}

      <h3 className="font-serif text-3xl leading-[1.05] text-ink mb-3 group-hover:text-plum-600 transition-colors">
        {kurs.titel}
      </h3>

      <p className="text-base text-ink-soft font-serif mb-6 leading-snug">{kurs.untertitel}</p>

      <p className="text-sm text-ink-soft leading-relaxed font-serif mb-5">
        {kurs.kurzbeschreibung}
      </p>

      {/* Inhalte */}
      <div className="mb-6 flex-1">
        <p className="text-xs uppercase tracking-wider text-ink-muted mb-3">Inhalte</p>
        <ul className="space-y-1.5">
          {kurs.inhalte.slice(0, 3).map((inhalt) => (
            <li key={inhalt} className="flex items-start gap-2 text-sm text-ink-soft font-serif">
              <span className="text-plum-500 shrink-0">›</span>
              {inhalt}
            </li>
          ))}
          {kurs.inhalte.length > 3 && (
            <li className="text-xs text-ink-muted pl-4">+ {kurs.inhalte.length - 3} weitere</li>
          )}
        </ul>
      </div>

      <dl className="space-y-2 text-sm mb-6 pt-6 border-t border-ink/10">
        <div className="flex justify-between">
          <dt className="text-ink-muted text-xs uppercase tracking-wider">Dauer</dt>
          <dd className="text-ink-soft text-right">{kurs.dauer}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-muted text-xs uppercase tracking-wider">Format</dt>
          <dd className="text-ink-soft text-right">{kurs.format}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-6 border-t border-ink/10 flex items-end justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-ink-muted">ab</span>
          <span className="block font-serif text-3xl text-ink leading-none mt-1">{kurs.preisAb}</span>
        </div>
        <Link href={`/kommunikation/${kurs.slug}`} className="btn-v3-outline text-sm py-1.5">
          Mehr →
        </Link>
      </div>
    </div>
  )
}
