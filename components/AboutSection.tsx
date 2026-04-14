"use client";

import React from 'react';
import { Clock, MapPin, Phone, Music, Car, Sun } from 'lucide-react';

interface AboutSectionProps {
  isColor: boolean;
}

export default function AboutSection({ isColor }: AboutSectionProps) {
  const transition = "transition-all duration-700 ease-in-out";
  
  // Logique Noir & Blanc vs Couleurs de marque
  const sectionBg = isColor ? 'bg-white' : 'bg-black';
  const accentColor = isColor ? 'text-white' : 'text-black';
  const primaryBg = isColor ? 'bg-[var(--color-brand-primary)]' : 'bg-white text-black';
  const borderColor = isColor ? 'border-[var(--color-brand-primary)]' : 'border-white/40';
  const cardBg = isColor ? 'bg-[var(--color-brand-bg)] shadow-xl border-stone-100' : 'bg-white border-white/10';

  return (
    <section id="a-propos" className={`py-24 px-6 ${sectionBg} ${transition}`}>
      <div className="max-w-6xl mx-auto">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black tracking-widest mb-4 ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}>
            BIENVENUE À <span className={isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}>MIRA ROMA</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${isColor ? 'bg-[var(--color-brand-accent)]' : 'bg-white'}`}></div>
          <p className={`max-w-2xl mx-auto italic ${isColor ? 'text-stone-500' : 'text-white/60'}`}>
            "Le savoir-faire d'une équipe passionnée au service d'une cuisine franco-italienne authentique."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* LE RESTAURANT */}
          <div className={`p-8 rounded-3xl border ${cardBg} ${transition}`}>
            <Sun className={`w-6 h-6 mb-4 ${isColor ? 'text-[#D4AF37]' : 'text-white'}`} />
            <h3 className={`text-xl font-bold mb-4 uppercase tracking-tighter ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-black'}`}>Le Restaurant</h3>
            <ul className={`space-y-3 text-sm ${isColor ? 'text-white/80' : 'text-black/50'}`}>
              <li className="flex items-start gap-2">
                <span className={accentColor}>•</span>
                Accueil chaleureux garanti dès votre arrivée.
              </li>
              <li className="flex items-start gap-2">
                <span className={accentColor}>•</span>
                Terrasse disponible dès les beaux jours.
              </li>
              <li className={`flex items-start gap-2 font-bold ${isColor ? 'text-white' : 'text-black'}`}>
                <Car className="w-4 h-4 inline" /> Parking gratuit en face.
              </li>
            </ul>
          </div>

          {/* HORAIRES & SERVICES */}
          <div className={`p-8 rounded-3xl border ${cardBg} ${transition}`}>
            <Clock className={`w-6 h-6 mb-4 ${isColor ? 'text-[#D4AF37]' : 'text-white'}`} />
            <h3 className={`text-xl font-bold mb-4 uppercase tracking-tighter ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-black'}`}>Horaires & Infos</h3>
            <div className={`text-sm space-y-2 mb-4 ${isColor ? 'text-white/80' : 'text-black/80'}`}>
              <p className="flex justify-between"><span>7 jours sur 7 :</span> <span className="font-mono font-bold">11h30 - 14h30</span></p>
              <p className="flex justify-between"><span>Soirée :</span> <span className="font-mono font-bold">18h00 - 23h00</span></p>
              <p className={`text-[10px] font-bold uppercase mt-2 ${accentColor}`}>
                Fermé les dimanches et lundis soirs.
              </p>
            </div>
            <div className={`pt-4 border-t ${isColor ? 'border-stone-200' : 'border-black/10'}`}>
              <p className={`text-xs font-bold uppercase mb-2 ${isColor ? 'text-white/80' : 'text-black'}`}>À emporter :</p>
              <p className={`text-[11px] italic ${isColor ? 'text-stone-400' : 'text-black/40'}`}>Commandes uniquement par téléphone ou sur place.</p>
            </div>
          </div>

          {/* RÉCEPTIONS */}
          <div className={`p-8 rounded-3xl border-2 ${cardBg} ${borderColor} ${transition}`}>
            <Music className={`w-6 h-6 mb-4 ${isColor ? 'text-[#D4AF37]' : 'text-white'}`} />
            <h3 className={`text-xl font-bold mb-4 uppercase tracking-tighter ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-black'}`}>Réceptions</h3>
            <p className={`text-sm mb-4 ${isColor ? 'text-white/80' : 'text-black/60'}`}>
              Salle indépendante de <span className={`font-bold ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-black'}`}>50 couverts</span> avec piste de danse.
            </p>
            <ul className={`text-xs space-y-2 mb-6 ${isColor ? 'text-white/80' : 'text-black/50'}`}>
              <li>• Buffets ou menus spécifiques</li>
              <li>• Possibilité de DJ</li>
              <li>• Devis gratuit sur demande</li>
            </ul>
            <button className={`w-full py-3 font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-lg active:scale-95 ${
              isColor 
                ? 'bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)] text-white' 
                : 'bg-white hover:bg-white/90 text-black'
            }`}>
              Demander un devis
            </button>
          </div>

        </div>

        {/* FOOTER INFOS */}
        <div className={`mt-20 flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.2em] ${isColor ? 'text-stone-400' : 'text-white/30'}`}>
          <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> 4, avenue Matlock, Eaubonne</div>
          <div className="flex items-center gap-2"><Phone className="w-3 h-3" /> 01 39 59 16 33</div>
        </div>
      </div>
    </section>
  );
}