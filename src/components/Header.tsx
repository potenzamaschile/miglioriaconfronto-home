import React from 'react';
import { Search, Menu, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  variant: 'design1' | 'design2';
}

const Header: React.FC<HeaderProps> = ({ variant }) => {
  const isDesign1 = variant === 'design1';
  
  return (
    <header className={`sticky top-0 z-50 w-full ${isDesign1 ? 'bg-white shadow-sm' : 'bg-design2-light shadow-sm'}`}>
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShieldCheck className={isDesign1 ? 'text-design1-primary' : 'text-design2-primary'} size={28} />
          <span className={`font-montserrat font-bold text-xl ${isDesign1 ? 'text-design1-dark' : 'text-design2-dark'}`}>
            Migliori-A-Confronto
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className={`font-medium ${isDesign1 ? 'text-design1-dark hover:text-design1-primary' : 'text-design2-dark hover:text-design2-primary'}`}>
            Come Funziona
          </a>
          <a href="#" className={`font-medium ${isDesign1 ? 'text-design1-dark hover:text-design1-primary' : 'text-design2-dark hover:text-design2-primary'}`}>
            I Nostri Valori
          </a>
          <a href="#" className={`font-medium ${isDesign1 ? 'text-design1-dark hover:text-design1-primary' : 'text-design2-dark hover:text-design2-primary'}`}>
            Recensioni
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className={`p-2 rounded-full ${isDesign1 ? 'hover:bg-design1-light text-design1-dark' : 'hover:bg-design2-light text-design2-dark'}`}>
            <Search size={20} />
          </button>
          <button className={`p-2 md:hidden rounded-full ${isDesign1 ? 'hover:bg-design1-light text-design1-dark' : 'hover:bg-design2-light text-design2-dark'}`}>
            <Menu size={20} />
          </button>
          <button className={isDesign1 ? 'btn-primary-1 hidden md:block' : 'btn-primary-2 hidden md:block'}>
            Confronta Ora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
