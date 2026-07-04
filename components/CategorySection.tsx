"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import type { MenuCategory } from "@/types";
import { MenuCard } from "@/components/MenuCard";
import { stagger } from "@/lib/animations";

export function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <section aria-label={category.title}>
      {category.note && (
        <p className="mb-6 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-gold" />
          {category.note}
        </p>
      )}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
