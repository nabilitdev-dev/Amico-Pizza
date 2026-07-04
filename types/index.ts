export type PizzaPrices = [
  number | null,
  number | null,
  number | null,
  number | null,
];

export interface PizzaItem {
  id: string;
  name: string;
  description?: string;
  spicy?: boolean;
  prices: PizzaPrices;
}

export interface SizeOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  spicy?: boolean;
  price?: number;
  sizes?: SizeOption[];
}

export interface MenuCategory {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface DayHours {
  day: string;
  times: string[];
  isHoliday?: boolean;
}
