'use client';

import { useState, useEffect } from 'react';
import { fetchDistributions } from '@/api';
import type { Distribution } from '@/types';

export function useDistributions(pageSize: number = 10) {
  const [distributions, setDistributions] = useState<Distribution[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<{ region?: string; status?: string }>({});

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetchDistributions({ ...filters, page, pageSize });
        setDistributions(response.data);
        setTotal(response.total);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load'));
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [filters, page, pageSize]);

  const updateFilters = (newFilters: { region?: string; status?: string }) => {
    setFilters(newFilters);
    setPage(1);
  };

  return { distributions, total, loading, error, page, pageSize, filters, setPage, setFilters: updateFilters };
}
