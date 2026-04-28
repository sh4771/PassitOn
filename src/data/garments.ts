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
        quote: "Bought this the night they won the World Series. Wore it to every game that summer. The sweat stains are part of the story.",
      },
      {
        name: "Mike",
        city: "Boston",
        action: "given",
        date: "JUN 2021",
        quote: "Danny gave it to me when he moved to Chicago. Said he couldn't take it to Cubs territory.",
      },
      {
        name: "Chris",
        city: "New York",
        action: "given",
        date: "APR 2024",
        quote: "Mike lost a bet and had to give it up. I wear it to Yankee Stadium just to start conversations.",
      },
      {
        name: "Sam",
        city: "Boston",
        action: "given",
        date: "SEP 2025",
        quote: "Chris passed it back to Boston where it belongs. The brim is perfectly curved now.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "MAR 2026",
        quote: "Sam gave it to me after I helped him move. I'm not even a baseball fan but I can't let it go.",
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
        quote: "Bought this for a gallery opening. The buttons caught the light in a way that made strangers stop me.",
      },
      {
        name: "Ines",
        city: "New York",
        action: "given",
        date: "DEC 2024",
        quote: "Natalie sent it to me for my birthday. I wore it to three first dates. Only one of them deserved to see it.",
      },
      {
        name: "Mia",
        city: "Los Angeles",
        action: "given",
        date: "FEB 2026",
        quote: "Ines passed it on when she moved in with someone. Said she needed to let go of her single-girl armor.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "APR 2026",
        quote: "Mia gifted it to me at brunch. Said I looked like I needed something that made me feel powerful.",
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
        quote: "Got this as a gift with purchase after a studio class. It carried my mat, my water, my journal. Everything that mattered.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "JAN 2026",
        quote: "Jade shipped it to me when I said I was getting back into yoga. Still smells faintly like eucalyptus.",
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
        quote: "Found this at the Oxford Street store during a lunch break. The oversized collar felt dramatic in the best way.",
      },
      {
        name: "Clara",
        city: "Paris",
        action: "given",
        date: "SEP 2025",
        quote: "Emma gave it to me when she moved flats. Said it was too romantic for her new minimalist phase.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "MAR 2026",
        quote: "Clara tucked it into my suitcase before I flew home. I wear it when I miss her.",
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
        quote: "Bought this on a whim during a weekend trip. The stripes reminded me of the awnings along La Rambla. Wore it every day that summer.",
      },
      {
        name: "You",
        city: "New York",
        action: "holding",
        date: "APR 2026",
        quote: "Sofia left it behind after visiting. I keep finding her perfume in the fabric.",
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
    transfers: [
      {
        name: "A.",
        city: "New York",
        action: "given",
        date: "AUG 2024",
        quote:
          "They handed these out at orientation, still creased from the packaging. It was too big on me, kept slipping off one shoulder. Gave it to my roommate Yuna on move-in day. Felt right.",
      },
      {
        name: "Yuna",
        city: "New York",
        action: "given",
        date: "SEP 2024",
        quote:
          "Gave this to him on a lazy Sunday. He wore it so much it started to feel like his. Maybe that was the point.",
      },
      {
        name: "Luke",
        city: "New York",
        action: "holding",
        date: "MAR 2025",
        quote:
          "She left it on my chair the morning she moved out. I've washed it twice but haven't worn it, just kept folding it back into the same drawer.",
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
        quote: "Found this at a Lisbon flea market. The shoulders were too wide but I loved the color.",
      },
      {
        name: "Theo",
        city: "Porto",
        action: "given",
        date: "NOV 2020",
        quote: "Mar gave it to me when she moved to Berlin. Said it suited me better.",
      },
      {
        name: "Anya",
        city: "Berlin",
        action: "given",
        date: "MAR 2022",
        quote: "I bought this in a Lisbon flea market in 2019. Wore it through three winters in Berlin, to gallery openings, late nights, one funeral. Passing it on now because I'm moving somewhere warmer.",
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
        quote: "My grandmother made this dress in the seventies. The stitching on the hem is uneven but that's what makes it hers.",
      },
      {
        name: "Mei",
        city: "Provence",
        action: "given",
        date: "JUL 2024",
        quote: "Wore this through July in Aix. Left a wine stain on the hem I never tried to wash out. It felt like part of the dress's story now.",
      },
      {
        name: "You",
        city: "Provence",
        action: "holding",
        date: "FEB 2026",
        quote: "Mei handed it to me at the train station. Said it needed someone who would actually wear it.",
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
        quote: "Original owner unknown. Found at a Haight Street thrift store.",
      },
      {
        name: "Kenji",
        city: "Tokyo",
        action: "resale",
        date: "MAR 2020",
        quote: "Bought these from a vintage dealer in Shimokitazawa. The fade pattern tells a story I'll never know.",
      },
      {
        name: "Sora",
        city: "Tokyo",
        action: "holding",
        date: "DEC 2024",
        quote: "Kenji gave these to me when they no longer fit. I had them hemmed but kept the original selvedge.",
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
        quote: "A gift from my mother on my thirtieth birthday. She said good cashmere lasts forever if you treat it right.",
      },
      {
        name: "Hana",
        city: "Seoul",
        action: "given",
        date: "MAR 2021",
        quote: "Elena gave this to me when I visited Milan. It smelled like her apartment, like coffee and old books.",
      },
      {
        name: "Yuki",
        city: "Tokyo",
        action: "given",
        date: "NOV 2023",
        quote: "Hana passed it to me after she moved somewhere warmer. I wear it every morning while I make tea.",
      },
      {
        name: "You",
        city: "Tokyo",
        action: "holding",
        date: "JAN 2026",
        quote: "Yuki left it with me before she traveled. Said it needed someone to keep it warm.",
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
        quote: "My first real luxury purchase. I was twenty-two and saved for six months.",
      },
      {
        name: "Sophie",
        city: "Lyon",
        action: "given",
        date: "2005",
        quote: "Margot gave this to me at her daughter's wedding. She said every woman needs one truly beautiful thing.",
      },
      {
        name: "Léa",
        city: "Paris",
        action: "holding",
        date: "APR 2024",
        quote: "Found this in my mother's closet after she passed. The edges are frayed but I'll never fix them.",
        isCurrent: true,
      },
    ],
  },
};

export function getGarment(id: string): Garment | undefined {
  return garments[id];
}
