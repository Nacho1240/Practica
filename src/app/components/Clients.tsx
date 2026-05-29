export function Clients() {
  const clients = [
    {
      name: 'Itaú',
      logo: (
        <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-full">
          <rect width="200" height="80" fill="#EC7000" rx="6"/>
          <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#fff" textAnchor="middle" dominantBaseline="middle">Itaú</text>
        </svg>
      )
    },
    {
      name: 'Aramark',
      logo: (
        <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-full">
          <rect width="200" height="80" fill="#003087" rx="6"/>
          <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#fff" textAnchor="middle" dominantBaseline="middle">ARAMARK</text>
        </svg>
      )
    },
    {
      name: 'Happyland',
      logo: (
        <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-full">
          <rect width="200" height="80" fill="#FFD700" rx="6"/>
          <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a1a1a" textAnchor="middle" dominantBaseline="middle">Happyland</text>
        </svg>
      )
    }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg flex items-center justify-center min-h-[120px] hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
