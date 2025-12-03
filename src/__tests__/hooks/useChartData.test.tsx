

import { renderHook } from '@testing-library/react';
import { useChartData } from '@/hooks';
import type { Distribution } from '@/types';

const mockDistributions: Distribution[] = [
  {
    id: 'dst-001',
    region: 'West Nile',
    date: '2025-06-15',
    status: 'Planned',
    beneficiaries: 1200,
    aidType: 'Food',
    deliveryChannel: 'Vouchers',
  },
  {
    id: 'dst-002',
    region: 'Eastern Province',
    date: '2025-06-10',
    status: 'Completed',
    beneficiaries: 850,
    aidType: 'Medical',
    deliveryChannel: 'Direct Distribution',
  },
  {
    id: 'dst-003',
    region: 'Northern Region',
    date: '2025-05-20',
    status: 'Completed',
    beneficiaries: 1000,
    aidType: 'Food',
    deliveryChannel: 'Vouchers',
  },
];

describe('useChartData', () => {
  it('transforms distributions into status chart data', () => {
    const { result } = renderHook(() => useChartData(mockDistributions));

    expect(result.current.statusData).toHaveLength(2);
    expect(result.current.statusData).toEqual(
      expect.arrayContaining([
        { status: 'Planned', count: 1 },
        { status: 'Completed', count: 2 },
      ])
    );
  });

  it('transforms distributions into time series data', () => {
    const { result } = renderHook(() => useChartData(mockDistributions));

    expect(result.current.timeSeriesData).toHaveLength(2);
    expect(result.current.timeSeriesData[0]).toHaveProperty('date');
    expect(result.current.timeSeriesData[0]).toHaveProperty('count');
  });

  it('groups distributions by month correctly', () => {
    const { result } = renderHook(() => useChartData(mockDistributions));

    const mayData = result.current.timeSeriesData.find(
      (d) => d.date === '2025-05'
    );
    const juneData = result.current.timeSeriesData.find(
      (d) => d.date === '2025-06'
    );

    expect(mayData?.count).toBe(1);
    expect(juneData?.count).toBe(2);
  });

  it('handles empty distribution array', () => {
    const { result } = renderHook(() => useChartData([]));

    expect(result.current.statusData).toEqual([]);
    expect(result.current.timeSeriesData).toEqual([]);
  });
});
