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
          <div className="max-w-[480px]">
            <Typography variant="md" className="pt-[20px]">
              <strong>Angaben gemäß § 5 TMG</strong>
              <br></br>
              Max Mustermann<br></br>
              Musterstraße 123<br></br>
              12345 Musterstadt
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Kontakt</strong>
              <br></br>
              Telefon: 01234 56789<br></br>
              E-Mail: kontakt@beispielwebsite.de
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Vertreten durch</strong>
              <br></br>
              Max Mustermann
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Registereintrag</strong>
              <br></br>
              Eintragung im Handelsregister. <br></br>
              Registergericht: Amtsgericht<br></br> Musterstadt Registernummer:
              HRB 12345
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Umsatzsteuer-ID</strong>
              <br></br>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a
              Umsatzsteuergesetz:DE123456789
            </Typography>
          </div>
          <div>
            <Typography variant="md" className="pt-[20px]">
              <strong className="uppercase">
                Haftungsausschluss <br></br>(Disclaimer)
              </strong>
              <br></br>
              <strong>Haftung für Inhalte</strong>
              <br></br>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Haftung für Links</strong>
              <br></br>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Urheberrecht</strong>
              <br></br>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Bildnachweise</strong>
              <br></br>
              Die verwendeten Bilder auf dieser Website stammen von folgenden
              Quellen: [Name der Bildquelle/n oder Fotograf/en].
            </Typography>
            <Typography variant="md" className="pt-[20px]">
              <strong>Quelle</strong>
              <br></br>
              Muster-Impressum von anwalt.org
            </Typography>
          </div>
          <div className="container mx-auto flex justify-center gap-8 text-sm pt-[174px] pb-12">
            <Link href="/">Home</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </main>
    </>
  );
}
