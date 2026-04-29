"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ScanPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/garment/0001");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#2c2a26] relative overflow-hidden">
      <header className="px-8 pt-14 flex items-center justify-between">
        <Link href="/" className="text-base font-medium text-[#f5eddd]">
          Cancel
        </Link>
        <p className="text-sm font-medium text-[#a89a7e]">Reading</p>
        <div className="bg-[#3d3b36] rounded-full px-4 py-2 flex items-center gap-2">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#c5a56f]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[11px] font-bold tracking-[1.5px] text-[#f5eddd]">SCANNING</span>
        </div>
      </header>

      <div className="flex items-center justify-center mt-32">
        <div className="relative w-[280px] h-[280px]">
          {[280, 220, 160, 110, 60].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-[#7a6f5c]"
              style={{
                width: size,
                height: size,
                left: (280 - size) / 2,
                top: (280 - size) / 2,
                opacity: 0.15 + i * 0.1,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.15 + i * 0.1, 0.25 + i * 0.1, 0.15 + i * 0.1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          <motion.div
            className="absolute rounded-full bg-[#c5a56f]/20"
            style={{ width: 60, height: 60, left: 110, top: 110 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute rounded-full bg-[#c5a56f]/40"
            style={{ width: 44, height: 44, left: 118, top: 118 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
          />
          <motion.div
            className="absolute rounded-full bg-[#d9633b]"
            style={{ width: 28, height: 28, left: 126, top: 126 }}
          />
          <div
            className="absolute bg-white rounded-sm"
            style={{ width: 14, height: 8, left: 133, top: 136 }}
          />
        </div>
      </div>

      <div className="px-8 mt-24">
        <motion.h1
          className="text-[32px] font-bold text-[#f5eddd] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hold your phone close
        </motion.h1>
        <motion.div
          className="mt-4 text-base text-[#a89a7e] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p>Move slowly across the garment tag.</p>
          <p>We will read the chain in just a moment.</p>
        </motion.div>
      </div>

      <motion.div
        className="mx-8 mt-10 bg-[#3d3b36] rounded-[20px] p-5 flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-12 h-12 rounded-full bg-[#4a4840] flex items-center justify-center">
          <span className="text-[22px] font-bold text-[#c5a56f]">?</span>
        </div>
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] text-[#a89a7e]">TIP</p>
          <p className="text-[13px] text-[#f5eddd] mt-0.5">Tag is usually inside the back collar.</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-2 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/garment/0001/compose" className="text-[15px] font-semibold text-[#c5a56f]">
          No tag? Add manually
        </Link>
        <span className="text-[15px] font-bold text-[#c5a56f]">→</span>
      </motion.div>
    </div>
  );
}
