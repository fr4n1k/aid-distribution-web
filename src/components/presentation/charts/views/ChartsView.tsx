// src/components/presentation/ChartsView.tsx

import { StatusPieChart } from '../StatusPieChart';
import { TimeSeriesLineChart } from '../TimeSeriesLineChart';
import { Spinner, ErrorMessage, Card, Text } from '@/components/ui';
import type { Distribution } from '@/types';

/**
 * Props para el ChartsView
 */
interface ChartsViewProps {
  /** Lista de distribuciones */
  distributions: Distribution[];
  /** Datos procesados para el gráfico de pie */
  statusData: Array<{ status: string; count: number }>;
  /** Datos procesados para el gráfico de línea de tiempo */
  timeSeriesData: Array<{ date: string; count: number }>;
  /** Datos procesados para el summary card */
  totalBeneficiaries: number;
  /** Datos procesados para el summary card */
  completedDistributions: number;
  /** Indica si está cargando */
  loading: boolean;
  /** Error al cargar (si existe) */
  error: Error | null;
}

/**
 * Componente presentacional que renderiza los gráficos y estadísticas de distribuciones.
 * Muestra gráficos de estado, series de tiempo y estadísticas resumidas.
 *
 * @example
 * <ChartsView
 *   distributions={data}
 *   statusData={statusData}
 *   timeSeriesData={timeSeriesData}
 *   loading={false}
 *   error={null}
 * />
 */
export function ChartsView({
  distributions,
  statusData,
  timeSeriesData,
  totalBeneficiaries,
  completedDistributions,
  loading,
  error,
}: ChartsViewProps) {
  if (loading) {
    return (
      <div className='flex justify-center py-12'>
        <Spinner size='lg' label='Cargando gráficos...' />
      </div>
    );
  }

  if (error || distributions.length === 0) {
    return <ErrorMessage message={error ? error.message : 'No data available'} />;
  }

  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <StatusPieChart data={statusData} />
        <TimeSeriesLineChart data={timeSeriesData} />
      </div>

      <Card title='Summary Statistics'>
        <dl className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          <div>
            <Text variant='label' className='text-gray-500'>
              Total Distributions
            </Text>
            <Text variant='h2' className='mt-1'>
              {distributions.length}
            </Text>
          </div>
          <div>
            <Text variant='label' className='text-gray-500'>
              Total Beneficiaries
            </Text>
            <Text variant='h2' className='mt-1'>
              {totalBeneficiaries.toLocaleString()}
            </Text>
          </div>
          <div>
            <Text variant='label' className='text-gray-500'>
              Completed Distributions
            </Text>
            <Text variant='h2' className='mt-1'>
              {completedDistributions}
            </Text>
          </div>
        </dl>
      </Card>
    </div>
  );
}
