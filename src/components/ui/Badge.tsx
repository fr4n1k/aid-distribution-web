// src/components/ui/Badge.tsx

/**
 * Variantes de color disponibles para el badge
 */
export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';

/**
 * Tamaños disponibles para el badge
 */
export type BadgeSize = 'sm' | 'md' | 'lg';

/**
 * Props para el componente Badge
 */
interface BadgeProps {
  /** Contenido del badge */
  children: React.ReactNode;
  /** Variante de color del badge */
  variant?: BadgeVariant;
  /** Tamaño del badge */
  size?: BadgeSize;
  /** Clases adicionales de Tailwind */
  className?: string;
}

/**
 * Componente badge reutilizable para mostrar etiquetas de estado.
 * Soporta diferentes variantes de color y tamaños.
 *
 * @example
 * <Badge variant="success">Completed</Badge>
 * <Badge variant="warning" size="sm">In Progress</Badge>
 * <Badge variant="error">Cancelled</Badge>
 */
export function Badge({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) {
  // Mapeo de variantes a colores del tema
  const variantStyles: Record<BadgeVariant, string> = {
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white',
    info: 'bg-primary text-white',
    default: 'bg-gray-500 text-white',
  };

  // Mapeo de tamaños
  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
