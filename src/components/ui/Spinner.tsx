// src/components/ui/Spinner.tsx

/**
 * Tamaños disponibles para el spinner
 */
type SpinnerSize = 'sm' | 'md' | 'lg';

/**
 * Props para el componente Spinner
 */
interface SpinnerProps {
  /** Tamaño del spinner */
  size?: SpinnerSize;
  /** Clases adicionales de Tailwind */
  className?: string;
  /** Texto para accesibilidad (screen readers) */
  label?: string;
}

/**
 * Componente spinner/loader reutilizable para estados de carga.
 * Incluye atributos de accesibilidad para lectores de pantalla.
 *
 * @example
 * <Spinner size="md" />
 * <Spinner size="lg" label="Cargando distribuciones..." />
 */
export function Spinner({ size = 'md', className = '', label = 'Cargando...' }: SpinnerProps) {
  // Mapeo de tamaños a clases de Tailwind
  const sizeStyles: Record<SpinnerSize, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div role='status' className='flex justify-center items-center' aria-label={label}>
      <div
        className={`animate-spin rounded-full border-primary border-t-transparent ${sizeStyles[size]} ${className}`}
      />
      <span className='sr-only'>{label}</span>
    </div>
  );
}
