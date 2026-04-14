"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface DividerProps {
  isColor: boolean;
}

export default function SectionDivider({ isColor }: DividerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Crée un effet de ressort pour que la ligne soit plus fluide
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Ligne de fond (fixe et discrète) */}
      <div className={`absolute w-full h-[1px] ${isColor ? 'bg-stone-100' : 'bg-white/5'}`} />

      {/* Ligne animée (progression du scroll) */}
      <motion.div
        style={{ scaleX }}
        className={`absolute w-full h-[1px] origin-center ${
          isColor ? 'bg-[var(--color-brand-primary)]' : 'bg-white/40'
        }`}
      />

      {/* Symbole Central */}
      <motion.div
        initial={{ rotate: 45, scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className={`relative z-10 w-3 h-3 rotate-45 border-2 ${
          isColor 
            ? 'bg-white border-[var(--color-brand-accent)]' 
            : 'bg-black border-white/40'
        }`}
      />
    </div>
  );
}