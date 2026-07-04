// Stellt statischen Assets aus /public bei Bedarf den basePath voran.
// Nötig, weil next/image im statischen Export (unoptimized) den basePath NICHT
// automatisch an public-Bilder anhängt. Lokal ist der Präfix leer, beim
// GitHub-Pages-Build ist er "/Amico-Pizza" (siehe next.config.ts).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
