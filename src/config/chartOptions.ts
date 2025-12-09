// src/config/chartOptions.ts

import type { ApexOptions } from 'apexcharts';

/**
 * Obtiene el valor de una variable CSS del tema
 */
const getThemeColor = (colorVar: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
  }
  return '';
};

/**
 * Colores del tema para gráficos
 */
export const getChartColors = () => ({
  primary: getThemeColor('--color-primary-500') || '#3b82f6',
  success: getThemeColor('--color-success-500') || '#22c55e',
  warning: getThemeColor('--color-warning-500') || '#f59e0b',
  error: getThemeColor('--color-error-500') || '#ef4444',
});

/**
 * Configuración base para gráficos de pie
 */
export const getPieChartOptions = (labels: string[]): ApexOptions => {
  const colors = getChartColors();

  return {
    chart: {
      type: 'pie',
      fontFamily: 'Inter, sans-serif',
    },
    labels,
    colors: [colors.primary, colors.success, colors.warning, colors.error],
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
};

/**
 * Configuración base para gráficos de línea (time series)
 */
export const getLineChartOptions = (
  categories: string[],
  options?: {
    yAxisTitle?: string;
    strokeWidth?: number;
    tooltipEnabled?: boolean;
  }
): ApexOptions => {
  const colors = getChartColors();
  const gridColor = getThemeColor('--color-gray-200') || '#e5e7eb';

  return {
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
    xaxis: {
      categories,
      labels: {
        rotate: -45,
        rotateAlways: false,
      },
    },
    yaxis: {
      title: {
        text: options?.yAxisTitle || 'Count',
      },
      labels: {
        formatter: (value) => Math.floor(value).toString(),
      },
    },
    stroke: {
      curve: 'smooth',
      width: options?.strokeWidth || 3,
    },
    colors: [colors.primary],
    markers: {
      size: 4,
      colors: [colors.primary],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 4,
      },
    },
    grid: {
      borderColor: gridColor,
    },
    tooltip: {
      enabled: options?.tooltipEnabled ?? true,
      shared: true,
      intersect: false,
    },
  };
};
