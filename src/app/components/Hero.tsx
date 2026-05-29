import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1774600166818-e554a4d4c376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzY1OTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construcción moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Construyendo el <span className="text-cyan-400">Futuro</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Soluciones integrales en diseño, construcción y mantenimiento desde 2017
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            Solicitar Cotización
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Ver Proyectos
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
