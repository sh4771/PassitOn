"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function NFCTag() {
  return (
    <div className="relative flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full border border-[#8b9a8b]/30"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [0.6, 1.2, 1.6],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl border border-[#1c1c1a]/5">
          <Image
            src="/tshirt.png"
            alt="Columbia University T-Shirt"
            fill
            sizes="192px"
            className="object-cover object-center"
            priority
          />
        </div>
        <motion.div
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#8b9a8b] rounded-full flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor" fillOpacity="0.3"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" fillOpacity="0.5"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
