import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 border-t border-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 pb-16 border-b border-paper/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="SmartTalk" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-paper text-xl leading-none">SmartTalk</span>
                <span className="text-[10px] text-paper/50 font-medium uppercase tracking-[0.2em] leading-none mt-1">Future Skills</span>
              </div>
            </div>
            <p className="font-serif italic text-paper/60 text-base leading-relaxed">
              Der Mensch im Mittelpunkt. Future Skills für die Arbeitswelt von morgen.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-5">KI</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/ki/schnupperkurs" className="hover:text-terracotta-300 transition-colors">Schnupperkurs</Link></li>
              <li><Link href="/ki/ki-berufsalltag" className="hover:text-terracotta-300 transition-colors">Berufsalltag</Link></li>
              <li><Link href="/ki/ki-auf-dem-desktop" className="hover:text-terracotta-300 transition-colors">KI-Arbeitsplatz</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-5">Kommunikation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/kommunikation/sicher-auftreten-praesentieren" className="hover:text-plum-300 transition-colors">Sicher auftreten</Link></li>
              <li><Link href="/kommunikation/kommunikation-team-fuehrung" className="hover:text-plum-300 transition-colors">Team & Führung</Link></li>
              <li><Link href="/kommunikation/fuehren-hybrid" className="hover:text-plum-300 transition-colors">Hybrid führen</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-5">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:jeannine.germann@smarttalk.ch" className="hover:text-terracotta-300 transition-colors">jeannine.germann@smarttalk.ch</a></li>
              <li className="text-paper/50">Zentralschweiz</li>
              <li className="pt-3 mt-3 border-t border-paper/10">
                <Link href="/#beratung" className="text-sage-300 hover:text-sage-200 transition-colors">Beratung & New Work →</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-paper/40">
          <p>&copy; {new Date().getFullYear()} SmartTalk. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-terracotta-300 transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-terracotta-300 transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
