import { Camera, Video, FileText, BookOpen, Calendar, Heart, User, Sparkles, type LucideIcon } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

const itemIcons: Record<string, LucideIcon> = {
  'Fotografías': Camera,
  'Videos': Video,
  'Documentos': FileText,
  'Historias familiares': BookOpen,
  'Fechas importantes': Calendar,
  'Recuerdos': Heart,
  'Información de familiares': User,
  'Momentos especiales': Sparkles,
};

export default function WhatIsRaices() {
  const { whatIs } = appData;

  return (
    <section id="proyecto" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="¿Qué es Raíces?"
          title={whatIs.title}
          subtitle={whatIs.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: description + items grid */}
          <div>
            <p className="text-lg text-ink-light leading-relaxed mb-8">
              {whatIs.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {whatIs.items.map((item, i) => {
                const Icon = itemIcons[item] ?? Sparkles;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-earth-100 shadow-soft hover:shadow-soft-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-forest-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: emotional image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl opacity-10 blur-2xl bg-gradient-to-br from-forest-500 to-clay-500" />
            <div className="relative rounded-4xl overflow-hidden shadow-soft-xl">
              <img
                src="https://images.pexels.com/photos/11455958/pexels-photo-11455958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Familia preservando recuerdos"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cream-100 font-heading font-bold text-xl mb-1">
                  Cada recuerdo es una raíz.
                </p>
                <p className="text-cream-100/80 text-sm">
                  Cada generación es una nueva rama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
