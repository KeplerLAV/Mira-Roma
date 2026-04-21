"use client";

import { motion } from "framer-motion";

export default function Contact() {
  // Styles fixés sur le thème Clair / Beige
  const inputStyle = "border-stone-200 focus:border-[var(--color-brand-primary)] text-[var(--color-brand-dark)] placeholder:text-stone-400";

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
      className="py-24 px-6 overflow-hidden bg-[var(--color-brand-bg)]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Colonne Gauche : Infos & Événements */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black mb-6 leading-tight text-[var(--color-brand-dark)]">
            VOS ÉVÉNEMENTS <br /> 
            <span className="text-[var(--color-brand-primary)]">SUR MESURE</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg leading-relaxed text-stone-600">
              Pour vos <strong className="text-[var(--color-brand-dark)]">fêtes de famille</strong>, anniversaires ou repas d'entreprise, profitez de notre salle de 50 couverts avec piste de danse.
            </p>
            
            <ul className="space-y-4 font-black uppercase tracking-widest text-[10px] text-[var(--color-brand-secondary)]">
              {["Salle indépendante privatisable", "Piste de danse & Sono disponible", "Buffets et Menus de groupe"].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-brand-accent)] shadow-sm" />
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
          className="p-10 rounded-[2.5rem] bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-stone-100"
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
            
            <div className="relative border-b-2 border-stone-200">
              <select className={`w-full bg-transparent py-3 outline-none transition-colors appearance-none cursor-pointer ${inputStyle} border-none`}>
                <option className="text-black">Type d'événement</option>
                <option className="text-black">Repas de groupe / Fête</option>
                <option className="text-black">Réservation simple</option>
                <option className="text-black">Demande de devis</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                ↓
              </div>
            </div>

            <textarea 
              placeholder="Décrivez votre projet (date, nombre de convives...)" 
              rows={4} 
              className={`w-full bg-transparent border-b-2 py-3 outline-none transition-colors resize-none ${inputStyle}`}
            ></textarea>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 btn-mira w-full py-5 shadow-[0_10px_20px_-5px_rgba(179,36,36,0.3)]"
            >
              Envoyer la demande
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}