"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Effet de parallaxe : le texte et les éléments de fond réagissent au scroll
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityCercles = useTransform(scrollY, [0, 300], [0.2, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[var(--color-brand-bg)]"
    >
      {/* Background Éléments - Atmosphère chaleureuse */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ opacity: opacityCercles }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[var(--color-brand-primary)] rounded-full blur-[120px] mix-blend-multiply opacity-20 animate-pulse" 
        />
        <motion.div 
          style={{ opacity: opacityCercles }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[var(--color-brand-accent)] rounded-full blur-[120px] mix-blend-multiply opacity-20" 
        />
        {/* Texture de grain légère */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      </div>

      <motion.div style={{ y: y1 }} className="relative z-10 text-center">
        {/* Badge Historique */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-8 px-6 py-2 rounded-full border border-[var(--color-brand-accent)] bg-white/50 backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-brand-accent)] shadow-sm"
        >
          Depuis 1989 • Eaubonne
        </motion.div>

        {/* Titre Monumental */}
        <h1 className="text-[14vw] md:text-[9vw] font-[1000] leading-[0.8] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-brand-dark)] via-[var(--color-brand-primary)] to-[var(--color-brand-dark)]">
          MIRA<br />ROMA
        </h1>

        {/* Sous-titre flottant */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="h-[1.5px] w-8 md:w-24 bg-[var(--color-brand-accent)]" />
          <p className="text-sm md:text-2xl font-black uppercase tracking-[0.3em] text-[var(--color-brand-dark)]">
            Cuisine <span className="text-[var(--color-brand-primary)]">Authentique</span>
          </p>
          <div className="h-[1.5px] w-8 md:w-24 bg-[var(--color-brand-accent)]" />
        </motion.div>
      </motion.div>

      {/* Description et Actions */}
      <motion.div style={{ y: y2 }} className="relative z-10 flex flex-col items-center">
        <p className="max-w-xl text-center text-base md:text-lg mb-10 font-bold leading-relaxed text-stone-600">
          Une escale gourmande où le terroir français rencontre la passion italienne. 
          Produits frais, pizzas au feu de bois et traditions préservées.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a href="#carte" className="btn-mira group relative px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-[0_15px_30px_-10px_rgba(179,36,36,0.3)]">
            Consulter la Carte
          </a>
          
          <a href="#contact" className="px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs border-2 border-stone-200 text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-dark)] hover:text-white hover:border-[var(--color-brand-dark)] transition-all active:scale-95">
            Réserver
          </a>
        </div>
      </motion.div>

      {/* Indicateur de Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-dark)]">Scroll</span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-[var(--color-brand-primary)] to-transparent" />
      </motion.div>
    </section>
  );
}