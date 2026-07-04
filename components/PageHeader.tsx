import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/60 to-background pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="absolute -top-32 right-0 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -top-20 left-1/4 size-64 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />
        {children}
      </Container>
    </section>
  );
}
