// src/components/ui/Select.tsx

import { Text } from './Text';

/**
 * Props para el componente Select
 */
interface SelectProps {
  /** ID del select (para accesibilidad) */
  id: string;
  /** Label del select */
  label: string;
  /** Valor actual seleccionado */
  value: string;
  /** Opciones disponibles */
  options: Array<{ value: string; label: string }>;
  /** Handler para cambio de valor */
  onChange: (value: string) => void;
  /** Clases adicionales de Tailwind */
  className?: string;
}

/**
 * Componente select reutilizable con label y estilos consistentes.
 * Usa el tema de Tailwind para focus states.
 *
 * @example
 * <Select
 *   id="region"
 *   label="Region"
 *   value={selectedRegion}
 *   options={[
 *     { value: 'all', label: 'All Regions' },
 *     { value: 'north', label: 'North' }
 *   ]}
 *   onChange={handleChange}
 * />
 */
export function Select({ id, label, value, options, onChange, className = '' }: SelectProps) {
  return (
    <div className={className}>
      <Text variant='label' as='label' className='mb-2 block'>
        {label}
      </Text>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='block w-full px-3 py-2 text-gray-900 bg-white border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
