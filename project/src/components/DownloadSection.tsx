import { Download, Smartphone, Shield, FileCheck, Info, Apple } from 'lucide-react';
import { appData } from '@/data/appData';

export default function DownloadSection() {
  return (
    <section
      id="descarga"
      className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-900 to-earth-900"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-forest-400" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-earth-500" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sand-400 text-sm font-semibold mb-4">
          Descarga
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-cream-100 mb-4">
          Lleva tus raíces contigo
        </h2>
        <p className="text-lg text-cream-100/70 mb-12 max-w-2xl mx-auto">
          Descarga la aplicación {appData.appName} para Android y comienza a construir y preservar la historia de tu familia.
        </p>

        {/* Download card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-8 sm:p-12">
          {/* Big download button */}
          <a
            href={appData.apkPath}
            download={appData.apkFileName}
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-heading font-bold text-cream-100 shadow-warm-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-forest-600 to-forest-700"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            DESCARGAR APK PARA ANDROID
          </a>

          {/* Info badges */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8 mt-8">
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Smartphone className="w-5 h-5 text-sand-400" />
              <p className="text-sm text-cream-100/80 font-medium">Para Android</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <FileCheck className="w-5 h-5 text-sand-400" />
              <p className="text-sm text-cream-100/80 font-medium">
                Versión {appData.version}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Shield className="w-5 h-5 text-sand-400" />
              <p className="text-sm text-cream-100/80 font-medium">
                {appData.apkSize}
              </p>
            </div>
          </div>

          {/* Compatibility info */}
          <div className="space-y-3 text-left max-w-xl mx-auto">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Info className="w-5 h-5 text-sand-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-cream-100/70 leading-relaxed">
                <span className="text-cream-100 font-semibold">Compatible con:</span>{' '}
                {appData.minAndroidVersion}
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Info className="w-5 h-5 text-sand-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-cream-100/70 leading-relaxed">
                <span className="text-cream-100 font-semibold">Instalación:</span> Es posible
                que necesites permitir la instalación de aplicaciones desde fuentes
                externas en los ajustes de tu dispositivo. Solo es necesario la primera vez.
              </p>
            </div>
          </div>

          {/* iPhone coming soon */}
          <div className="mt-8 flex items-center justify-center gap-2 text-cream-100/50">
            <Apple className="w-5 h-5" />
            <span className="text-sm">Versión para iPhone próximamente</span>
          </div>

          <p className="mt-6 text-xs text-cream-100/40">
            Compatible con Android · Versión actual: {appData.version}
          </p>
        </div>
      </div>
    </section>
  );
}
