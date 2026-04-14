"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero({ isColor }: { isColor: boolean }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Effet de parallaxe : le texte monte moins vite que le scroll
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const transition = "transition-all duration-1000 ease-in-out";

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className={`relative min-h-screen flex flex-col items-center justify-center px- overflow-hidden ${transition} ${
        isColor ? 'bg-[var(--color-brand-bg)]' : 'bg-black'
      }`}
    >
      {/* Background Éléments - Cercles flous dynamiques */}
      <div className={`absolute inset-0 z-0 ${transition} ${isColor ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--color-brand-primary)] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--color-brand-accent)] rounded-full blur-[120px] opacity-20" />
      </div>

      <motion.div style={{ y: y1 }} className="relative z-10 text-center">
        {/* Badge Minimaliste */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-block mb-8 px-6 py-2 rounded-full border backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.5em] ${transition} ${
            isColor 
              ? 'border-[var(--color-brand-accent)] text-[var(--color-brand-accent)]' 
              : 'border-white/20 text-white/50'
          }`}
        >
          Depuis 1989 • Eaubonne
        </motion.div>

        {/* Titre Monumental */}
        <h1 className={`text-[15vw] md:text-[12vw] font-[1000] leading-[0.8] tracking-tighter mb-8 ${transition} ${
          isColor 
            ? 'text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-brand-primary)] to-[var(--color-brand-dark)]' 
            : 'text-white'
        }`}>
          MIRA<br />ROMA
        </h1>

        {/* Sous-titre flottant */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className={`h-[1px] w-8 md:w-24 ${isColor ? 'bg-[var(--color-brand-accent)]' : 'bg-white/20'}`} />
          <p className={`text-sm md:text-2xl font-black uppercase tracking-[0.3em] ${isColor ? 'text-[var(--color-brand-font)]' : 'text-white/80'}`}>
            Cuisine <span className={isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}>Authentique</span>
          </p>
          <div className={`h-[1px] w-8 md:w-24 ${isColor ? 'bg-[var(--color-brand-accent)]' : 'bg-white/20'}`} />
        </motion.div>
      </motion.div>

      {/* Boutons et Description */}
      <motion.div style={{ y: y2 }} className="relative z-10 flex flex-col items-center">
        <p className={`max-w-xl text-center text-base md:text-lg mb-10 font-medium leading-relaxed ${isColor ? 'text-white' : 'text-white/40'}`}>
          Une escale gourmande où le terroir français rencontre la passion italienne. 
          Produits frais, pizzas au feu de bois et traditions préservées.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className={`group relative px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all ${
            isColor 
              ? 'bg-[var(--color-brand-primary)] text-white hover:shadow-[0_20px_40px_rgba(var(--color-brand-primary-rgb),0.3)]' 
              : 'bg-white text-black hover:bg-white/90'
          }`}>
            <span className="relative z-10">Consulter la Carte</span>
          </button>
          
          <button className={`px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs border-2 transition-all ${
            isColor 
              ? 'border-stone-200 text-white hover:bg-stone-900 hover:text-brand-accent hover:border-brand-accent' 
              : 'border-white/10 text-white hover:bg-white hover:text-brand-accent'
          }`}>
            Réserver
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator Animé
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <div className={`w-[1px] h-16 ${isColor ? 'bg-gradient-to-b from-[var(--color-brand-primary)] to-transparent' : 'bg-gradient-to-b from-white/20 to-transparent'}`} />
      </motion.div> */}
    </section>
  );
}