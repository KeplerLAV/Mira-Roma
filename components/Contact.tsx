"use client";

import { motion } from "framer-motion";

export default function Contact({ isColor }: { isColor: boolean }) {
  const transition = "transition-all duration-700 ease-in-out";
  
  const inputStyle = isColor 
    ? "border-stone-200 focus:border-[var(--color-brand-primary)] text-[var(--color-brand-dark)]" 
    : "border-white/20 focus:border-white text-white";

  // Variantes pour les animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-24 px-6 overflow-hidden ${transition} ${isColor ? 'bg-[var(--color-brand-bg)]' : 'bg-black'}`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Colonne Gauche : Infos & Fêtes */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.h2 variants={fadeInUp} className={`text-4xl md:text-6xl font-black mb-6 leading-none ${
            isColor ? 'text-[var(--color-brand-primary)]' : 'text-white'
          }`}>
            VOS ÉVÉNEMENTS <br /> 
            <span className={isColor ? 'text-[var(--color-brand-accent)]' : 'text-white/60'}>SUR MESURE</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className={`text-lg leading-relaxed ${isColor ? 'text-[var(--color-brand-font)]' : 'text-white/80'}`}>
              Pour vos **fêtes de famille**, anniversaires ou repas d'entreprise, profitez de notre salle de 50 couverts avec piste de danse.
            </p>
            
            <ul className={`space-y-4 font-bold uppercase tracking-widest text-xs ${
              isColor ? 'text-[var(--color-brand-secondary)]' : 'text-white/40'
            }`}>
              {["Salle indépendante privatisable", "Piste de danse & Sono disponible", "Buffets et Menus de groupe"].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${isColor ? 'bg-[var(--color-brand-accent)]' : 'bg-white'}`} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Colonne Droite : Formulaire */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`p-8 rounded-3xl ${transition} ${
            isColor 
              ? 'bg-white shadow-2xl border border-stone-100' 
              : 'bg-white/5 border border-white/10'
          }`}
        >
          <form className="grid gap-6">
            <input 
              type="text" 
              placeholder="Nom complet" 
              className={`w-full bg-transparent border-b-2 py-3 outline-none transition-colors ${inputStyle}`} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="email" 
                placeholder="Email" 
                className={`w-full bg-transparent border-b-2 py-3 outline-none transition-colors ${inputStyle}`} 
              />
              <input 
                type="tel" 
                placeholder="Téléphone" 
                className={`w-full bg-transparent border-b-2 py-3 outline-none transition-colors ${inputStyle}`} 
              />
            </div>
            
            <select className={`w-full bg-transparent border-b-2 py-3 outline-none transition-colors ${inputStyle}`}>
              <option className="text-black">Type d'événement</option>
              <option className="text-black">Repas de groupe / Fête</option>
              <option className="text-black">Réservation simple</option>
              <option className="text-black">Demande de devis</option>
            </select>

            <textarea 
              placeholder="Décrivez votre projet..." 
              rows={4} 
              className={`w-full bg-transparent border-b-2 py-3 outline-none transition-colors ${inputStyle}`}
            ></textarea>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-4 py-4 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl ${transition} ${
                isColor 
                  ? 'bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-secondary)]' 
                  : 'bg-white text-black hover:invert'
              }`}
            >
              Envoyer la demande
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}