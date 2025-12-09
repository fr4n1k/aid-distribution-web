// src/components/presentation/DistributionDetailView.tsx

import type { Distribution } from '@/types';
import { Spinner, ErrorMessage, Card, Text } from '@/components/ui';

interface DistributionDetailViewProps {
  distribution: Distribution | null;

  loading: boolean;

  error: Error | null;
}

/**
 * Componente presentacional que renderiza el detalle de una distribución.
 * Maneja los estados de carga, error y datos.
 *
 * @example
 * <DistributionDetailView distribution={data} loading={false} error={null} />
 */
export function DistributionDetailView({
  distribution,
  loading,
  error,
}: DistributionDetailViewProps) {
  // Estado de carga
  if (loading) {
    return (
      <div className='flex justify-center py-12'>
        <Spinner size='lg' label='Cargando detalles de distribución...' />
      </div>
    );
  }

  // Estado de error
  if (error || !distribution) {
    return <ErrorMessage message={error ? error.message : 'Distribution not found'} />;
  }

  // Renderizado del detalle
  return (
    <div className='space-y-6'>
      <Card title={`Distribution: ${distribution.region}`}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Text variant='label'>Region</Text>
            <Text variant='body'>{distribution.region}</Text>
          </div>
          <div>
            <Text variant='label'>Date</Text>
            <Text variant='body'>{new Date(distribution.date).toLocaleDateString()}</Text>
          </div>
          <div>
            <Text variant='label'>Beneficiaries</Text>
            <Text variant='body'>{distribution.beneficiaries.toLocaleString('en-US')}</Text>
          </div>
          <div>
            <Text variant='label'>Status</Text>
            <Text variant='body'>{distribution.status}</Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
