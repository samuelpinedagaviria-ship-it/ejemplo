import {
  Network,
  Camera,
  BookOpen,
  Clock,
  Lock,
  Cloud,
  type LucideIcon,
} from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Network,
  Camera,
  BookOpen,
  Clock,
  Lock,
  Cloud,
};

export default function Features() {
  return (
    <section
      id="funciones"
      className="py-20 lg:py-28 bg-gradient-to-b from-cream-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Funciones"
          title="Todo para preservar tu historia"
          subtitle="Las herramientas que necesitas para mantener viva la memoria de tu familia."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appData.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Network;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-8 border border-earth-100 shadow-soft hover:shadow-soft-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-forest-500 to-clay-500" />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-forest-700 to-forest-800">
                  <Icon className="w-7 h-7 text-cream-100" strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-heading font-bold text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
