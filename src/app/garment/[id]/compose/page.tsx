"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ComposePage() {
  const params = useParams();
  const router = useRouter();
  const [story, setStory] = useState("");
  const [year, setYear] = useState("2026");
  const maxChars = 500;

  const handleSave = () => {
    router.push(`/garment/${params.id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="px-8 pt-14 pb-4 flex items-center justify-between">
        <Link href={`/garment/${params.id}`} className="w-12 h-12 rounded-full bg-[#faf5e8] flex items-center justify-center">
          <span className="text-xl text-[#1a1a1a]">←</span>
        </Link>
        <p className="text-lg font-semibold text-[#1a1a1a]">Add your story</p>
        <button 
          onClick={handleSave}
          className="bg-[#d9633b] text-white text-sm font-semibold px-5 py-3 rounded-full"
        >
          Save
        </button>
      </header>

      <div className="px-8 mt-4">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">
          COLUMBIA T-SHIRT · YOUR ENTRY
        </p>
        <h1 className="text-[24px] font-bold text-[#1a1a1a] mt-2">
          What did this piece mean to you?
        </h1>
      </div>

      <motion.div 
        className="mx-8 mt-6 bg-[#faf5e8] border-2 border-[rgba(217,99,59,0.5)] rounded-[22px] p-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[11px] font-medium tracking-[1.5px] text-[#7a6f5c] mb-3">
          OWNER 04 · TODAY · 28 APR 2026
        </p>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value.slice(0, maxChars))}
          placeholder="Write your story here..."
          className="w-full h-[160px] bg-transparent text-base text-[#1a1a1a] leading-relaxed resize-none focus:outline-none placeholder:text-[#a89a7e]"
        />
        
        <div className="h-px bg-[#e5dbc4] my-4" />
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e5dbc4] rounded-full">
              <span className="text-[#7a6f5c]">📷</span>
              <span className="text-xs font-medium text-[#1a1a1a]">Photo</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e5dbc4] rounded-full">
              <span className="text-[#7a6f5c]">📍</span>
              <span className="text-xs font-medium text-[#1a1a1a]">Place</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e5dbc4] rounded-full">
              <span className="text-xs font-semibold text-[#1a1a1a]">{year}</span>
            </button>
          </div>
          <span className="text-xs font-medium text-[#7a6f5c]">
            {story.length} / {maxChars}
          </span>
        </div>
      </motion.div>

      <section className="px-8 mt-8">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">YOUR PREVIOUS ENTRIES</p>
        <p className="text-xs text-[#7a6f5c] mt-1">Only the ones you have added.</p>

        <motion.div 
          className="mt-4 bg-[#faf5e8] rounded-[22px] p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-[11px] font-medium tracking-[1.5px] text-[#7a6f5c]">14 FEB 2026 · OWNER 04</p>
          <p className="text-lg font-semibold text-[#1a1a1a] mt-1">Linen Sundress · Provence</p>
          <p className="text-sm text-[#7a6f5c] mt-2 leading-relaxed line-clamp-2">
            Wore this through July in Aix. Left a wine stain on the hem I never tried to wash out...
          </p>
          <div className="flex gap-2 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e5dbc4] rounded-full">
              <span className="text-xs font-semibold text-[#1a1a1a]">✎ Edit</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[rgba(176,67,42,0.4)] rounded-full">
              <span className="text-xs font-semibold text-[#b0432a]">🗑 Delete</span>
            </button>
          </div>
        </motion.div>
      </section>

      <div className="mx-8 mt-6 p-4 bg-[#faf5e8] border border-[#e5dbc4] rounded-2xl">
        <p className="text-xs font-medium text-[#7a6f5c]">
          Tip · You can edit your entries anytime before passing it on.
        </p>
      </div>

      <div className="h-8" />
    </div>
  );
}
