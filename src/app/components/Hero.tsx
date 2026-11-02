import { Building2, CalendarCheck, HardHat, MessageCircle, Phone } from 'lucide-react';
import { contacto } from '../datos';

const claves = [
  { Icono: CalendarCheck, texto: 'En obra desde 2017' },
  { Icono: HardHat, texto: 'Diseño, construcción y mantención' },
  { Icono: Building2, texto: 'Hogares, empresas y colegios' },
];

export function Hero() {
  return (
    <section id="inicio">
      <div className="relative flex min-h-[100svh] items-end overflow-hidden bg-grafito text-white lg:items-center">
        <img
          src="/images/paletas.webp"
          alt=""
          width={1200}
          height={1600}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
        />
        {/* Velo gris concreto para que el texto se lea sobre la foto */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-grafito via-grafito/75 to-grafito/20 lg:bg-gradient-to-r lg:from-grafito/95 lg:via-grafito/70 lg:to-grafito/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-14 sm:px-8 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] font-extrabold sm:text-6xl lg:text-7xl">
              Diseñamos, construimos y mantenemos tus espacios
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
              Hogares, oficinas, locales comerciales, condominios y colegios. Un solo equipo a cargo de tu proyecto, de
              principio a fin.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="boton boton-cielo">
                Cotizar proyecto
              </a>
              <a href="#proyectos" className="boton boton-claro">
                Ver proyectos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-semibold">
              <a href={contacto.telefonoHref} className="flex items-center gap-2 hover:text-cielo">
                <Phone size={19} aria-hidden="true" />
                {contacto.telefono}
              </a>
              <a
                href={contacto.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cielo"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="absolute right-5 bottom-4 hidden text-sm text-white/75 sm:right-8 lg:block">
          Terrazas de Paletas, remodeladas por C-MVT
        </p>
      </div>

      {/* Franja cyan cielo con lo esencial de la empresa */}
      <div className="bg-cielo">
        <ul className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:px-8 md:grid-cols-3 md:gap-8">
          {claves.map(({ Icono, texto }) => (
            <li key={texto} className="flex items-center gap-4">
              <Icono size={30} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
              <span className="font-titulo text-xl font-bold">{texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
