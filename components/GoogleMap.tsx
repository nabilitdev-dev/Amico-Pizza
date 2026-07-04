"use client";

import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

export function GoogleMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card sm:aspect-[16/8]">
      {loaded ? (
        <iframe
          src={site.mapsEmbedUrl}
          title={`Google Maps – ${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-muted/70 to-background px-6 text-center">
          <div className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          <span className="relative grid size-14 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
            <MapPin className="size-7" />
          </span>
          <p className="relative font-semibold">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
          <Button size="md" onClick={() => setLoaded(true)} className="relative">
            Karte laden
          </Button>
          <p className="relative max-w-sm text-xs text-muted-foreground">
            Mit dem Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an
            Google übertragen. Details in unserer{" "}
            <a href="/datenschutz" className="font-semibold text-gold hover:text-primary">
              Datenschutzerklärung
            </a>
            .{" "}
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-gold hover:text-primary"
            >
              In Google Maps öffnen
              <ExternalLink className="size-3" />
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
