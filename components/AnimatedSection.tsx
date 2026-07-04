"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
