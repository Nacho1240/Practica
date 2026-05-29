import { Building2, Home, Factory, Hammer } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-cyan-400" />,
      title: 'Oficinas y Retail',
      description: 'Espacios comerciales y corporativos diseñados para maximizar la productividad y experiencia del cliente.',
      features: ['Oficinas corporativas', 'Locales retail', 'Centros comerciales']
    },
    {
      icon: <Home className="w-12 h-12 text-cyan-400" />,
      title: 'Hogares y Condominios',
      description: 'Proyectos residenciales que combinan confort, diseño y funcionalidad para crear espacios únicos.',
      features: ['Viviendas personalizadas', 'Condominios', 'Remodelaciones']
    },
    {
      icon: <Factory className="w-12 h-12 text-cyan-400" />,
      title: 'Centros Educativos',
      description: 'Infraestructura educativa diseñada para crear ambientes óptimos de aprendizaje y desarrollo.',
      features: ['Colegios', 'Universidades', 'Centros de capacitación']
    },
    {
      icon: <Hammer className="w-12 h-12 text-cyan-400" />,
      title: 'Diseño y Mantenimiento',
      description: 'Soluciones integrales que incluyen diseño arquitectónico y servicios de mantenimiento continuo.',
      features: ['Diseño arquitectónico', 'Mantenimiento preventivo', 'Renovaciones']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Nuestros <span className="text-cyan-400">Servicios</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Soluciones integrales de construcción adaptadas a cada tipo de proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
