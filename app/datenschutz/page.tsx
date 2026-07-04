import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Informationen zur Verarbeitung personenbezogener Daten auf der Website von ${site.name} gemäß DSGVO.`,
  alternates: { canonical: "/datenschutz/" },
  robots: { index: true, follow: true },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

const linkClass = "font-semibold text-gold hover:text-primary";

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="pb-20">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz
            Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
            Nachfolgend informieren wir Sie gemäß Art. 13 und 14
            Datenschutz-Grundverordnung (DSGVO) über die Verarbeitung Ihrer
            Daten beim Besuch dieser Website.
          </p>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich im Sinne der DSGVO ist:
              <br />
              {site.name} · Vertreten durch: {site.owner}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              Telefon:{" "}
              <a href={site.phone.href} className={linkClass}>
                {site.phone.display}
              </a>
              <br />
              E-Mail:{" "}
              <a href={site.email.href} className={linkClass}>
                {site.email.display}
              </a>
            </p>
            <p>
              Weitere Angaben finden Sie in unserem{" "}
              <Link href="/impressum" className={linkClass}>
                Impressum
              </Link>
              .
            </p>
          </Section>

          <Section title="2. Ihre Rechte als betroffene Person">
            <p>Ihnen stehen hinsichtlich Ihrer Daten folgende Rechte zu:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zudem haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten zu beschweren. Die für uns zuständige
              Behörde ist das Bayerische Landesamt für Datenschutzaufsicht
              (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
          </Section>

          <Section title="3. Zugriffsdaten und Server-Logfiles">
            <p>
              Bei jedem Aufruf dieser Website erhebt unser Hosting-Anbieter
              automatisch Informationen, die Ihr Browser übermittelt, und
              speichert diese in sogenannten Server-Logfiles. Dies sind
              insbesondere:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>anonymisierte bzw. gekürzte IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite / Datei</li>
              <li>verwendeter Browser und Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt auf Grundlage unseres berechtigten
              Interesses am sicheren und stabilen Betrieb der Website (Art. 6
              Abs. 1 lit. f DSGVO). Eine Zusammenführung dieser Daten mit anderen
              Datenquellen oder eine Auswertung zu Werbezwecken findet nicht
              statt.
            </p>
          </Section>

          <Section title="4. Hosting">
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet:
              <br />
              <span className="text-foreground">
                [Name und Anschrift des Hosting-Anbieters eintragen]
              </span>
            </p>
            <p>
              Der Anbieter verarbeitet die vorgenannten Zugriffsdaten in unserem
              Auftrag. Mit dem Anbieter haben wir einen Vertrag zur
              Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen.
            </p>
          </Section>

          <Section title="5. SSL-/TLS-Verschlüsselung">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-
              Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der
              Zeichenfolge „https://" in der Adresszeile Ihres Browsers.
            </p>
          </Section>

          <Section title="6. Schriftarten (lokal gehostet)">
            <p>
              Zur einheitlichen Darstellung von Schriftarten verwenden wir
              lokale Schriften, die beim Aufruf der Website von unserem eigenen
              Server geladen werden. Eine Verbindung zu Servern von Google oder
              anderen Drittanbietern findet dabei{" "}
              <span className="text-foreground">nicht</span> statt; es werden
              hierfür keine personenbezogenen Daten an Dritte übertragen.
            </p>
          </Section>

          <Section title="7. Bilder">
            <p>
              Die auf dieser Website verwendeten Bilder werden auf unserem
              eigenen Server gehostet und beim Seitenaufruf ausschließlich von
              dort geladen. Eine Datenübertragung an externe Bilddienste findet
              nicht statt.
            </p>
          </Section>

          <Section title="8. Google Maps (Einwilligungslösung)">
            <p>
              Auf unserer Standort- und Kontaktseite binden wir Kartenmaterial
              des Dienstes Google Maps ein. Anbieter ist die Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Die Karte wird{" "}
              <span className="text-foreground">
                erst nach Ihrer ausdrücklichen Einwilligung
              </span>{" "}
              geladen: Zunächst sehen Sie nur einen Platzhalter. Klicken Sie auf
              „Karte laden", wird eine Verbindung zu Google hergestellt und Ihre
              IP-Adresse an Google übertragen. Dabei kann es zu einer
              Übermittlung von Daten in die USA kommen. Rechtsgrundlage ist Ihre
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Ihre
              Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die
              Zukunft widerrufen werden, indem Sie die Karte nicht laden.
            </p>
            <p>
              Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </Section>

          <Section title="9. Kontaktaufnahme">
            <p>
              Wenn Sie uns telefonisch oder per E-Mail kontaktieren, werden Ihre
              Angaben zur Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen verarbeitet. Rechtsgrundlage ist unser
              berechtigtes Interesse an der Beantwortung Ihres Anliegens (Art. 6
              Abs. 1 lit. f DSGVO) bzw. – sofern es um die Anbahnung eines
              Vertrags geht – Art. 6 Abs. 1 lit. b DSGVO. Diese Daten löschen
              wir, sobald sie für die Erreichung des Zwecks nicht mehr
              erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </Section>

          <Section title="10. Bestellungen über Lieferando">
            <p>
              Wir bieten auf dieser Website{" "}
              <span className="text-foreground">
                kein eigenes Bestellsystem
              </span>{" "}
              an. Für Online-Bestellungen verlinken wir auf die externe Plattform
              Lieferando (Yourdelivery GmbH). Erst wenn Sie einen entsprechenden
              Link anklicken, verlassen Sie unsere Website und gelangen zu
              Lieferando. Für die dortige Datenverarbeitung ist ausschließlich
              der Plattformbetreiber verantwortlich; es gelten dessen
              Datenschutzbestimmungen und AGB. Durch das bloße Vorhandensein des
              Links werden keine personenbezogenen Daten an Lieferando übertragen.
            </p>
          </Section>

          <Section title="11. Lokale Speicherung Ihrer Designeinstellung">
            <p>
              Damit die von Ihnen gewählte Darstellung (helles oder dunkles
              Design) bei Ihrem nächsten Besuch erhalten bleibt, speichern wir
              diese Einstellung lokal in Ihrem Browser (localStorage). Es handelt
              sich um eine technisch notwendige, funktionale Speicherung, die für
              den von Ihnen ausdrücklich gewünschten Dienst erforderlich ist (§
              25 Abs. 2 Nr. 2 TDDDG); eine Einwilligung ist hierfür nicht
              erforderlich. Es werden dabei keine personenbezogenen Daten an uns
              oder Dritte übermittelt.
            </p>
          </Section>

          <Section title="12. Aktualität und Änderung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die
              Weiterentwicklung unserer Website oder aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung anzupassen.
            </p>
          </Section>
        </Container>
      </section>
    </>
  );
}
