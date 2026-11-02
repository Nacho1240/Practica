const valores = [
  {
    titulo: 'Experiencia',
    texto: 'En obra desde 2017, en proyectos residenciales, comerciales e institucionales.',
  },
  {
    titulo: 'Equipo profesional',
    texto: 'Profesionales con amplia trayectoria en diseño, construcción y mantención.',
  },
  {
    titulo: 'Soluciones eficientes',
    texto: 'Buscamos la forma más eficiente de resolver cada proyecto, en plazo y presupuesto.',
  },
  {
    titulo: 'Transparencia',
    texto: 'Comunicación clara y continua: sabes en qué está tu obra en cada etapa.',
  },
];

export function About() {
  return (
    <section id="nosotros" className="border-t border-linea">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <h2 className="titulo-ancho text-4xl sm:text-5xl lg:sticky lg:top-28 lg:col-span-5 lg:self-start">Un solo equipo para todo el proyecto</h2>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-xl leading-relaxed">
            En C-MVT diseñamos, construimos y mantenemos espacios para hogares, oficinas, retail, condominios, centros
            educativos y más.
          </p>
          <p className="mt-5 text-gris">
            Nuestro equipo gestiona cada proyecto de forma personalizada y con foco en la calidad. La transparencia es
            uno de nuestros pilares: mantenemos una comunicación clara y continua con cada cliente, desde el primer
            plano hasta la entrega.
          </p>

          <dl className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {valores.map((v) => (
              <div key={v.titulo} className="border-t-2 border-cyan-marca pt-4">
                <dt className="titulo-medio text-lg">{v.titulo}</dt>
                <dd className="mt-2 text-[0.975rem] text-gris">{v.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
