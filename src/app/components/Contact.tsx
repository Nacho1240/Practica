import { CheckCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { contacto } from '../datos';

const medios = [
  { Icono: Phone, etiqueta: 'Teléfono', valor: contacto.telefono, href: contacto.telefonoHref, externo: false },
  { Icono: MessageCircle, etiqueta: 'WhatsApp', valor: 'Escríbenos', href: contacto.whatsappHref, externo: true },
  { Icono: Mail, etiqueta: 'Email', valor: contacto.email, href: contacto.emailHref, externo: false },
];

const campo =
  'w-full rounded-md border border-grafito/25 bg-hueso px-4 py-3 text-grafito placeholder:text-gris/70 transition-colors focus:border-cielo-tinta focus:outline-2 focus:outline-offset-0 focus:outline-cielo-tinta';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="bg-concreto px-4 pb-16 sm:px-8 lg:pb-24">
      {/* Recuadro con bordes redondeados y fondo blanco suave, más descansado para la vista que el blanco puro */}
      <div className="mx-auto grid max-w-7xl gap-14 rounded-2xl border-t-4 border-cielo bg-hueso px-5 py-14 shadow-[0_20px_50px_-30px_rgb(43_49_53/0.35)] sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-14 lg:py-20">
        <div className="lg:col-span-6">
          <h2 className="text-4xl sm:text-5xl">Conversemos sobre tu proyecto</h2>
          <p className="mt-6 max-w-md text-lg text-gris">
            Llámanos o escríbenos y te ayudamos a definir el alcance, los plazos y una cotización.
          </p>

          <ul className="mt-10 divide-y divide-concreto-medio/60 border-y border-concreto-medio/60">
            {medios.map(({ Icono, etiqueta, valor, href, externo }) => (
              <li key={etiqueta}>
                <a
                  href={href}
                  {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-5 py-5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-cielo-claro text-cielo-tinta">
                    <Icono size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-gris">{etiqueta}</span>
                    <span className="block font-titulo text-2xl font-bold group-hover:text-cielo-tinta sm:text-[1.75rem]">
                      {valor}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-sm">
            <h3 className="text-xl">Horario de atención</h3>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-gris">
              <dt>Lunes a viernes</dt>
              <dd>9:00 a 18:00</dd>
              <dt>Sábado</dt>
              <dd>9:00 a 14:00</dd>
              <dt>Domingo</dt>
              <dd>Cerrado</dd>
            </dl>
            <p className="mt-4 text-gris">Trabajamos en Chile.</p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <form onSubmit={handleSubmit} className="rounded-lg bg-concreto p-6 sm:p-9">
            <h3 className="text-3xl">Envíanos un mensaje</h3>

            <div className="mt-7 space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={campo}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={campo}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block font-semibold">
                  Teléfono <span className="font-normal text-gris">(opcional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={campo}
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${campo} resize-y`}
                  placeholder="Cuéntanos qué necesitas construir, remodelar o mantener"
                />
              </div>
            </div>

            <div aria-live="polite">
              {submitted && (
                <p className="mt-5 flex items-center gap-3 rounded-sm bg-cielo-claro px-4 py-3">
                  <CheckCircle size={20} className="shrink-0 text-cielo-tinta" aria-hidden="true" />
                  Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
                </p>
              )}
            </div>

            <button type="submit" className="boton boton-grafito mt-6 w-full">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
