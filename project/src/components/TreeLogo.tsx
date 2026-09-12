interface TreeLogoProps {
  className?: string;
  color?: string;
  bgColor?: string;
}

/**
 * Logo de Raíces: un árbol estilizado con raíces visibles.
 * El símbolo representa las raíces familiares que conectan generaciones.
 */
export default function TreeLogo({ className = 'w-10 h-10', color = '#faf8f3', bgColor }: TreeLogoProps) {
  return (
    <div
      className={`${className} rounded-2xl flex items-center justify-center shadow-soft`}
      style={{
        background: bgColor ?? 'linear-gradient(135deg, #26382d, #49634b)',
      }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-1/2 h-1/2"
        style={{ color }}
      >
        {/* Trunk */}
        <path
          d="M16 26V16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Roots */}
        <path
          d="M16 26C16 26 13 28 10 28M16 26C16 26 19 28 22 28M16 26V30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Canopy — layered circles for a rounded tree top */}
        <circle cx="16" cy="11" r="7" fill="currentColor" opacity="0.9" />
        <circle cx="11" cy="13" r="4.5" fill="currentColor" opacity="0.7" />
        <circle cx="21" cy="13" r="4.5" fill="currentColor" opacity="0.7" />
        <circle cx="16" cy="7" r="4" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  );
}
