"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LieferandoButton } from "@/components/LieferandoButton";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

const HERO_IMAGE = asset("/images/hero-pizza.jpg");

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Frisch gebackene Pizza mit Salami und geschmolzenem Käse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background" />
      <div className="absolute top-1/2 left-1/2 h-[480px] w-[min(90vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[120px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-28 pb-40 text-center sm:px-6"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white uppercase backdrop-blur-md"
        >
          <MapPin className="size-3.5 text-gold" />
          Neufahrn bei Freising
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-5xl leading-[1.04] font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Frische Pizza.
          <br />
          Frische Zutaten.
          <br />
          <span className="text-gold italic">Direkt aus Neufahrn.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/75 text-pretty sm:text-xl"
        >
          Pizza, Pasta, Burger, Schnitzel und vieles mehr – täglich frisch
          zubereitet.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LieferandoButton size="xl" className="w-full sm:w-auto" />
          <Link
            href="/speisekarte"
            className={cn(buttonVariants({ variant: "glass", size: "xl" }), "w-full sm:w-auto")}
          >
            Speisekarte ansehen <ArrowRight />
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/60"
        >
          <Clock className="size-4 text-gold" />
          Di – So ab 16:00 Uhr · Montag Ruhetag
        </motion.p>
      </motion.div>
    </section>
  );
}
