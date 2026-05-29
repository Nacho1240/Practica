import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1774600166818-e554a4d4c376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzY1OTgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Torre Empresarial Centro',
      category: 'Comercial',
      description: 'Edificio de oficinas de 20 pisos'
    },
    {
      image: 'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzY2MjI1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Residencial Skyline',
      category: 'Residencial',
      description: 'Complejo de departamentos de lujo'
    },
    {
      image: 'https://images.unsplash.com/photo-1761877676992-0c232a7920f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzY2MjI1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Centro Logístico Norte',
      category: 'Industrial',
      description: 'Bodega industrial de 15,000 m²'
    },
    {
      image: 'https://images.unsplash.com/photo-1774979159518-7706ca7bb2e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzY2MjI1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Plaza Comercial Sunset',
      category: 'Comercial',
      description: 'Centro comercial de 3 niveles'
    },
    {
      image: 'https://images.unsplash.com/photo-1770821030454-5e3ccb2d96dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bW9kZXJuJTIwY29uc3RydWN0aW9uJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2NjIyNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Edificio Corporativo Vista',
      category: 'Comercial',
      description: 'Sede corporativa moderna'
    },
    {
      image: 'https://images.unsplash.com/photo-1762049297262-4eef6d6d4d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzY2MjI1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Conjunto Habitacional Palmas',
      category: 'Residencial',
      description: 'Desarrollo de 120 viviendas'
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
