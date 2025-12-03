import type { Distribution } from '@/types';

export async function fetchDistributions(params: {
  region?: string;
  status?: string;
  page?: number;
  pageSize?: number;
} = {}) {
  const { region, status, page = 1, pageSize = 10 } = params;
  const searchParams = new URLSearchParams({ page: page.toString(), pageSize: pageSize.toString() });

  if (region) searchParams.append('region', region);
  if (status) searchParams.append('status', status);

  const response = await fetch(`/api/distributions?${searchParams}`);
  if (!response.ok) throw new Error('Failed to fetch distributions');

  return response.json() as Promise<{ data: Distribution[]; total: number }>;
}

export async function fetchDistributionById(id: string) {
  const response = await fetch(`/api/distributions/${id}`);
  if (!response.ok) throw new Error('Failed to fetch distribution');

  return response.json() as Promise<{ data: Distribution }>;
}
