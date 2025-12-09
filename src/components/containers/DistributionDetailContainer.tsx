// src/components/containers/DistributionDetailContainer.tsx

'use client';

import { useDistributionDetail } from '@/hooks';
import { DistributionDetailView } from '../presentation/detail/views/DistributionDetailView';

/**
 * Props para el DistributionDetailContainer
 */
interface DistributionDetailContainerProps {
  /** ID de la distribución a mostrar */
  id: string;
}

/**
 * Container que maneja la lógica de obtención de datos para el detalle de una distribución.
 * Delega toda la renderización al componente presentacional DistributionDetailView.
 *
 * @example
 * <DistributionDetailContainer id="123" />
 */
export function DistributionDetailContainer({ id }: DistributionDetailContainerProps) {
  const { distribution, loading, error } = useDistributionDetail(id);

  return <DistributionDetailView distribution={distribution} loading={loading} error={error} />;
}
