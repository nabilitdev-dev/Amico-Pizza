"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-md transition-colors hover:border-gold/60 hover:text-gold"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4.5" />
        ) : (
          <Moon className="size-4.5" />
        )
      ) : (
        <span className="size-4.5" />
      )}
    </button>
  );
}
