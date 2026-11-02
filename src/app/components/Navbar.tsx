import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contacto, secciones } from '../datos';

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setConScroll(window.scrollY > 8);
    alHacerScroll();
    window.addEventListener('scroll', alHacerScroll, { passive: true });
    return () => window.removeEventListener('scroll', alHacerScroll);
  }, []);

  const cerrar = () => setAbierto(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow ${
        conScroll || abierto ? 'shadow-[0_1px_0_var(--color-linea)]' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-3" onClick={cerrar}>
          <img src="/Logo.png" alt="" className="h-9 w-auto" />
          <span className="titulo-ancho text-xl">C-MVT</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {secciones.slice(0, 3).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="font-medium text-gris transition-colors hover:text-marino">
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
          <a href={contacto.telefonoHref} className="hidden items-center gap-2 font-semibold lg:flex">
            <Phone size={17} className="text-tinta" aria-hidden="true" />
            {contacto.telefono}
          </a>
          <a href="#contacto" className="boton boton-cyan min-h-11 px-5">
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
          {abierto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {abierto && (
        <div id="menu-movil" className="border-t border-linea bg-white px-5 pb-6 md:hidden">
          <ul>
            {secciones.map((s) => (
              <li key={s.id} className="border-b border-linea">
                <a href={`#${s.id}`} onClick={cerrar} className="titulo-medio block py-4 text-xl">
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
          <a href={contacto.telefonoHref} className="boton boton-cyan mt-6 w-full">
            <Phone size={18} aria-hidden="true" />
            Llamar al {contacto.telefono}
          </a>
        </div>
      )}
    </header>
  );
}
