"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { LieferandoButton } from "@/components/LieferandoButton";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f0b08] px-6 py-16 text-center text-white sm:px-16 sm:py-20"
        >
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
              Hunger?
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Jetzt bestellen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70 text-pretty">
              Alle Online-Bestellungen laufen bequem über Lieferando – frisch
              zubereitet und direkt zu dir nach Hause geliefert.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LieferandoButton size="xl" className="w-full sm:w-auto" />
              <a
                href={site.phone.href}
                className={cn(
                  buttonVariants({ variant: "glass", size: "xl" }),
                  "w-full sm:w-auto",
                )}
              >
                <Phone /> {site.phone.display}
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Di – So ab 16:00 Uhr · Montag Ruhetag
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
