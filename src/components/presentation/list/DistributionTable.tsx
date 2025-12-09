// src/components/presentation/DistributionTable.tsx

import type { Distribution } from '@/types';
import Link from 'next/link';
import { Spinner, EmptyState, Badge, Text, type BadgeVariant } from '@/components/ui';

interface DistributionTableProps {
  distributions: Distribution[];
  loading?: boolean;
}

/**
 * Mapea el status de una distribución a la variante de Badge correspondiente.
 *
 * @param status - Estado de la distribución
 * @returns Variante del badge que corresponde al estado
 */
function getStatusVariant(status: string): BadgeVariant {
  const statusMap: Record<string, BadgeVariant> = {
    Completed: 'success',
    'In Progress': 'warning',
    Planned: 'info',
    Cancelled: 'error',
  };
  return statusMap[status] || 'default';
}

/**
 * Componente presentacional que renderiza una tabla de distribuciones.
 * Muestra estados de carga, estados vacíos y datos en formato tabular.
 *
 * @example
 * <DistributionTable distributions={data} loading={false} />
 */
export function DistributionTable({ distributions, loading = false }: DistributionTableProps) {
  // Estado de carga
  if (loading) {
    return (
      <div className='flex justify-center items-center py-12'>
        <Spinner label='Cargando distribuciones...' />
      </div>
    );
  }

  // Estado vacío
  if (distributions.length === 0) {
    return (
      <EmptyState
        message='No distributions found'
        description='Try adjusting your filters or create a new distribution'
      />
    );
  }

  // Renderizado de tabla
  return (
    <div className='overflow-x-auto bg-white rounded-lg shadow'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left'>
              <Text variant='caption' className='text-gray-500 uppercase tracking-wider'>
                Region
              </Text>
            </th>
            <th className='px-6 py-3 text-left'>
              <Text variant='caption' className='text-gray-500 uppercase tracking-wider'>
                Date
              </Text>
            </th>
            <th className='px-6 py-3 text-left'>
              <Text variant='caption' className='text-gray-500 uppercase tracking-wider'>
                Status
              </Text>
            </th>
            <th className='px-6 py-3 text-left'>
              <Text variant='caption' className='text-gray-500 uppercase tracking-wider'>
                Beneficiaries
              </Text>
            </th>
            <th className='px-6 py-3 text-left'>
              <Text variant='caption' className='text-gray-500 uppercase tracking-wider'>
                Action
              </Text>
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {distributions.map((distribution) => (
            <tr key={distribution.id} className='hover:bg-gray-50'>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Text variant='body' className='font-medium text-gray-900'>
                  {distribution.region}
                </Text>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Text variant='body' className='text-gray-500'>
                  {new Date(distribution.date).toLocaleDateString()}
                </Text>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Badge variant={getStatusVariant(distribution.status)}>{distribution.status}</Badge>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Text variant='body' className='text-gray-500'>
                  {distribution.beneficiaries.toLocaleString('en-US')}
                </Text>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Link
                  href={`/distributions/${distribution.id}`}
                  className='text-primary hover:text-primary-700 font-medium'
                >
                  <Text variant='body' className='text-primary hover:text-primary-700 font-medium'>
                    View Details
                  </Text>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
