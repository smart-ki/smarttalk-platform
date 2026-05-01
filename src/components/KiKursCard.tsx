import Link from 'next/link'
import type { KiKurs } from '@/data/ki-kurse'

export default function KiKursCard({ kurs }: { kurs: KiKurs }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1.5 bg-[#F5821F]" />

      <div className="p-6 flex flex-col flex-1">
        {/* Level badge + Nummer */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${kurs.levelFarbe}`}>
            {kurs.level}
          </span>
          <span className="text-xs text-gray-400 font-medium">Kurs {kurs.nummer}</span>
        </div>

        {/* Highlight-Banner */}
        {kurs.highlight && (
          <div className={`text-xs font-semibold px-3 py-1.5 rounded-lg border mb-3 flex items-center gap-1.5 ${kurs.highlightFarbe}`}>
            <span>✨</span>
            {kurs.highlight}
          </div>
        )}

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 leading-snug mb-2 group-hover:text-[#F5821F] transition-colors">
          {kurs.titel}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-[#6B6B6B] italic mb-4">{kurs.untertitel}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
          {kurs.kurzbeschreibung}
        </p>

        {/* Session-Visualisierung */}
        {kurs.anzahlSessions && kurs.anzahlSessions > 1 && (
          <div className="flex items-center gap-1.5 mb-4">
            {Array.from({ length: kurs.anzahlSessions }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-full bg-orange-100 border-2 border-[#F5821F] flex items-center justify-center text-[10px] font-bold text-[#F5821F]">
                  {i + 1}
                </div>
              </div>
            ))}
            <span className="ml-2 text-xs text-gray-500">
              {kurs.anzahlSessions}x {kurs.minutenProSession} Min., 1x/Woche
            </span>
          </div>
        )}

        {/* Meta */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {kurs.dauer}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {kurs.zielgruppe}
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <svg className="w-3.5 h-3.5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {kurs.format}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto">
          {/* Zusatzinfos oberhalb, damit der Hauptpreis immer am unteren Rand sitzt */}
          <div className="text-xs text-gray-400 mb-2 space-y-0.5 min-h-[1rem]">
            {kurs.preisAbFirma && <div>Firma: {kurs.preisAbFirma}</div>}
            {kurs.slug === 'grundkompetenzen' && <div>*mit Bildungsgutschein</div>}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wide">ab</span>
              <span className="block text-xl font-bold text-gray-900">{kurs.preisAb}</span>
            </div>
            {kurs.externerLink ? (
              <a
                href={kurs.externerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Zur Anmeldung →
              </a>
            ) : (
              <Link href={`/ki/${kurs.slug}`} className="btn-primary text-sm py-2.5 px-5">
                Mehr & Buchen
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
