import { Lightbulb, MessagesSquare, ShieldCheck, Users } from 'lucide-react';

const valores = [
  {
    Icono: ShieldCheck,
    titulo: 'Experiencia',
    texto: 'En obra desde 2017, en proyectos residenciales, comerciales e institucionales.',
  },
  {
    Icono: Users,
    titulo: 'Equipo profesional',
    texto: 'Profesionales con amplia trayectoria en diseño, construcción y mantención.',
  },
  {
    Icono: Lightbulb,
    titulo: 'Soluciones eficientes',
    texto: 'Buscamos la forma más eficiente de resolver cada proyecto, en plazo y presupuesto.',
  },
  {
    Icono: MessagesSquare,
    titulo: 'Transparencia',
    texto: 'Comunicación clara y continua: sabes en qué está tu obra en cada etapa.',
  },
];

export function About() {
  return (
    <section id="nosotros">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <h2 className="text-4xl sm:text-5xl">Un solo equipo para todo el proyecto</h2>
          <p className="mt-6 text-xl leading-relaxed">
            En C-MVT diseñamos, construimos y mantenemos espacios para hogares, oficinas, retail, condominios, centros
            educativos y más.
          </p>
          <p className="mt-5 text-gris">
            Nuestro equipo gestiona cada proyecto de forma personalizada y con foco en la calidad. La transparencia es
            uno de nuestros pilares: mantenemos una comunicación clara y continua con cada cliente, desde el diseño hasta
            la entrega.
          </p>
        </div>

        <figure>
          <div className="relative pr-5 pb-5 sm:pr-8 sm:pb-8">
            {/* Bloque cyan cielo detrás de la foto */}
            <div className="absolute top-8 right-0 bottom-0 left-8 rounded-lg bg-cielo" aria-hidden="true" />
            <img
              src="/images/pisos.webp"
              alt="Trabajador de C-MVT construyendo una techumbre en el Cajón del Maipo, con la cordillera de fondo"
              width={774}
              height={1032}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-lg object-cover object-[50%_35%]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-gris">Techumbres en el Cajón del Maipo.</figcaption>
        </figure>
      </div>

      <div className="bg-concreto">
        <dl className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-8">
          {valores.map(({ Icono, titulo, texto }) => (
            <div key={titulo}>
              <dt className="flex items-center gap-3 font-titulo text-xl font-bold">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cielo">
                  <Icono size={21} strokeWidth={1.9} aria-hidden="true" />
                </span>
                {titulo}
              </dt>
              <dd className="mt-3 text-gris">{texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
