import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { OpeningHours } from "@/components/OpeningHours";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Öffnungszeiten",
  alternates: { canonical: "/oeffnungszeiten/" },
  description:
    "Dienstag bis Sonntag ab 16:00 Uhr, Mittwoch bis Sonntag sogar bis 3:00 Uhr nachts – alle Öffnungszeiten von Amico Pizza in Neufahrn bei Freising.",
};

export default function OeffnungszeitenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Immer für dich da"
        title="Öffnungszeiten"
        subtitle="Frisch, heiß und pünktlich – auch spät am Abend."
      />
      <section className="pb-16">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl">
            <OpeningHours />
          </AnimatedSection>
        </Container>
      </section>
      <CTA />
    </>
  );
}
