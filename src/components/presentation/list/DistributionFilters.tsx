// src/components/presentation/DistributionFilters.tsx

import { regionOptions, statusOptions } from '@/api/mockData';
import { Card, Select } from '@/components/ui';

/**
 * Props para el componente DistributionFilters
 */
interface DistributionFiltersProps {
  /** Filtros actuales aplicados */
  filters: { region?: string; status?: string };
  /** Handler para cambios en los filtros */
  onFilterChange: (filters: { region?: string; status?: string }) => void;
}

/**
 * Estados disponibles para filtrar
 */

/**
 * Componente presentacional que renderiza los filtros de distribuciones.
 * Permite filtrar por región y estado.
 *
 * @example
 * <DistributionFilters
 *   filters={{ region: 'North', status: 'Completed' }}
 *   onFilterChange={handleFilterChange}
 * />
 */
export function DistributionFilters({ filters, onFilterChange }: DistributionFiltersProps) {
  /**
   * Maneja el cambio de valor en los filtros
   */
  const handleChange = (field: 'region' | 'status', value: string) => {
    onFilterChange({
      ...filters,
      [field]: value === 'all' ? undefined : value,
    });
  };

  return (
    <Card>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Filtro de región */}
        <Select
          id='region'
          label='Region'
          value={filters.region || 'all'}
          options={regionOptions}
          onChange={(value) => handleChange('region', value)}
        />

        {/* Filtro de estado */}
        <Select
          id='status'
          label='Status'
          value={filters.status || 'all'}
          options={statusOptions}
          onChange={(value) => handleChange('status', value)}
        />
      </div>
    </Card>
  );
}
