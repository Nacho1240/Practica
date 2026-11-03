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
    <section id="servicios" className="bg-concreto">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="text-4xl sm:text-5xl">Qué hacemos</h2>
          <p className="max-w-lg text-lg text-gris">
            Trabajamos en cuatro tipos de proyecto. En todos podemos hacernos cargo del diseño, la obra y la mantención.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {servicios.map(({ icono: Icono, titulo, texto, incluye }) => (
            <li key={titulo} className="flex flex-col rounded-lg border-t-4 border-cielo bg-hueso p-7 shadow-[0_12px_30px_-24px_rgb(43_49_53/0.4)] sm:p-9">
              <Icono size={40} strokeWidth={1.5} className="text-cielo-tinta" aria-hidden="true" />
              <h3 className="mt-5 text-3xl">{titulo}</h3>
              <p className="mt-3 text-gris">{texto}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {incluye.map((item) => (
                  <li key={item} className="rounded-full bg-concreto px-3.5 py-1.5 text-[0.9375rem] font-medium">
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
