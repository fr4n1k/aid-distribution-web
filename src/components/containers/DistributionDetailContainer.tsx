'use client';

import { useDistributionDetail } from '@/hooks';
import { DistributionDetailView } from '../presentation/DistributionDetailView';

export function DistributionDetailContainer({ id }: { id: string }) {
  const { distribution, loading, error } = useDistributionDetail(id);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !distribution) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error ? `Error: ${error.message}` : 'Distribution not found'}
      </div>
    );
  }

  return <DistributionDetailView distribution={distribution} />;
}
