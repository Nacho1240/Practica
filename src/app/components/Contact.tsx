import { Mail, MessageCircle, Phone } from 'lucide-react';
import { contacto } from '../datos';

const medios = [
  { Icono: Phone, etiqueta: 'Teléfono', valor: contacto.telefono, href: contacto.telefonoHref, externo: false },
  { Icono: MessageCircle, etiqueta: 'WhatsApp', valor: 'Escríbenos', href: contacto.whatsappHref, externo: true },
  { Icono: Mail, etiqueta: 'Email', valor: contacto.email, href: contacto.emailHref, externo: false },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-concreto px-4 py-16 sm:px-8 lg:py-24">
      {/* Recuadro con bordes redondeados y fondo blanco suave, más descansado para la vista que el blanco puro */}
      <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border-t-4 border-cielo bg-hueso px-5 py-14 shadow-[0_20px_50px_-30px_rgb(43_49_53/0.35)] sm:px-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 lg:px-14 lg:py-20">
        <div className="lg:col-span-5 lg:row-start-1">
          <h2 className="text-4xl sm:text-5xl">Conversemos sobre tu proyecto</h2>
          <p className="mt-6 max-w-md text-lg text-gris">
            Llámanos o escríbenos y te ayudamos a definir el alcance, los plazos y una cotización.
          </p>
        </div>

        <ul className="divide-y divide-concreto-medio/60 border-y border-concreto-medio/60 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-center">
          {medios.map(({ Icono, etiqueta, valor, href, externo }) => (
            <li key={etiqueta}>
              <a
                href={href}
                {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-5 py-6 sm:gap-6 sm:py-8"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-cielo-claro text-cielo-tinta sm:size-14">
                  <Icono size={24} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-gris">{etiqueta}</span>
                  <span className="block font-titulo text-2xl font-bold break-words group-hover:text-cielo-tinta sm:text-[2rem]">
                    {valor}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="max-w-sm lg:col-span-5 lg:row-start-2">
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
    </section>
  );
}
