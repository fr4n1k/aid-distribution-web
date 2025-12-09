// app/api/distributions/route.ts

import { NextRequest } from 'next/server';
import { mockDistributions } from '@/api/mockData';

/**
 * GET /api/distributions
 * Retorna distribuciones con filtros y paginación
 *
 * @param request - Request de Next.js con query params
 * @returns JSON con { data: Distribution[], total: number }
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const region = searchParams.get('region');
  const status = searchParams.get('status');
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '10');

  let data = [...mockDistributions];

  if (region && region !== 'all') {
    data = data.filter((d) => d.region === region);
  }

  if (status && status !== 'all') {
    data = data.filter((d) => d.status === status);
  }

  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Paginación
  const total = data.length;
  const start = (page - 1) * pageSize;
  const paginated = data.slice(start, start + pageSize);

  return Response.json({ data: paginated, total });
}
