"use client";

import { useEffect, useState } from "react";
import { MoonStar, Sparkles } from "lucide-react";
import { openingHours } from "@/data/site";
import { cn } from "@/lib/utils";

function toMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function isOpenAt(dayIndex: number, minutes: number) {
  return openingHours[dayIndex].times.some((interval) => {
    const [start, end] = interval.split(" – ").map(toMinutes);
    return minutes >= start && minutes <= end;
  });
}

export function OpeningHours() {
  const [today, setToday] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const dayIndex = (now.getDay() + 6) % 7;
      setToday(dayIndex);
      setOpen(isOpenAt(dayIndex, now.getHours() * 60 + now.getMinutes()));
    };
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {open !== null && (
        <p
          className={cn(
            "mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-bold",
            open
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "border-primary/30 bg-primary/10 text-primary-strong",
          )}
        >
          <span className="relative flex size-2.5">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                open ? "bg-emerald-500" : "bg-primary",
              )}
            />
            <span
              className={cn(
                "relative inline-flex size-2.5 rounded-full",
                open ? "bg-emerald-500" : "bg-primary",
              )}
            />
          </span>
          {open ? "Jetzt geöffnet" : "Gerade geschlossen"}
        </p>
      )}

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <ul className="divide-y divide-border">
          {openingHours.map((entry, index) => {
            const isToday = today === index && !entry.isHoliday;
            return (
              <li
                key={entry.day}
                className={cn(
                  "relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4 sm:px-7",
                  isToday && "bg-gold/[0.07]",
                  entry.isHoliday && "bg-muted/40",
                )}
              >
                {isToday && (
                  <span className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-gold" />
                )}
                <p className="flex items-center gap-2.5 font-semibold">
                  {entry.isHoliday && <Sparkles className="size-4 text-gold" />}
                  {entry.day}
                  {isToday && (
                    <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold tracking-wider text-background uppercase">
                      Heute
                    </span>
                  )}
                </p>
                {entry.times.length > 0 ? (
                  <p className="flex flex-wrap gap-2">
                    {entry.times.map((time) => (
                      <span
                        key={time}
                        className="rounded-lg bg-muted px-3 py-1 text-sm font-semibold tabular-nums"
                      >
                        {time}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-primary-strong">Geschlossen</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-5 flex items-start gap-2.5 text-sm text-muted-foreground">
        <MoonStar className="mt-0.5 size-4 shrink-0 text-gold" />
        Nachtschwärmer aufgepasst: Von Mittwoch bis Sonntag sind wir auch nach
        Mitternacht bis 3:00 Uhr für dich da.
      </p>
    </div>
  );
}
