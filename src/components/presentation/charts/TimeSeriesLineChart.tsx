// src/components/presentation/TimeSeriesLineChart.tsx

'use client';

import dynamic from 'next/dynamic';
import { Card } from '@/components/ui';
import { getLineChartOptions } from '@/config/chartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * Props para el TimeSeriesLineChart
 */
interface TimeSeriesLineChartProps {
  /** Datos del gráfico de línea de tiempo */
  data: Array<{ date: string; count: number }>;
  /** Título del gráfico (opcional) */
  title?: string;
}

/**
 * Componente presentacional que renderiza un gráfico de línea de distribuciones en el tiempo.
 * Usa ApexCharts para la visualización.
 *
 * @example
 * <TimeSeriesLineChart data={timeSeriesData} title="Distributions Over Time" />
 */
export function TimeSeriesLineChart({
  data,
  title = 'Distributions Over Time',
}: TimeSeriesLineChartProps) {
  const series = [{ name: 'Distributions', data: data.map((item) => item.count) }];

  const categories = data.map((item) => {
    const [year, month] = item.date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  });

  const options = getLineChartOptions(categories, {
    yAxisTitle: 'Number of Distributions',
    tooltipEnabled: false,
  });

  return (
    <Card title={title}>
      <Chart options={options} series={series} type='line' height={350} />
    </Card>
  );
}
