import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      position: 'Directora de Operaciones, TechCorp',
      initials: 'MG',
      text: 'Excelente trabajo en la construcción de nuestras nuevas oficinas. Cumplieron con los tiempos y superaron nuestras expectativas en calidad.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Propietario, Casa Residencial',
      initials: 'CR',
      text: 'Construyeron la casa de nuestros sueños. Profesionales, atentos a cada detalle y siempre dispuestos a escuchar nuestras ideas.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      position: 'Gerente General, IndustriaMax',
      initials: 'AM',
      text: 'La bodega industrial quedó perfecta. Gran capacidad de gestión y excelente comunicación durante todo el proyecto.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Lo Que Dicen Nuestros <span className="text-cyan-400">Clientes</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors"
            >
              <Quote className="w-10 h-10 text-cyan-400 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
