import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      number: 'Múltiples',
      label: 'Proyectos Completados',
      description: 'Obras exitosas entregadas'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      number: '5+',
      label: 'Sectores Atendidos',
      description: 'Hogares, oficinas, retail y más'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      number: '2017',
      label: 'Año de Fundación',
      description: 'Experiencia comprobada'
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      number: '100%',
      label: 'Compromiso',
      description: 'Calidad garantizada'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-5xl mb-2 text-white">{stat.number}</div>
              <div className="text-xl text-white mb-1">{stat.label}</div>
              <div className="text-sm text-cyan-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
