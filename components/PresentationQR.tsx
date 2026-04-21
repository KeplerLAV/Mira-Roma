"use client";

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ExternalLink, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PresentationQR() {
  const websiteUrl = "https://mira-roma.netlify.app/#carte";

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-stone-950 flex items-center justify-center">
      
      {/* --- BACKGROUND DU COMPOSANT (L'AMBIANCE) --- */}
      <div className="absolute inset-0 z-0">
        {/* Orbes de rouge dissimulés en blur (comme le Hero) */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-primary)] rounded-full blur-[140px] opacity-[0.15] mix-blend-screen" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-primary)] rounded-full blur-[120px] opacity-[0.1] mix-blend-screen" />
        
        {/* Texture papier sombre sur tout le composant */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] invert" />
      </div>

      {/* --- LA CARD QR --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center p-12 rounded-[3.5rem] border border-white/5 bg-stone-900/40 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.6)] max-w-sm w-full mx-auto"
      >
        {/* Icône Mobile */}
        <div className="flex items-center gap-2 mb-6 text-stone-500">
          <Smartphone className="w-4 h-4" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">Expérience Mobile</span>
        </div>

        <h3 className="text-2xl font-[1000] text-center mb-10 leading-tight tracking-tighter text-stone-100">
          SCANNEZ POUR <br /> 
          <span className="text-[var(--color-brand-primary)]">TESTER LE SITE</span>
        </h3>

        {/* Container du QR Code */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="relative p-6 bg-white rounded-[2.5rem] shadow-2xl mb-10 group"
        >
          {/* Lueur rouge qui pulse derrière le QR */}
          <div className="absolute inset-0 bg-[var(--color-brand-primary)] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-[2.5rem] -z-10" />
          
          <div className="p-1 border border-stone-100 rounded-[1.8rem]">
            <QRCodeSVG 
              value={websiteUrl}
              size={180}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"H"}
            />
          </div>
        </motion.div>

        {/* Info & Lien */}
        <div className="text-center space-y-6">
          <p className="text-[11px] font-bold leading-relaxed px-6 text-stone-400">
            Pointez votre appareil photo pour <br /> ouvrir la démo interactive.
          </p>
          
          <a 
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-brand-accent)] hover:text-white transition-all border-b border-[var(--color-brand-accent)]/30 pb-1"
          >
            mira-roma.netlify.app
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}