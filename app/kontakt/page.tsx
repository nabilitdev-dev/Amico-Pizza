import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ExternalLink, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GoogleMap } from "@/components/GoogleMap";
import { LieferandoButton } from "@/components/LieferandoButton";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontakt",
  alternates: { canonical: "/kontakt/" },
  description:
    "Amico Pizza in Neufahrn bei Freising erreichen: Telefon 08165 4093780, Christl-Cranz-Straße 6. Bestellungen telefonisch oder über Lieferando.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wir freuen uns auf dich"
        title="Kontakt"
        subtitle="Ruf an oder bestelle direkt über Lieferando – wir sind für dich da."
      />
      <section className="pb-20">
        <Container>
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-primary/10 via-card to-gold/10 p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold">
                    <UtensilsCrossed className="size-6" />
                  </span>
                  <div>
                    <h2 className="font-bold">So bestellst du bei Amico Pizza</h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Bestellungen sind ausschließlich{" "}
                      <span className="font-semibold text-foreground">telefonisch</span>{" "}
                      oder über{" "}
                      <span className="font-semibold text-foreground">Lieferando</span>{" "}
                      möglich.
                    </p>
                  </div>
                </div>
                <LieferandoButton size="lg" className="w-full shrink-0 sm:w-auto" />
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <AnimatedSection className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Phone className="size-6" />
                  </span>
                  <div>
                    <h2 className="font-bold">Telefon</h2>
                    <p className="text-sm text-muted-foreground">
                      Am schnellsten geht&apos;s per Anruf.
                    </p>
                  </div>
                </div>
                <a
                  href={site.phone.href}
                  className="mt-5 block font-display text-3xl font-bold tracking-tight text-gold transition-colors hover:text-primary tabular-nums"
                >
                  {site.phone.display}
                </a>
                <a
                  href={site.phone.href}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "mt-5 w-full",
                  )}
                >
                  <Phone /> Jetzt anrufen
                </a>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold">
                    <Clock className="size-6" />
                  </span>
                  <h2 className="font-bold">Öffnungszeiten</h2>
                </div>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Montag</dt>
                    <dd className="font-semibold text-primary-strong">Ruhetag</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Di – So</dt>
                    <dd className="font-semibold tabular-nums">16:00 – 23:59</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Mi – So (Nacht)</dt>
                    <dd className="font-semibold tabular-nums">00:00 – 03:00</dd>
                  </div>
                </dl>
                <Link
                  href="/oeffnungszeiten"
                  className="mt-4 inline-block text-sm font-semibold text-gold transition-colors hover:text-primary"
                >
                  Alle Zeiten ansehen →
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold">
                    <MapPin className="size-6" />
                  </span>
                  <div>
                    <h2 className="font-bold">Adresse</h2>
                    <p className="text-sm text-muted-foreground">
                      Mitten in Neufahrn – leicht zu finden.
                    </p>
                  </div>
                </div>
                <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </address>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-primary"
                >
                  Route in Google Maps planen
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              <GoogleMap />
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
