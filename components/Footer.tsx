import Link from "next/link";
import { ExternalLink, MapPin, Phone, Pizza } from "lucide-react";
import { legalNavigation, navigation, site } from "@/data/site";
import { Container } from "@/components/Container";
import { LieferandoButton } from "@/components/LieferandoButton";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="border-b border-border bg-gradient-to-br from-primary/[0.07] via-transparent to-gold/[0.07]">
        <Container className="flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Hungrig geworden?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Bestelle jetzt bequem über Lieferando und lass dir dein
              Lieblingsessen direkt nach Hause liefern.
            </p>
          </div>
          <LieferandoButton size="lg" className="w-full shrink-0 sm:w-auto" />
        </Container>
      </div>
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-white">
              <Pizza className="size-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              Amico <span className="text-gold italic">Pizza</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Pizza, Pasta, Burger &amp; mehr – frisch zubereitet und direkt
            geliefert in Neufahrn bei Freising.
          </p>
          <a
            href={site.phone.href}
            className="mt-4 inline-flex items-center gap-2 font-display text-lg font-semibold text-gold transition-colors hover:text-primary"
          >
            <Phone className="size-4.5" />
            {site.phone.display}
          </a>
        </div>

        <nav aria-label="Footer-Navigation">
          <h3 className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Kontakt
          </h3>
          <address className="mt-4 space-y-2.5 text-sm text-muted-foreground not-italic">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" />
              <a
                href={site.phone.href}
                className="transition-colors hover:text-foreground"
              >
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-gold transition-colors hover:text-primary"
              >
                Auf Google Maps öffnen
                <ExternalLink className="size-3.5" />
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Öffnungszeiten
          </h3>
          <dl className="mt-4 space-y-2.5 text-sm">
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
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.address.city}
          </p>
          <nav aria-label="Rechtliches" className="flex items-center gap-4">
            {legalNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
