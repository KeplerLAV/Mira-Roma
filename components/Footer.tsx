"use client";

export default function Footer({ isColor }: { isColor: boolean }) {
  const transition = "transition-all duration-700 ease-in-out";
  
  // Logique de couleurs stricte
  const bgStyle = isColor ? 'bg-[var(--color-brand-bg)]' : 'bg-black';
  const textColor = isColor ? 'text-[var(--color-brand-dark)]' : 'text-white';
  const accentColor = isColor ? 'text-[var(--color-brand-primary)]' : 'text-black font-bold';
  const borderColor = isColor ? 'border-black-200' : 'border-black/100';
  const mutedTextColor = isColor ? 'text-stone-500' : 'text-black/40';

  return (
    <footer className={`py-16 border-t ${borderColor} bg-[var(--color-brand-font)] ${textColor} ${transition}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* 1. Identité & Adresse */}
          <div className="flex flex-col space-y-4 text-black">
            <h3 className={`text-xl font-black tracking-tighter ${accentColor}`}>
              MIRA ROMA
            </h3>
            <address className={`not-italic text-sm leading-relaxed ${mutedTextColor}`}>
              4, avenue Matlock<br />
              95600 - EAUBONNE
            </address>
            <div className="flex flex-col space-y-1">
              <a href="tel:0139591633" className="text-sm font-bold hover:opacity-70 transition-opacity">01 39 59 16 33</a>
              <a href="mailto:miraroma@gmail.com" className={`text-sm ${mutedTextColor} hover:text-current transition-colors`}>miraroma@gmail.com</a>
            </div>
          </div>

          {/* 2. Horaires d'ouverture */}
          <div className="flex flex-col space-y-4">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${mutedTextColor}`}>Horaires</h4>
            <div className="text-xs space-y-2 uppercase tracking-widest font-medium">
              <div className="flex justify-between md:justify-start md:gap-8 text-black">
                <span className="opacity-50">Lun - Ven</span>
                <span>12h-14h30 • 19h-22h30</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8 text-black">
                <span className="opacity-50 ">Samedi</span>
                <span>19h - 23h00</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="opacity-50 text-black">Dimanche</span>
                <span className={isColor ? "text-[var(--color-brand-primary)]" : "text-white/30"}>Fermé</span>
              </div>
            </div>
          </div>

          {/* 3. Accès Rapide & Réseaux */}
          <div className="flex flex-col space-y-4 items-center md:items-end">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${mutedTextColor}`}>Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className={`p-2 rounded-full border ${borderColor} hover:invert transition-all`}>
                <span className="sr-only">Instagram</span>
                <span className="text-xs">IG</span>
              </a>
              <a href="#" className={`p-2 rounded-full border ${borderColor} hover:invert transition-all`}>
                <span className="sr-only">Facebook</span>
                <span className="text-xs">FB</span>
              </a>
            </div>
            <p className={`text-[9px] text-right leading-tight uppercase tracking-tighter ${mutedTextColor}`}>
              Cuisine italienne authentique<br />faite avec passion à Eaubonne.
            </p>
          </div>
        </div>

        {/* Copyright & Mentions */}
        <div className={`pt-8 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-[10px] tracking-[0.2em] uppercase text-black`}>
            © 2026 MIRA ROMA — TOUS DROITS RÉSERVÉS
          </p>
          <div className={`flex gap-6 text-[9px] uppercase tracking-widest text-black `}>
            <a href="#" className="hover:text-current">Mentions Légales</a>
            <a href="#" className="hover:text-current">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}