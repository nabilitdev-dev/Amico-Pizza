"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <span className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "mt-3 font-display font-semibold tracking-tight text-balance",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
