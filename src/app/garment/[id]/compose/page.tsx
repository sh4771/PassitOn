"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getStoredGarment, addTransferToGarment } from "@/lib/garmentStore";
import type { Garment } from "@/data/garments";

const suggestedCities = [
  "New York", "Los Angeles", "Boston", "Barcelona", "London", 
  "Paris", "Tokyo", "Miami", "Seoul", "Berlin"
];

export default function ComposePage() {
  const params = useParams();
  const router = useRouter();
  const [story, setStory] = useState("");
  const [city, setCity] = useState("");
  const [year, setYear] = useState("2026");
  const [showCityInput, setShowCityInput] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [garment, setGarment] = useState<Garment | undefined>(undefined);
  const [isSaving, setIsSaving] = useState(false);
  const maxChars = 500;

  useEffect(() => {
    const g = getStoredGarment(params.id as string);
    setGarment(g);
  }, [params.id]);

  const garmentName = garment?.name || "Unknown";
  const ownerNumber = garment ? garment.transfers.length + 1 : 1;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", { 
    day: "2-digit", 
    month: "short", 
    year: "numeric" 
  }).toUpperCase().replace(",", "");

  const handleSave = () => {
    if (!story.trim() || !city.trim()) {
      alert("Please add your story and location.");
      return;
    }

    setIsSaving(true);
    
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dateString = `${monthNames[today.getMonth()]} ${year}`;
    
    addTransferToGarment(params.id as string, {
      name: "You",
      city: city,
      action: "holding",
      date: dateString,
      quote: story,
      isCurrent: true,
    });

    setTimeout(() => {
      router.push(`/garment/${params.id}`);
    }, 500);
  };

  const years = Array.from({ length: 10 }, (_, i) => String(2026 - i));

  return (
    <div className="min-h-screen bg-white pb-8">
      <header className="px-8 pt-14 pb-4 flex items-center justify-between">
        <Link href={`/garment/${params.id}`} className="w-12 h-12 rounded-full bg-[#faf5e8] flex items-center justify-center">
          <span className="text-xl text-[#1a1a1a]">←</span>
        </Link>
        <p className="text-lg font-semibold text-[#1a1a1a]">Add your story</p>
        <button 
          onClick={handleSave}
          disabled={isSaving || !story.trim() || !city.trim()}
          className={`text-white text-sm font-semibold px-5 py-3 rounded-full transition-all ${
            isSaving || !story.trim() || !city.trim()
              ? "bg-[#d9633b]/50"
              : "bg-[#d9633b]"
          }`}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </header>

      <div className="px-8 mt-2">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">
          {garmentName.toUpperCase()} · YOUR ENTRY
        </p>
        <h1 className="text-[24px] font-bold text-[#1a1a1a] mt-2 leading-tight">
          What did this piece mean to you?
        </h1>
      </div>

      <motion.div 
        className="mx-8 mt-6 bg-[#faf5e8] border-2 border-[rgba(217,99,59,0.5)] rounded-[22px] p-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[11px] font-medium tracking-[1.5px] text-[#7a6f5c] mb-3">
          OWNER {String(ownerNumber).padStart(2, "0")} · TODAY · {formattedDate}
        </p>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value.slice(0, maxChars))}
          placeholder="Write your story here..."
          className="w-full h-[180px] bg-transparent text-base text-[#1a1a1a] leading-[26px] resize-none focus:outline-none placeholder:text-[#a89a7e]"
        />
        
        <div className="h-px bg-[#e5dbc4] my-4" />
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border-[1.5px] border-[#e5dbc4] rounded-full">
              <div className="w-4 h-3 bg-[#7a6f5c] rounded-sm relative">
                <div className="w-1.5 h-1 bg-[#7a6f5c] rounded-sm absolute -top-0.5 left-1/2 -translate-x-1/2" />
              </div>
              <span className="text-xs font-medium text-[#1a1a1a]">Photo</span>
            </button>
            <button 
              onClick={() => setShowCityInput(true)}
              className={`flex items-center gap-2 px-3 py-1.5 bg-white border-[1.5px] rounded-full ${
                city ? "border-[#d9633b]" : "border-[#e5dbc4]"
              }`}
            >
              <div className={`w-3 h-3 rounded-full border-2 ${city ? "border-[#d9633b] bg-[#d9633b]" : "border-[#7a6f5c]"}`} />
              <span className={`text-xs font-medium ${city ? "text-[#d9633b]" : "text-[#1a1a1a]"}`}>
                {city || "Place"}
              </span>
            </button>
            <button 
              onClick={() => setShowYearPicker(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border-[1.5px] border-[#e5dbc4] rounded-full"
            >
              <span className="text-xs font-semibold text-[#1a1a1a]">{year}</span>
            </button>
          </div>
          <span className="text-xs font-medium text-[#7a6f5c]">
            {story.length} / {maxChars}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {showCityInput && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCityInput(false)}
          >
            <motion.div
              className="w-full bg-white rounded-t-[28px] p-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-[#e5dbc4] rounded-full mx-auto mb-6" />
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Where are you located?</h3>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city..."
                className="w-full px-4 py-3 bg-[#faf5e8] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#d9633b]/50 mb-4"
                autoFocus
              />
              <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c] mb-3">SUGGESTIONS</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {suggestedCities.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCity(c);
                      setShowCityInput(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      city === c
                        ? "bg-[#d9633b] text-white"
                        : "bg-[#faf5e8] text-[#1a1a1a]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowCityInput(false)}
                className="w-full py-4 bg-[#d9633b] text-white font-semibold rounded-full"
              >
                Confirm
              </button>
            </motion.div>
          </motion.div>
        )}

        {showYearPicker && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowYearPicker(false)}
          >
            <motion.div
              className="w-full bg-white rounded-t-[28px] p-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-[#e5dbc4] rounded-full mx-auto mb-6" />
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">When did you get this?</h3>
              <div className="grid grid-cols-5 gap-2 mb-6">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setYear(y);
                      setShowYearPicker(false);
                    }}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                      year === y
                        ? "bg-[#d9633b] text-white"
                        : "bg-[#faf5e8] text-[#1a1a1a]"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowYearPicker(false)}
                className="w-full py-4 bg-[#d9633b] text-white font-semibold rounded-full"
              >
                Confirm
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="px-8 mt-8">
        <p className="text-xs font-medium tracking-[2px] text-[#7a6f5c]">YOUR PREVIOUS ENTRIES</p>
        <p className="text-xs text-[#7a6f5c] mt-1">Only the ones you have added.</p>

        <motion.div 
          className="mt-4 bg-[#faf5e8] rounded-[22px] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-[11px] font-medium tracking-[1.5px] text-[#7a6f5c]">14 FEB 2026 · OWNER 04</p>
          <p className="text-lg font-semibold text-[#1a1a1a] mt-1">Linen Striped Scarf · Barcelona</p>
          <p className="text-sm text-[#7a6f5c] mt-2 leading-[22px] line-clamp-2">
            Picked this up in Barcelona. Linen so it wrinkles easily but that's the look. Great for spring and summer...
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border-[1.5px] border-[#e5dbc4] rounded-full">
                <div className="w-3 h-0.5 bg-[#1a1a1a] rounded-sm" />
                <span className="text-[13px] font-semibold text-[#1a1a1a]">Edit</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border-[1.5px] border-[rgba(176,67,42,0.4)] rounded-full">
                <div className="w-3.5 h-2 bg-[#b0432a] rounded-sm" />
                <span className="text-[13px] font-semibold text-[#b0432a]">Delete</span>
              </button>
            </div>
            <span className="text-2xl text-[#a89a7e]">›</span>
          </div>
        </motion.div>

        <motion.div 
          className="mt-3 bg-[#faf5e8] rounded-[22px] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[11px] font-medium tracking-[1.5px] text-[#7a6f5c]">02 JAN 2026 · OWNER 03</p>
          <p className="text-lg font-semibold text-[#1a1a1a] mt-1">Embroidered Blouse · Paris</p>
          <p className="text-sm text-[#7a6f5c] mt-2 leading-[22px] line-clamp-2">
            Clara tucked this into my suitcase before I flew home. I wear it when I miss her...
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border-[1.5px] border-[#e5dbc4] rounded-full">
                <div className="w-3 h-0.5 bg-[#1a1a1a] rounded-sm" />
                <span className="text-[13px] font-semibold text-[#1a1a1a]">Edit</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border-[1.5px] border-[rgba(176,67,42,0.4)] rounded-full">
                <div className="w-3.5 h-2 bg-[#b0432a] rounded-sm" />
                <span className="text-[13px] font-semibold text-[#b0432a]">Delete</span>
              </button>
            </div>
            <span className="text-2xl text-[#a89a7e]">›</span>
          </div>
        </motion.div>
      </section>

      <div className="mx-8 mt-6 p-5 bg-[#faf5e8] border border-[#e5dbc4] rounded-2xl">
        <p className="text-xs font-medium text-[#7a6f5c]">
          Tip · You can edit your entries anytime before passing it on.
        </p>
      </div>
    </div>
  );
}
