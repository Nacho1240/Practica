import { MessageCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl text-cyan-400 mb-4">C-MVT</h3>
            <p className="text-sm">
              Soluciones integrales en diseño, construcción y mantenimiento con transparencia y calidad desde 2017.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-cyan-400 transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-cyan-400 transition-colors">Galería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Construcción Comercial</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Proyectos Residenciales</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Obras Industriales</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Remodelación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100008842242563" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/constructoracmvt" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=56949557975&text=Hola!%20Necesito%20información" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-cyan-500 transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} C-MVT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
