// src/components/presentation/DistributionListView.tsx

import { DistributionFilters } from '../DistributionFilters';
import { DistributionTable } from '../DistributionTable';
import { Pagination } from '../Pagination';
import { ErrorMessage } from '@/components/ui';
import type { Distribution } from '@/types';

/**
 * Props para el DistributionListView
 */
interface DistributionListViewProps {
  /** Lista de distribuciones a mostrar */
  distributions: Distribution[];
  /** Total de items para paginación */
  total: number;
  /** Indica si está cargando */
  loading: boolean;
  /** Error al cargar (si existe) */
  error: Error | null;
  /** Página actual */
  page: number;
  /** Tamaño de página */
  pageSize: number;
  /** Filtros actuales */
  filters: { region?: string; status?: string };
  /** Handler para cambio de página */
  onPageChange: (page: number) => void;
  /** Handler para cambio de filtros */
  onFilterChange: (filters: { region?: string; status?: string }) => void;
}

/**
 * Componente presentacional que renderiza la vista completa de la lista de distribuciones.
 * Orquesta los componentes de filtros, tabla y paginación.
 *
 * @example
 * <DistributionListView
 *   distributions={data}
 *   total={100}
 *   loading={false}
 *   error={null}
 *   page={1}
 *   pageSize={10}
 *   filters={{}}
 *   onPageChange={handlePageChange}
 *   onFilterChange={handleFilterChange}
 * />
 */
export function DistributionListView({
  distributions,
  total,
  loading,
  error,
  page,
  pageSize,
  filters,
  onPageChange,
  onFilterChange,
}: DistributionListViewProps) {
  // Estado de error
  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  // Renderizado principal
  return (
    <div className='space-y-6'>
      {/* Filtros */}
      <DistributionFilters filters={filters} onFilterChange={onFilterChange} />

      {/* Tabla */}
      <DistributionTable distributions={distributions} loading={loading} />

      {/* Paginación */}
      <Pagination
        currentPage={page}
        totalItems={total}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
