export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Impressum</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Anbieter</h2>
          <p>SmartTalk<br />Jeannine Germann<br />Zentralschweiz, Schweiz</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Kontakt</h2>
          <p>E-Mail: <a href="mailto:jeannine.germann@smarttalk.ch" className="text-[#F5821F] hover:underline">jeannine.germann@smarttalk.ch</a></p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Haftungsausschluss</h2>
          <p>Alle Angaben auf dieser Website wurden sorgfältig geprüft. SmartTalk übernimmt keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen.</p>
        </section>
      </div>
    </div>
  )
}
