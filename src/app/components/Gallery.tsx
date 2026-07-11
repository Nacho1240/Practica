import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const projects = [
    {
      image: '/images/Metro2.jpg',
      title: 'Construccion de Local en Metro',
      category: 'Comercial',
      description: 'Construccion de Local DGL en Metro Vicente Valdes'
    },
    {
      image: '/images/Remodelacion.jpg',
      title: 'Remodelación de Colegio',
      category: 'Institucional',
      description: 'Remodelación general de colegio en Lo Abarca'
    },
    {
      image: '/images/Fournil.jpg',
      title: 'Remodelacion Local Le Fournil',
      category: 'Comercial',
      description: 'Remodelacion general en local Le Fournil en Mall Plaza'
    },
    {
      image: '/images/Happyland.jpg',
      title: 'Remodelacion de Happyland ',
      category: 'Comercial',
      description: 'Remodelacion y Habilitación Local Retail Happyland en San Bernardo'
    },
    {
      image: '/images/Paletas.jpg',
      title: 'Habilitación de Paletas',
      category: 'Comercial',
      description: 'Remodelación y habilitación de Terrazas en Local Paletas'
    },
    {
      image: '/images/Pisos.jpg',
      title: 'Mantención de Techumbre',
      category: 'Residencial',
      description: 'Construcción y Mantencion de Techumbre en casas de Cajon del Maipo'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Nuestra <span className="text-cyan-400">Galería</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-cyan-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}