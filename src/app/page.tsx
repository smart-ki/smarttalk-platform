import Link from 'next/link'
import { getKiKurse, getKommKurse } from '@/lib/strapi'
import KiKursCard from '@/components/KiKursCard'
import KommKursCard from '@/components/KommKursCard'
import KontaktFormular from '@/components/KontaktFormular'

export default async function HomePage() {
  const [kiKurse, kommKurse] = await Promise.all([getKiKurse(), getKommKurse()])
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-paper pt-20 sm:pt-28 pb-20 sm:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow block mb-10">Future Skills · Zentralschweiz · Seit 2016</span>

          <h1 className="font-serif text-[12vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.92] tracking-tight mb-12 max-w-6xl">
            Kompetenz<br />
            <span className="italic text-terracotta-500">macht den</span><br />
            Unterschied.
          </h1>

          <div className="grid lg:grid-cols-12 gap-10 items-end pt-6 border-t border-ink/10">
            <p className="lg:col-span-7 text-xl sm:text-2xl text-ink leading-snug max-w-2xl font-serif">
              Wir begleiten Menschen und Organisationen beim Aufbau zentraler Kompetenzen — mit Tiefgang, klarem Auftrag und echtem Praxisbezug.
            </p>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="#angebote" className="btn-primary text-base py-4 px-8">
                Angebote ansehen
              </Link>
              <Link href="#kontakt" className="btn-outline text-base py-4">
                Gespräch anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DER MENSCH IM ZENTRUM ─── */}
      <section className="bg-paper-200 py-24 sm:py-32 px-6 border-y border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <span className="eyebrow block mb-6">Das Fundament</span>
              <h2 className="font-serif text-5xl sm:text-6xl leading-[1.02] tracking-tight">
                Der Mensch <span className="italic">im Zentrum.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl font-serif">
                Wir leben, wachsen und entwickeln uns in vier Kompetenzbereichen — ein Leben lang. Jede Säule braucht ihre eigene Aufmerksamkeit. Erst gemeinsam ergeben sie die Wirkung, die Future Skills bedeutet.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10">
            {[
              { num: '01', name: 'Digitales', sub: 'Digitale Kompetenz & KI', body: 'Digitale Kompetenz, KI-Kenntnisse, digitale Zusammenarbeit, Datenkompetenz.', tags: ['KI-Kurse', 'Beratung'], color: 'terracotta' },
              { num: '02', name: 'Zwischenmenschliches', sub: 'Teamarbeit & Führung', body: 'Rollenmodellierung, Vertrauen aufbauen, Kollaboration, Konfliktfähigkeit.', tags: ['Kommunikation', 'New Work'], color: 'plum' },
              { num: '03', name: 'Selbstmanagement', sub: 'Eigenverantwortung & Resilienz', body: 'Selbstführung, lebenslanges Lernen, Resilienz, Eigenverantwortung.', tags: ['Führen hybrid', 'New Work'], color: 'sage' },
              { num: '04', name: 'Kognitiv', sub: 'Kritisches Denken & Agilität', body: 'Problemlösung, Planung, geistige Beweglichkeit, Anpassungsfähigkeit.', tags: ['Workshop', 'Auf Anfrage'], color: 'ink' },
            ].map(({ num, name, sub, body, tags, color }) => {
              const colorClasses: Record<string, string> = {
                terracotta: 'text-terracotta-500',
                plum: 'text-plum-500',
                sage: 'text-sage-500',
                ink: 'text-ink',
              }
              return (
                <div key={num} className="grid grid-cols-12 gap-6 py-10 border-b border-ink/10 items-start">
                  <div className={`col-span-2 sm:col-span-1 font-serif text-3xl ${colorClasses[color]}`}>{num}</div>
                  <div className="col-span-10 sm:col-span-3">
                    <span className={`eyebrow ${colorClasses[color]}`}>{name}</span>
                    <h3 className="font-serif text-2xl mt-2 leading-tight">{sub}</h3>
                  </div>
                  <p className="col-span-12 sm:col-span-5 text-ink-soft leading-relaxed sm:pt-6">{body}</p>
                  <div className="col-span-12 sm:col-span-3 flex flex-wrap gap-2 sm:pt-6">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-xs text-ink-muted italic mt-10">
            In Anlehnung an: OECD Skills Outlook 2019 und WEF Future of Jobs Report 2023
          </p>
        </div>
      </section>

      {/* ─── ZITAT ─── */}
      <section className="bg-ink text-paper py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="overflow-hidden aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jeannine-v7.jpg" alt="Jeannine Germann bei SmartTalk" className="w-full h-full object-cover object-top grayscale" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-300 mb-6 block">Haltung</span>
              <blockquote className="font-serif text-3xl sm:text-4xl leading-[1.15] mb-8 italic">
                „Ich glaube, dass jeder Mensch das Potenzial hat, mit den richtigen Kompetenzen wirklich vorwärtszukommen."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-terracotta-400" />
                <div>
                  <p className="text-paper font-medium">Jeannine Germann</p>
                  <p className="text-paper/60 text-sm">Mitglied der Geschäftsleitung, SmartTalk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="angebote" />

      {/* ─── KI & DIGITAL ─── */}
      <section id="ki-digital" className="bg-terracotta-50 py-24 sm:py-32 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 pb-8 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 mb-6 block">Bildung · Eine</span>
              <h2 className="font-serif text-6xl sm:text-7xl leading-[0.95] tracking-tight">
                KI & <span className="italic text-terracotta-500">Digital.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-lg text-ink-soft leading-relaxed font-serif mb-6">
                Online und Präsenz. Drei Kurse vom Einstieg bis zum persönlichen KI-Arbeitsplatz.
              </p>
              <p className="text-sm text-terracotta-700 font-medium">→ Nächster Start: Juli 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ink/10">
            {kiKurse.map((kurs) => (
              <KiKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>

          {/* Firmenkurs */}
          <div className="mt-16 pt-12 border-t-2 border-ink/15">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 mb-4 block">Firmenkurs · Ab 5 Personen</span>
                <h3 className="font-serif text-4xl mb-5 leading-tight">KI für Teams einführen</h3>
                <p className="text-ink-soft leading-relaxed font-serif text-lg mb-6 max-w-xl">
                  Euer Team arbeitet täglich mit Daten, Texten und Prozessen. KI kann dabei entlasten. Dieser Tageskurs bringt alle auf denselben Stand — massgeschneidert auf eure Branche und Tools.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                  <span className="flex items-center gap-2"><span className="text-terracotta-500">›</span> Auf euren Alltag zugeschnitten</span>
                  <span className="flex items-center gap-2"><span className="text-terracotta-500">›</span> Datenschutz & Spielregeln</span>
                  <span className="flex items-center gap-2"><span className="text-terracotta-500">›</span> Direkt anwendbar</span>
                </div>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-ink/15 lg:pl-10">
                <p className="text-xs uppercase tracking-widest text-ink-muted mb-2">Ganztag · auf Anfrage</p>
                <p className="font-serif text-5xl text-ink mb-1">CHF 1'800</p>
                <p className="text-sm text-ink-muted mb-6">/ Gruppe</p>
                <Link href="#kontakt" className="btn-accent py-4 px-8">Anfragen →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KOMMUNIKATION ─── */}
      <section id="kommunikation" className="bg-plum-50 py-24 sm:py-32 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 pb-8 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-plum-600 mb-6 block">Bildung · Zwei</span>
              <h2 className="font-serif text-6xl sm:text-7xl leading-[0.95] tracking-tight">
                Kommunikation <br /><span className="italic text-plum-500">& Auftreten.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-lg text-ink-soft leading-relaxed font-serif mb-6">
                Präsenz. Drei Tageskurse für mehr Wirkung, Klarheit und Verbindung.
              </p>
              <p className="text-sm text-plum-600 font-medium">→ Auch als Inhouse-Training</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ink/10">
            {kommKurse.map((kurs) => (
              <KommKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BERATUNG & NEW WORK ─── */}
      <section id="beratung" className="bg-sage-50 py-24 sm:py-32 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 pb-8 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600 mb-6 block">Beratung · Drei</span>
              <h2 className="font-serif text-6xl sm:text-7xl leading-[0.95] tracking-tight">
                Beratung <br /><span className="italic text-sage-500">& New Work.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-lg text-ink-soft leading-relaxed font-serif mb-6">
                Für Organisationen, die Future Skills leben wollen. Vier Stufen, ein Weg.
              </p>
              <p className="text-sm text-sage-600 font-medium">→ 4 freie Slots pro Monat</p>
            </div>
          </div>

          {/* Stufen */}
          <div className="space-y-0 border-t border-ink/10">
            {[
              { stufe: 'Stufe 01', titel: 'Erstgespräch', untertitel: 'Wir hören zu, verstehen eure Situation und zeigen, was möglich ist. Ein offenes Gespräch auf Augenhöhe.', preis: 'kostenlos', preisDetail: '4 Slots / Monat', cta: 'Gespräch anfragen', highlight: true },
              { stufe: 'Stufe 02', titel: 'KI-Readiness Check', untertitel: 'Wo steht euer Unternehmen beim Thema KI? In einem halben Tag analysieren wir eure Ausgangslage und liefern einen konkreten Aktionsplan.', preis: 'CHF 900', preisDetail: 'Halbtag', cta: 'Check buchen' },
              { stufe: 'Stufe 03', titel: 'Future Skills Diagnose', untertitel: 'Wo steht eure Organisation in allen vier Kompetenzbereichen? In einem eintägigen Workshop analysieren wir gemeinsam.', preis: 'CHF 1\'600', preisDetail: 'Ganztag', cta: 'Diagnose anfragen' },
            ].map(({ stufe, titel, untertitel, preis, preisDetail, cta, highlight }) => (
              <div key={titel} className={`grid lg:grid-cols-12 gap-8 py-12 border-b border-ink/10 ${highlight ? 'bg-sage-100/50' : ''} ${highlight ? '-mx-6 px-6' : ''}`}>
                <div className="lg:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">{stufe}</span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-serif text-3xl mb-3 leading-tight">{titel}</h3>
                  <p className="text-ink-soft leading-relaxed font-serif max-w-xl">{untertitel}</p>
                </div>
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4">
                  <div className="lg:text-right">
                    <p className="font-serif text-3xl text-ink">{preis}</p>
                    <p className="text-sm text-ink-muted">{preisDetail}</p>
                  </div>
                  <Link href="#kontakt" className="btn-outline text-sm py-2">{cta} →</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Stufe 4: Massnahmen */}
          <div className="mt-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600 mb-6 block">Stufe 04 · Massnahmen</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-ink/10">
              {[
                { titel: 'KI in Geschäftsprozessen', text: 'KI-Tools in bestehende Abläufe integrieren, Automatisierungspotenziale nutzen und Teams befähigen.' },
                { titel: 'New Work', text: 'OKRs einführen, Lohnmodelle überdenken, agile Strukturen etablieren — gelebt in der Organisation.' },
                { titel: 'Inhouse-Trainings', text: 'Massgeschneidert auf eure Prozesse, Tools und Branche — KI, Kommunikation und Future Skills.' },
              ].map(({ titel, text }) => (
                <div key={titel} className="border-b sm:border-b-0 sm:border-r border-ink/10 last:border-r-0 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                  <h4 className="font-serif text-2xl mb-3 leading-tight">{titel}</h4>
                  <p className="text-sm text-ink-soft leading-relaxed font-serif">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueber-uns" className="bg-paper py-24 sm:py-32 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <span className="eyebrow block mb-6">Über SmartTalk</span>
              <h2 className="font-serif text-5xl sm:text-6xl leading-[1.02] tracking-tight">
                Das Team <br /><span className="italic">hinter SmartTalk.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl font-serif">
                Gegründet 2016. Rund 100 Menschen in Kursleitung, Administration, Marketing und Geschäftsleitung. Alle vereint durch eine Haltung: Kompetenz wächst, wenn Menschen wachsen dürfen.
              </p>
            </div>
          </div>

          {/* Fakten als horizontale Linie */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-y border-ink/15 mb-16">
            {[
              { zahl: '2016', label: 'Gegründet' },
              { zahl: '100+', label: 'Mitarbeitende' },
              { zahl: '10 Jahre', label: 'Agile Führung' },
              { zahl: 'CH', label: 'Zentralschweiz' },
            ].map(({ zahl, label }) => (
              <div key={label} className="py-8 sm:py-10 px-4 border-r last:border-r-0 sm:[&:nth-child(2)]:border-r border-ink/15 [&:nth-child(2)]:border-b sm:[&:nth-child(2)]:border-b-0 [&:nth-child(1)]:border-b sm:[&:nth-child(1)]:border-b-0">
                <p className="font-serif text-4xl mb-1">{zahl}</p>
                <p className="text-xs uppercase tracking-widest text-ink-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-ink/10">
            {[
              { slug: 'florian', name: 'Florian', rolle: 'Inhaber & Geschäftsleiter', accent: 'terracotta', bio: 'Wirtschaftsinformatiker und Informatiker mit Leidenschaft für Prozessoptimierung. Baut SmartTalk seit 2016 agil auf.', tags: ['KI & Prozesse', 'New Work', 'Führung'] },
              { slug: 'jeannine', name: 'Jeannine', rolle: 'Mitglied der Geschäftsleitung', accent: 'plum', bio: 'Bildungsdesignerin, Lerntherapeutin und Dozentin. Gestaltet Lernerfahrungen, die wirklich wirken.', tags: ['Bildungsdesign', 'KI', 'Lerntherapie'] },
              { slug: 'chris', name: 'Chris', rolle: 'Marketing & Teamentwicklung', accent: 'sage', bio: 'Spezialist für Teamentwicklung und Menschlichkeit in der Führung. Setzt KI gezielt im Marketing ein.', tags: ['Teams', 'Marketing', 'New Work'] },
              { slug: 'ruth', name: 'Ruth', rolle: 'People & HR', accent: 'ink', bio: 'Begleitet das SmartTalk-Team. Durch Partizipation sorgt sie dafür, dass das Team wächst und zusammenwächst.', tags: ['HR', 'Partizipation', 'KI im Alltag'] },
            ].map(({ slug, name, rolle, accent, bio, tags }) => {
              const accentText: Record<string, string> = {
                terracotta: 'text-terracotta-600',
                plum: 'text-plum-600',
                sage: 'text-sage-600',
                ink: 'text-ink',
              }
              return (
                <div key={slug} className="border-b sm:border-b-0 lg:border-r border-ink/10 last:border-r-0 py-6 sm:py-8 sm:px-6 first:sm:pl-0">
                  <div className="aspect-[4/5] w-full bg-paper-200 mb-5 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/team-${slug}.jpg`} alt={name} className="w-full h-full object-cover object-top grayscale" />
                  </div>
                  <h3 className="font-serif text-2xl mb-1">{name}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${accentText[accent]}`}>{rolle}</p>
                  <p className="text-sm text-ink-soft leading-relaxed font-serif mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 border border-ink/15 rounded-full text-ink-muted">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 pt-12 border-t border-ink/15">
            <p className="font-serif text-2xl text-ink leading-snug max-w-3xl italic">
              „Wir leben, was wir lehren. SmartTalk arbeitet agil, nutzt KI im Alltag und glaubt daran, dass Unternehmen dann stark sind, wenn Mitarbeitende wachsen dürfen."
            </p>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="bg-paper-200 py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 pb-8 border-b border-ink/15">
            <div className="lg:col-span-6">
              <span className="eyebrow block mb-6">Kontakt</span>
              <h2 className="font-serif text-5xl sm:text-6xl leading-[1.02] tracking-tight">
                Wir freuen uns auf <br /><span className="italic">den Austausch.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-lg text-ink-soft leading-relaxed font-serif mb-6">
                Ob Kursfragen, Inhouse-Anfragen, Erstgespräch Beratung oder einfach ein erstes Hallo — jede Nachricht ist willkommen.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:jeannine.germann@smarttalk.ch" className="block text-ink hover:text-terracotta-500 transition-colors font-medium underline underline-offset-4">
                  jeannine.germann@smarttalk.ch
                </a>
                <p className="text-ink-muted">SmartTalk · Zentralschweiz</p>
              </div>
            </div>
          </div>

          <div className="bg-paper p-8 sm:p-12 border border-ink/10">
            <KontaktFormular />
          </div>
        </div>
      </section>
    </>
  )
}
