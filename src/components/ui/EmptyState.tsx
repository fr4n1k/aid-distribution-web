// src/components/ui/EmptyState.tsx

import { Text } from './Text';

/**
 * Props para el componente EmptyState
 */
interface EmptyStateProps {
  /** Mensaje a mostrar cuando no hay datos */
  message: string;
  /** Mensaje secundario opcional con más detalles */
  description?: string;
  /** Clases adicionales de Tailwind */
  className?: string;
  /** Mostrar icono de carpeta vacía */
  showIcon?: boolean;
}

/**
 * Componente para mostrar estados vacíos de forma consistente.
 * Se usa cuando no hay datos para mostrar en listas, tablas, etc.
 *
 * @example
 * <EmptyState message="No distributions found" />
 * <EmptyState
 *   message="No hay resultados"
 *   description="Intenta ajustar los filtros"
 * />
 */
export function EmptyState({
  message,
  description,
  className = '',
  showIcon = true,
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      {showIcon && (
        <svg
          className='w-16 h-16 text-gray-300 mb-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      )}
      <Text variant='body' className='text-gray-500 text-center'>
        {message}
      </Text>
      {description && (
        <Text variant='caption' className='text-gray-400 text-center mt-1'>
          {description}
        </Text>
      )}
    </div>
  );
}
