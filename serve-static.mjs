// Serviert den statischen Produktions-Build aus ./out im lokalen Netzwerk.
// Nutzung:  npm run build  &&  npm run serve      (oder:  npm run preview)
// Optional: PORT=3022 node serve-static.mjs
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, normalize, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "out");
const PORT = Number(process.env.PORT) || 3022;
const HOST = "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".map": "application/json; charset=utf-8",
};

async function tryFile(path) {
  try {
    if ((await stat(path)).isFile()) return path;
  } catch {}
  return null;
}

async function resolvePath(urlPath) {
  let p = decodeURIComponent(urlPath.split("?")[0]);
  p = normalize(p).replace(/^([/\\]|\.\.([/\\]|$))+/, "");
  const base = join(ROOT, p);
  // Pfad-Traversal ausschließen: Ziel muss innerhalb von ROOT liegen.
  if (base !== ROOT && !base.startsWith(ROOT + sep)) return null;
  return (
    (await tryFile(base)) ||
    (await tryFile(join(base, "index.html"))) ||
    (await tryFile(`${base}.html`)) ||
    null
  );
}

const server = createServer(async (req, res) => {
  try {
    const file = await resolvePath(req.url || "/");
    if (file) {
      res.writeHead(200, {
        "Content-Type": MIME[extname(file)] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(await readFile(file));
      return;
    }
    const notFound = await tryFile(join(ROOT, "404.html"));
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(notFound ? await readFile(notFound) : "404 – Nicht gefunden");
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("500 – Serverfehler");
    console.error(error);
  }
});

server.listen(PORT, HOST, () => {
  console.log("\n  Amico Pizza – Produktions-Build läuft:");
  console.log(`  → Lokal:    http://localhost:${PORT}/`);
  console.log(`  → Netzwerk: http://192.168.2.211:${PORT}/  (z. B. iPad)\n`);
  console.log("  Beenden mit Strg+C.\n");
});
