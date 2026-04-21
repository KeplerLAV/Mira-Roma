"use client";

import React from 'react';

export default function Footer() {
  // Palette fixée sur le thème Beige / Clair
  const bgStyle = 'bg-[var(--color-brand-paper)]';
  const textColor = 'text-[var(--color-brand-dark)]';
  const accentColor = 'text-[var(--color-brand-primary)]';
  const borderColor = 'border-stone-200';
  const mutedTextColor = 'text-stone-500';

  return (
    <footer className={`py-20 border-t ${borderColor} ${bgStyle} ${textColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 text-center md:text-left">
          
          {/* 1. Identité & Adresse */}
          <div className="flex flex-col space-y-5">
            <h3 className={`text-2xl font-black tracking-tighter ${accentColor}`}>
              MIRA ROMA
            </h3>
            <address className="not-italic text-sm leading-relaxed font-medium text-stone-600">
              4, avenue Matlock<br />
              95600 — EAUBONNE
            </address>
            <div className="flex flex-col space-y-2">
              <a href="tel:0139591633" className="text-sm font-black hover:text-[var(--color-brand-primary)] transition-colors">
                01 39 59 16 33
              </a>
              <a href="mailto:miraroma@gmail.com" className={`text-sm underline underline-offset-4 decoration-1 ${mutedTextColor} hover:text-[var(--color-brand-dark)] transition-colors`}>
                miraroma@gmail.com
              </a>
            </div>
          </div>

          {/* 2. Horaires d'ouverture */}
          <div className="flex flex-col space-y-6">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${mutedTextColor}`}>
              Horaires de service
            </h4>
            <div className="text-xs space-y-4 uppercase tracking-[0.15em] font-bold">
              <div className="flex justify-between md:justify-start md:gap-10">
                <span className="opacity-40 w-20">Lun - Ven</span>
                <span>12h-14h30 • 19h-22h30</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-10">
                <span className="opacity-40 w-20">Samedi</span>
                <span>19h - 23h00</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-10">
                <span className="opacity-40 w-20">Dimanche</span>
                <span className="text-[var(--color-brand-primary)]">Fermé</span>
              </div>
            </div>
          </div>

          {/* 3. Social & Philosophie */}
          <div className="flex flex-col space-y-6 items-center md:items-end">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${mutedTextColor}`}>
              Social
            </h4>
            <div className="flex gap-3">
              {['INSTAGRAM', 'FACEBOOK'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className={`px-4 py-2 rounded-full border text-[9px] font-black tracking-widest ${borderColor} hover:bg-[var(--color-brand-primary)] hover:text-white hover:border-[var(--color-brand-primary)] transition-all`}
                >
                  {social}
                </a>
              ))}
            </div>
            <p className={`text-[10px] md:text-right leading-relaxed uppercase tracking-widest font-medium max-w-[200px] ${mutedTextColor}`}>
              Cuisine italienne authentique faite avec passion à Eaubonne.
            </p>
          </div>
        </div>

        {/* Copyright & Mentions */}
        <div className={`pt-10 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <p className={`text-[9px] tracking-[0.3em] uppercase font-bold ${mutedTextColor}`}>
            © 2026 MIRA ROMA — TRATTORIA ARTISANALE
          </p>
          <div className={`flex gap-8 text-[9px] uppercase tracking-[0.2em] font-bold ${mutedTextColor}`}>
            <a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Mentions</a>
            <a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}