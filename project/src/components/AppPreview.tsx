import { Check } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

export default function AppPreview() {
  const { appPreview } = appData;

  return (
    <section id="aplicacion" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <PhonePreview />
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              badge="La aplicación"
              title={appPreview.title}
              subtitle={appPreview.subtitle}
              align="left"
            />

            <p className="text-ink-light leading-relaxed mb-8 text-lg">
              {appPreview.description}
            </p>

            <div className="space-y-4">
              {appPreview.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-forest-700" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-light font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhonePreview() {
  const { appPreview } = appData;
  return (
    <div className="relative animate-float">
      {/* Glow */}
      <div className="absolute inset-0 rounded-[3rem] blur-3xl opacity-15 scale-110 bg-gradient-to-br from-forest-500 to-clay-500" />

      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] rounded-[3rem] bg-forest-900 border-[6px] border-forest-800 shadow-soft-xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-forest-900 rounded-b-2xl z-20" />

        {/* Screen */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-cream-100">
          {/* Image header */}
          <div className="relative h-44 overflow-hidden">
            <img
              src={appPreview.image}
              alt="Vista previa de Raíces"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream-100" />
          </div>

          {/* Content */}
          <div className="px-5 -mt-8 relative z-10">
            {/* Family card */}
            <div className="bg-white rounded-3xl p-4 shadow-soft mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-600 to-earth-600 flex items-center justify-center text-cream-100 font-bold font-heading">
                  G
                </div>
                <div>
                  <p className="font-heading font-bold text-ink">Familia González</p>
                  <p className="text-xs text-ink-muted">3 generaciones · 12 miembros</p>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: '🌳', label: 'Árbol familiar', value: '12', color: 'text-forest-700' },
                { icon: '📸', label: 'Recuerdos', value: '247', color: 'text-clay-600' },
                { icon: '📖', label: 'Historias', value: '12', color: 'text-earth-600' },
                { icon: '🕰️', label: 'Eventos', value: '38', color: 'text-sand-600' },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-2xl p-3 shadow-soft">
                  <div className="text-2xl mb-1">{card.icon}</div>
                  <p className={`text-2xl font-heading font-bold ${card.color}`}>
                    {card.value}
                  </p>
                  <p className="text-xs text-ink-muted">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <p className="text-xs font-semibold text-ink-light mb-2">Línea del tiempo</p>
            <div className="space-y-2">
              {[
                { year: '1962', event: 'Boda de abuelos', icon: '💍' },
                { year: '1985', event: 'Nace Papá', icon: '👶' },
                { year: '2010', event: 'Boda de Papá y Mamá', icon: '💒' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-soft">
                  <div className="w-9 h-9 rounded-xl bg-forest-50 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink">{item.event}</p>
                    <p className="text-xs text-ink-muted">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-earth-100 px-6 py-3 flex justify-around">
            {['🏠', '🌳', '📸', '👤'].map((icon, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                  i === 0 ? 'bg-forest-50' : ''
                }`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
