"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { garments } from "@/data/garments";

const garmentColors: Record<string, string> = {
  "0001": "#75b4e3",
  "0002": "#2d3f5c",
  "0003": "#a89478",
  "0004": "#5c7891",
  "0005": "#a89478",
  "0006": "#c5a56f",
};

const recentlyPassedIds = ["0002", "0003", "0004"];
const yourCollectionIds = ["0007", "0008", "0009", "0010", "0011"];

export default function Home() {
  const recentlyPassed = recentlyPassedIds.map(id => garments[id]).filter(Boolean);
  const yourCollection = yourCollectionIds.map(id => garments[id]).filter(Boolean);

  return (
    <div className="min-h-screen bg-white pb-8">
      <header className="px-8 pt-14 pb-4 flex items-center justify-between">
        <p className="text-sm font-bold tracking-[4px] text-[#1a1a1a]">PASS IT ON</p>
        <div className="w-11 h-11 rounded-full bg-[#c5a56f] flex items-center justify-center">
          <span className="text-white font-bold text-base">V</span>
        </div>
      </header>

      <Link href="/scan">
        <motion.div 
          className="mx-8 bg-[#2c2a26] rounded-[32px] p-8 h-[180px] flex items-center gap-8"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            {[96, 74, 52, 16].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full border border-[#c5a56f]"
                style={{ width: size, height: size, opacity: 1 - i * 0.2 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.8 - i * 0.15, 0.4 - i * 0.1, 0.8 - i * 0.15] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            <div className="w-4 h-4 rounded-full bg-[#c5a56f]" />
          </div>
          <div>
            <p className="text-[#f5eddd] text-[28px] font-semibold mb-2">Tap to read</p>
            <p className="text-[#a89a7e] text-[15px] leading-relaxed">
              Hold your phone near<br />any PASS IT ON tag
            </p>
          </div>
        </motion.div>
      </Link>

      <section className="mt-10 px-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">RECENTLY PASSED</p>
          <button className="text-sm font-medium text-[#a0623e]">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-8 px-8 scrollbar-hide">
          {recentlyPassed.map((item, i) => (
            <Link key={item.id} href={`/garment/${item.id}`}>
              <motion.div
                className="flex-shrink-0 w-[140px] bg-[#faf5e8] rounded-[22px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div 
                  className="h-[120px] mx-3 mt-3 rounded-[14px]"
                  style={{ backgroundColor: garmentColors[item.id] || "#a89478" }}
                />
                <div className="p-4 pt-3">
                  <p className="text-sm font-semibold text-[#1a1a1a] truncate">{item.name}</p>
                  <p className="text-[11px] text-[#7a6f5c] mt-0.5">
                    {item.totalHolders} owners · {item.transfers[item.transfers.length - 1]?.city}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 px-8">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c] mb-4">YOUR COLLECTION</p>
        <div className="space-y-3">
          {yourCollection.map((item, i) => (
            <Link key={item.id} href={`/garment/${item.id}`}>
              <motion.div
                className="flex items-center gap-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {item.image ? (
                  <div className="w-[72px] h-[72px] rounded-[18px] flex-shrink-0 overflow-hidden relative">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>
                ) : (
                  <div 
                    className="w-[72px] h-[72px] rounded-[18px] flex-shrink-0"
                    style={{ backgroundColor: garmentColors[item.id] || "#a89478" }}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-[#1a1a1a]">{item.name}</p>
                  <p className="text-sm text-[#7a6f5c]">
                    {item.transfers.length} stories · {item.transfers[item.transfers.length - 1]?.city}
                  </p>
                  <div className="flex items-center gap-0.5 mt-2">
                    {item.transfers.slice(0, 4).map((_, j) => (
                      <div key={j} className="w-5 h-5 rounded-full bg-[#e5dbc4] border-2 border-white -ml-1 first:ml-0" />
                    ))}
                    {item.transfers.length > 4 && (
                      <span className="text-xs text-[#7a6f5c] ml-1">+{item.transfers.length - 4}</span>
                    )}
                  </div>
                </div>
                <span className="text-2xl text-[#a89a7e]">›</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
