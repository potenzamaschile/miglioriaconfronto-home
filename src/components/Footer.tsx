
import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

interface FooterProps {
  variant: 'design1' | 'design2';
}

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const isDesign1 = variant === 'design1';
  const currentYear = new Date().getFullYear();
  
  const bgColor = isDesign1 ? 'bg-gray-900' : 'bg-design2-dark';
  const primaryColor = isDesign1 ? 'text-design1-primary' : 'text-design2-primary';
  const linkColor = isDesign1 ? 'text-gray-400 hover:text-design1-primary' : 'text-gray-400 hover:text-design2-primary';
  
  return (
    <footer className={`${bgColor} text-white`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className={primaryColor} size={28} />
              <span className="font-montserrat font-bold text-xl">
                Migliori-A-Confronto
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Il tuo sito di fiducia per confrontare i migliori prodotti per donna, garantendo un acquisto sicuro dai produttori ufficiali.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`p-2 rounded-full ${primaryColor} bg-white/10 hover:bg-white/20 transition-colors`}>
                <Mail size={20} />
              </a>
              <a href="#" className={`p-2 rounded-full ${primaryColor} bg-white/10 hover:bg-white/20 transition-colors`}>
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Categorie</h4>
            <ul className="space-y-2">
              <li><a href="#" className={linkColor}>Beauty e Cosmetici</a></li>
              <li><a href="#" className={linkColor}>Cura della Persona</a></li>
              <li><a href="#" className={linkColor}>Benessere e Salute</a></li>
              <li><a href="#" className={linkColor}>Casa e Lifestyle</a></li>
              <li><a href="#" className={linkColor}>Moda e Accessori</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Link Utili</h4>
            <ul className="space-y-2">
              <li><a href="#" className={linkColor}>Chi Siamo</a></li>
              <li><a href="#" className={linkColor}>Come Funziona</a></li>
              <li><a href="#" className={linkColor}>I Nostri Valori</a></li>
              <li><a href="#" className={linkColor}>FAQ</a></li>
              <li><a href="#" className={linkColor}>Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Informazioni</h4>
            <ul className="space-y-2">
              <li><a href="#" className={linkColor}>Privacy Policy</a></li>
              <li><a href="#" className={linkColor}>Cookie Policy</a></li>
              <li><a href="#" className={linkColor}>Termini e Condizioni</a></li>
              <li><a href="#" className={linkColor}>Contatti</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Migliori-A-Confronto.com | Tutti i diritti riservati
            </div>
            <div className="text-gray-500 text-sm">
              <span>Made with ❤️ in Italia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
