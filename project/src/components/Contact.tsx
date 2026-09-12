import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Preparado para futura integración con Django backend:
    // POST /api/contact/ con { name, email, message }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contacto"
          title="¿Quieres conocer más sobre Raíces?"
          subtitle="¿Tienes preguntas, sugerencias o quieres colaborar? Escríbenos."
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-4xl p-8 shadow-soft-lg border border-earth-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-forest-100 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-forest-700" />
                </div>
                <h3 className="text-xl font-heading font-bold text-ink mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-ink-muted text-center">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ink-light mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-earth-100 text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-light mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-earth-100 text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all"
                    placeholder="tucorreo@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-light mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-earth-100 text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-heading font-bold text-cream-100 bg-forest-700 shadow-warm hover:bg-forest-800 hover:scale-[1.02] transition-all"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </button>
              </form>
            )}

            {/* Contact email */}
            <div className="mt-6 pt-6 border-t border-earth-100 flex items-center justify-center gap-2 text-ink-muted">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${appData.contactEmail}`}
                className="text-sm hover:text-forest-700 transition-colors"
              >
                {appData.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
