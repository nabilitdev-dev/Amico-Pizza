import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/data/site";
import "../styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const ogImage = "/images/og-pizza.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: "Amico Pizza – Pizza Lieferservice in Neufahrn bei Freising",
    template: "%s · Amico Pizza",
  },
  description: site.description,
  keywords: [
    "Pizza",
    "Lieferservice",
    "Neufahrn bei Freising",
    "Pasta",
    "Burger",
    "Amico Pizza",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "Amico Pizza – Pizza Lieferservice in Neufahrn bei Freising",
    description: site.description,
    images: [{ url: ogImage, width: 1200, height: 800, alt: "Frisch gebackene Pizza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amico Pizza – Pizza Lieferservice in Neufahrn bei Freising",
    description: site.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0a08" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${manrope.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
