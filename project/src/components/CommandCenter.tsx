import {
  Lock,
  Clock,
  Camera,
  FileText,
  BookOpen,
  RefreshCw,
  Smartphone,
  HardDrive,
  Settings,
  Users,
  ShieldCheck,
  KeyRound,
  type LucideIcon,
} from 'lucide-react';
import { appData } from '@/data/appData';

const activityIcons: Record<string, LucideIcon> = {
  Camera,
  FileText,
  BookOpen,
  RefreshCw,
};

const adminIcons: Record<string, LucideIcon> = {
  Usuarios: Users,
  Permisos: KeyRound,
  Dispositivos: Smartphone,
  Seguridad: ShieldCheck,
  Configuración: Settings,
};

const statusStyles: Record<string, { label: string; dot: string; text: string }> = {
  connected: { label: 'Conectado', dot: 'bg-forest-500', text: 'text-forest-700' },
  syncing: { label: 'Sincronizando', dot: 'bg-sand-500 animate-pulse', text: 'text-sand-700' },
  offline: { label: 'Desconectado', dot: 'bg-earth-300', text: 'text-ink-muted' },
};

export default function CommandCenter() {
  const { commandCenter } = appData;

  return (
    <section
      id="centro"
      className="py-20 lg:py-28 bg-gradient-to-br from-forest-900 via-forest-800 to-earth-900 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-forest-400" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-clay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clay-500/20 border border-clay-400/30 text-clay-300 text-sm font-semibold mb-4">
            <Clock className="w-3.5 h-3.5" />
            Próximamente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-cream-100 mb-4">
            {commandCenter.title}
          </h2>
          <p className="text-xl text-sand-400 font-heading font-medium mb-4">
            {commandCenter.subtitle}
          </p>
          <p className="text-lg text-cream-100/70 max-w-2xl mx-auto leading-relaxed">
            {commandCenter.description}
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute inset-0 rounded-4xl blur-3xl opacity-15 bg-gradient-to-br from-forest-500 to-clay-500" />
          <div className="relative bg-cream-100 rounded-4xl p-6 shadow-soft-xl">
            {/* Mock browser bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-earth-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-clay-400" />
                <div className="w-3 h-3 rounded-full bg-sand-400" />
                <div className="w-3 h-3 rounded-full bg-forest-400" />
              </div>
              <span className="text-xs text-ink-muted font-mono">centro.raices.app</span>
              <div className="w-12" />
            </div>

            {/* Dashboard layout */}
            <div className="grid lg:grid-cols-[200px_1fr] gap-6">
              {/* Sidebar */}
              <div className="hidden lg:flex flex-col gap-1">
                <p className="text-xs font-heading font-semibold text-ink-muted uppercase tracking-wider mb-2 px-3">
                  Administración
                </p>
                {commandCenter.adminSections.map((section) => {
                  const Icon = adminIcons[section] ?? Settings;
                  return (
                    <div
                      key={section}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-light hover:bg-forest-50 transition-colors cursor-default"
                    >
                      <Icon className="w-4 h-4 text-forest-600" />
                      {section}
                    </div>
                  );
                })}
              </div>

              {/* Main content */}
              <div className="space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Dispositivos conectados', value: '3', icon: Smartphone, color: 'text-forest-700' },
                    { label: 'Archivos almacenados', value: '1,247', icon: HardDrive, color: 'text-clay-600' },
                    { label: 'Actividad reciente', value: '12', icon: Clock, color: 'text-earth-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-soft">
                      <stat.icon className="w-5 h-5 mb-2 text-forest-600" />
                      <p className={`text-2xl font-heading font-bold ${stat.color}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-ink-muted leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Devices table */}
                <div className="bg-white rounded-2xl p-4 shadow-soft">
                  <p className="text-sm font-heading font-semibold text-ink mb-3">
                    Dispositivos conectados
                  </p>
                  <div className="space-y-2">
                    {commandCenter.devices.map((device, i) => {
                      const status = statusStyles[device.status];
                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between gap-2 py-2 px-3 rounded-xl hover:bg-cream-100 transition-colors"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <Smartphone className="w-4 h-4 text-forest-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-ink truncate">
                              {device.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <div className={`flex items-center gap-1.5 ${status.text}`}>
                              <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                              <span className="text-xs font-medium hidden sm:inline">{status.label}</span>
                            </div>
                            <span className="text-xs text-ink-muted hidden md:inline">{device.lastSync}</span>
                            <div className="flex gap-1">
                              <button className="text-xs font-medium text-forest-700 hover:bg-forest-50 px-2 py-1 rounded-lg transition-colors">
                                Autorizar
                              </button>
                              <button className="text-xs font-medium text-clay-600 hover:bg-clay-50 px-2 py-1 rounded-lg transition-colors">
                                Desvincular
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Activity + Storage */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Activity */}
                  <div className="bg-white rounded-2xl p-4 shadow-soft">
                    <p className="text-sm font-heading font-semibold text-ink mb-3">
                      Actividad reciente
                    </p>
                    <div className="space-y-2">
                      {commandCenter.activities.map((activity, i) => {
                        const Icon = activityIcons[activity.icon] ?? Clock;
                        return (
                          <div key={i} className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-forest-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-ink truncate">{activity.action}</p>
                              <p className="text-xs text-ink-muted">{activity.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Storage */}
                  <div className="bg-white rounded-2xl p-4 shadow-soft">
                    <p className="text-sm font-heading font-semibold text-ink mb-3">
                      Almacenamiento
                    </p>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ink-light">{commandCenter.storage.used}</span>
                        <span className="text-ink-muted">de {commandCenter.storage.total}</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-earth-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-forest-500 to-forest-700"
                          style={{ width: '24%' }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-ink-muted">{commandCenter.storage.files}</p>

                    {/* Mini chart */}
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-ink-light mb-2">Actividad semanal</p>
                      <div className="flex items-end justify-between gap-1.5 h-16">
                        {[40, 65, 50, 80, 70, 95, 60].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-forest-400 to-forest-600"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lock overlay */}
            <div className="absolute inset-0 bg-cream-100/85 backdrop-blur-sm rounded-4xl flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-earth-200 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-earth-500" strokeWidth={1.8} />
              </div>
              <p className="text-ink font-heading font-semibold text-lg">
                {commandCenter.status}
              </p>
              <p className="text-ink-muted text-sm mt-1">
                Interfaz en fase de prototipo — disponible próximamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
