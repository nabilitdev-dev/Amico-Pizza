import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { MenuExplorer } from "@/components/MenuExplorer";
import { CTA } from "@/components/CTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Speisekarte",
  alternates: { canonical: "/speisekarte/" },
  description:
    "Pizza in vier Größen, Salate, Pasta, Burger, Schnitzel, Fingerfood, Desserts und Getränke – die komplette Speisekarte von Amico Pizza in Neufahrn bei Freising.",
};

export default function SpeisekartePage() {
  return (
    <>
      <PageHeader
        eyebrow="Amico Pizza"
        title="Unsere Speisekarte"
        subtitle="Alles frisch zubereitet – Pizza in vier Größen von Single bis Party. Alle Preise inkl. MwSt."
      />
      <section className="pb-16">
        <Container>
          <MenuExplorer />
          <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Allergene &amp; Zusatzstoffe:
            </strong>{" "}
            Informationen zu Zusatzstoffen, Allergenen und Zutaten in unseren
            Speisen und Getränken erhältst du gerne telefonisch unter{" "}
            <a
              href={site.phone.href}
              className="font-semibold text-gold hover:text-primary"
            >
              {site.phone.display}
            </a>{" "}
            oder direkt bei uns vor Ort. Alle Preise verstehen sich als
            Endpreise inkl. gesetzlicher MwSt., Getränke zzgl. Pfand.
          </p>
        </Container>
      </section>
      <CTA />
    </>
  );
}
