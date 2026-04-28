"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Garment } from "@/data/garments";

interface GarmentPageProps {
  garment: Garment;
}

export function GarmentPage({ garment }: GarmentPageProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = garment.transfers.length;

  const nextCard = () => setCurrentCard((prev) => Math.min(prev + 1, totalCards - 1));
  const prevCard = () => setCurrentCard((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-[#faf5e8]">
      <header className="px-8 pt-14 pb-4 flex items-center justify-between">
        <Link href="/" className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
          <span className="text-xl text-[#1a1a1a]">←</span>
        </Link>
        <button className="text-xl text-[#1a1a1a] font-bold">⋯</button>
      </header>

      <div className="px-8 flex gap-5">
        {garment.image && (
          <motion.div 
            className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image src={garment.image} alt={garment.name} fill className="object-cover" sizes="80px" />
          </motion.div>
        )}
        <div>
          <motion.h1 
            className="text-[36px] font-bold text-[#1a1a1a] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Their stories
          </motion.h1>
          <motion.p 
            className="text-[13px] font-medium tracking-[2px] text-[#7a6f5c] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {garment.name.toUpperCase()} · CHAIN OF {totalCards}
          </motion.p>
        </div>
      </div>

      <div className="relative mt-8 px-8 h-[340px]" onClick={nextCard}>
        {garment.transfers.slice().reverse().map((transfer, index) => {
          const reverseIndex = totalCards - 1 - index;
          const offset = reverseIndex - currentCard;
          const isActive = reverseIndex === currentCard;
          
          if (offset < 0 || offset > 2) return null;

          return (
            <motion.div
              key={`${transfer.name}-${transfer.date}`}
              className="absolute left-8 right-8 bg-white rounded-[28px] p-8 cursor-pointer"
              style={{
                boxShadow: isActive ? "0 18px 40px rgba(0,0,0,0.12)" : "none",
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
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">{transfer.date.toUpperCase()}</p>
                <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">
                  OWNER {String(totalCards - reverseIndex).padStart(2, "0")} / {String(totalCards).padStart(2, "0")}
                </p>
              </div>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-6">
                {transfer.city}
              </h2>
              <p className="text-base text-[#1a1a1a] leading-[28px] line-clamp-4">
                {transfer.quote}
              </p>
              <div className="flex items-center justify-between mt-8">
                <Link 
                  href={`/garment/${garment.id}/story/${reverseIndex}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#a0623e]"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read full story <span className="font-bold">→</span>
                </Link>
                <p className="text-[13px] text-[#7a6f5c]">
                  page {currentCard + 1} / {totalCards}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <section className="px-8 mt-8">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c] mb-4">THE CHAIN</p>
        <div className="relative">
          <div className="h-0.5 bg-[#e5dbc4] absolute top-[7px] left-4 right-4" />
          <div className="flex justify-between relative">
            {garment.transfers.slice().reverse().map((transfer, i) => {
              const isActive = totalCards - 1 - i === currentCard;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentCard(totalCards - 1 - i)}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    className={`rounded-full ${isActive ? "w-6 h-6 border-2 border-[#d9633b]" : "w-3.5 h-3.5"}`}
                    style={{ backgroundColor: isActive ? "#d9633b" : "#e5dbc4" }}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                  />
                  <span className={`text-xs mt-2 ${isActive ? "font-semibold text-[#1a1a1a]" : "text-[#7a6f5c]"}`}>
                    '{transfer.date.slice(-2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8 mt-10">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Previous hands</h3>
        <div className="space-y-2">
          {garment.transfers.slice().reverse().map((transfer, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#e5dbc4] flex items-center justify-center">
                <span className="text-sm font-semibold text-[#1a1a1a]">{transfer.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-medium text-[#1a1a1a]">{transfer.name} · {transfer.city}</p>
                <p className="text-xs text-[#7a6f5c]">{transfer.date.split(" ")[1] || transfer.date}</p>
              </div>
              <span className="text-2xl text-[#a89a7e]">›</span>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-[#faf5e8] border-t border-[#e5dbc4] p-4">
        <Link
          href={`/garment/${garment.id}/compose`}
          className="flex items-center justify-between bg-[#d9633b] rounded-full px-6 py-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-sm">✎</span>
            </div>
            <span className="text-base font-semibold text-white">Add your story for the next owner</span>
          </div>
          <span className="text-lg font-bold text-white">→</span>
        </Link>
      </div>

      <div className="h-24" />
    </div>
  );
}
