import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Todo lo que necesitas saber sobre Raíces."
        />

        <div className="space-y-4">
          {appData.faq.map((item, i) => (
            <div
              key={i}
              className={`bg-cream-100 rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? 'border-forest-200 shadow-soft'
                  : 'border-earth-100 hover:border-earth-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-heading font-semibold text-ink">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'bg-forest-100 text-forest-700 rotate-180'
                      : 'bg-earth-100 text-ink-muted'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-ink-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
