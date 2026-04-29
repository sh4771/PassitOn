"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Transfer } from "@/data/garments";

interface CityTheme {
  borderColor: string;
  accentColor: string;
  stampBg: string;
  stampInner: string;
  cityCode: string;
}

const cityThemes: Record<string, CityTheme> = {
  "New York": {
    borderColor: "#1a2840",
    accentColor: "#1a2840",
    stampBg: "#e8edf5",
    stampInner: "#5c7891",
    cityCode: "NYC",
  },
  "Los Angeles": {
    borderColor: "#a0623e",
    accentColor: "#a0623e",
    stampBg: "#f8dcc4",
    stampInner: "#e08d5c",
    cityCode: "LA",
  },
  "Boston": {
    borderColor: "#8b2942",
    accentColor: "#8b2942",
    stampBg: "#f5e8ec",
    stampInner: "#c45c72",
    cityCode: "BOS",
  },
  "Barcelona": {
    borderColor: "#c5a56f",
    accentColor: "#c5a56f",
    stampBg: "#faf5e8",
    stampInner: "#d9c9a3",
    cityCode: "BCN",
  },
  "London": {
    borderColor: "#4a5568",
    accentColor: "#4a5568",
    stampBg: "#e8ecf0",
    stampInner: "#7a8599",
    cityCode: "LDN",
  },
  "Paris": {
    borderColor: "#7a6f5c",
    accentColor: "#7a6f5c",
    stampBg: "#f5f2ed",
    stampInner: "#a89a7e",
    cityCode: "PAR",
  },
  "Tokyo": {
    borderColor: "#d9633b",
    accentColor: "#d9633b",
    stampBg: "#fdf2ee",
    stampInner: "#f0a88a",
    cityCode: "TKY",
  },
  "Miami": {
    borderColor: "#2d8f8f",
    accentColor: "#2d8f8f",
    stampBg: "#e8f5f5",
    stampInner: "#7ac4c4",
    cityCode: "MIA",
  },
  "Seoul": {
    borderColor: "#5c4a7a",
    accentColor: "#5c4a7a",
    stampBg: "#f0ecf5",
    stampInner: "#9a8ab8",
    cityCode: "SEL",
  },
  "Berlin": {
    borderColor: "#3d3d3d",
    accentColor: "#3d3d3d",
    stampBg: "#ececec",
    stampInner: "#6d6d6d",
    cityCode: "BER",
  },
};

const defaultTheme: CityTheme = {
  borderColor: "#7a6f5c",
  accentColor: "#a0623e",
  stampBg: "#faf5e8",
  stampInner: "#e5dbc4",
  cityCode: "---",
};

interface StoryCardProps {
  transfer: Transfer;
  garmentName: string;
  garmentId: string;
  ownerNumber: number;
  totalOwners: number;
  currentPage: number;
  totalPages: number;
  reverseIndex: number;
  isActive?: boolean;
  offset?: number;
  onClick?: () => void;
}

export function StoryCard({
  transfer,
  garmentName,
  garmentId,
  ownerNumber,
  totalOwners,
  currentPage,
  totalPages,
  reverseIndex,
  isActive = true,
  offset = 0,
  onClick,
}: StoryCardProps) {
  const theme = cityThemes[transfer.city] || defaultTheme;

  return (
    <motion.div
      className="absolute left-8 right-8 bg-white rounded-[28px] overflow-hidden cursor-pointer"
      style={{
        border: `2px solid ${theme.borderColor}`,
        boxShadow: isActive ? "0 16px 40px rgba(0,0,0,0.08)" : "none",
        zIndex: 10 - offset,
      }}
      initial={false}
      animate={{
        y: offset * 20,
        x: offset * 18,
        opacity: 1 - offset * 0.25,
        scale: 1 - offset * 0.03,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
    >
      <div
        className="h-[140px] rounded-[20px] mx-3 mt-3 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: theme.stampBg }}
      >
        <div
          className="w-[100px] h-[100px] bg-white rounded-[4px] flex items-center justify-center relative overflow-hidden"
          style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)" }}
        >
          <div
            className="w-[88px] h-[88px] rounded-[2px] flex flex-col items-center justify-center"
            style={{ backgroundColor: theme.stampBg }}
          >
            <div
              className="w-full h-[40px] flex items-end justify-center pb-2"
              style={{ backgroundColor: theme.stampInner }}
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-3 bg-white/60 rounded-sm" />
                ))}
              </div>
            </div>
            <div
              className="w-full h-[48px] flex items-center justify-center"
              style={{ backgroundColor: theme.stampBg }}
            >
              <span
                className="text-lg font-bold tracking-[2px]"
                style={{ color: theme.accentColor }}
              >
                {theme.cityCode}
              </span>
            </div>
          </div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{
                top: i < 6 ? -4 : "auto",
                bottom: i >= 6 ? -4 : "auto",
                left: `${(i % 6) * 18 + 8}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="p-6 pt-5">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs font-medium tracking-[2.5px] text-[#7a6f5c]">
            {transfer.date.toUpperCase()}
          </p>
          <p className="text-xs font-medium tracking-[2.5px] text-[#7a6f5c]">
            OWNER {String(ownerNumber).padStart(2, "0")} / {String(totalOwners).padStart(2, "0")}
          </p>
        </div>
        
        <p className="text-[11px] tracking-[1.5px] text-[#a89a7e] mb-3">
          {garmentName}
        </p>
        
        <h2
          className="text-[32px] font-bold mb-4"
          style={{ color: theme.accentColor }}
        >
          {transfer.city}
        </h2>
        
        <p className="text-base text-[#1a1a1a] leading-[26px] line-clamp-3 mb-6">
          {transfer.quote}
        </p>
        
        <div className="flex items-center justify-between">
          <Link
            href={`/garment/${garmentId}/story/${reverseIndex}`}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: theme.accentColor }}
            onClick={(e) => e.stopPropagation()}
          >
            Read full story <span className="font-bold">→</span>
          </Link>
          <p className="text-xs text-[#7a6f5c]">
            page {currentPage} / {totalPages}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
