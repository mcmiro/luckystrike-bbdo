'use client';
import Typography from '@/components/ui/typography';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="bg-spin min-h-screen">
        <div className="flex flex-col container mx-auto pt-[80px] max-w-[960px] text-white">
          <Typography variant="h1" weight="bold" className="uppercase">
            Impressum
          </Typography>
          <div>
            <Typography variant="md" className="pt-[20px]">
              <strong>Firma: </strong> British American Tobacco (Austria) GmbH{' '}
              <br></br>
              <strong>Rechtsform</strong>: Gesellschaft mit beschränkter Haftung
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Sitz: </strong>Wien<br></br>
              <strong>Geschäftsanschrift: </strong>Dr.-Karl-Lueger-Platz 5, 1010
              Wien
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Telefon: </strong>+43 (0)1/205 12 26-0<br></br>
              <strong>Fax: </strong>+43 (0)1/205 12 26-01<br></br>
              <strong>E-Mail: </strong>austria@bat.com
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>
                Geschäftsführer der British American Tobacco (Austria) GmbH:{' '}
              </strong>
              Markus Bluhm, Stefan Ulreich
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Unternehmensgegenstand:</strong>
              <br></br>
              BAT mit Sitz in London ist ein führendes
              „Multi-Category“-Konsumgüterunternehmen. BAT Austria ist ein
              Tochterunternehmen der BAT Gruppe. Seit 2006 ist BAT Austria mit
              einer Firmenniederlassung in Österreich vertreten und vertreibt
              dort im Rahmen eines „Multi-Category-Ansatzes“ Tabak- &
              Nikotinprodukte. Informierte, erwachsene Konsumentinnen und
              Konsumenten stehen bei BAT Austria im Fokus. BAT Austria handelt
              stets verantwortungsbewusst und auf Grundlage geltender Gesetze
              sowie interner Richtlinien, wie beispielweise der konzernweit
              geltenden Internationalen Marketingprinzipien, die zum Teil über
              die gesetzlichen Vorschriften hinausgehen. Ob es um Jugendschutz,
              Steuerpolitik, Nichtraucherschutz oder den Kampf gegen den
              Schmuggel geht –BAT Austria setzt sich in der heimischen Tabak-
              und Nikotinbranche für eine „Win-win-win-win“- Situation ein, um
              den Interessen von Konsumentinnen und Konsumenten, Trafiken, Staat
              und Herstellern gerecht zu werden.
            </Typography>
          </div>
          <div>
            <Typography variant="md" className="pt-[20px]">
              <strong>Firmenbuchnummer: </strong>FN 272585k
              <br></br>
              <strong>Firmenbuchgericht: </strong>Handelsgericht Wien<br></br>
              <strong>UID-Nummer: </strong>ATU 62219879
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Behörde: </strong>Magistratisches Bezirksamt für den 1.,
              8. Bezirk<br></br>
              <strong>Kammerzugehörigkeit: </strong>Wirtschaftskammer Wien
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              Fachgruppe/Berufsgruppe: Fachgruppe Werbung &
              Marktkommunikation/Werbeagentur Offenlegung der
              Beteiligungsverhältnisse gemäß § 25 Abs 2 MedienG: Weston
              Investment Company limited, Business address: Globe House, 4
              Temple Place, London WC2R 2PG, Gesellschaftsregisteramt für
              England und Wales Nummer: 179244, Informationen laut ECG
            </Typography>
          </div>
          <div className="container mx-auto flex justify-center gap-8 text-sm pt-[174px] pb-12">
            <Link href="/">Home</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/teilnahmebedingungen">Teilnahmebedingungen</Link>
          </div>
        </div>
      </main>
    </>
  );
}
