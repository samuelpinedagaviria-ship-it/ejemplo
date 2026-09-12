import { Mail, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appData } from '@/data/appData';
import TreeLogo from '@/components/TreeLogo';

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <TreeLogo className="w-12 h-12" />
              <span className="text-xl font-heading font-bold">{appData.appName}</span>
            </div>
            <p className="text-cream-100/60 text-sm leading-relaxed max-w-xs mb-4">
              {appData.footerTagline}
            </p>
            <a
              href={`mailto:${appData.contactEmail}`}
              className="inline-flex items-center gap-2 text-cream-100/60 hover:text-sand-400 text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              {appData.contactEmail}
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-cream-100/90 mb-4 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#proyecto', label: 'El proyecto' },
                { href: '#aplicacion', label: 'Aplicación' },
                { href: '#centro', label: 'Centro de Mando' },
                { href: '#faq', label: 'Preguntas frecuentes' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-cream-100/60 hover:text-sand-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-cream-100/90 mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacidad"
                  className="text-cream-100/60 hover:text-sand-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="text-cream-100/60 hover:text-sand-400 text-sm transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-100/40 text-sm">
            &copy; {new Date().getFullYear()} {appData.appName}. Todos los derechos reservados.
          </p>
          <p className="text-cream-100/40 text-sm">
            Versión {appData.version} · Compatible con Android
          </p>
        </div>
      </div>
    </footer>
  );
}
