import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl text-cyan-400">C-MVT</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                Galería
              </button>
              <button onClick={() => scrollToSection('contacto')} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors">
                Contacto
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-slate-300 hover:text-cyan-400 py-2 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-slate-300 hover:text-cyan-400 py-2 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-slate-300 hover:text-cyan-400 py-2 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left text-slate-300 hover:text-cyan-400 py-2 transition-colors">
              Galería
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors w-full">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
