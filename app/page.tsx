"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeEuro,
  Bike,
  ChefHat,
  Heart,
  Leaf,
  MoonStar,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FeatureCard } from "@/components/FeatureCard";
import { MenuCard } from "@/components/MenuCard";
import { CTA } from "@/components/CTA";
import { asset } from "@/lib/asset";
import { fadeUp, scaleIn, stagger } from "@/lib/animations";

const features = [
  {
    icon: Leaf,
    title: "Frische Zutaten",
    description: "Täglich frisch – vom Teig bis zum Belag.",
  },
  {
    icon: Bike,
    title: "Bequem geliefert",
    description: "Über Lieferando heiß und zuverlässig zu dir nach Hause.",
  },
  {
    icon: UtensilsCrossed,
    title: "Große Auswahl",
    description: "Pizza, Pasta, Burger, Schnitzel und mehr.",
  },
  {
    icon: Award,
    title: "Qualität seit Jahren",
    description: "Dein Amico in Neufahrn – seit Jahren ein Begriff.",
  },
];

const favorites = [
  {
    item: {
      id: "fav-salami",
      name: "Pizza Salami",
      description: "Würzige Salami auf Tomatensauce und Käse – der Klassiker.",
    },
    image:
      "/images/pizza-salami.jpg",
    priceLabel: "ab 9,15 €",
  },
  {
    item: {
      id: "fav-bbq-chicken",
      name: "Pizza BBQ-Chicken",
      description: "Zartes Hähnchen und rauchige BBQ-Sauce.",
    },
    image:
      "/images/pizza-bbq-chicken.jpg",
    priceLabel: "ab 11,45 €",
  },
  {
    item: {
      id: "fav-burger",
      name: "Burger",
      description: "Saftig gegrillt und frisch belegt – vom Hamburger bis zum Amico Burger.",
    },
    image:
      "/images/burger.jpg",
    priceLabel: "ab 8,60 €",
  },
  {
    item: {
      id: "fav-pasta",
      name: "Pasta",
      description: "Al dente serviert – von Bolognese bis Alla Panna.",
    },
    image:
      "/images/pasta.jpg",
    priceLabel: "ab 11,45 €",
  },
  {
    item: {
      id: "fav-lasagne",
      name: "Lasagne",
      description: "Fein geschichtet und goldbraun überbacken.",
    },
    image:
      "/images/lasagne.jpg",
    priceLabel: "10,35 €",
  },
];

const reasons = [
  {
    icon: ChefHat,
    title: "Frisch zubereitet",
    description: "Jedes Gericht wird erst nach deiner Bestellung gemacht – nichts liegt auf Halde.",
  },
  {
    icon: Sparkles,
    title: "Für jeden Geschmack",
    description: "Über 100 Gerichte und Getränke – von klassisch italienisch bis Tex-Mex.",
  },
  {
    icon: MoonStar,
    title: "Bis tief in die Nacht",
    description: "Von Mittwoch bis Sonntag auch nach Mitternacht bis 3:00 Uhr erreichbar.",
  },
  {
    icon: BadgeEuro,
    title: "Faire Preise",
    description: "Ehrliche Portionen zum fairen Preis – auch für die ganze Familie.",
  },
  {
    icon: Heart,
    title: "Mit Liebe gemacht",
    description: "Gastfreundschaft und Rezepte, die man einfach schmeckt.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative z-10 -mt-28 sm:-mt-32">
        <Container>
          <AnimatedSection
            variants={stagger}
            className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Unsere Klassiker"
            title="Unsere beliebtesten Gerichte"
            subtitle="Diese Gerichte gehen immer – frisch zubereitet und direkt zu dir geliefert."
          />
          <AnimatedSection
            variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {favorites.map((favorite) => (
              <MenuCard
                key={favorite.item.id}
                item={favorite.item}
                image={asset(favorite.image)}
                priceLabel={favorite.priceLabel}
              />
            ))}
            <motion.div variants={fadeUp}>
              <Link
                href="/speisekarte"
                className="group flex h-full min-h-64 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-border p-8 text-center transition-all duration-300 hover:border-gold/60 hover:bg-gold/5"
              >
                <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <ArrowRight className="size-5" />
                </span>
                <span>
                  <span className="block font-bold">Die ganze Speisekarte</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Über 100 Gerichte &amp; Getränke entdecken
                  </span>
                </span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-y border-border bg-card/40 py-20 sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Deine Pizzeria in Neufahrn"
              title="Warum Amico Pizza?"
              subtitle="Weil gutes Essen kein Zufall ist – sondern täglich frische Arbeit."
            />
            <AnimatedSection variants={scaleIn} className="mt-10 hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={asset("/images/teig.jpg")}
                  alt="Frischer Pizzateig wird von Hand vorbereitet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection variants={stagger} className="divide-y divide-border">
            {reasons.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex gap-5 py-6 first:pt-0 last:pb-0"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold">
                  <Icon className="size-5.5" />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <CTA />
    </>
  );
}
