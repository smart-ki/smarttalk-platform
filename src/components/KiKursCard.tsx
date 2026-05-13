import Link from 'next/link'
import type { KiKurs } from '@/data/ki-kurse'

export default function KiKursCard({ kurs }: { kurs: KiKurs }) {
  return (
    <div className="border-b sm:border-b-0 sm:border-r last:border-r-0 border-ink/10 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0 flex flex-col bg-transparent hover:bg-terracotta-100/40 transition-colors group">
      {/* Nummer + Level */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-700">
          {kurs.level}
        </span>
        <span className="font-serif text-2xl text-terracotta-500">0{kurs.nummer}</span>
      </div>

      {/* Highlight */}
      {kurs.highlight && (
        <p className="text-xs text-terracotta-700 italic font-serif mb-3">{kurs.highlight}</p>
      )}

      {/* Title */}
      <h3 className="font-serif text-3xl leading-[1.05] text-ink mb-3 group-hover:text-terracotta-600 transition-colors">
        {kurs.titel}
      </h3>

      {/* Subtitle */}
      <p className="text-base text-ink-soft font-serif italic mb-6 leading-snug">{kurs.untertitel}</p>

      {/* Description */}
      <p className="text-sm text-ink-soft leading-relaxed font-serif flex-1 mb-6">
        {kurs.kurzbeschreibung}
      </p>

      {/* Meta as labeled rows */}
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

      {/* Price + CTA */}
      <div className="mt-auto pt-6 border-t border-ink/10 flex items-end justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-ink-muted">ab</span>
          <span className="block font-serif text-3xl text-ink leading-none mt-1">{kurs.preisAb}</span>
        </div>
        <Link href={`/ki/${kurs.slug}`} className="btn-outline text-sm py-1.5">
          Mehr →
        </Link>
      </div>
    </div>
  )
}
