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

interface DessertsProps {
  isColor: boolean;
}

export default function Desserts({ isColor }: DessertsProps) {
  const transition = "transition-all duration-700 ease-in-out";
  const sucree = data.carte_sucree as Category[];

  const desserts = sucree.find(c => c.category === "Desserts")?.items;
  const glaces = sucree.find(c => c.category === "Les Glaces");
  const menus = sucree.find(c => c.category === "Menus")?.items;

  return (
    <section id="desserts" className={`py-24 px-6 ${transition} ${isColor ? 'bg-[var(--color-brand-bg)]' : 'bg-black'}`}>
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION DESSERTS CLASSIQUES */}
        <div className="mb-24">
          <h2 className={`text-center text-4xl font-black mb-16 tracking-widest ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}>
            DESSERTS MAISON
          </h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-6">
            {desserts?.map((item, idx) => (
              <div key={idx} className="group border-b border-white/5 pb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-brand-font group-hover:text-[var(--color-brand-accent)] transition-colors">
                    {item.name}
                  </h3>
                  <span className={`font-mono text-sm ${isColor ? 'text-[var(--color-brand-accent)]' : 'text-white/60'}`}>
                    {item.price?.toFixed(2)}
                  </span>
                </div>
                {item.composition && (
                  <p className="text-[11px] italic text-white/40 mt-1">{item.composition}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION GLACES & SORBETS */}
        <div className={`mb-24 p-8 rounded-3xl ${isColor ? 'bg-white shadow-xl border border-stone-100' : 'bg-white/5 border border-white/10'}`}>
          <h2 className={`text-2xl font-black mb-8 ${isColor ? 'text-[var(--color-brand-secondary)]' : 'text-white'}`}>
            LES GLACES ARTISANALES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
               <p className={`text-[10px] uppercase tracking-widest mb-4 ${isColor ? 'text-stone-400' : 'text-white/30'}`}>Nos Parfums</p>
               <div className="flex flex-wrap gap-2">
                 {glaces?.details?.parfums.map((p, i) => (
                   <span key={i} className={`px-3 py-1 text-[10px] border rounded-full ${isColor ? 'border-stone-200 text-stone-600' : 'border-white/10 text-white/50'}`}>
                     {p}
                   </span>
                 ))}
               </div>
            </div>
            <div className={`flex flex-col justify-center border-l pl-8 ${isColor ? 'border-stone-100' : 'border-white/10'}`}>
              <p className={`text-sm font-bold ${isColor ? 'text-[var(--color-black)]' : 'text-white'}`}>2 Boules : {glaces?.details?.prices["2_boules"].toFixed(2)}€</p>
              <p className={`text-sm font-bold ${isColor ? 'text-[var(--color-black)]' : 'text-white'}`}>3 Boules : {glaces?.details?.prices["3_boules"].toFixed(2)}€</p>
              <p className={`text-[10px] mt-2 ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white/40'}`}>+ Chantilly : 1.00€</p>
            </div>
          </div>
        </div>

        {/* SECTION MENUS (LE MIDI) */}
        <div className="grid md:grid-cols-2 gap-8">
          {menus?.map((menu, i) => (
            <div key={i} className={`p-10 rounded-3xl border-2 ${
              isColor ? 'border-[var(--color-brand-accent)] bg-white shadow-2xl' : 'border-white/20 bg-transparent'
            }`}>
              <h3 className={`text-3xl font-black mb-2 ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}>
                {menu.name.toUpperCase()}
              </h3>
              <p className={`text-[10px] uppercase tracking-widest mb-6 opacity-60 ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}>{menu.condition || menu.availability}</p>
              
              <div className="space-y-4 mb-8">
                {menu.price_options ? menu.price_options.map((opt: PriceOptions, j: number) => (
                  <div key={j} className="flex justify-between border-b border-white/10 pb-2">
                    <span className={`text-[10px] uppercase tracking-widest opacity-60 ${isColor ? 'text-[var(--color-black)]' : 'text-white'}`}>{opt.label}</span>
                    <span className={`text-[10px] uppercase tracking-widest opacity-60 ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}>{opt.price.toFixed(2)}€</span>
                  </div>
                )) : <p className={`text-[16px] uppercase tracking-widest opacity-60 ${isColor ? 'text-[var(--color-black)]' : 'text-white'}`}>{menu.price?.toFixed(2)}€</p>}
              </div>

              {menu.options && (
                <div className={`text-[11px] font-medium leading-relaxed ${isColor ? 'text-stone-500' : 'text-white/40'}`}>
                  <span className="block mb-1 text-white font-bold">Choix possibles :</span>
                  {menu.options.plats.join(' • ')}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}