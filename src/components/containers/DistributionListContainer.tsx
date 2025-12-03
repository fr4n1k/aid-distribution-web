'use client';

import { useDistributions } from '@/hooks';
import { getUniqueRegions } from '@/api/mockData';
import { DistributionTable } from '../presentation/DistributionTable';
import { DistributionFilters } from '../presentation/DistributionFilters';
import { Pagination } from '../presentation/Pagination';

export function DistributionListContainer() {
  const { distributions, total, loading, error, page, pageSize, filters, setPage, setFilters } = useDistributions(10);

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      <DistributionFilters filters={filters} regions={getUniqueRegions()} onFilterChange={setFilters} />
      <DistributionTable distributions={distributions} loading={loading} />
      <Pagination currentPage={page} totalItems={total} pageSize={pageSize} onPageChange={setPage} />
    </div>
  );
}
