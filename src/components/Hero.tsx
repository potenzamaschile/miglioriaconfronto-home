
import React from 'react';
import { ShieldCheck, Search, Check } from 'lucide-react';

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
    <section className={`${bgStyle} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-800">
                Migliori Prodotti a Confronto: 
                <span className={primaryColor}> Scegli con Sicurezza</span> e Acquista in Pochi Click
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Compariamo i migliori prodotti per garantirti solo il meglio. Acquista in tutta sicurezza dai produttori ufficiali.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={primaryBtn}>
                  <div className="flex items-center">
                    <Search size={20} className="mr-2" />
                    Confronta Prodotti
                  </div>
                </button>
                <button className={secondaryBtn}>
                  Scopri Come Funziona
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center">
                  <div className={`${isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} mr-2`}>
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-gray-700">Acquisti 100% Sicuri</span>
                </div>
                <div className="flex items-center">
                  <div className={`${isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} mr-2`}>
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700">Prodotti Originali</span>
                </div>
                <div className="flex items-center">
                  <div className={`${isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} mr-2`}>
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700">Confronti Imparziali</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className={`relative w-full max-w-md ${isDesign1 ? 'bg-design1-light' : 'bg-design2-light'} p-2 rounded-xl shadow-lg`}>
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Donna che compara prodotti online"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${isDesign1 ? 'bg-design1-primary' : 'bg-design2-primary'} text-white`}>
                      Consigliato
                    </div>
                    <div className="text-gray-600 text-sm">Appena aggiornato</div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Migliori prodotti beauty 2023</h3>
                  <p className="text-gray-600 text-sm mb-4">Confronto tra i prodotti più amati e consigliati dell'anno</p>
                  <button className={`w-full ${isDesign1 ? 'bg-design1-primary hover:bg-design1-accent' : 'bg-design2-primary hover:bg-design2-accent'} text-white py-2 rounded transition-colors`}>
                    Confronta ora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
