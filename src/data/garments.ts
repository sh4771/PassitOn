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
  "0002": {
    id: "0002",
    name: "Indigo Wool Coat",
    brand: "Vintage",
    material: "100% Wool",
    origin: "Portugal",
    totalHolders: 7,
    totalCities: 4,
    transfers: [
      {
        name: "Mar",
        city: "Lisbon",
        action: "thrift",
        date: "MAR 2019",
        quote: "Found this at a Lisbon flea market. The shoulders run wide, probably men's sizing originally. Best for layering over thick sweaters. Dry clean only.",
      },
      {
        name: "Theo",
        city: "Porto",
        action: "given",
        date: "NOV 2020",
        quote: "Mar gave this to me when she left Porto. The pockets are deep which is useful. Warm enough for most European winters. The color doesn't fade.",
      },
      {
        name: "Anya",
        city: "Berlin",
        action: "given",
        date: "MAR 2022",
        quote: "Wore this through three Berlin winters. The lining is still intact. Good for temperatures down to about -5C with layers. Store it with cedar to keep moths away.",
        isCurrent: true,
      },
    ],
  },
  "0003": {
    id: "0003",
    name: "Linen Sundress",
    brand: "Handmade",
    material: "100% Linen",
    origin: "France",
    totalHolders: 3,
    totalCities: 2,
    transfers: [
      {
        name: "Claire",
        city: "Lyon",
        action: "given",
        date: "JUN 2022",
        quote: "My grandmother made this in the seventies. The hem stitching is uneven but that's handmade for you. Hand wash in cold water, hang dry. No machine.",
      },
      {
        name: "Mei",
        city: "Provence",
        action: "given",
        date: "JUL 2024",
        quote: "Wore this all through July in Provence. There's a small wine stain on the hem, adds character. Perfect for hot days, the linen breathes really well. Wear it with sandals.",
      },
      {
        name: "You",
        city: "Provence",
        action: "holding",
        date: "FEB 2026",
        quote: "Mei gave this to me at the train station. It's vintage so treat it gently. Saving it for summer.",
        isCurrent: true,
      },
    ],
  },
  "0004": {
    id: "0004",
    name: "Vintage 501s",
    brand: "Levi's",
    material: "100% Cotton Denim",
    origin: "USA",
    totalHolders: 12,
    totalCities: 5,
    transfers: [
      {
        name: "Unknown",
        city: "San Francisco",
        action: "thrift",
        date: "1985",
        quote: "Original owner unknown. Found at a thrift store on Haight Street. The denim is already soft from decades of wear. Don't wash them too often.",
      },
      {
        name: "Kenji",
        city: "Tokyo",
        action: "resale",
        date: "MAR 2020",
        quote: "Got these from a vintage dealer in Shimokitazawa. The fade is natural, not manufactured. Button fly so they take a second to put on. Worth it though. Selvedge denim.",
      },
      {
        name: "Sora",
        city: "Tokyo",
        action: "holding",
        date: "DEC 2024",
        quote: "Kenji gave these to me when they didn't fit him anymore. Had them hemmed but kept the original cuff. They fit best with a slight roll at the ankle.",
        isCurrent: true,
      },
    ],
  },
  "0005": {
    id: "0005",
    name: "Cashmere Cardigan",
    brand: "Loro Piana",
    material: "100% Cashmere",
    origin: "Italy",
    totalHolders: 4,
    totalCities: 3,
    transfers: [
      {
        name: "Elena",
        city: "Milan",
        action: "given",
        date: "DEC 2018",
        quote: "My mother gave me this. Loro Piana cashmere is the real deal. Hand wash only with cashmere shampoo, lay flat to dry. Never hang it or it stretches.",
      },
      {
        name: "Hana",
        city: "Seoul",
        action: "given",
        date: "MAR 2021",
        quote: "Elena gave this to me when I visited. Store it folded, not hung. The buttons are mother of pearl so be gentle. Works as a light jacket in spring or fall.",
      },
      {
        name: "Yuki",
        city: "Tokyo",
        action: "given",
        date: "NOV 2023",
        quote: "Hana passed this on when she moved. Great for wearing at home in the morning. Pill a little under the arms but that's normal for cashmere. Use a cashmere comb.",
      },
      {
        name: "You",
        city: "Tokyo",
        action: "holding",
        date: "JAN 2026",
        quote: "Yuki left this with me. It's really warm for how lightweight it is. I wear it most mornings with coffee.",
        isCurrent: true,
      },
    ],
  },
  "0006": {
    id: "0006",
    name: "Silk Scarf",
    brand: "Hermès",
    material: "100% Silk",
    origin: "France",
    totalHolders: 9,
    totalCities: 6,
    transfers: [
      {
        name: "Margot",
        city: "Paris",
        action: "given",
        date: "1992",
        quote: "Saved up for six months for this. It's a classic Hermès print. Can wear it around your neck, in your hair, or tied on a bag. Roll it, don't fold, to avoid creases.",
      },
      {
        name: "Sophie",
        city: "Lyon",
        action: "given",
        date: "2005",
        quote: "Margot gave this to me at her daughter's wedding. The silk is hand-rolled on the edges. Keep it away from perfume and water. Store in the original box if you have it.",
      },
      {
        name: "Léa",
        city: "Paris",
        action: "holding",
        date: "APR 2024",
        quote: "Found this in my mother's closet after she passed. The edges are frayed but I'm not fixing them. Still wearable, just handle with care.",
        isCurrent: true,
      },
    ],
  },
};

export function getGarment(id: string): Garment | undefined {
  return garments[id];
}
