import type { DayHours } from "@/types";

export const site = {
  name: "Amico Pizza",
  owner: "Mohammad Riaz",
  claim: "Pizza Lieferservice in Neufahrn bei Freising",
  description:
    "Pizza, Pasta, Burger, Salate und vieles mehr. Frisch zubereitet und direkt geliefert.",
  url: "https://www.amicopizzaneufahrn.de",
  phone: {
    display: "08165 4093780",
    href: "tel:+4981654093780",
  },
  email: {
    display: "pizzaamigos786@gmail.com",
    href: "mailto:pizzaamigos786@gmail.com",
  },
  fax: "0800 202 07 702",
  ustId: "DE223444361",
  lieferandoUrl: "https://www.lieferando.de/speisekarte/amico-pizza-1",
  address: {
    street: "Christl-Cranz-Straße 6",
    zip: "85375",
    city: "Neufahrn bei Freising",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Amico%20Pizza%2C%20Christl-Cranz-Stra%C3%9Fe%206%2C%2085375%20Neufahrn%20bei%20Freising",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Amico%20Pizza%2C%20Christl-Cranz-Stra%C3%9Fe%206%2C%2085375%20Neufahrn%20bei%20Freising&output=embed&hl=de",
};

export const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Öffnungszeiten", href: "/oeffnungszeiten" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Standort", href: "/standort" },
];

export const legalNavigation = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export const openingHours: DayHours[] = [
  { day: "Montag", times: [] },
  { day: "Dienstag", times: ["16:00 – 23:59"] },
  { day: "Mittwoch", times: ["00:00 – 03:00", "16:00 – 23:59"] },
  { day: "Donnerstag", times: ["00:00 – 03:00", "16:00 – 23:59"] },
  { day: "Freitag", times: ["00:00 – 03:00", "16:00 – 23:59"] },
  { day: "Samstag", times: ["00:00 – 03:00", "16:00 – 23:59"] },
  { day: "Sonntag", times: ["00:00 – 03:00", "16:00 – 23:59"] },
  { day: "Feiertag", times: ["16:00 – 23:59"], isHoliday: true },
];
