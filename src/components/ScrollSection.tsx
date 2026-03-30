"use client";

import { motion } from "framer-motion";
import { NFCTag } from "./NFCTag";
import { CustodyCard } from "./CustodyCard";
import type { Transfer } from "@/data/garments";

interface ScrollSectionProps {
  transfers: Transfer[];
  garmentId: string;
}

export function ScrollSection({ transfers, garmentId }: ScrollSectionProps) {
  const totalHolders = transfers.length;

  return (
    <section className="min-h-screen bg-[#f5f2ed] px-6 py-24">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl font-serif text-[#1c1c1a] leading-relaxed">
            This garment began as <em className="italic text-[#8b9a8b]">a gift</em>.{" "}
            It has passed through <span className="text-[#8b9a8b]">{totalHolders}</span> people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-20 py-8"
        >
          <NFCTag />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#1c1c1a]/40">
              Chain of Custody
            </h2>
            <div className="flex-1 h-px bg-[#1c1c1a]/10" />
          </div>
        </motion.div>

        <div className="space-y-4">
          {transfers.map((transfer, index) => (
            <CustodyCard
              key={`${transfer.name}-${transfer.date}`}
              transfer={transfer}
              index={index}
              totalEntries={transfers.length}
            />
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-[#1c1c1a]/10 flex justify-between items-center text-[11px] font-mono uppercase tracking-wider text-[#1c1c1a]/40"
        >
          <span>PASSITON</span>
          <span>Garment #{garmentId}</span>
        </motion.footer>
      </div>
    </section>
  );
}
