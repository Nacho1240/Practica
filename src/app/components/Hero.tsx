import { MessageCircle, Phone } from 'lucide-react';
import { contacto } from '../datos';

// Línea de cota de plano: línea con marcas diagonales en los extremos y un rótulo al centro
function Cota({ rotulo, orientacion }: { rotulo: string; orientacion: 'horizontal' | 'vertical' }) {
  const vertical = orientacion === 'vertical';
  return (
    <div
      className={`pointer-events-none absolute flex items-center justify-center text-tinta ${
        vertical ? '-right-9 top-0 bottom-0 w-6 flex-col' : '-top-9 left-0 right-0 h-6'
      }`}
      aria-hidden="true"
    >
      <span
        className={`cota-linea absolute bg-current ${
          vertical ? 'inset-y-0 left-1/2 w-px origin-center' : 'inset-x-0 top-1/2 h-px origin-center'
        }`}
        style={{ '--eje': vertical ? 'scaleY(0)' : 'scaleX(0)' } as React.CSSProperties}
      />
      {/* Marcas a 45° en los extremos, como en un plano de arquitectura */}
      {(['inicio', 'fin'] as const).map((extremo) => (
        <svg
          key={extremo}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className={`absolute ${
            vertical
              ? `left-1/2 -translate-x-1/2 ${extremo === 'inicio' ? '-top-[7px]' : '-bottom-[7px]'}`
              : `top-1/2 -translate-y-1/2 ${extremo === 'inicio' ? '-left-[7px]' : '-right-[7px]'}`
          }`}
        >
          <line className="cota-trazo" pathLength={1} x1="2" y1="12" x2="12" y2="2" stroke="currentColor" strokeWidth="2" />
          <line className="cota-trazo" pathLength={1} x1={vertical ? 0 : 7} y1={vertical ? 7 : 0} x2={vertical ? 14 : 7} y2={vertical ? 7 : 14} stroke="currentColor" strokeWidth="1.25" />
        </svg>
      ))}
      <span
        className={`cota-texto relative bg-white lg:bg-papel text-[0.8125rem] font-semibold whitespace-nowrap ${
          vertical ? 'rotate-180 py-2 [writing-mode:vertical-rl]' : 'px-2'
        }`}
      >
        {rotulo}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      {/* Papel milimetrado detrás de la foto */}
      <div className="cuadricula absolute inset-y-0 right-0 hidden w-[44%] bg-papel lg:block" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-12 pb-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-7">
          <h1 className="titulo-ancho text-[2.15rem] min-[400px]:text-[2.4rem] sm:text-6xl xl:text-7xl">
            Diseñamos, construimos y mantenemos tus espacios.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-pretty text-gris sm:text-xl">
            Hogares, oficinas, locales comerciales, condominios y colegios. Un solo equipo se encarga de tu proyecto de
            principio a fin y te mantiene al tanto en cada etapa. Trabajamos en Chile desde 2017.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="boton boton-cyan">
              Cotizar proyecto
            </a>
            <a href="#proyectos" className="boton boton-borde">
              Ver proyectos
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-gris">
            <a href={contacto.telefonoHref} className="flex items-center gap-2 font-semibold text-marino">
              <Phone size={18} className="text-tinta" aria-hidden="true" />
              {contacto.telefono}
            </a>
            <a
              href={contacto.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-marino"
            >
              <MessageCircle size={18} className="text-tinta" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md pt-9 pr-9 lg:col-span-5 lg:max-w-none lg:pl-6">
          <div className="relative">
            <Cota rotulo="Local Le Fournil" orientacion="horizontal" />
            <Cota rotulo="Mall Plaza" orientacion="vertical" />
            <img
              src="/images/fournil.webp"
              alt="Local Le Fournil remodelado por C-MVT, con cielo de madera y muros de ladrillo"
              width={1200}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <figcaption className="mt-4 text-sm text-gris">Remodelación general del local Le Fournil.</figcaption>
        </figure>
      </div>
    </section>
  );
}
