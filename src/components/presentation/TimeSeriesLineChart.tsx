'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TimeSeriesLineChartProps {
  data: Array<{ date: string; count: number }>;
}

export function TimeSeriesLineChart({ data }: TimeSeriesLineChartProps) {
  const series = [{ name: 'Distributions', data: data.map(item => item.count) }];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#3B82F6'],
    xaxis: {
      categories: data.map(item => {
        const [year, month] = item.date.split('-');
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        });
      }),
      labels: {
        rotate: -45,
        rotateAlways: false,
      },
    },
    yaxis: {
      title: {
        text: 'Number of Distributions',
      },
      labels: {
        formatter: (value) => Math.floor(value).toString(),
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      borderColor: '#e5e7eb',
    },
    markers: {
      size: 4,
      colors: ['#3B82F6'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 4,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Distributions Over Time
      </h3>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
