import Link from 'next/link'
import { getKiKurse, getKommKurse } from '@/lib/strapi'
import KiKursCard from '@/components/v3/KiKursCard'
import KommKursCard from '@/components/v3/KommKursCard'
import KontaktFormular from '@/components/KontaktFormular'

export default async function V3HomePage() {
  const [kiKurse, kommKurse] = await Promise.all([getKiKurse(), getKommKurse()])
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-paper pt-20 sm:pt-24 pb-16 sm:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft block mb-8">Future Skills · Zentralschweiz</span>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6 max-w-5xl">
            <span className="text-terracotta-500">Future Skills.</span><br />
            Kompetenz macht <br />den Unterschied.
          </h1>

          <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed font-serif mb-10">
            Wir begleiten Menschen und Organisationen beim Aufbau zentraler Kompetenzen für die heutige Arbeitswelt.
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted mb-4">Hier geht es direkt zu den Angeboten</p>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap mb-12">
            <Link href="/v3#ki-digital" className="btn-v3-accent text-sm py-3 px-6">KI →</Link>
            <Link href="/v3#kommunikation" className="bg-plum-500 text-paper font-medium hover:bg-plum-600 transition-colors text-sm py-3 px-6 inline-block text-center">Kommunikation →</Link>
            <Link href="/v3#beratung" className="bg-sage-500 text-paper font-medium hover:bg-sage-600 transition-colors text-sm py-3 px-6 inline-block text-center">Beratung →</Link>
          </div>

          <div className="border-t border-ink/10 pt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-muted">
            {['Mensch im Zentrum', 'Direkt anwendbar', 'Online & Präsenz', 'Inhouse buchbar', 'Zentralschweiz'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-terracotta-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DER MENSCH IM ZENTRUM ─── */}
      <section className="bg-paper-200 py-20 sm:py-28 px-6 border-y border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft block mb-5">Das Fundament</span>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.02] tracking-tight">Der Mensch im Zentrum.</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl font-serif">
                Wir leben, wachsen und entwickeln uns in vier Kompetenzbereichen — ein Leben lang.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10">
            {[
              { num: '01', name: 'Digitales', sub: 'Digitale Kompetenz & KI', body: 'Digitale Kompetenz, KI-Kenntnisse, digitale Zusammenarbeit, Datenkompetenz.', tags: ['KI & Digital Kurse', 'Beratung'], color: 'terracotta' },
              { num: '02', name: 'Zwischenmenschliches', sub: 'Teamarbeit & Führung', body: 'Rollenmodellierung, Vertrauen aufbauen, Kollaboration, Konfliktfähigkeit.', tags: ['Kommunikation & Führung Kurse', 'New Work Beratung'], color: 'plum' },
              { num: '03', name: 'Selbstmanagement', sub: 'Eigenverantwortung & Resilienz', body: 'Selbstführung, lebenslanges Lernen, Resilienz, Eigenverantwortung.', tags: ['Führen hybrid', 'New Work Beratung'], color: 'sage' },
              { num: '04', name: 'Kognitiv', sub: 'Kritisches Denken & Agilität', body: 'Problemlösung, Planung, geistige Beweglichkeit, Anpassungsfähigkeit.', tags: ['Future Skills Workshop', 'Inhouse auf Anfrage'], color: 'ink' },
            ].map(({ num, name, sub, body, tags, color }) => {
              const c: Record<string, string> = { terracotta: 'text-terracotta-500', plum: 'text-plum-500', sage: 'text-sage-500', ink: 'text-ink' }
              return (
                <div key={num} className="grid grid-cols-12 gap-6 py-8 border-b border-ink/10 items-start">
                  <div className={`col-span-2 sm:col-span-1 font-serif text-2xl ${c[color]}`}>{num}</div>
                  <div className="col-span-10 sm:col-span-3">
                    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${c[color]}`}>{name}</span>
                    <h3 className="font-serif text-xl mt-2 leading-tight">{sub}</h3>
                  </div>
                  <p className="col-span-12 sm:col-span-5 text-ink-soft leading-relaxed sm:pt-5">{body}</p>
                  <div className="col-span-12 sm:col-span-3 flex flex-wrap gap-2 sm:pt-5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-xs text-ink-muted mt-8">
            In Anlehnung an: OECD Skills Outlook 2019 und WEF Future of Jobs Report 2023
          </p>
        </div>
      </section>

      {/* ─── ZITAT ─── */}
      <section className="bg-ink text-paper py-20 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="overflow-hidden aspect-[40/29]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jeannine-v7.jpg" alt="Jeannine Germann bei SmartTalk" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="font-serif text-terracotta-300 text-5xl leading-none mb-4">"</div>
              <p className="font-serif text-2xl sm:text-3xl leading-[1.2] mb-6">
                Ich glaube, dass jeder Mensch das Potenzial hat, mit den richtigen Kompetenzen wirklich vorwärtszukommen. Genau dafür bin ich hier.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-terracotta-400" />
                <div>
                  <p className="text-paper font-medium text-sm">Jeannine Germann</p>
                  <p className="text-paper/60 text-xs">Mitglied der Geschäftsleitung, SmartTalk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KI & DIGITAL ─── */}
      <section id="ki-digital" className="bg-terracotta-50 py-20 sm:py-28 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-12 pb-6 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 mb-4 block">Bildung · KI & Digital</span>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[0.98] tracking-tight">
                KI & <span className="text-terracotta-500">Digital</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-base text-ink-soft leading-relaxed font-serif mb-4">
                Online und Präsenz · drei Kurse vom Einstieg bis zum persönlichen KI-Arbeitsplatz
              </p>
              <p className="text-sm text-terracotta-700 font-medium">→ Nächster Start: Juli 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ink/10 mb-12">
            {kiKurse.map((kurs) => (
              <KiKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>

          {/* KI für Teams Firmenkurs */}
          <div className="bg-ink p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-terracotta-500 text-paper text-xs font-medium px-3 py-1 uppercase tracking-wide">Firmenkurs</span>
                  <span className="bg-paper/10 text-paper text-xs font-medium px-3 py-1">Ab 5 Personen</span>
                </div>
                <h3 className="font-serif text-2xl text-paper mb-3">KI für Teams einführen</h3>
                <p className="text-paper/80 text-sm max-w-xl leading-relaxed font-serif">
                  Euer Team arbeitet täglich mit Daten, Texten und Prozessen. KI kann dabei entlasten. Dieser Tageskurs bringt alle auf denselben Stand: Was ist KI, wie nutzen wir sie sicher, und wo fangen wir an? Massgeschneidert auf eure Branche und Tools.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-xs text-paper/60">
                  <span className="flex items-center gap-1.5"><span className="text-terracotta-400">✓</span> Auf euren Alltag zugeschnitten</span>
                  <span className="flex items-center gap-1.5"><span className="text-terracotta-400">✓</span> Datenschutz & Regeln für das Team</span>
                  <span className="flex items-center gap-1.5"><span className="text-terracotta-400">✓</span> Direkt anwendbare Werkzeuge</span>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-xs text-paper/50 uppercase tracking-wide mb-1">Ganztag · auf Anfrage</div>
                <div className="font-serif text-3xl text-paper">CHF 1'800</div>
                <div className="text-xs text-paper/50 mb-4">/ Gruppe</div>
                <Link href="/v3#kontakt" className="btn-v3-accent text-sm py-3 px-6">Kurs anfragen →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KOMMUNIKATION ─── */}
      <section id="kommunikation" className="bg-plum-50 py-20 sm:py-28 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-12 pb-6 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-plum-600 mb-4 block">Bildung · Kommunikation</span>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[0.98] tracking-tight">
                Kommunikation & <span className="text-plum-500">Auftreten</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-base text-ink-soft leading-relaxed font-serif mb-4">
                Präsenz · 3 Tageskurse für mehr Wirkung, Klarheit und Verbindung
              </p>
              <p className="text-sm text-plum-600 font-medium">→ Auch als Inhouse-Training buchbar</p>
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
      <section id="beratung" className="bg-sage-50 py-20 sm:py-28 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-12 pb-6 border-b border-ink/10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600 mb-4 block">Beratung & New Work</span>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[0.98] tracking-tight">
                Beratung & <span className="text-sage-500">New Work</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-base text-ink-soft leading-relaxed font-serif mb-4">
                Für Organisationen, die Future Skills leben wollen – mit Begleitung, die wirklich etwas bewegt
              </p>
              <p className="text-sm text-sage-600 font-medium">→ 4 freie Slots pro Monat</p>
            </div>
          </div>

          <div className="border-t border-ink/10">
            <div className="grid lg:grid-cols-12 gap-8 py-10 border-b border-ink/10 bg-sage-100/40 -mx-6 px-6">
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">Stufe 01 · Einstieg</span>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl mb-3 leading-tight">Erstgespräch — kostenlos</h3>
                <p className="text-ink-soft leading-relaxed font-serif max-w-xl">
                  Wir hören zu, verstehen eure Situation und zeigen, was möglich ist. Ein offenes Gespräch auf Augenhöhe. <span className="font-medium text-ink">4 freie Slots pro Monat.</span>
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-3">
                <div className="lg:text-right">
                  <p className="font-serif text-2xl text-ink">kostenlos</p>
                  <p className="text-sm text-ink-muted">4 Slots / Monat</p>
                </div>
                <Link href="/v3#kontakt" className="btn-v3-outline text-sm py-2">Gespräch anfragen →</Link>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 py-10 border-b border-ink/10">
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">Stufe 02 · Diagnose</span>
                <span className="block mt-2 text-xs text-sage-700">Sehr gefragt</span>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl mb-3 leading-tight">KI-Readiness Check</h3>
                <p className="text-ink-soft leading-relaxed font-serif max-w-xl mb-4">
                  Wo steht euer Unternehmen beim Thema KI? Was ist sinnvoll, was zu früh, was dringend? In einem halben Tag analysieren wir eure Ausgangslage und liefern einen konkreten Aktionsplan mit klaren nächsten Schritten.
                </p>
                <div className="flex flex-col gap-1 text-xs text-ink-muted">
                  <span className="flex items-center gap-2"><span className="text-sage-500">›</span> KI-Potenziale in euren Prozessen sichtbar machen</span>
                  <span className="flex items-center gap-2"><span className="text-sage-500">›</span> Risiken und Spielregeln klären</span>
                  <span className="flex items-center gap-2"><span className="text-sage-500">›</span> Aktionsplan mit 3 konkreten nächsten Schritten</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-3">
                <div className="lg:text-right">
                  <p className="font-serif text-2xl text-ink">CHF 900</p>
                  <p className="text-sm text-ink-muted">Halbtag · / Unternehmen</p>
                </div>
                <Link href="/v3#kontakt" className="btn-v3-outline text-sm py-2">Check buchen →</Link>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 py-10 border-b border-ink/10">
              <div className="lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">Stufe 03 · Gesamtbild</span>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl mb-3 leading-tight">Future Skills Diagnose</h3>
                <p className="text-ink-soft leading-relaxed font-serif max-w-xl mb-4">
                  Wo steht eure Organisation in allen vier Kompetenzbereichen? In einem eintägigen Workshop analysieren wir gemeinsam Digitales, Kommunikation, Selbstmanagement und kognitives Potenzial. Das Ergebnis ist ein klares Bild eurer Stärken und ein priorisierter Entwicklungsplan.
                </p>
                <div className="flex flex-col gap-1 text-xs text-ink-muted">
                  <span className="flex items-center gap-2"><span className="text-sage-500">›</span> Alle 4 Kompetenzbereiche einschätzen</span>
                  <span className="flex items-center gap-2"><span className="text-sage-500">›</span> Stärken und Entwicklungsfelder sichtbar machen</span>
                  <span className="flex items-center gap-2"><span className="text-sage-500">›</span> Priorisierter Entwicklungsplan als Output</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-3">
                <div className="lg:text-right">
                  <p className="font-serif text-2xl text-ink">CHF 1'600</p>
                  <p className="text-sm text-ink-muted">Ganztag · / Unternehmen</p>
                </div>
                <Link href="/v3#kontakt" className="btn-v3-outline text-sm py-2">Diagnose anfragen →</Link>
              </div>
            </div>
          </div>

          {/* Massnahmen */}
          <div className="mt-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600 mb-6 block">Stufe 04 · Massnahmen: individuell nach Aufwand und Dauer</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-ink/10">
              {[
                { titel: 'KI in Geschäftsprozessen', text: 'KI-Tools in bestehende Abläufe integrieren, Automatisierungspotenziale nutzen und Teams befähigen – mit klaren Prioritäten und messbaren Ergebnissen.' },
                { titel: 'New Work: OKRs & Lohnmodelle', text: 'OKRs einführen, Lohnmodelle überdenken, agile Strukturen etablieren – New Work nicht nur als Konzept, sondern gelebt in der Organisation.' },
                { titel: 'Mitarbeitende schulen', text: 'Inhouse-Trainings zu KI, Kommunikation und Future Skills – massgeschneidert auf eure Prozesse, Tools und Branche. Direkt aus der Bildung in die Beratung.' },
              ].map(({ titel, text }) => (
                <div key={titel} className="border-b sm:border-b-0 sm:border-r border-ink/10 last:border-r-0 py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <h4 className="font-serif text-xl mb-3 leading-tight">{titel}</h4>
                  <p className="text-sm text-ink-soft leading-relaxed font-serif">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inhouse Banner */}
          <div className="bg-ink text-paper p-8 sm:p-10 mt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-300 mb-3 block">Für Teams & Unternehmen</span>
                <h3 className="font-serif text-2xl mb-3">Alle Kurse auch als Inhouse-Training</h3>
                <p className="text-paper/80 text-sm max-w-xl leading-relaxed font-serif">
                  Sämtliche KI- und Kommunikationskurse sind als massgeschneiderte Inhouse-Trainings buchbar. Angepasst an eure Prozesse, Tools und Branche. Teams ab 5 Personen.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-xs text-paper/60">
                  <span className="flex items-center gap-1.5"><span className="text-sage-300">✓</span> KI-Kurse inhouse</span>
                  <span className="flex items-center gap-1.5"><span className="text-sage-300">✓</span> Kommunikationstrainings</span>
                  <span className="flex items-center gap-1.5"><span className="text-sage-300">✓</span> Kombinationspakete möglich</span>
                  <span className="flex items-center gap-1.5"><span className="text-sage-300">✓</span> Ab CHF 1'800 / Gruppe</span>
                </div>
              </div>
              <Link href="/v3#kontakt" className="bg-sage-500 text-paper font-medium hover:bg-sage-600 transition-colors text-sm py-3 px-6 inline-block text-center whitespace-nowrap">
                Inhouse anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueber-uns" className="bg-paper py-20 sm:py-28 px-6 border-b border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 block mb-5">Über SmartTalk</span>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.02] tracking-tight">Das Team hinter SmartTalk</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl font-serif">
                Gegründet 2016. Rund 100 Menschen in Kursleitung, Administration, Marketing und Geschäftsleitung. Alle vereint durch eine Haltung: Kompetenz wächst, wenn Menschen wachsen dürfen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-y border-ink/15 mb-14">
            {[
              { zahl: '2016', label: 'Gegründet' },
              { zahl: '100+', label: 'Mitarbeitende' },
              { zahl: '10 Jahre', label: 'Agile Führung' },
              { zahl: 'Zentralschweiz', label: 'Unser Zuhause' },
            ].map(({ zahl, label }, i) => (
              <div key={label} className={`py-8 px-4 border-ink/15 ${i % 2 === 0 ? 'border-r sm:border-r' : ''} ${i < 3 ? 'sm:border-r' : ''} ${i < 2 ? 'border-b sm:border-b-0' : ''}`}>
                <p className="font-serif text-2xl mb-1">{zahl}</p>
                <p className="text-xs uppercase tracking-widest text-ink-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-ink/10">
            {[
              { slug: 'florian', name: 'Florian', rolle: 'Inhaber & Geschäftsleiter', accent: 'terracotta', bio: 'Wirtschaftsinformatiker und Informatiker mit Leidenschaft für Prozessoptimierung und zeitgemässe Führung. Florian baut SmartTalk seit der Gründung 2016 agil auf, setzt KI täglich in Führung und Betrieb ein und lebt New Work als Haltung.', tags: ['KI & Prozesse', 'New Work', 'Führung'] },
              { slug: 'jeannine', name: 'Jeannine', rolle: 'Mitglied der Geschäftsleitung', accent: 'plum', bio: 'Bildungsdesignerin, Lerntherapeutin und Dozentin. Jeannine gestaltet Lernerfahrungen, die wirklich wirken, unterrichtet KI in der sozialen Arbeit und verantwortet bei SmartTalk die Entwicklung des Future Skills Angebots.', tags: ['Bildungsdesign', 'KI in Sozialer Arbeit', 'Lerntherapie'] },
              { slug: 'chris', name: 'Chris', rolle: 'Marketing & Teamentwicklung', accent: 'sage', bio: 'Spezialist für Teamentwicklung, New Work und Menschlichkeit in der Führung. Chris setzt KI gezielt im Marketing ein und sorgt dafür, dass SmartTalk sichtbar wird und die Botschaft ankommt, bei wem sie ankommen soll.', tags: ['Teamentwicklung', 'KI im Marketing', 'New Work'] },
              { slug: 'ruth', name: 'Ruth', rolle: 'People & HR', accent: 'ink', bio: 'Ruth begleitet das SmartTalk-Team in seiner Entwicklung. Durch Partizipation, Projektarbeiten und echte Beteiligung sorgt sie dafür, dass das Team wächst und zusammenwächst. Auch sie nutzt KI täglich in ihrer Arbeit.', tags: ['HR', 'Partizipation', 'KI im Alltag'] },
            ].map(({ slug, name, rolle, accent, bio, tags }) => {
              const at: Record<string, string> = { terracotta: 'text-terracotta-600', plum: 'text-plum-600', sage: 'text-sage-600', ink: 'text-ink' }
              return (
                <div key={slug} className="border-b sm:border-b-0 lg:border-r border-ink/10 last:border-r-0 py-6 sm:py-8 sm:px-6 first:sm:pl-0">
                  <div className="aspect-[4/5] w-full bg-paper-200 mb-5 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/team-${slug}.jpg`} alt={name} className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="font-serif text-xl mb-1">{name}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${at[accent]}`}>{rolle}</p>
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

          <div className="mt-14 pt-12 border-t border-ink/15">
            <p className="font-serif text-xl sm:text-2xl text-ink leading-snug max-w-3xl">
              Wir leben, was wir lehren. SmartTalk arbeitet agil, nutzt KI-Tools im Alltag, führt mit OKRs und glaubt daran, dass Unternehmen dann wirklich stark sind, wenn die Mitarbeitenden sich entwickeln können.
            </p>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="bg-paper-200 py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 pb-6 border-b border-ink/15">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 block mb-5">Kontakt</span>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.02] tracking-tight">
                Wir freuen uns über den Austausch.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-6">
              <p className="text-base text-ink-soft leading-relaxed font-serif mb-6">
                Ob Kursfragen, Inhouse-Anfragen, Erstgespräch Beratung oder einfach ein erstes Hallo – jede Nachricht ist willkommen.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:jeannine.germann@smarttalk.ch" className="block text-ink hover:text-terracotta-500 transition-colors font-medium underline underline-offset-4">
                  jeannine.germann@smarttalk.ch
                </a>
                <p className="text-ink-muted">SmartTalk · Zentralschweiz</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-paper p-8 border border-ink/10">
              <KontaktFormular />
            </div>
            <div className="md:col-span-2 space-y-5">
              <div className="bg-terracotta-100 p-6">
                <p className="font-serif text-base text-terracotta-700 mb-1">Schnelle Antwort</p>
                <p className="text-sm text-terracotta-700/80">Wir melden uns innerhalb von zwei Werktagen.</p>
              </div>
              <div className="bg-sage-100 p-6">
                <p className="font-serif text-base text-sage-700 mb-1">Beratungs-Erstgespräch</p>
                <p className="text-sm text-sage-700/80">Kostenlos · 4 freie Slots pro Monat · Jetzt anfragen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
