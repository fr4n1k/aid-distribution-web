'use client';

import { useDistributions } from '@/hooks';
import { DistributionListView } from '../presentation/list/views/DistributionListView';

/**
 * Container que maneja la lógica de datos para la lista de distribuciones.
 * Gestiona el fetching de datos, filtros y paginación.
 * Delega toda la renderización al componente presentacional.
 *
 * @example
 * <DistributionListContainer />
 */
export function DistributionListContainer() {
  const { distributions, total, loading, error, page, pageSize, filters, setPage, setFilters } =
    useDistributions(10);

  return (
    <DistributionListView
      distributions={distributions}
      total={total}
      loading={loading}
      error={error}
      page={page}
      pageSize={pageSize}
      filters={filters}
      onPageChange={setPage}
      onFilterChange={setFilters}
    />
  );
}
