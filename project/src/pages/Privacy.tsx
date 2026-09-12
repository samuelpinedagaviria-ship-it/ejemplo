import { appData } from '@/data/appData';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
            <Shield className="w-6 h-6 text-forest-700" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-ink">Política de Privacidad</h1>
        </div>

        <p className="text-ink-muted mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>

        <div className="space-y-6 text-ink-light leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">1. Introducción</h2>
            <p>
              {appData.appName} respeta la privacidad de tu familia. Esta política describe cómo se
              trata la información que se almacena en la aplicación y los servicios asociados.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">2. Información familiar</h2>
            <p>
              La aplicación almacena fotografías, documentos, historias y datos de familiares que tú
              y los miembros autorizados introducen voluntariamente. Esta información pertenece a la familia.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">3. Control de acceso</h2>
            <p>
              Tú decides quién puede acceder al espacio familiar y qué permisos tiene cada persona.
              Cada dispositivo debe ser autorizado antes de acceder a la información.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">4. Uso de los datos</h2>
            <p>
              Los datos se utilizan exclusivamente para proporcionar las funcionalidades de la
              aplicación. No se comparte información familiar con terceros.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-heading font-semibold text-ink mb-3">5. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política, puedes contactarnos en:{' '}
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
