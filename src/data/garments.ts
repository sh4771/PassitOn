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
  image?: string;
}

export const garments: Record<string, Garment> = {
  "0011": {
    id: "0011",
    name: "Red Sox Fitted Hat",
    brand: "'47 Brand",
    material: "Cotton Twill",
    origin: "USA",
    totalHolders: 5,
    totalCities: 3,
    image: "/garment-0011.png",
    transfers: [
      {
        name: "Danny",
        city: "Boston",
        action: "given",
        date: "OCT 2018",
        quote: "Bought this the night they won the Series. The brim is already broken in so don't try to flatten it. Also don't wash it, the sweat stains are part of the deal.",
      },
      {
        name: "Mike",
        city: "Boston",
        action: "given",
        date: "JUN 2021",
        quote: "Danny gave this to me when he moved to Chicago. It runs a little small so wear it slightly back on your head. Perfect for day games when the sun's in your eyes.",
      },
      {
        name: "Chris",
        city: "New York",
        action: "given",
        date: "APR 2024",
        quote: "I wore this to Yankee Stadium a few times. Great conversation starter if you want strangers to yell at you. The curve on the brim is perfect now, don't mess with it.",
      },
      {
        name: "Sam",
        city: "Boston",
        action: "given",
        date: "SEP 2025",
        quote: "Brought it back to Boston. The inside band is a little stretched but it holds fine. Good hat for running errands or watching the game at a bar.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "MAR 2026",
        quote: "Sam gave this to me after I helped him move. I don't really watch baseball but it's a good hat. Fits well with a hoodie.",
        isCurrent: true,
      },
    ],
  },
  "0010": {
    id: "0010",
    name: "Ivory Front Snap Dress",
    brand: "Fleur du Mal",
    material: "Stretch Crepe",
    origin: "Italy",
    totalHolders: 4,
    totalCities: 3,
    image: "/garment-0010.png",
    transfers: [
      {
        name: "Natalie",
        city: "Miami",
        action: "given",
        date: "MAY 2023",
        quote: "The snaps are sturdy but check them before you leave the house. Looks great with bare legs and heels. Dry clean only, don't risk the machine.",
      },
      {
        name: "Ines",
        city: "New York",
        action: "given",
        date: "DEC 2024",
        quote: "Natalie sent this for my birthday. Best worn to dinner or drinks, not an all-day thing. The fabric shows wrinkles if you sit too long. Steam it before wearing.",
      },
      {
        name: "Mia",
        city: "Los Angeles",
        action: "given",
        date: "FEB 2026",
        quote: "The stretch crepe is really comfortable but avoid wearing it in humidity, it clings. Works well with a blazer if you want to dress it down a bit.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "APR 2026",
        quote: "Mia gave this to me at brunch. Haven't worn it yet but it fits perfectly. Saving it for something good.",
        isCurrent: true,
      },
    ],
  },
  "0009": {
    id: "0009",
    name: "Tie-Dye Tote Bag",
    brand: "Alo Yoga",
    material: "Canvas",
    origin: "USA",
    totalHolders: 2,
    totalCities: 2,
    image: "/garment-0009.png",
    transfers: [
      {
        name: "Jade",
        city: "Los Angeles",
        action: "given",
        date: "AUG 2025",
        quote: "Got this as a gift with purchase. Fits a yoga mat, water bottle, and a change of clothes easily. The canvas is thick so it holds shape well. Machine washable, cold water.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "JAN 2026",
        quote: "Jade sent this when I said I was getting back into yoga. Good size for the gym too. The tie-dye hides stains pretty well which is a plus.",
        isCurrent: true,
      },
    ],
  },
  "0008": {
    id: "0008",
    name: "Embroidered Collar Blouse",
    brand: "Zara",
    material: "100% Cotton",
    origin: "Portugal",
    totalHolders: 3,
    totalCities: 2,
    image: "/garment-0008.png",
    transfers: [
      {
        name: "Emma",
        city: "London",
        action: "given",
        date: "JUN 2024",
        quote: "Found this at Oxford Street. The collar is oversized on purpose so don't try to tuck it in. Looks best with high-waisted pants or a midi skirt. Iron on low heat.",
      },
      {
        name: "Clara",
        city: "Paris",
        action: "given",
        date: "SEP 2025",
        quote: "Emma gave this to me when she moved. The buttons are a bit loose on the cuffs so be careful. Really nice for a casual lunch or weekend brunch. Goes well with jeans.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "MAR 2026",
        quote: "Clara put this in my suitcase before I flew home. Didn't notice until I unpacked. It's comfortable, wears well under a sweater in winter.",
        isCurrent: true,
      },
    ],
  },
  "0007": {
    id: "0007",
    name: "Linen Striped Scarf",
    brand: "Zara",
    material: "100% Linen",
    origin: "Spain",
    totalHolders: 2,
    totalCities: 2,
    image: "/garment-0007.png",
    transfers: [
      {
        name: "Sofia",
        city: "Barcelona",
        action: "given",
        date: "MAR 2025",
        quote: "Picked this up in Barcelona. Linen so it wrinkles easily but that's the look. Great for spring and summer, too light for real cold. Tie it loose around your neck or use it as a hair wrap.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "APR 2026",
        quote: "Sofia left this behind when she visited. It's lightweight and goes with most things. Good for adding some color to a plain outfit.",
        isCurrent: true,
      },
    ],
  },
  "0001": {
    id: "0001",
    name: "Columbia T-Shirt",
    brand: "Champion",
    material: "100% Cotton",
    origin: "Haiti",
    totalHolders: 3,
    totalCities: 1,
    image: "/garment-0001.png",
    transfers: [
      {
        name: "A.",
        city: "New York",
        action: "given",
        date: "AUG 2024",
        quote: "Got this at orientation. It runs big, probably meant to be unisex. Good for sleeping or wearing around the house. The cotton is soft but it shrinks a little in the dryer.",
      },
      {
        name: "Yuna",
        city: "New York",
        action: "given",
        date: "SEP 2024",
        quote: "A. gave this to me since it didn't fit her. Works well as a layering piece or just for lounging. The print hasn't cracked even after a lot of washes.",
      },
      {
        name: "Luke",
        city: "New York",
        action: "holding",
        date: "MAR 2025",
        quote: "Yuna left this behind when she moved out. It's broken in nicely now. Haven't worn it much, just been keeping it in the drawer.",
        isCurrent: true,
      },
    ],
  },
};

export function getGarment(id: string): Garment | undefined {
  return garments[id];
}
