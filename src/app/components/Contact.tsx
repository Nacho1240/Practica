import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            <span className="text-cyan-400">Contáctanos</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos listos para ayudarte a hacerlo realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-white mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Ubicación</h4>
                  <p className="text-slate-400">Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Teléfono</h4>
                  <p className="text-slate-400">+56 9 4955 7975</p>
                  <a href="https://api.whatsapp.com/send?phone=56949557975&text=Hola!%20Necesito%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <p className="text-slate-400">Felizondo@c-mvt.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h4 className="text-white mb-4">Horario de Atención</h4>
              <div className="space-y-2 text-slate-400">
                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábado: 9:00 AM - 2:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 bg-cyan-500/20 border border-cyan-500 text-cyan-300 px-4 py-3 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
