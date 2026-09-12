import { useEffect, useState } from 'react';
import { Menu, X, Download, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { appData } from '@/data/appData';
import TreeLogo from '@/components/TreeLogo';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyecto', label: 'El proyecto' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#aplicacion', label: 'La aplicación' },
  { href: '#centro', label: 'Centro de mando' },
  { href: '#faq', label: 'Preguntas frecuentes' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2.5 group"
          >
            <TreeLogo className="w-10 h-10 transition-transform group-hover:scale-110" />
            <span
              className={`font-heading font-bold text-xl transition-colors ${
                scrolled ? 'text-ink' : 'text-cream-100'
              }`}
            >
              {appData.appName}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.slice(1)
                    ? scrolled
                      ? 'text-forest-700 bg-forest-50'
                      : 'text-cream-100 bg-white/15'
                    : scrolled
                      ? 'text-ink-muted hover:text-forest-700 hover:bg-forest-50'
                      : 'text-cream-100/80 hover:text-cream-100 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA buttons desktop */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="#centro"
              onClick={(e) => handleNavClick(e, '#centro')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-forest-300/50 text-forest-700 hover:border-forest-500 hover:bg-forest-50 transition-all"
              style={!scrolled ? { color: '#e8dcc8', borderColor: 'rgba(232,220,200,0.3)' } : undefined}
            >
              <LayoutDashboard className="w-4 h-4" />
              Centro de mando
            </a>
            <a
              href={appData.apkPath}
              download={appData.apkFileName}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-cream-100 bg-forest-700 shadow-warm hover:bg-forest-800 hover:shadow-warm-lg hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              Descargar aplicación
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-ink hover:bg-earth-100' : 'text-cream-100 hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 bg-white rounded-2xl shadow-soft-lg p-3 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-forest-700 bg-forest-50'
                    : 'text-ink hover:bg-earth-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2">
              <a
                href="#centro"
                onClick={(e) => handleNavClick(e, '#centro')}
                className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-forest-700 border-2 border-forest-200 text-center"
              >
                Centro de mando
              </a>
              <a
                href={appData.apkPath}
                download={appData.apkFileName}
                onClick={() => setMenuOpen(false)}
                className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-cream-100 bg-forest-700 text-center shadow-warm"
              >
                Descargar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
