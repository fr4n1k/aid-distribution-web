// src/components/ui/Text.tsx

import { ReactNode, HTMLAttributes } from 'react';

/**
 * Variants disponibles para el componente Text
 */
type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'label' | 'caption';

/**
 * Props para el componente Text
 */
interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Variante de texto que determina el estilo */
  variant?: TextVariant;
  /** Contenido del texto */
  children: ReactNode;
  /** Clases adicionales de Tailwind */
  className?: string;
  /** Elemento HTML a renderizar */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label';
}

/**
 * Componente de texto reutilizable con variantes predefinidas.
 * Mantiene consistencia tipográfica en toda la aplicación.
 *
 * @example
 * <Text variant="h1">Título Principal</Text>
 * <Text variant="body" className="text-gray-600">Contenido</Text>
 */
export function Text({ variant = 'body', children, className = '', as, ...rest }: TextProps) {
  // Mapeo de variantes a clases de Tailwind
  const variantStyles: Record<TextVariant, string> = {
    h1: 'text-3xl font-bold text-gray-900',
    h2: 'text-2xl font-semibold text-gray-800',
    h3: 'text-xl font-semibold text-gray-800',
    body: 'text-base text-gray-700',
    label: 'text-sm font-medium text-gray-700',
    caption: 'text-xs text-gray-500',
  };

  // Mapeo de variantes a elementos HTML por defecto
  const defaultElements: Record<TextVariant, TextProps['as']> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    label: 'label',
    caption: 'span',
  };

  // Determinar el elemento a usar
  const Component = as || defaultElements[variant] || 'p';

  // Combinar estilos
  const finalClassName = `${variantStyles[variant]} ${className}`;

  return (
    <Component className={finalClassName} {...rest}>
      {children}
    </Component>
  );
}
