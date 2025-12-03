'use client';

import { useState, useEffect } from 'react';
import { fetchDistributionById } from '@/api';
import type { Distribution } from '@/types';

export function useDistributionDetail(id: string) {
  const [distribution, setDistribution] = useState<Distribution | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetchDistributionById(id);
        setDistribution(response.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load'));
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  return { distribution, loading, error };
}
