
import React from 'react';
import { ShieldCheck, Search } from 'lucide-react';

interface HeroProps {
  variant: 'design1' | 'design2';
}

const Hero: React.FC<HeroProps> = ({ variant }) => {
  const isDesign1 = variant === 'design1';
  
  const bgStyle = isDesign1 
    ? 'bg-gradient-to-r from-design1-light via-white to-design1-light' 
    : 'bg-gradient-to-r from-design2-light via-white to-design2-light';

  const primaryBtn = isDesign1 ? 'btn-primary-1' : 'btn-primary-2';
  const secondaryBtn = isDesign1 ? 'btn-secondary-1' : 'btn-secondary-2';
  const primaryColor = isDesign1 ? 'text-design1-primary' : 'text-design2-primary';
  
  return (
    <section className={`${bgStyle} py-16 md:py-24`} id="hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-800">
              Migliori Prodotti a Confronto: 
              <span className={primaryColor}> Scegli con Sicurezza</span> e Acquista in Pochi Click
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Compariamo i migliori prodotti per garantirti solo il meglio. Acquista in tutta sicurezza dai produttori ufficiali.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://rassodante-glutei.migliori-a-confronto.com/" 
                className={primaryBtn}
                target="_blank" 
                rel="noopener"
              >
                <div className="flex items-center justify-center w-full">
                  <Search size={20} className="mr-2" />
                  Confronta Prodotti
                </div>
              </a>
              <a 
                href="#come-funziona" 
                className={secondaryBtn}
              >
                Scopri Come Funziona
              </a>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <div className="flex items-center justify-center">
                <div className={`${isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} mr-2`}>
                  <ShieldCheck size={20} />
                </div>
                <span className="text-gray-700">Acquisti 100% Sicuri</span>
              </div>
              <div className="flex items-center justify-center">
                <div className={`${isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} mr-2`}>
                  <ShieldCheck size={20} />
                </div>
                <span className="text-gray-700">Prodotti Originali</span>
              </div>
              <div className="flex items-center justify-center">
                <div className={`${isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} mr-2`}>
                  <ShieldCheck size={20} />
                </div>
                <span className="text-gray-700">Confronti Imparziali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
