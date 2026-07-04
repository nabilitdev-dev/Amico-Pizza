import type { NextConfig } from "next";

// Für GitHub Pages wird die Seite unter einem Unterpfad ausgeliefert
// (https://<user>.github.io/Amico-Pizza/). Der basePath wird deshalb NUR beim
// Pages-Build gesetzt (Env-Variable GITHUB_PAGES=true im Workflow). Lokal
// (npm run dev / npm run preview) bleibt die Seite unter "/" erreichbar.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/Amico-Pizza";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? repoBasePath : "",
  // an Client weitergeben, damit asset() public-Bilder korrekt prefixen kann
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBasePath : "",
  },
  images: {
    unoptimized: true,
  },
  // Zugriff auf den Dev-Server (next dev) von Geräten im lokalen Netzwerk (iPad).
  // Bei geänderter IP hier ergänzen.
  allowedDevOrigins: ["192.168.2.211", "192.168.178.*", "192.168.0.*"],
};

export default nextConfig;
