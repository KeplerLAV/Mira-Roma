"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const xText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <div 
      ref={ref} 
      className="relative py-48 flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* --- EFFETS DE FOND (SOMBRE & ROUGE) --- */}
      
      {/* Orbes rouges dissimulés (Blur Braise) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ opacity: opacityBlur }}
          className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-primary)] rounded-full blur-[120px] mix-blend-screen opacity-30" 
        />
        <motion.div 
          style={{ opacity: opacityBlur }}
          className="absolute top-1/2 -right-32 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-primary)] rounded-full blur-[120px] mix-blend-screen opacity-20" 
        />
      </div>

      {/* Watermark foncée */}
      <motion.span 
        style={{ x: xText }}
        className="absolute whitespace-nowrap text-[15vh] font-[1000] uppercase tracking-[0.2em] opacity-[0.05] pointer-events-none text-white select-none"
      >
        MIRA ROMA MIRA ROMA
      </motion.span>

      {/* --- STRUCTURE CENTRALE --- */}
      
      <div className="relative flex items-center w-full max-w-5xl px-10 z-10">
        
        {/* Ligne Gauche */}
        <div className="flex-grow h-[1px] bg-white/10">
          <motion.div
            style={{ scaleX }}
            className="h-full origin-right bg-[var(--color-brand-primary)] shadow-[0_0_10px_rgba(179,36,36,0.8)]"
          />
        </div>

        {/* Élément Central */}
        <div className="flex items-center gap-8 px-10">
          <motion.div style={{ rotate }} className="hidden md:block">
             <div className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_15px_var(--color-brand-primary)]" />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center w-16 h-16 rotate-45 border border-white/20 bg-stone-900 shadow-2xl"
          >
            {/* Petit losange intérieur "or" */}
            <div className="w-8 h-8 border border-[var(--color-brand-accent)]/30 flex items-center justify-center">
                <div className="w-1 h-1 bg-[var(--color-brand-primary)] rounded-full -rotate-45 shadow-[0_0_8px_var(--color-brand-primary)]" />
            </div>
          </motion.div>

          <motion.div style={{ rotate }} className="hidden md:block">
             <div className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_15px_var(--color-brand-primary)]" />
          </motion.div>
        </div>

        {/* Ligne Droite */}
        <div className="flex-grow h-[1px] bg-white/10">
          <motion.div
            style={{ scaleX }}
            className="h-full origin-left bg-[var(--color-brand-primary)] shadow-[0_0_10px_rgba(179,36,36,0.8)]"
          />
        </div>

      </div>

      {/* Texture de grain (effet pierre/nuit) */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none invert" 
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
        }} 
      />
    </div>
  );
}