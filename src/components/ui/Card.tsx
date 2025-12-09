// src/components/ui/Card.tsx

import { ReactNode } from 'react';
import { Text } from './Text';

/**
 * Props para el componente Card
 */
interface CardProps {
  /** Contenido del card */
  children: ReactNode;
  /** Título opcional del card */
  title?: string;
  /** Clases adicionales de Tailwind */
  className?: string;
  /** Mostrar sombra */
  shadow?: boolean;
  /** Padding del contenido */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Componente contenedor reutilizable para agrupar contenido.
 * Proporciona estilos consistentes con bordes, sombra y padding opcionales.
 *
 * @example
 * <Card title="Distribution Details">
 *   <p>Content here</p>
 * </Card>
 *
 * @example
 * <Card shadow={false} padding="lg">
 *   <CustomContent />
 * </Card>
 */
export function Card({
  children,
  title,
  className = '',
  shadow = true,
  padding = 'md',
}: CardProps) {
  // Mapeo de padding
  const paddingStyles: Record<NonNullable<CardProps['padding']>, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 ${
        shadow ? 'shadow-md' : ''
      } ${className}`}
    >
      {title && (
        <div className='px-6 py-4 border-b border-gray-200'>
          <Text variant='h3'>{title}</Text>
        </div>
      )}
      <div className={paddingStyles[padding]}>{children}</div>
    </div>
  );
}
