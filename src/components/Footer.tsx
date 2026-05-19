import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-chamaeleon.png" alt="SmartTalk" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-cream text-lg leading-none">SmartTalk</span>
                <span className="text-[10px] text-apricot-400 font-medium uppercase tracking-widest leading-none mt-1">Future Skills</span>
              </div>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed font-serif">
              Der Mensch im Mittelpunkt. Future Skills für die Arbeitswelt von morgen.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-cream text-base mb-4">KI & Digital</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ki/schnupperkurs" className="hover:text-apricot-400 transition-colors">KI einfach ausprobieren</Link></li>
              <li><Link href="/ki/ki-berufsalltag" className="hover:text-apricot-400 transition-colors">Meine Aufgaben mit KI lösen</Link></li>
              <li><Link href="/ki/ki-auf-dem-desktop" className="hover:text-apricot-400 transition-colors">KI dauerhaft in den Alltag integrieren</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-cream text-base mb-4">Kommunikation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kommunikation/sicher-auftreten-praesentieren" className="hover:text-mauve-400 transition-colors">Sicher auftreten & präsentieren</Link></li>
              <li><Link href="/kommunikation/kommunikation-team-fuehrung" className="hover:text-mauve-400 transition-colors">Kommunikation im Team & Führung</Link></li>
              <li><Link href="/kommunikation/fuehren-hybrid" className="hover:text-mauve-400 transition-colors">Führen in der hybriden Arbeitswelt</Link></li>
              <li className="pt-3 mt-3 border-t border-cream/10">
                <Link href="/#beratung" className="text-eucalyptus-400 hover:text-eucalyptus-300 transition-colors font-medium">Beratung & New Work →</Link>
              </li>
            </ul>
          </div>
          <div id="kontakt">
            <h3 className="font-serif text-cream text-base mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:jeannine.germann@smarttalk.ch" className="hover:text-apricot-400 transition-colors">jeannine.germann@smarttalk.ch</a></li>
              <li className="text-cream/50">SmartTalk · Zentralschweiz</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} SmartTalk. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-apricot-400 transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-apricot-400 transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
