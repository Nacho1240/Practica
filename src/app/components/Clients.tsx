import { ImageWithFallback } from './figma/ImageWithFallback';

const clientes = [
  { nombre: 'Itaú', logo: '/logos/itau.png' },
  { nombre: 'Aramark', logo: '/logos/aramark.png' },
  { nombre: 'Happyland', logo: '/logos/happyland.png' },
  { nombre: 'Paletas', logo: '/logos/palettas.webp' },
  { nombre: 'Cory', logo: '/logos/Cory.png' },
];

export function Clients() {
  return (
    <section className="border-t border-concreto-medio/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 className="text-3xl">Empresas que han confiado en nosotros</h2>
        <ul className="mt-10 grid grid-cols-2 border-t border-l border-concreto-medio/60 sm:grid-cols-3 lg:grid-cols-5">
          {clientes.map((c) => (
            <li key={c.nombre} className="flex h-32 items-center justify-center border-r border-b border-concreto-medio/60 p-8 last:col-span-2 sm:last:col-span-1">
              <ImageWithFallback
                src={c.logo}
                alt={c.nombre}
                loading="lazy"
                className="max-h-16 max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
