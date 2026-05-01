import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="SmartTalk" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg leading-none">SmartTalk</span>
                <span className="text-[10px] text-[#F5821F] font-semibold uppercase tracking-widest leading-none mt-0.5">Future Skills</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Der Mensch im Mittelpunkt – KI als Werkzeug zum Bessersein. Future Skills für die Arbeitswelt von morgen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">KI & Digital</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ki/schnupperkurs" className="hover:text-[#F5821F] transition-colors">KI einfach ausprobieren</Link></li>
              <li><Link href="/ki/ki-berufsalltag" className="hover:text-[#F5821F] transition-colors">KI konkret für meinen Berufsalltag</Link></li>
              <li><Link href="/ki/ki-auf-dem-desktop" className="hover:text-[#F5821F] transition-colors">KI auf meinem Desktop</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Kommunikation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kommunikation/sicher-auftreten-praesentieren" className="hover:text-[#7C3AED] transition-colors">Sicher auftreten & präsentieren</Link></li>
              <li><Link href="/kommunikation/kommunikation-team-fuehrung" className="hover:text-[#7C3AED] transition-colors">Kommunikation im Team & Führung</Link></li>
              <li><Link href="/kommunikation/fuehren-hybrid" className="hover:text-[#7C3AED] transition-colors">Führen in der hybriden Arbeitswelt</Link></li>
              <li className="pt-2 border-t border-gray-800">
                <Link href="/#beratung" className="hover:text-[#0D9488] transition-colors text-[#0D9488] font-medium">Beratung & New Work →</Link>
              </li>
            </ul>
          </div>
          <div id="kontakt">
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:jeannine.germann@smarttalk.ch" className="hover:text-[#F5821F] transition-colors">jeannine.germann@smarttalk.ch</a></li>
              <li className="text-gray-400">SmartTalk</li>
              <li className="text-gray-400">Zentralschweiz</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SmartTalk. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-[#F5821F] transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-[#F5821F] transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
