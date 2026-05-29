import { Award, Users, Target, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Experiencia',
      description: 'Desde 2017 en el sector'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Equipo Profesional',
      description: 'Profesionales con amplia trayectoria'
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: 'Innovación',
      description: 'Enfoque en soluciones eficientes'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Transparencia',
      description: 'Comunicación clara y continua'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Sobre <span className="text-cyan-400">Nosotros</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              En C-MVT, ofrecemos soluciones integrales en diseño, construcción y mantenimiento, abarcando sectores como hogares, oficinas, retail, condominios, centros educativos y más. Desde 2017, hemos combinado nuestra experiencia con la calidad para entregar proyectos que cumplen con las más altas expectativas de nuestros clientes.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Nuestro equipo, conformado por profesionales con amplia trayectoria, se distingue por su enfoque en la innovación y su capacidad para gestionar proyectos de manera eficiente y personalizada. La transparencia es uno de nuestros pilares fundamentales, por lo que nos aseguramos de mantener una comunicación clara y continua con nuestros clientes en cada etapa del proyecto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-slate-800 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzY1OTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nuestro equipo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl mb-1">2017</div>
              <div className="text-sm">Año de Fundación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
