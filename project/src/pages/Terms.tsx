import { appData } from '@/data/appData';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream-100 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-forest-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-forest-100">
            <FileText className="w-6 h-6 text-forest-700" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-ink">Términos y Condiciones</h1>
        </div>

        <p className="text-ink-muted mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>

        <div className="space-y-6 text-ink-light leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">1. Aceptación</h2>
            <p>
              Al descargar y usar {appData.appName}, aceptas estos términos y condiciones. Si no
              estás de acuerdo, no utilices la aplicación.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">2. Uso de la aplicación</h2>
            <p>
              La aplicación se proporciona para uso personal y familiar. No está permitido
              modificar, distribuir o usar la aplicación con fines comerciales sin autorización.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">3. Responsabilidad</h2>
            <p>
              El usuario es responsable de la información que almacena en la aplicación. No nos
              hacemos responsables de la pérdida de datos causada por un uso indebido.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">4. Actualizaciones</h2>
            <p>
              Podemos actualizar la aplicación y estos términos en cualquier momento. Las nuevas
              versiones estarán disponibles en este sitio web.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">5. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos términos, puedes contactarnos en:{' '}
              <a href={`mailto:${appData.contactEmail}`} className="text-forest-700 hover:underline">
                {appData.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
