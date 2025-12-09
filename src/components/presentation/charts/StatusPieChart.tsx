// src/components/presentation/StatusPieChart.tsx

'use client';

import dynamic from 'next/dynamic';
import { Card } from '@/components/ui';
import { getPieChartOptions } from '@/config/chartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * Props para el StatusPieChart
 */
interface StatusPieChartProps {
  /** Datos del gráfico de pie */
  data: Array<{ status: string; count: number }>;
  /** Título del gráfico (opcional) */
  title?: string;
}

/**
 * Componente presentacional que renderiza un gráfico de pie de distribuciones por estado.
 * Usa ApexCharts para la visualización.
 *
 * @example
 * <StatusPieChart data={statusData} title="Distributions by Status" />
 */
export function StatusPieChart({ data, title = 'Distributions by Status' }: StatusPieChartProps) {
  const series = data.map((item) => item.count);
  const labels = data.map((item) => item.status);
  const options = getPieChartOptions(labels);

  return (
    <Card title={title}>
      <Chart options={options} series={series} type='pie' height={350} />
    </Card>
  );
}
