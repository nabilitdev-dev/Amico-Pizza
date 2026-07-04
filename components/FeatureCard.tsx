"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group rounded-3xl border border-border bg-card/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-black/10 sm:p-6",
        className,
      )}
    >
      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gold/15 group-hover:text-gold">
        <Icon className="size-6" />
      </div>
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
