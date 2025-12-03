'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StatusPieChartProps {
  data: Array<{ status: string; count: number }>;
}

export function StatusPieChart({ data }: StatusPieChartProps) {
  const series = data.map(item => item.count);
  const labels = data.map(item => item.status);

  const options: ApexOptions = {
    chart: {
      type: 'pie',
      fontFamily: 'Inter, sans-serif',
    },
    labels,
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Distributions by Status
      </h3>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
}
