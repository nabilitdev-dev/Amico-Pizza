import type { Metadata } from "next";
import { Bike, Car, Navigation, TrainFront } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GoogleMap } from "@/components/GoogleMap";
import { CTA } from "@/components/CTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Standort",
  alternates: { canonical: "/standort/" },
  description:
    "Amico Pizza findest du in der Christl-Cranz-Straße 6, 85375 Neufahrn bei Freising – mit Karte, Parkmöglichkeiten, Liefergebiet und Anfahrt.",
};

const deliveryAreas = [
  "Neufahrn",
  "Eching",
  "Dietersheim",
  "Mintraching",
  "Massenhausen",
  "Giggenhausen",
  "Fürholzen",
];

export default function StandortPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mitten in Neufahrn"
        title="So findest du uns"
        subtitle={`${site.address.street} · ${site.address.zip} ${site.address.city}`}
      />
      <section className="pb-16">
        <Container className="space-y-6">
          <AnimatedSection>
            <GoogleMap />
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-3">
            <AnimatedSection className="rounded-3xl border border-border bg-card p-6 sm:p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-gold/10 text-gold">
                <Car className="size-6" />
              </span>
              <h2 className="mt-4 font-bold">Parkmöglichkeiten</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Direkt an der Christl-Cranz-Straße und in den umliegenden
                Straßen findest du in der Regel kostenlose Parkplätze.
              </p>
            </AnimatedSection>

            <AnimatedSection className="rounded-3xl border border-border bg-card p-6 sm:p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Bike className="size-6" />
              </span>
              <h2 className="mt-4 font-bold">Liefergebiet</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wir liefern in Neufahrn und Umgebung – unter anderem:
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {deliveryAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-semibold"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Dein Ort ist nicht dabei? Ruf kurz an – wir finden eine Lösung.
              </p>
            </AnimatedSection>

            <AnimatedSection className="rounded-3xl border border-border bg-card p-6 sm:p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-gold/10 text-gold">
                <Navigation className="size-6" />
              </span>
              <h2 className="mt-4 font-bold">Anfahrt</h2>
              <ul className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-2.5">
                  <Car className="mt-0.5 size-4 shrink-0 text-gold" />
                  Mit dem Auto: über die A9 oder A92, Ausfahrt Neufahrn,
                  weiter Richtung Ortsmitte.
                </li>
                <li className="flex gap-2.5">
                  <TrainFront className="mt-0.5 size-4 shrink-0 text-gold" />
                  Mit der S-Bahn: Linie S1 bis Neufahrn, von dort weiter
                  Richtung Christl-Cranz-Straße.
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
