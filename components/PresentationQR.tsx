"use client";

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ExternalLink, Smartphone } from 'lucide-react';

interface PresentationQRProps {
  isColor: boolean;
}

export default function PresentationQR({ isColor }: PresentationQRProps) {
  const websiteUrl = "https://mira-roma.netlify.app/#carte";
  const transition = "transition-all duration-700 ease-in-out";

  // Thème dynamique
  const containerStyle = isColor 
    ? "bg-white border-emerald-100 shadow-2xl" 
    : "bg-black border-white/20 shadow-none";
  
  const textColor = isColor ? "text-emerald-950" : "text-white";
  const subTextColor = isColor ? "text-emerald-800/50" : "text-white/40";
  const accentText = isColor ? "text-emerald-600" : "text-white";
  const goldColor = isColor ? "#D4AF37" : "#FFFFFF";
  const qrColor = isColor ? "#064e3b" : "#000000"; // Vert foncé ou Noir pur pour le scan

  return (
    <div className={`flex flex-col items-center justify-center my-10 p-12 rounded-[2.5rem] border-2 max-w-sm mx-auto ${containerStyle} ${transition}`}>
      
      {/* Icône et Titre */}
      <div className={`flex items-center gap-2 mb-6 ${isColor ? 'text-emerald-800' : 'text-white/60'}`}>
        <Smartphone className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-widest">Aperçu Mobile</span>
      </div>

      <h3 className={`text-2xl font-black text-center mb-8 ${textColor} ${transition}`}>
        SCANNEZ POUR <br /> 
        <span className={accentText}>TESTER LE SITE</span>
      </h3>

      {/* Container du QR Code */}
      <div className={`p-6 bg-white rounded-3xl border-4 shadow-inner mb-8 ${transition}`} style={{ borderColor: goldColor }}>
        <QRCodeSVG 
          value={websiteUrl}
          size={200}
          bgColor={"#ffffff"}
          fgColor={qrColor}
          level={"H"}
          includeMargin={false}
        />
      </div>

      {/* Lien texte et Info */}
      <div className="text-center space-y-4">
        <p className={`text-[11px] font-medium px-4 ${subTextColor} ${transition}`}>
          Pointez votre appareil photo sur le code pour ouvrir la version de démonstration.
        </p>
        
        <a 
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-bold transition-colors border-b pb-1 ${
            isColor 
              ? 'text-[#D4AF37] border-[#D4AF37]/30 hover:text-emerald-600' 
              : 'text-white border-white/30 hover:opacity-70'
          }`}
        >
          mira-roma.netlify.app
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
