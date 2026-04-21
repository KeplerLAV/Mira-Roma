"use client";

import { motion } from "framer-motion";

export default function Nav() {
  // Configuration des liens
  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "La Carte", href: "#carte" },
    { name: "Desserts", href: "#desserts" },
    { name: "Événements", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-stone-100 shadow-sm transition-all duration-500">
      
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-black tracking-tighter text-[var(--color-brand-primary)]"
      >
        MIRA ROMA
      </motion.div>

      <div className="flex gap-8 items-center">
        {/* Liens de Navigation */}
        <ul className="hidden md:flex gap-8 font-black text-[10px] uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative group text-stone-500 hover:text-[var(--color-brand-dark)] transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--color-brand-primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Séparateur visuel */}
        <div className="hidden md:block h-4 w-[1px] bg-stone-200" />

        {/* Bouton de réservation (Remplace le bouton Toggle) */}
        <a 
          href="#contact"
          className="px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-dark)] transition-all active:scale-95 shadow-md shadow-red-900/10"
        >
          Réserver
        </a>
      </div>
    </nav>
  );
}