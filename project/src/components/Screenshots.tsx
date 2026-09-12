import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

export default function Screenshots() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const total = appData.screenshots.length;

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + total) % total);

  return (
    <section id="capturas" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Galería"
          title="Capturas de la aplicación"
          subtitle="Mira cómo se ve Raíces en tu teléfono."
        />

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {appData.screenshots.map((shot, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-soft cursor-pointer hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="aspect-[9/16] overflow-hidden bg-earth-100">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <div className="flex items-center gap-2 text-cream-100 text-sm font-medium">
                  <Expand className="w-4 h-4" />
                  Ver imagen
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
            <div className="aspect-[9/16] bg-earth-100">
              <img
                src={appData.screenshots[carouselIndex].src}
                alt={appData.screenshots[carouselIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-ink" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-ink" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {appData.screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === carouselIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-forest-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream-100 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + total) % total);
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={appData.screenshots[lightboxIndex].src}
              alt={appData.screenshots[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-soft-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % total);
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-100/70 text-sm">
              {appData.screenshots[lightboxIndex].alt} · {lightboxIndex + 1} / {total}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
