"use client";

import React from 'react';
import data from '@/data/cartedes.json';

interface PriceOptions {
  label: string;
  price: number;
}

interface MenuOptions {
  plats: string[];
}

interface MenuItem {
  name: string;
  price?: number;
  composition?: string;
  condition?: string;
  availability?: string;
  price_options?: PriceOptions[];
  options?: MenuOptions;
  image?: string;
}

interface GlacesDetails {
  parfums: string[];
  prices: {
    "2_boules": number;
    "3_boules": number;
  };
}

interface Category {
  category: string;
  items?: MenuItem[];
  details?: GlacesDetails;
}

export default function Desserts() {
  const sucree = data.carte_sucree as Category[];

  const desserts = sucree.find(c => c.category === "Desserts")?.items;
  const glaces = sucree.find(c => c.category === "Les Glaces");
  const menus = sucree.find(c => c.category === "Menus")?.items;

  return (
    <section id="desserts" className="py-24 px-6 bg-[var(--color-brand-bg)]">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION DESSERTS CLASSIQUES */}
        <div className="mb-32">
          <h2 className="text-center text-4xl md:text-5xl font-black mb-20 tracking-widest text-[var(--color-brand-primary)]">
            DESSERTS MAISON
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            {desserts?.map((item, idx) => (
              <div key={idx} className="group flex gap-6 items-start">
                <div className="relative flex-shrink-0 w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-500 group-hover:shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex-grow pt-2">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-base font-black uppercase tracking-tight text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex-grow mx-3 border-b border-dotted border-stone-300" />
                    <span className="font-mono text-base font-black text-[var(--color-brand-accent)]">
                      {item.price?.toFixed(2)}€
                    </span>
                  </div>
                  {item.composition && (
                    <p className="text-xs italic leading-relaxed text-stone-500">
                      {item.composition}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION GLACES & SORBETS */}
        <div className="mb-32 overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-stone-100">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 h-64 md:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501443762994-82bd5dabb892?auto=format&fit=crop&q=80&w=800" 
                alt="Glaces Artisanales" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            <div className="md:col-span-3 p-10 md:p-14">
              <h2 className="text-3xl font-black mb-8 text-[var(--color-brand-secondary)]">
                LES GLACES ARTISANALES
              </h2>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-grow">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-5 text-stone-400">Nos Parfums au choix</p>
                   <div className="flex flex-wrap gap-2">
                     {glaces?.details?.parfums.map((p, i) => (
                       <span key={i} className="px-4 py-1.5 text-[11px] font-bold border border-stone-100 rounded-full text-stone-600 bg-[var(--color-brand-paper)]">
                         {p}
                       </span>
                     ))}
                   </div>
                </div>
                <div className="flex flex-col justify-center border-t-2 lg:border-t-0 lg:border-l-2 pt-8 lg:pt-0 lg:pl-10 border-dashed border-stone-200">
                  <div className="space-y-4">
                    <p className="text-xl font-black text-[var(--color-brand-dark)] whitespace-nowrap">
                      2 Boules <span className="block text-2xl text-[var(--color-brand-primary)]">{glaces?.details?.prices["2_boules"].toFixed(2)}€</span>
                    </p>
                    <p className="text-xl font-black text-[var(--color-brand-dark)] whitespace-nowrap">
                      3 Boules <span className="block text-2xl text-[var(--color-brand-primary)]">{glaces?.details?.prices["3_boules"].toFixed(2)}€</span>
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-[var(--color-brand-accent)] bg-[var(--color-brand-paper)] px-3 py-1 rounded inline-block">
                      + Chantilly : 1.00€
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION MENUS */}
        <div className="grid md:grid-cols-2 gap-12">
          {menus?.map((menu, i) => (
            <div key={i} className="group overflow-hidden rounded-[3rem] border border-stone-200 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={menu.image} 
                  alt={menu.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>

              <div className="p-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-4xl font-black text-[var(--color-brand-primary)] tracking-tighter">
                    {menu.name.toUpperCase()}
                  </h3>
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] mb-8 font-black text-stone-400">
                  {menu.condition || menu.availability}
                </p>
                
                <div className="space-y-4 mb-10">
                  {menu.price_options ? menu.price_options.map((opt: PriceOptions, j: number) => (
                    <div key={j} className="flex justify-between items-center border-b border-stone-50 pb-3">
                      <span className="text-xs uppercase font-black tracking-tight text-[var(--color-brand-dark)]">{opt.label}</span>
                      <span className="text-xl font-mono font-black text-[var(--color-brand-primary)]">{opt.price.toFixed(2)}€</span>
                    </div>
                  )) : (
                    <div className="flex justify-between items-center bg-[var(--color-brand-primary)] text-white p-5 rounded-2xl shadow-inner">
                       <span className="text-sm font-black uppercase tracking-widest">Tarif Unique</span>
                       <span className="text-3xl font-mono font-black">{menu.price?.toFixed(2)}€</span>
                    </div>
                  )}
                </div>

                {menu.options && (
                  <div className="text-[13px] p-6 rounded-2xl leading-relaxed border-l-4 border-[var(--color-brand-accent)] bg-[var(--color-brand-paper)] text-stone-600 font-medium">
                    <span className="block mb-2 font-black uppercase text-[10px] tracking-widest text-[var(--color-brand-dark)]">Options au choix :</span>
                    {menu.options.plats.join(' • ')}
                  </div>
                )}

                {menu.composition && (
                   <div className="mt-6">
                    <p className="text-xs leading-relaxed italic text-stone-500">
                      {menu.composition}
                    </p>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}