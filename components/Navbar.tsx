"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Bike, Menu, Phone, Pizza, X } from "lucide-react";
import { navigation, site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  useEffect(() => {
    setScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const current = pathname?.replace(/\/+$/, "") || "/";
  const isHome = current === "/";
  const overlay = isHome && !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled || open
            ? "border-border bg-background/85 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Hauptnavigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        >
          <Link
            href="/"
            aria-label="Amico Pizza – Startseite"
            className="flex items-center gap-2.5"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-white shadow-md shadow-primary/30">
              <Pizza className="size-5" />
            </span>
            <span
              className={cn(
                "font-display text-xl font-bold tracking-tight whitespace-nowrap",
                overlay ? "text-white" : "text-foreground",
              )}
            >
              Amico <span className="text-gold italic">Pizza</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = current === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? overlay
                        ? "text-white"
                        : "text-foreground"
                      : overlay
                        ? "text-white/70 hover:text-white"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={site.phone.href}
              aria-label="Jetzt anrufen"
              className={cn(
                "hidden size-10 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition-colors sm:inline-flex",
                overlay
                  ? "border-white/25 bg-white/10 text-white hover:text-gold"
                  : "border-border bg-card/60 text-foreground hover:border-gold/60 hover:text-gold",
              )}
            >
              <Phone className="size-4.5" />
            </a>
            <a
              href={site.lieferandoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
            >
              <Bike />
              <span className="hidden lg:inline">Jetzt bestellen</span>
              <span className="lg:hidden">Bestellen</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className={cn(
                "inline-flex size-10 cursor-pointer items-center justify-center rounded-full border transition-colors lg:hidden",
                overlay
                  ? "border-white/25 bg-white/10 text-white backdrop-blur-md"
                  : "border-border bg-card text-foreground",
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-1 border-t border-border px-4 pt-3 pb-6 sm:px-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base font-semibold transition-colors",
                        current === item.href
                          ? "bg-gold/10 text-gold"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href={site.lieferandoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "mt-3 w-full",
                  )}
                >
                  <Bike /> Jetzt über Lieferando bestellen
                </a>
                <a
                  href={site.phone.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "mt-2 w-full",
                  )}
                >
                  <Phone /> {site.phone.display}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
