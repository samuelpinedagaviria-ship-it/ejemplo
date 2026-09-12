import {
  KeyRound,
  Smartphone,
  Users,
  ShieldCheck,
  Settings,
  type LucideIcon,
} from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  KeyRound,
  Smartphone,
  Users,
  ShieldCheck,
  Settings,
};

export default function Security() {
  const { security } = appData;

  return (
    <section id="seguridad" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Seguridad y privacidad"
          title={security.title}
          subtitle={security.subtitle}
        />

        <p className="text-lg text-ink-light leading-relaxed max-w-3xl mx-auto text-center mb-12">
          {security.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {security.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <div
                key={i}
                className="group bg-cream-100 rounded-3xl p-8 border border-earth-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 bg-gradient-to-br from-forest-700 to-forest-800">
                  <Icon className="w-7 h-7 text-cream-100" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-heading font-bold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
