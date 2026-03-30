"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroAnimationProps {
  totalHolders: number;
  totalCities: number;
  onComplete?: () => void;
}

export function IntroAnimation({
  totalHolders,
}: IntroAnimationProps) {
  const [phase, setPhase] = useState<"intro" | "complete">("intro");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const lines = [
    <>This garment began as <em className="italic text-[#8b9a8b]">a gift</em>.</>,
    <>It has passed through <span className="text-[#8b9a8b]">{totalHolders}</span> people.</>,
  ];

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setPhase("complete");
    }, 3200);

    const scrollIndicatorTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 4500);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(scrollIndicatorTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: phase === "intro" ? 0.4 : 1.2,
              ease: "easeOut"
            }}
            className="fixed inset-0 z-50 bg-[#1a1a1a] flex items-center justify-center px-6"
          >
            <div className="max-w-md text-center space-y-5">
              {lines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.8,
                    ease: "easeOut",
                  }}
                  className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#1c1c1a]/40 text-[10px] font-mono uppercase tracking-widest">
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#1c1c1a]/40"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
