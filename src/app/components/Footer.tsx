import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { contacto, secciones } from '../datos';
import { Logo } from './Logo';

const redes = [
  { nombre: 'Instagram', href: contacto.instagram, Icono: FaInstagram },
  { nombre: 'Facebook', href: contacto.facebook, Icono: FaFacebook },
  { nombre: 'WhatsApp', href: contacto.whatsappHref, Icono: FaWhatsapp },
];

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-grafito text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tono="claro" />
            <p className="mt-5 max-w-sm text-concreto-medio">
              Diseño, construcción y mantención para hogares, oficinas, retail, condominios y colegios desde 2017.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Secciones">
            <h2 className="font-semibold text-cielo">Secciones</h2>
            <ul className="mt-4 space-y-2">
              {secciones.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-concreto-medio hover:text-white">
                    {s.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-semibold text-cielo">Contacto</h2>
            <ul className="mt-4 space-y-2 text-concreto-medio">
              <li>
                <a href={contacto.telefonoHref} className="hover:text-white">
                  {contacto.telefono}
                </a>
              </li>
              <li>
                <a href={contacto.emailHref} className="hover:text-white">
                  {contacto.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-3">
              {redes.map(({ nombre, href, Icono }) => (
                <li key={nombre}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={nombre}
                    className="grid size-11 place-items-center rounded-full border border-white/25 transition-colors hover:border-cielo hover:bg-cielo hover:text-grafito"
                  >
                    <Icono size={19} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/15 pt-6 text-sm text-concreto-medio">
          © {anio} C-MVT. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
