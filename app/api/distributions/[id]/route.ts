// app/api/distributions/[id]/route.ts

import { NextRequest } from 'next/server';
import { mockDistributions } from '@/api/mockData';

/**
 * GET /api/distributions/:id
 * Retorna una distribución específica por ID
 *
 * @param request - Request de Next.js
 * @param params - Parámetros de ruta (id)
 * @returns JSON con { data: Distribution } o error 404
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const distribution = mockDistributions.find(d => d.id === id);

  if (!distribution) {
    return Response.json(
      { error: 'Distribution not found' },
      { status: 404 }
    );
  }

  return Response.json({ data: distribution });
}
