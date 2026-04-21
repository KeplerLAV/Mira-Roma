"use client";

import React from 'react';
import { Clock, MapPin, Phone, Music, Car, Sun } from 'lucide-react';

export default function AboutSection() {
  // Palette fixée sur le thème Beige / Clair
  const accentColor = 'text-[var(--color-brand-primary)]';
  const cardBg = 'bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border-stone-100';

  return (
    <section id="a-propos" className="py-24 px-6 bg-[var(--color-brand-bg)]">
      <div className="max-w-6xl mx-auto">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-widest mb-4 text-[var(--color-brand-dark)]">
            BIENVENUE À <span className={accentColor}>MIRA ROMA</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-[var(--color-brand-accent)]"></div>
          <p className="max-w-2xl mx-auto italic text-stone-500 text-lg">
            "Le savoir-faire d'une équipe passionnée au service d'une cuisine franco-italienne authentique."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* LE RESTAURANT */}
          <div className={`p-10 rounded-[2.5rem] border ${cardBg} transition-transform hover:-translate-y-2 duration-500`}>
            <div className="w-12 h-12 bg-[var(--color-brand-paper)] rounded-2xl flex items-center justify-center mb-6">
              <Sun className="w-6 h-6 text-[var(--color-brand-accent)]" />
            </div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tighter text-[var(--color-brand-dark)]">Le Restaurant</h3>
            <ul className="space-y-4 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <span className={accentColor}>•</span>
                <span>Accueil chaleureux garanti dès votre arrivée.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className={accentColor}>•</span>
                <span>Terrasse disponible dès les beaux jours.</span>
              </li>
              <li className="flex items-start gap-3 font-bold text-[var(--color-brand-dark)]">
                <Car className="w-4 h-4 mt-0.5 text-[var(--color-brand-secondary)]" /> 
                <span>Parking gratuit en face.</span>
              </li>
            </ul>
          </div>

          {/* HORAIRES & SERVICES */}
          <div className={`p-10 rounded-[2.5rem] border ${cardBg} transition-transform hover:-translate-y-2 duration-500`}>
            <div className="w-12 h-12 bg-[var(--color-brand-paper)] rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-[var(--color-brand-accent)]" />
            </div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tighter text-[var(--color-brand-dark)]">Horaires & Infos</h3>
            <div className="text-sm space-y-3 mb-6 text-stone-600">
              <div className="flex justify-between border-b border-stone-50 pb-2">
                <span>Midi :</span> 
                <span className="font-bold text-[var(--color-brand-dark)]">11h30 - 14h30</span>
              </div>
              <div className="flex justify-between border-b border-stone-50 pb-2">
                <span>Soir :</span> 
                <span className="font-bold text-[var(--color-brand-dark)]">18h00 - 23h00</span>
              </div>
              <p className="text-[10px] font-black uppercase mt-4 text-[var(--color-brand-primary)] tracking-widest">
                Fermé les dimanches et lundis soirs.
              </p>
            </div>
            <div className="pt-6 border-t border-dashed border-stone-200">
              <p className="text-xs font-black uppercase mb-2 text-[var(--color-brand-dark)]">À emporter :</p>
              <p className="text-[11px] italic text-stone-400">Commandes uniquement par téléphone ou sur place.</p>
            </div>
          </div>

          {/* RÉCEPTIONS */}
          <div className={`p-10 rounded-[2.5rem] border-2 border-[var(--color-brand-accent)] bg-white shadow-2xl transition-transform hover:-translate-y-2 duration-500`}>
            <div className="w-12 h-12 bg-[var(--color-brand-paper)] rounded-2xl flex items-center justify-center mb-6">
              <Music className="w-6 h-6 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-[var(--color-brand-dark)]">Réceptions</h3>
            <p className="text-sm mb-6 text-stone-600 leading-relaxed">
              Salle indépendante de <span className="font-black text-[var(--color-brand-primary)]">50 couverts</span> avec piste de danse pour vos événements.
            </p>
            <ul className="text-xs space-y-3 mb-8 text-stone-500 font-medium">
              <li className="flex items-center gap-2">• Buffets ou menus spécifiques</li>
              <li className="flex items-center gap-2">• Possibilité de DJ</li>
              <li className="flex items-center gap-2">• Devis gratuit sur demande</li>
            </ul>
            <button className="btn-mira w-full py-4 shadow-lg active:scale-95">
              Demander un devis
            </button>
          </div>

        </div>

        {/* FOOTER INFOS */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[var(--color-brand-accent)]" /> 
            4, AVENUE MATLOCK, EAUBONNE
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[var(--color-brand-accent)]" /> 
            01 39 59 16 33
          </div>
        </div>
      </div>
    </section>
  );
}