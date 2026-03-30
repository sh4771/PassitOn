import { notFound } from "next/navigation";
import { getGarment } from "@/data/garments";
import { GarmentPage } from "./GarmentPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const garment = getGarment(id);

  if (!garment) {
    return { title: "Garment Not Found" };
  }

  return {
    title: `PassItOn, ${garment.name}`,
    description: `The story of a ${garment.name}, passed through ${garment.totalHolders} people.`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const garment = getGarment(id);

  if (!garment) {
    notFound();
  }

  return <GarmentPage garment={garment} />;
}
