import { CheckCircle, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { contacto } from '../datos';

const campo =
  'w-full rounded-sm border border-marino/25 bg-white px-4 py-3 text-marino placeholder:text-gris/70 transition-colors focus:border-tinta focus:outline-2 focus:outline-offset-0 focus:outline-tinta';

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
    <section id="contacto" className="bg-cyan-marca">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-6">
          <h2 className="titulo-ancho text-4xl sm:text-5xl">Conversemos sobre tu proyecto</h2>
          <p className="mt-6 max-w-md text-lg">
            Llámanos o escríbenos y te ayudamos a definir el alcance, los plazos y una cotización.
          </p>

          <a
            href={contacto.telefonoHref}
            className="titulo-ancho mt-10 inline-block text-[2rem] decoration-2 underline-offset-8 hover:underline sm:text-5xl"
          >
            {contacto.telefono}
          </a>

          <ul className="mt-8 space-y-3 text-lg">
            <li>
              <a
                href={contacto.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-semibold underline-offset-4 hover:underline"
              >
                <MessageCircle size={22} aria-hidden="true" />
                Escribir por WhatsApp
              </a>
            </li>
            <li>
              <a
                href={contacto.emailHref}
                className="inline-flex items-center gap-3 font-semibold underline-offset-4 hover:underline"
              >
                <Mail size={22} aria-hidden="true" />
                {contacto.email}
              </a>
            </li>
          </ul>

          <div className="mt-12 max-w-sm border-t border-marino/30 pt-6">
            <h3 className="font-semibold">Horario de atención</h3>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
              <dt>Lunes a viernes</dt>
              <dd>9:00 a 18:00</dd>
              <dt>Sábado</dt>
              <dd>9:00 a 14:00</dd>
              <dt>Domingo</dt>
              <dd>Cerrado</dd>
            </dl>
            <p className="mt-4">Trabajamos en Chile.</p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-[8px_8px_0_var(--color-marino)] sm:p-9">
            <h3 className="titulo-medio text-2xl">Envíanos un mensaje</h3>

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
                <p className="mt-5 flex items-center gap-3 rounded-sm bg-papel px-4 py-3">
                  <CheckCircle size={20} className="shrink-0 text-tinta" aria-hidden="true" />
                  Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
                </p>
              )}
            </div>

            <button type="submit" className="boton boton-marino mt-6 w-full">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
