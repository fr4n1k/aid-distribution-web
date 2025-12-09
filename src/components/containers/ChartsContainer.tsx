// src/components/containers/ChartsContainer.tsx

'use client';

import { useDistributions, useChartData } from '@/hooks';
import { ChartsView } from '../presentation/charts/views/ChartsView';

/**
 * Container que maneja la lógica de datos para los gráficos y estadísticas.
 * Obtiene las distribuciones y procesa los datos para los diferentes gráficos.
 * Delega toda la renderización al componente presentacional.
 *
 * @example
 * <ChartsContainer />
 */
export function ChartsContainer() {
  const { distributions, loading, error } = useDistributions(100);
  const { statusData, timeSeriesData, totalBeneficiaries, completedDistributions } =
    useChartData(distributions);

  return (
    <ChartsView
      distributions={distributions}
      statusData={statusData}
      timeSeriesData={timeSeriesData}
      totalBeneficiaries={totalBeneficiaries}
      completedDistributions={completedDistributions}
      loading={loading}
      error={error}
    />
  );
}
