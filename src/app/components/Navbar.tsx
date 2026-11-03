import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contacto, secciones } from '../datos';
import { Logo } from './Logo';

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setConScroll(window.scrollY > 40);
    alHacerScroll();
    window.addEventListener('scroll', alHacerScroll, { passive: true });
    return () => window.removeEventListener('scroll', alHacerScroll);
  }, []);

  const cerrar = () => setAbierto(false);
  // Sobre la foto de portada la barra es transparente con texto blanco
  const solida = conScroll || abierto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solida ? 'bg-fondo text-grafito shadow-[0_1px_0_var(--color-concreto-medio)]' : 'bg-transparent text-white'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <a href="#inicio" onClick={cerrar}>
          <Logo tono={solida ? 'oscuro' : 'claro'} />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {secciones.slice(0, 3).map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`font-medium transition-colors ${solida ? 'hover:text-cielo-tinta' : 'hover:text-cielo'}`}
                >
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
          <a href={contacto.telefonoHref} className="hidden items-center gap-2 font-semibold lg:flex">
            <Phone size={17} aria-hidden="true" />
            {contacto.telefono}
          </a>
          <a href="#contacto" className="boton boton-cielo min-h-11 px-5">
            Cotizar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          className="-mr-2 p-2 md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          {abierto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {abierto && (
        <div id="menu-movil" className="border-t border-concreto bg-fondo px-5 pb-6 md:hidden">
          <ul>
            {secciones.map((s) => (
              <li key={s.id} className="border-b border-concreto">
                <a href={`#${s.id}`} onClick={cerrar} className="block py-4 font-titulo text-2xl font-bold">
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
          <a href={contacto.telefonoHref} className="boton boton-cielo mt-6 w-full">
            <Phone size={18} aria-hidden="true" />
            Llamar al {contacto.telefono}
          </a>
        </div>
      )}
    </header>
  );
}
