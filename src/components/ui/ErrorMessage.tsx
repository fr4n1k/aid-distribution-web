// src/components/ui/ErrorMessage.tsx

import { Text } from './Text';

/**
 * Props para el componente ErrorMessage
 */
interface ErrorMessageProps {
  /** Mensaje de error a mostrar */
  message: string;
  /** Clases adicionales de Tailwind */
  className?: string;
  /** Mostrar icono de error */
  showIcon?: boolean;
}

/**
 * Componente para mostrar mensajes de error de forma consistente.
 * Incluye estilos de error predefinidos y opción de mostrar icono.
 *
 * @example
 * <ErrorMessage message="Error al cargar los datos" />
 * <ErrorMessage message="Credenciales inválidas" showIcon={false} />
 */
export function ErrorMessage({ message, className = '', showIcon = true }: ErrorMessageProps) {
  return (
    <div
      className={`flex items-center gap-2 p-4 bg-error-50 border border-error-100 rounded-lg ${className}`}
      role='alert'
    >
      {showIcon && (
        <svg
          className='w-5 h-5 text-error-600 flex-shrink-0'
          fill='currentColor'
          viewBox='0 0 20 20'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
            clipRule='evenodd'
          />
        </svg>
      )}
      <Text variant='body' className='text-error-700'>
        {message}
      </Text>
    </div>
  );
}
