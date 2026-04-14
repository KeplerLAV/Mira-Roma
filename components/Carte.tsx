"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carteData from '@/data/carte.json'; 

interface CarteProps {
  isColor: boolean;
}

export default function Carte({ isColor }: CarteProps) {
  const categories = carteData.menu;
  const [activeCategory, setActiveCategory] = useState("TOUT");
  
  const transition = "transition-all duration-700 ease-in-out";

  const displayedCategories = activeCategory === "TOUT" 
    ? categories 
    : categories.filter(cat => cat.category === activeCategory);

  return (
    <section id="carte" className={`py-24 px-6 overflow-hidden ${transition} ${isColor ? 'bg-[var(--color-brand-bg)]' : 'bg-black text-white'}`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation des Catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {["TOUT", ...categories.map(c => c.category)].map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`relative px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border-2 ${transition} ${
                activeCategory === catName
                  ? (isColor ? 'border-[var(--color-brand-primary)] text-white' : 'border-white text-black')
                  : (isColor ? 'border-stone-200 text-stone-400' : 'border-white/10 text-white/40')
              }`}
            >
              {/* Fond animé pour le bouton actif */}
              {activeCategory === catName && (
                <motion.div 
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-full -z-10 ${isColor ? 'bg-[var(--color-brand-primary)]' : 'bg-white'}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{catName}</span>
            </button>
          ))}
        </div>

        {/* Liste des Plats avec AnimatePresence pour des transitions fluides */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-20"
            >
              {displayedCategories.map((cat, catIdx) => (
                <div key={cat.category}>
                  {activeCategory === "TOUT" && (
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`text-2xl font-black mb-10 border-l-4 pl-4 uppercase tracking-tighter ${
                        isColor ? 'border-[var(--color-brand-accent)] text-[var(--color-brand-font)]' : 'border-white text-white'
                      }`}
                    >
                      {cat.category}
                    </motion.h2>
                  )}

                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {cat.items.map((item, idx) => (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group flex flex-col"
                      >
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className={`text-lg font-bold uppercase tracking-tight ${transition} ${
                            isColor ? 'text-[var(--color-brand-font)] group-hover:text-[var(--color-brand-primary)]' : 'text-white group-hover:text-white/70'
                          }`}>
                            {item.name}
                          </h3>
                          <div className={`flex-grow mx-4 border-b border-dotted ${
                            isColor ? 'border-stone-300' : 'border-white/20'
                          }`} />
                          <span className={`font-mono font-bold ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}>
                            {item.price.toFixed(2)}€
                          </span>
                        </div>
                        {item.composition && (
                          <p className={`text-sm italic font-light ${isColor ? 'text-brand-accent' : 'text-white/40'}`}>
                            {item.composition}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Note de bas de page */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-24 p-8 text-center border-t border-dashed ${isColor ? 'border-stone-200 text-stone-400' : 'border-white/10 text-white/30'}`}
        >
          <p className={`text-sm font-bold ${isColor ? 'text-[var(--color-white)]' : 'text-white'}`}>
            📍 Plats à emporter : -1.00€ sur le tarif indiqué
          </p>
        </motion.div>
      </div>
    </section>
  );
}