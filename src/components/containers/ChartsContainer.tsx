'use client';

import { useDistributions, useChartData } from '@/hooks';
import { StatusPieChart } from '../presentation/StatusPieChart';
import { TimeSeriesLineChart } from '../presentation/TimeSeriesLineChart';

export function ChartsContainer() {
  const { distributions, loading, error } = useDistributions(100);
  const { statusData, timeSeriesData } = useChartData(distributions);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || distributions.length === 0) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error ? `Error: ${error.message}` : 'No data available'}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <StatusPieChart data={statusData} />
        <TimeSeriesLineChart data={timeSeriesData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary Statistics</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">Total Distributions</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{distributions.length}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Total Beneficiaries</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {distributions.reduce((sum, d) => sum + d.beneficiaries, 0).toLocaleString()}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Completed Distributions</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {distributions.filter(d => d.status === 'Completed').length}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
