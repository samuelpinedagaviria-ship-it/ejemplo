import { Smartphone, LayoutDashboard, Check } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

export default function AppVsCommandCenter() {
  const { comparison } = appData;

  return (
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Dos herramientas, un ecosistema"
          title={comparison.title}
          subtitle={comparison.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* App */}
          <div className="bg-white rounded-4xl p-8 border border-earth-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-forest-600 to-forest-800 shadow-warm">
                <Smartphone className="w-7 h-7 text-cream-100" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-ink">
                  {comparison.appTitle}
                </h3>
                <p className="text-sm text-ink-muted">{comparison.appSubtitle}</p>
              </div>
            </div>

            <div className="space-y-3">
              {comparison.appFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-forest-700" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-light text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Command Center */}
          <div className="bg-white rounded-4xl p-8 border border-earth-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-earth-600 to-earth-800 shadow-warm">
                <LayoutDashboard className="w-7 h-7 text-cream-100" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-ink">
                  {comparison.commandTitle}
                </h3>
                <p className="text-sm text-ink-muted">{comparison.commandSubtitle}</p>
              </div>
            </div>

            <div className="space-y-3">
              {comparison.commandFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-earth-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-earth-700" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-light text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
