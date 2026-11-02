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
    alto: 'lg:h-[27rem]',
  },
  {
    imagen: '/images/paletas.webp',
    titulo: 'Terrazas de Paletas',
    tipo: 'Comercial',
    descripcion: 'Remodelación y habilitación de las terrazas del local.',
    columnas: 'lg:col-span-5',
    alto: 'lg:h-[27rem]',
  },
  {
    imagen: '/images/metro2.webp',
    titulo: 'Local en Metro Vicente Valdés',
    tipo: 'Comercial',
    descripcion: 'Construcción del local DGL en la estación Vicente Valdés.',
    columnas: 'lg:col-span-4',
    alto: 'lg:h-[24rem]',
  },
  {
    imagen: '/images/remodelacion.webp',
    titulo: 'Colegio en Lo Abarca',
    tipo: 'Institucional',
    descripcion: 'Remodelación general del colegio.',
    columnas: 'lg:col-span-4',
    alto: 'lg:h-[24rem]',
  },
  {
    imagen: '/images/pisos.webp',
    titulo: 'Techumbres en Cajón del Maipo',
    tipo: 'Residencial',
    descripcion: 'Construcción y mantención de techumbres en viviendas.',
    columnas: 'lg:col-span-4',
    alto: 'lg:h-[24rem]',
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
    <section id="proyectos" className="border-t border-linea">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="titulo-ancho text-4xl sm:text-5xl lg:col-span-6">Obras realizadas</h2>
          <p className="max-w-lg text-lg text-gris lg:col-span-5 lg:col-start-8">
            Algunos de los proyectos que hemos entregado en locales comerciales, colegios y viviendas.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          {proyectos.map((p) => (
            <li key={p.titulo} className={p.columnas}>
              <button
                type="button"
                onClick={() => abrir(p)}
                className={`group relative block w-full overflow-hidden bg-papel ${p.alto}`}
                aria-label={`Ampliar foto: ${p.titulo}`}
              >
                <ImageWithFallback
                  src={p.imagen}
                  alt={p.titulo}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:aspect-auto motion-reduce:transition-none"
                />
                <span className="absolute right-3 bottom-3 grid size-10 place-items-center rounded-full bg-white/90 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={18} aria-hidden="true" />
                </span>
              </button>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="titulo-medio text-lg">{p.titulo}</h3>
                <span className="shrink-0 text-sm font-semibold text-tinta">{p.tipo}</span>
              </div>
              <p className="mt-1 text-[0.975rem] text-gris">{p.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogo}
        onClick={(e) => e.target === e.currentTarget && cerrar()}
        onClose={() => setActivo(null)}
        className="m-auto max-h-[92vh] w-[min(64rem,92vw)] bg-white p-0 backdrop:bg-marino/85"
        aria-label={activo?.titulo}
      >
        {activo && (
          <figure className="flex max-h-[92vh] flex-col">
            <img src={activo.imagen} alt={activo.titulo} className="min-h-0 flex-1 bg-marino object-contain" />
            <figcaption className="flex items-start justify-between gap-6 p-5">
              <div>
                <p className="titulo-medio text-xl">{activo.titulo}</p>
                <p className="mt-1 text-gris">{activo.descripcion}</p>
              </div>
              <button type="button" onClick={cerrar} className="-m-2 p-2" aria-label="Cerrar">
                <X size={24} />
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
