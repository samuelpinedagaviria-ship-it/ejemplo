import { ArrowDown, Shield, Users, Camera } from 'lucide-react';
import { appData } from '@/data/appData';
import TreeLogo from '@/components/TreeLogo';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-earth-900" />
      {/* Organic shapes */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #49634b 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #7d6438 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, #c46a3e30 0%, transparent 50%)
          `,
        }}
      />
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-forest-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: '#c46a3e20', animationDelay: '1s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
              <span className="text-sm text-cream-100/90 font-medium">
                Versión {appData.version} disponible para Android
              </span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <TreeLogo className="w-16 h-16 animate-grow" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-cream-100 leading-[1.1] mb-4">
              {appData.appName}
            </h1>
            <p className="text-2xl sm:text-3xl text-sand-400 font-heading font-medium mb-6">
              {appData.tagline}
            </p>

            <p className="text-lg text-cream-100/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {appData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <a
                href="#proyecto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#proyecto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-heading font-bold text-cream-100 bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:scale-105 transition-all"
              >
                Conocer Raíces
                <ArrowDown className="w-5 h-5" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start text-cream-100/50">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4" />
                <span>Privacidad familiar</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4" />
                <span>Para toda la familia</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Camera className="w-4 h-4" />
                <span>{appData.apkSize}</span>
              </div>
            </div>
          </div>

          {/* Right: phone mockup with family photo */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 55C840 70 960 80 1080 70C1200 60 1320 30 1380 15L1440 0V120H0Z"
            fill="#faf8f3"
          />
        </svg>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-float">
      {/* Glow behind */}
      <div
        className="absolute inset-0 rounded-[3rem] blur-3xl opacity-20 scale-110"
        style={{
          background: 'linear-gradient(135deg, #49634b, #c46a3e)',
        }}
      />
      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] rounded-[3rem] bg-forest-900 border-[6px] border-forest-800 shadow-soft-xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-forest-900 rounded-b-2xl z-20" />
        {/* Screen */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {/* Hero image as app background */}
          <img
            src={appData.heroImage}
            alt="Recuerdos familiares"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-transparent to-forest-900/80" />

          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-4 pb-2 text-xs font-semibold text-white z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 rounded-sm bg-white/80" />
              <div className="w-4 h-2 rounded-sm bg-white/80" />
              <div className="w-5 h-2.5 rounded-sm bg-forest-400" />
            </div>
          </div>

          {/* App content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <div className="flex items-center gap-3 mb-4">
              <TreeLogo className="w-12 h-12" />
              <div>
                <p className="text-cream-100 font-heading font-bold text-lg">{appData.appName}</p>
                <p className="text-cream-100/70 text-xs">Familia González · 3 generaciones</p>
              </div>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { icon: '🌳', label: 'Árbol', color: 'bg-forest-500/30' },
                { icon: '📸', label: 'Recuerdos', color: 'bg-clay-500/30' },
                { icon: '📖', label: 'Historias', color: 'bg-earth-500/30' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} backdrop-blur-sm rounded-2xl p-3 text-center border border-white/10`}
                >
                  <div className="text-xl mb-1">{item.icon}</div>
                  <div className="text-xs text-cream-100/90 font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Activity card */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cream-100/60 text-xs">Recuerdos guardados</p>
                  <p className="text-cream-100 font-semibold text-sm">247 fotografías · 12 historias</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-forest-500/40 flex items-center justify-center">
                  <span className="text-lg">🌳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
