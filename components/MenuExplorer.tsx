"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Beef,
  CakeSlice,
  CupSoda,
  Drumstick,
  Flame,
  Pizza,
  Salad,
  Sandwich,
  Soup,
  type LucideIcon,
} from "lucide-react";
import { categories, pizzas, pizzaSizes } from "@/data/menu";
import { CategorySection } from "@/components/CategorySection";
import { PizzaTable } from "@/components/PizzaTable";
import { EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  pizza: Pizza,
  salate: Salad,
  pasta: Soup,
  ueberbacken: Flame,
  burger: Sandwich,
  schnitzel: Beef,
  fingerfood: Drumstick,
  desserts: CakeSlice,
  getraenke: CupSoda,
};

const tabs = [
  { id: "pizza", title: "Pizza", count: pizzas.length },
  ...categories.map((category) => ({
    id: category.id,
    title: category.title,
    count: category.items.length,
  })),
];

export function MenuExplorer() {
  const [active, setActive] = useState("pizza");
  const activeCategory = categories.find((category) => category.id === active);

  return (
    <div>
      <div className="z-30 lg:sticky lg:top-24">
        <div
          role="tablist"
          aria-label="Kategorien der Speisekarte"
          className="flex flex-wrap justify-center gap-1.5 rounded-2xl border border-border bg-background/90 p-2 shadow-lg shadow-black/5 backdrop-blur-xl"
        >
          {tabs.map((tab) => {
            const Icon = icons[tab.id];
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {tab.title}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                    isActive ? "bg-white/20" : "bg-muted",
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {active === "pizza" ? (
              <section aria-label="Pizza">
                <p className="mb-6 text-sm text-muted-foreground">
                  Jede Pizza gibt es in vier Größen:{" "}
                  <span className="font-semibold text-foreground">
                    {pizzaSizes.join(", ")}
                  </span>
                  .
                </p>
                <PizzaTable />
              </section>
            ) : (
              activeCategory && <CategorySection category={activeCategory} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
