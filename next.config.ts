import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Erlaubt den Zugriff auf den Dev-Server (next dev) von anderen Geräten im
  // lokalen Netzwerk (z. B. iPad). Ohne diesen Eintrag blockiert Next.js 16
  // Cross-Origin-Anfragen an interne Dev-Ressourcen (HMR, /_next/*).
  // Bei geänderter IP hier ergänzen.
  allowedDevOrigins: ["192.168.2.211", "192.168.178.*", "192.168.0.*"],
};

export default nextConfig;
