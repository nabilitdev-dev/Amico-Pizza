"use client";

import { Flame } from "lucide-react";
import { pizzas, pizzaSizes } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

export function PizzaTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <table className="hidden w-full text-sm md:table">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-6 py-4 text-left font-bold">Pizza</th>
            {pizzaSizes.map((size) => (
              <th
                key={size}
                className="px-4 py-4 text-right text-xs font-bold tracking-[0.18em] text-gold uppercase lg:px-6"
              >
                {size}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr
              key={pizza.id}
              className="border-b border-border/60 transition-colors last:border-0 hover:bg-gold/5"
            >
              <td className="px-6 py-3.5">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  {pizza.name}
                  {pizza.spicy && (
                    <Flame aria-label="scharf" className="size-4 text-primary" />
                  )}
                </span>
                {pizza.description && (
                  <span className="block text-xs text-muted-foreground">
                    {pizza.description}
                  </span>
                )}
              </td>
              {pizza.prices.map((price, index) => (
                <td
                  key={pizzaSizes[index]}
                  className="px-4 py-3.5 text-right tabular-nums lg:px-6"
                >
                  {price != null ? (
                    formatPrice(price)
                  ) : (
                    <span aria-label="nicht verfügbar" className="text-muted-foreground/50">
                      –
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="divide-y divide-border md:hidden">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="p-5">
            <p className="inline-flex items-center gap-1.5 font-semibold">
              {pizza.name}
              {pizza.spicy && (
                <Flame aria-label="scharf" className="size-4 text-primary" />
              )}
            </p>
            {pizza.description && (
              <p className="mt-0.5 text-xs text-muted-foreground">
                {pizza.description}
              </p>
            )}
            <div className="mt-3 grid grid-cols-2 gap-2">
              {pizza.prices.map(
                (price, index) =>
                  price != null && (
                    <div
                      key={pizzaSizes[index]}
                      className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2"
                    >
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        {pizzaSizes[index]}
                      </span>
                      <span className="text-sm font-semibold tabular-nums">
                        {formatPrice(price)}
                      </span>
                    </div>
                  ),
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-border bg-muted/30 px-5 py-3 text-xs text-muted-foreground sm:px-6">
        <span className="inline-flex items-center gap-1.5">
          <Flame className="size-3.5 text-primary" /> scharf
        </span>
        <span>– = in dieser Größe nicht verfügbar</span>
      </div>
    </div>
  );
}
