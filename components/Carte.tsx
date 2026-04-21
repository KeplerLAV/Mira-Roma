"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carteData from '@/data/carte.json'; 

export default function Carte() {
  const categories = carteData.menu;
  const [activeCategory, setActiveCategory] = useState("TOUT");

  const displayedCategories = activeCategory === "TOUT" 
    ? categories 
    : categories.filter(cat => cat.category === activeCategory);

  return (
    <section id="carte" className="py-24 px-6 overflow-hidden bg-[var(--color-brand-bg)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation des Catégories - Fixée sur le thème clair */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {["TOUT", ...categories.map(c => c.category)].map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`relative px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all duration-300 ${
                activeCategory === catName
                  ? 'border-[var(--color-brand-primary)] text-white'
                  : 'border-stone-200 text-stone-400 hover:border-stone-300'
              }`}
            >
              {activeCategory === catName && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full -z-10 bg-[var(--color-brand-primary)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{catName}</span>
            </button>
          ))}
        </div>

        {/* Liste des Plats */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-24"
            >
              {displayedCategories.map((cat) => (
                <div key={cat.category}>
                  {(activeCategory === "TOUT" || activeCategory === cat.category) && (
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-black mb-12 border-l-4 border-[var(--color-brand-accent)] pl-4 uppercase tracking-tighter text-[var(--color-brand-dark)]"
                    >
                      {cat.category}
                    </motion.h2>
                  )}

                  <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
                    {cat.items.map((item, idx) => (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group flex gap-6 items-start"
                      >
                        {/* Image agrandie (Harmonisée avec Desserts) */}
                        <div className="relative flex-shrink-0 w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-2xl bg-stone-100 shadow-lg transition-transform duration-500 group-hover:shadow-xl">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Contenu textuel */}
                        <div className="flex-grow pt-2">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-base font-black uppercase tracking-tight text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                              {item.name}
                            </h3>
                            <div className="flex-grow mx-3 border-b border-dotted border-stone-300" />
                            <span className="font-mono font-black text-base text-[var(--color-brand-primary)]">
                              {item.price.toFixed(2)}€
                            </span>
                          </div>
                          
                          {item.composition && (
                            <p className="text-xs italic leading-relaxed text-stone-500">
                              {item.composition}
                            </p>
                          )}
                        </div>
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
          className="mt-24 p-8 text-center border-t border-dashed border-stone-200"
        >
          <p className="text-sm font-black uppercase tracking-widest text-[var(--color-brand-dark)]">
            📍 Plats à emporter : <span className="text-[var(--color-brand-primary)]">-1.00€ sur le tarif indiqué</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}