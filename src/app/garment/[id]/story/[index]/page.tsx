"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getStoredGarment } from "@/lib/garmentStore";
import type { Garment } from "@/data/garments";

const cityThemes: Record<string, { borderColor: string; accentColor: string; stampBg: string }> = {
  "New York": { borderColor: "#1a2840", accentColor: "#1a2840", stampBg: "#e8edf5" },
  "Los Angeles": { borderColor: "#a0623e", accentColor: "#a0623e", stampBg: "#f8dcc4" },
  "Boston": { borderColor: "#8b2942", accentColor: "#8b2942", stampBg: "#f5e8ec" },
  "Barcelona": { borderColor: "#c5a56f", accentColor: "#c5a56f", stampBg: "#faf5e8" },
  "London": { borderColor: "#4a5568", accentColor: "#4a5568", stampBg: "#e8ecf0" },
  "Paris": { borderColor: "#7a6f5c", accentColor: "#7a6f5c", stampBg: "#f5f2ed" },
  "Tokyo": { borderColor: "#d9633b", accentColor: "#d9633b", stampBg: "#fdf2ee" },
  "Miami": { borderColor: "#2d8f8f", accentColor: "#2d8f8f", stampBg: "#e8f5f5" },
  "Seoul": { borderColor: "#5c4a7a", accentColor: "#5c4a7a", stampBg: "#f0ecf5" },
  "Berlin": { borderColor: "#3d3d3d", accentColor: "#3d3d3d", stampBg: "#ececec" },
};

const defaultTheme = { borderColor: "#7a6f5c", accentColor: "#a0623e", stampBg: "#faf5e8" };

export default function StoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const garmentId = params.id as string;
  const storyIndex = parseInt(params.index as string, 10);

  const [garment, setGarment] = useState<Garment | undefined>(undefined);

  useEffect(() => {
    const stored = getStoredGarment(garmentId);
    setGarment(stored);
  }, [garmentId]);
  
  if (!garment) {
    return (
      <div className="min-h-screen bg-[#faf5e8] flex items-center justify-center">
        <p className="text-[#7a6f5c]">Loading...</p>
      </div>
    );
  }

  const totalStories = garment.transfers.length;
  const currentStory = garment.transfers[storyIndex];
  const ownerNumber = storyIndex + 1;
  const transfers = garment.transfers;

  if (!currentStory) {
    return (
      <div className="min-h-screen bg-[#faf5e8] flex items-center justify-center">
        <p className="text-[#7a6f5c]">Story not found</p>
      </div>
    );
  }

  const theme = cityThemes[currentStory.city] || defaultTheme;

  const goToStory = (index: number) => {
    if (index >= 0 && index < totalStories) {
      router.push(`/garment/${garmentId}/story/${index}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf5e8]">
      <header className="px-8 pt-14 pb-4 flex items-center justify-between">
        <Link 
          href={`/garment/${garmentId}`} 
          className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center"
        >
          <span className="text-xl text-[#1a1a1a]">←</span>
        </Link>
        <p className="text-sm font-medium text-[#7a6f5c]">
          Story {storyIndex + 1} of {totalStories}
        </p>
        <div className="w-12" />
      </header>

      <div className="px-8">
        {garment.image && (
          <motion.div 
            className="w-full h-48 rounded-2xl overflow-hidden relative mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image 
              src={garment.image} 
              alt={garment.name} 
              fill 
              className="object-cover" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c] mb-2">
            {currentStory.date} · OWNER {String(ownerNumber).padStart(2, "0")} / {String(totalStories).padStart(2, "0")}
          </p>
          <h1 
            className="text-[32px] font-bold leading-tight mb-2"
            style={{ color: theme.accentColor }}
          >
            {currentStory.city}
          </h1>
          <p className="text-base text-[#7a6f5c] mb-6">
            {currentStory.name} · {currentStory.action}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-[28px] p-8"
          style={{ 
            border: `2px solid ${theme.borderColor}`,
            boxShadow: "0 16px 40px rgba(0,0,0,0.08)"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-[#1a1a1a] leading-[32px]">
            "{currentStory.quote}"
          </p>
        </motion.div>

        {currentStory.isCurrent && (
          <motion.div
            className="mt-4 px-4 py-2 rounded-full inline-flex items-center gap-2"
            style={{ backgroundColor: `${theme.accentColor}15` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: theme.accentColor }}
            />
            <span 
              className="text-sm font-medium"
              style={{ color: theme.accentColor }}
            >
              Current holder
            </span>
          </motion.div>
        )}
      </div>

      <section className="px-8 mt-10">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c] mb-4">OTHER STORIES</p>
        <div className="space-y-3">
          {transfers.slice().reverse().map((transfer, i) => {
            const originalIndex = totalStories - 1 - i;
            if (originalIndex === storyIndex) return null;
            return (
              <motion.button
                key={i}
                onClick={() => goToStory(originalIndex)}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#e5dbc4] flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-semibold text-[#1a1a1a]">{transfer.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-[#1a1a1a]">{transfer.name}</p>
                  <p className="text-sm text-[#7a6f5c]">{transfer.city} · {transfer.date}</p>
                </div>
                <span className="text-2xl text-[#a89a7e]">›</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      <div className="px-8 py-8 mt-6 flex justify-between">
        <button
          onClick={() => goToStory(storyIndex - 1)}
          disabled={storyIndex === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-full ${
            storyIndex === 0 
              ? "bg-[#e5dbc4]/50 text-[#a89a7e]" 
              : "bg-white text-[#1a1a1a]"
          }`}
        >
          <span>←</span>
          <span className="font-medium">Earlier</span>
        </button>
        <button
          onClick={() => goToStory(storyIndex + 1)}
          disabled={storyIndex === totalStories - 1}
          className={`flex items-center gap-2 px-5 py-3 rounded-full ${
            storyIndex === totalStories - 1 
              ? "bg-[#e5dbc4]/50 text-[#a89a7e]" 
              : "bg-white text-[#1a1a1a]"
          }`}
        >
          <span className="font-medium">Later</span>
          <span>→</span>
        </button>
      </div>

      <div className="h-8" />
    </div>
  );
}
