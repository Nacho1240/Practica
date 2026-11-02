const testimonios = [
  {
    nombre: 'María González',
    cargo: 'Directora de Operaciones',
    texto:
      'Excelente trabajo en la construcción de nuestras nuevas oficinas. Cumplieron con los tiempos y superaron nuestras expectativas en calidad.',
  },
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Propietario, casa residencial',
    texto:
      'Construyeron la casa de nuestros sueños. Profesionales, atentos a cada detalle y siempre dispuestos a escuchar nuestras ideas.',
  },
  {
    nombre: 'Ana Martínez',
    cargo: 'Gerente General',
    texto:
      'La bodega industrial quedó perfecta. Gran capacidad de gestión y excelente comunicación durante todo el proyecto.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-papel">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="titulo-ancho text-4xl sm:text-5xl">Lo que dicen nuestros clientes</h2>

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0">
          {testimonios.map((t) => (
            <li key={t.nombre} className="md:border-l md:border-marino/20 md:px-8 md:first:border-l-0 md:first:pl-0">
              <figure className="flex h-full flex-col">
                <span className="titulo-ancho block h-12 text-7xl text-cyan-marca" aria-hidden="true">
                  “
                </span>
                <blockquote className="flex-1 text-lg leading-relaxed">{t.texto}</blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold">{t.nombre}</span>
                  <span className="block text-sm text-gris">{t.cargo}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
