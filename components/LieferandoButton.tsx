import type { VariantProps } from "class-variance-authority";
import { Bike } from "lucide-react";
import { site } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LieferandoButtonProps = VariantProps<typeof buttonVariants> & {
  label?: string;
  className?: string;
};

export function LieferandoButton({
  label = "Jetzt über Lieferando bestellen",
  variant = "primary",
  size = "lg",
  className,
}: LieferandoButtonProps) {
  return (
    <a
      href={site.lieferandoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Bike aria-hidden="true" />
      {label}
      <span className="sr-only"> (öffnet Lieferando in neuem Tab)</span>
    </a>
  );
}
