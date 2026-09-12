import { Link, Archive, Gift, type LucideIcon } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Link,
  Archive,
  Gift,
};

export default function Mission() {
  const { mission } = appData;

  return (
    <section id="mision" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={mission.title}
          title={mission.subtitle}
          subtitle={mission.text}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {mission.blocks.map((block, i) => {
            const Icon = iconMap[block.icon] ?? Link;
            return (
              <div
                key={i}
                className="group relative bg-cream-100 rounded-3xl p-8 border border-earth-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-6 bg-gradient-to-br from-forest-50 to-earth-100">
                  <Icon className="w-8 h-8 text-forest-700" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-heading font-bold text-ink mb-3">
                  {block.title}
                </h3>
                <p className="text-ink-light leading-relaxed">{block.text}</p>

                <span className="absolute top-6 right-6 text-5xl font-heading font-bold text-earth-100 select-none">
                  {i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
