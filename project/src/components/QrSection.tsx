import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Smartphone } from 'lucide-react';
import { appData } from '@/data/appData';
import SectionHeading from '@/components/SectionHeading';

export default function QrSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        appData.siteUrl,
        {
          width: 300,
          margin: 2,
          color: {
            dark: '#211f1a',
            light: '#ffffff',
          },
          errorCorrectionLevel: 'H',
        },
        (err) => {
          if (err) console.error('Error generando QR:', err);
        },
      );

      QRCode.toDataURL(appData.siteUrl, {
        width: 1024,
        margin: 2,
        color: { dark: '#211f1a', light: '#ffffff' },
        errorCorrectionLevel: 'H',
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('Error generando QR PNG:', err));
    }
  }, []);

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `codigo-qr-${appData.appName.toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Escanea para descargar"
          title="Descarga fácilmente desde tu celular"
          subtitle="Escanea con tu cámara y accede directamente a la página de descarga."
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-cream-100 rounded-4xl shadow-soft-lg border border-earth-100 p-8 sm:p-12 text-center">
            {/* QR Code */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 rounded-3xl opacity-10 blur-xl bg-gradient-to-br from-forest-500 to-clay-500" />
              <div className="relative bg-white p-6 rounded-2xl border-2 border-earth-100">
                <canvas ref={canvasRef} className="block mx-auto" />
              </div>
            </div>

            <p className="text-ink-light text-lg mb-8 max-w-md mx-auto leading-relaxed">
              Escanea el código QR con tu celular para acceder a la página de descarga.
            </p>

            {/* Download QR button */}
            <button
              onClick={handleDownloadQr}
              disabled={!qrDataUrl}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-heading font-bold text-cream-100 bg-forest-700 shadow-warm hover:bg-forest-800 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              Descargar QR
            </button>

            {/* URL display */}
            <div className="mt-8 pt-8 border-t border-earth-100">
              <p className="text-sm text-ink-muted mb-2 flex items-center justify-center gap-2">
                <Smartphone className="w-4 h-4" />
                El código QR dirige a:
              </p>
              <p className="text-sm font-mono text-ink-light bg-white px-4 py-2 rounded-lg inline-block">
                {appData.siteUrl}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
