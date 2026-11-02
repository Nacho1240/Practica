import { Expand, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Proyecto = {
  imagen: string;
  titulo: string;
  tipo: string;
  descripcion: string;
  // Columnas que ocupa en escritorio y altura de la foto
  columnas: string;
  alto: string;
};

const proyectos: Proyecto[] = [
  {
    imagen: '/images/happyland.webp',
    titulo: 'Local Happyland',
    tipo: 'Comercial',
    descripcion: 'Remodelación y habilitación de local retail en San Bernardo.',
    columnas: 'lg:col-span-7',
    alto: 'lg:h-[30rem]',
  },
  {
    imagen: '/images/fournil.webp',
    titulo: 'Local Le Fournil',
    tipo: 'Comercial',
    descripcion: 'Remodelación general del local en Mall Plaza.',
    columnas: 'lg:col-span-5',
    alto: 'lg:h-[30rem]',
  },
  {
    imagen: '/images/paletas.webp',
    titulo: 'Terrazas de Paletas',
    tipo: 'Comercial',
    descripcion: 'Remodelación y habilitación de las terrazas del local.',
    columnas: 'lg:col-span-5',
    alto: 'lg:h-[30rem]',
  },
  {
    imagen: '/images/remodelacion.webp',
    titulo: 'Colegio en Lo Abarca',
    tipo: 'Institucional',
    descripcion: 'Remodelación general del colegio.',
    columnas: 'lg:col-span-7',
    alto: 'lg:h-[30rem]',
  },
  {
    imagen: '/images/metro2.webp',
    titulo: 'Local en Metro Vicente Valdés',
    tipo: 'Comercial',
    descripcion: 'Construcción del local DGL en la estación Vicente Valdés.',
    columnas: 'lg:col-span-6',
    alto: 'lg:h-[26rem]',
  },
  {
    imagen: '/images/pisos.webp',
    titulo: 'Techumbres en Cajón del Maipo',
    tipo: 'Residencial',
    descripcion: 'Construcción y mantención de techumbres en viviendas.',
    columnas: 'lg:col-span-6',
    alto: 'lg:h-[26rem]',
  },
];

export function Gallery() {
  const dialogo = useRef<HTMLDialogElement>(null);
  const [activo, setActivo] = useState<Proyecto | null>(null);

  const abrir = (p: Proyecto) => {
    setActivo(p);
    dialogo.current?.showModal();
  };
  const cerrar = () => dialogo.current?.close();

  return (
    <section id="proyectos" className="bg-grafito text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="text-4xl sm:text-5xl">Obras realizadas</h2>
          <p className="max-w-lg text-lg text-concreto-medio">
            Algunos de los proyectos que hemos entregado en locales comerciales, colegios y viviendas. Toca una foto para
            verla completa.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {proyectos.map((p) => (
            <li key={p.titulo} className={p.columnas}>
              <button
                type="button"
                onClick={() => abrir(p)}
                className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-black text-left lg:aspect-auto ${p.alto}`}
                aria-label={`Ampliar foto: ${p.titulo}`}
              >
                <ImageWithFallback
                  src={p.imagen}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 pt-16 sm:p-6 sm:pt-20">
                  <span className="inline-block rounded-full bg-cielo px-3 py-0.5 text-sm font-semibold text-grafito">
                    {p.tipo}
                  </span>
                  <span className="mt-2 block font-titulo text-2xl font-bold">{p.titulo}</span>
                  <span className="mt-1 block text-[0.975rem] text-white/85">{p.descripcion}</span>
                </span>
                <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/90 text-grafito opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={18} aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogo}
        onClick={(e) => e.target === e.currentTarget && cerrar()}
        onClose={() => setActivo(null)}
        className="m-auto max-h-[92vh] w-[min(64rem,92vw)] overflow-hidden rounded-lg bg-fondo p-0 text-grafito backdrop:bg-grafito/90"
        aria-label={activo?.titulo}
      >
        {activo && (
          <figure className="flex max-h-[92vh] flex-col">
            <img src={activo.imagen} alt={activo.titulo} className="min-h-0 flex-1 bg-black object-contain" />
            <figcaption className="flex items-start justify-between gap-6 p-5">
              <div>
                <p className="font-titulo text-2xl font-bold">{activo.titulo}</p>
                <p className="mt-1 text-gris">{activo.descripcion}</p>
              </div>
              <button type="button" onClick={cerrar} className="-m-2 p-2" aria-label="Cerrar">
                <X size={26} />
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
