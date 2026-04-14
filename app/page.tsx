"use client";
import { useState } from 'react';
import Nav from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Carte from '@/components/Carte';
import Desserts from '@/components/Desserts';
import SectionDivider from '@/components/DividerProps';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isColor, setIsColor] = useState(false);

  return (
    <div className={isColor ? "bg-brand-light" : "bg-white"}>
      <Nav isColor={isColor} setIsColor={setIsColor} />
      <Hero isColor={isColor} />
      <AboutSection isColor={isColor} />
      <SectionDivider isColor={isColor} />
      <Carte isColor={isColor} />
      <SectionDivider isColor={isColor} />
      <Desserts isColor={isColor} />
      <SectionDivider isColor={isColor} />
      {/* Tu peux ajouter tes autres sections ici */}
      <Contact isColor={isColor} />
      <Footer isColor={isColor} />
    </div>
  );
}