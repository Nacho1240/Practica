import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { contacto, secciones } from '../datos';

const redes = [
  { nombre: 'Instagram', href: contacto.instagram, Icono: FaInstagram },
  { nombre: 'Facebook', href: contacto.facebook, Icono: FaFacebook },
  { nombre: 'WhatsApp', href: contacto.whatsappHref, Icono: FaWhatsapp },
];

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-marino text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="" className="h-11 w-auto" />
              <span className="titulo-ancho text-2xl">C-MVT</span>
            </div>
            <p className="mt-5 max-w-sm text-niebla">
              Diseño, construcción y mantención para hogares, oficinas, retail, condominios y colegios desde 2017.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Secciones">
            <h2 className="font-semibold text-cyan-claro">Secciones</h2>
            <ul className="mt-4 space-y-2">
              {secciones.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-niebla hover:text-white">
                    {s.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-semibold text-cyan-claro">Contacto</h2>
            <ul className="mt-4 space-y-2 text-niebla">
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
                    className="grid size-11 place-items-center rounded-full border border-white/25 transition-colors hover:border-cyan-marca hover:bg-cyan-marca hover:text-marino"
                  >
                    <Icono size={19} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/15 pt-6 text-sm text-niebla">
          © {anio} C-MVT. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
