import {
  Home,
  UserPlus,
  Upload,
  TreePine,
  type LucideIcon,
} from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Home,
  UserPlus,
  Upload,
  TreePine,
};

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-28 bg-gradient-to-b from-forest-50 to-cream-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Cómo funciona"
          title="Construye tu legado en cuatro pasos"
          subtitle="Crea, conecta, comparte y preserva la historia de tu familia."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-forest-200 via-earth-200 to-forest-200" />

          {appData.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Home;
            return (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-8 border border-earth-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-forest-700 to-forest-800 shadow-warm">
                    <Icon className="w-7 h-7 text-cream-100" strokeWidth={1.8} />
                  </div>
                  <span className="text-4xl font-heading font-bold text-earth-100 select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
