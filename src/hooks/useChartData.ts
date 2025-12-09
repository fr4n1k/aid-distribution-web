'use client';

import { useMemo } from 'react';
import type { Distribution } from '@/types';

export function useChartData(distributions: Distribution[]) {
  const statusData = useMemo(() => {
    const counts: Record<string, number> = {};
    distributions.forEach((d) => {
      counts[d.status] = (counts[d.status] || 0) + 1;
    });
    return Object.entries(counts).map(([status, count]) => ({ status, count }));
  }, [distributions]);

  const timeSeriesData = useMemo(() => {
    const monthlyCounts: Record<string, number> = {};
    distributions.forEach((d) => {
      const date = new Date(d.date);
      const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;
    });
    return Object.entries(monthlyCounts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [distributions]);

  const totalBeneficiaries = useMemo(
    () => distributions.reduce((sum, d) => sum + d.beneficiaries, 0),
    [distributions]
  );

  const completedDistributions = useMemo(
    () => distributions.filter((d) => d.status === 'Completed').length,
    [distributions]
  );

  return { statusData, timeSeriesData, totalBeneficiaries, completedDistributions };
}
