import { ImageWithFallback } from './figma/ImageWithFallback';

export function Clients() {
  const clients = [
    { name: 'Itaú', logo: '/logos/itau.png' },
    { name: 'Aramark', logo: '/logos/aramark.png' },
    { name: 'Happyland', logo: '/logos/happyland.png' },
    { name: 'Paletas', logo: '/logos/palettas.webp' },
    { name: 'Cory', logo: '/logos/Cory.png' },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Nos <span className="text-cyan-400">Eligieron</span> con Seguridad
          </h2>
          <p className="text-slate-300">Empresas que confían en nuestro trabajo</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg flex items-center justify-center min-h-[120px] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ImageWithFallback
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}