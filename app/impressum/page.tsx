import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${site.name}, ${site.address.city} gemäß § 5 DDG.`,
  alternates: { canonical: "/impressum/" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="pb-20">
        <Container className="max-w-3xl space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.name}
              <br />
              Vertretungsberechtigt: {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">Kontakt</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Telefon:{" "}
              <a
                href={site.phone.href}
                className="font-semibold text-gold hover:text-primary"
              >
                {site.phone.display}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={site.email.href}
                className="font-semibold text-gold hover:text-primary"
              >
                {site.email.display}
              </a>
              <br />
              Fax: {site.fax}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              {site.ustId}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.owner}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen (§ 36 Verbraucherstreitbeilegungsgesetz – VSBG).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">
              Haftung für Inhalte
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">
              Haftung für Links
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
              rechtswidrige Inhalte waren nicht erkennbar. Bei Bekanntwerden von
              Rechtsverletzungen entfernen wir derartige Links umgehend.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold">Urheberrecht</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
