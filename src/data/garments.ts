export interface Transfer {
  name: string;
  city: string;
  action: "given" | "thrift" | "resale" | "holding";
  date: string;
  quote: string;
  isCurrent?: boolean;
}

export interface Garment {
  id: string;
  name: string;
  brand: string;
  material: string;
  origin: string;
  totalHolders: number;
  totalCities: number;
  transfers: Transfer[];
}

export const garments: Record<string, Garment> = {
  "0001": {
    id: "0001",
    name: "Columbia University T-Shirt",
    brand: "Champion",
    material: "100% Cotton",
    origin: "Haiti",
    totalHolders: 3,
    totalCities: 1,
    transfers: [
      {
        name: "Luke",
        city: "New York",
        action: "holding",
        date: "March 2025",
        quote:
          "She left it on my chair the morning she moved out. I've washed it twice but haven't worn it, just kept folding it back into the same drawer.",
        isCurrent: true,
      },
      {
        name: "Yuna",
        city: "New York",
        action: "given",
        date: "September 2024",
        quote:
          "Gave this to him on a lazy Sunday. He wore it so much it started to feel like his. Maybe that was the point.",
      },
      {
        name: "A.",
        city: "New York",
        action: "given",
        date: "August 2024",
        quote:
          "They handed these out at orientation, still creased from the packaging. It was too big on me, kept slipping off one shoulder. Gave it to my roommate Yuna on move-in day. Felt right.",
      },
    ],
  },
};

export function getGarment(id: string): Garment | undefined {
  return garments[id];
}
