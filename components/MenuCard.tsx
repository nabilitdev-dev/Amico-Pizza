"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import type { MenuItem } from "@/types";
import { fadeUp } from "@/lib/animations";
import { cn, formatPrice } from "@/lib/utils";

export function MenuCard({
  item,
  image,
  priceLabel,
  className,
}: {
  item: MenuItem;
  image?: string;
  priceLabel?: string;
  className?: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-2xl hover:shadow-black/15",
        className,
      )}
    >
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {priceLabel && (
            <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3.5 py-1.5 text-sm font-bold backdrop-blur-md tabular-nums">
              {priceLabel}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="flex items-center gap-1.5 font-bold">
            {item.name}
            {item.spicy && (
              <Flame aria-label="scharf" className="size-4 shrink-0 text-primary" />
            )}
          </h3>
          {!image && item.price != null && (
            <span className="shrink-0 font-display text-lg font-semibold text-gold tabular-nums">
              {formatPrice(item.price)}
            </span>
          )}
        </div>

        {item.description && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}

        {item.sizes && (
          <ul className="mt-3 space-y-1.5">
            {item.sizes.map((size) => (
              <li key={size.label} className="flex items-baseline gap-2 text-sm">
                <span className="text-muted-foreground">{size.label}</span>
                <span className="flex-1 self-center border-b border-dotted border-border" />
                <span className="font-semibold tabular-nums">
                  {formatPrice(size.price)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
