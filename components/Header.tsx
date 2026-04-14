"use client";

import { motion } from "framer-motion";

export default function Nav({ isColor, setIsColor }: { isColor: boolean; setIsColor: (v: boolean) => void }) {
  const transition = "transition-all duration-700 ease-in-out";
  
  // Configuration des liens
  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "La Carte", href: "#carte" },
    { name: "Desserts", href: "#desserts" },
    { name: "Événements", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center ${
      isColor 
        ? 'bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm' 
        : 'bg-black/90 backdrop-blur-md border-b border-white/10'
    } ${transition}`}>
      
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`text-2xl font-black tracking-tighter ${isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'}`}
      >
        MIRA ROMA
      </motion.div>

      <div className="flex gap-8 items-center">
        {/* Liens de Navigation */}
        <ul className="hidden md:flex gap-6 font-bold text-[10px] uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={`relative group ${isColor ? 'text-stone-600' : 'text-white/70'} hover:text-current transition-colors`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isColor ? 'bg-[var(--color-brand-primary)]' : 'bg-white'} transition-all duration-300 group-hover:w-full`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Séparateur */}
        <div className={`hidden md:block h-4 w-[1px] ${isColor ? 'bg-stone-200' : 'bg-white/20'}`} />

        {/* Bouton Toggle Mode */}
        <button 
          onClick={() => setIsColor(!isColor)} 
          className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all active:scale-95 ${
            isColor 
              ? 'border-stone-200 text-stone-400 hover:border-black hover:text-black' 
              : 'border-white/20 text-white/40 hover:border-white hover:text-white'
          }`}
        >
          {isColor ? "Noir & Blanc" : "Mode Couleur"}
        </button>
      </div>
    </nav>
  );
}