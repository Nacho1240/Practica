import { useId } from 'react';

type Props = {
  // "oscuro" para fondos claros, "claro" para fondos oscuros o fotos
  tono?: 'oscuro' | 'claro';
  className?: string;
};

// Ícono de C-MVT: una casa grande gris con una casa cyan cielo por delante
export function LogoIcono({ tono = 'oscuro', className }: Props) {
  const mascara = useId();
  const color = tono === 'claro' ? '#ffffff' : 'var(--color-grafito)';

  return (
    <svg viewBox="0 4 56 58" className={className} aria-hidden="true">
      <defs>
        <mask id={mascara}>
          <rect x="0" y="0" width="64" height="64" fill="#fff" />
          {/* Separación entre las dos casas */}
          <path d="M22 60V41L36 29L50 41V60Z" fill="#000" stroke="#000" strokeWidth="5" strokeLinejoin="round" />
        </mask>
      </defs>
      <path d="M4 60V30L28 8L52 30V60Z" fill={color} mask={`url(#${mascara})`} />
      <path d="M22 60V41L36 29L50 41V60Z" fill="var(--color-cielo)" />
    </svg>
  );
}

export function Logo({ tono = 'oscuro', className }: Props) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoIcono tono={tono} className="h-9 w-auto" />
      <span className="font-titulo text-[1.65rem] leading-none font-extrabold tracking-wide">C-MVT</span>
    </span>
  );
}
