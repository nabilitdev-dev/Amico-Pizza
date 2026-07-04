import Link from "next/link";
import { Pizza } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-4 pt-16 text-center">
      <span className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
        <Pizza className="size-8" />
      </span>
      <h1 className="mt-6 font-display text-6xl font-semibold tracking-tight sm:text-7xl">
        404
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground text-pretty">
        Diese Seite ist leider nicht mehr im Ofen. Zurück zur Startseite –
        da wartet frische Pizza.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8")}
      >
        Zur Startseite
      </Link>
    </section>
  );
}
