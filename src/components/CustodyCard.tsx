"use client";

import { motion } from "framer-motion";
import type { Transfer } from "@/data/garments";

interface CustodyCardProps {
  transfer: Transfer;
  index: number;
  totalEntries: number;
}

export function CustodyCard({ transfer, index, totalEntries }: CustodyCardProps) {
  const entryNumber = totalEntries - index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={`relative ${
        transfer.isCurrent
          ? "bg-[#8b9a8b]/10 border-[#8b9a8b]/30"
          : "bg-white/50 border-white/60 hover:border-white/80 hover:-translate-y-0.5"
      } backdrop-blur-md border rounded-2xl p-6 transition-all duration-300`}
      style={{
        boxShadow: "inset 0 0 0 0.5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono ${
            transfer.isCurrent
              ? "bg-[#8b9a8b] text-white"
              : "bg-[#f5f2ed] border border-[#1c1c1a]/10 text-[#1c1c1a]/60"
          }`}
        >
          {entryNumber}
        </div>

        <div className="flex-1 min-w-0">
          {transfer.isCurrent && (
            <span className="inline-block mb-3 px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#8b9a8b]/20 text-[#8b9a8b] rounded">
              Currently with
            </span>
          )}

          <blockquote className="text-[15px] leading-relaxed text-[#1c1c1a] font-serif mb-4">
            &ldquo;{transfer.quote}&rdquo;
          </blockquote>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#1c1c1a]/50">
            <span>{transfer.name}</span>
            <span className="text-[#1c1c1a]/30">·</span>
            <span>{transfer.city}</span>
            <span className="text-[#1c1c1a]/30">·</span>
            <span className="px-1.5 py-0.5 bg-[#8b9a8b]/10 text-[#8b9a8b] rounded">
              {transfer.action}
            </span>
            <span className="text-[#1c1c1a]/30">·</span>
            <span>{transfer.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
