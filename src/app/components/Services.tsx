import { Building2, GraduationCap, Home, Ruler } from 'lucide-react';

const servicios = [
  {
    icono: Building2,
    titulo: 'Oficinas y retail',
    texto: 'Espacios comerciales y corporativos pensados para el trabajo diario y la experiencia de tus clientes.',
    incluye: ['Oficinas corporativas', 'Locales comerciales', 'Centros comerciales'],
  },
  {
    icono: Home,
    titulo: 'Hogares y condominios',
    texto: 'Proyectos residenciales que combinan confort, diseño y funcionalidad.',
    incluye: ['Viviendas personalizadas', 'Condominios', 'Remodelaciones'],
  },
  {
    icono: GraduationCap,
    titulo: 'Centros educativos',
    texto: 'Infraestructura para aprender y enseñar en buenas condiciones.',
    incluye: ['Colegios', 'Universidades', 'Centros de capacitación'],
  },
  {
    icono: Ruler,
    titulo: 'Diseño y mantención',
    texto: 'Diseño arquitectónico antes de la obra y mantención continua después de la entrega.',
    incluye: ['Diseño arquitectónico', 'Mantención preventiva', 'Renovaciones'],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-papel">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="titulo-ancho text-4xl sm:text-5xl lg:col-span-6">Qué hacemos</h2>
          <p className="max-w-lg text-lg text-gris lg:col-span-5 lg:col-start-8">
            Trabajamos en cuatro tipos de proyecto. En todos podemos hacernos cargo del diseño, la obra y la mantención.
          </p>
        </div>

        <ul className="mt-14 border-b border-marino/25">
          {servicios.map(({ icono: Icono, titulo, texto, incluye }) => (
            <li
              key={titulo}
              className="grid gap-4 border-t border-marino/25 py-8 md:grid-cols-12 md:gap-8 lg:py-10"
            >
              <div className="flex items-center gap-4 md:col-span-5 lg:col-span-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-cyan-marca">
                  <Icono size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="titulo-medio text-2xl">{titulo}</h3>
              </div>
              <p className="text-gris md:col-span-7 lg:col-span-4">{texto}</p>
              <ul className="flex flex-wrap gap-2 md:col-span-7 md:col-start-6 lg:col-span-4 lg:col-start-9 lg:justify-end">
                {incluye.map((item) => (
                  <li key={item} className="rounded-full border border-marino/20 bg-white px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
