interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            light
              ? 'bg-white/10 text-forest-300 border border-white/15'
              : 'bg-forest-100 text-forest-700'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          light ? 'text-earth-50' : 'text-earth-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-earth-100/70' : 'text-earth-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
