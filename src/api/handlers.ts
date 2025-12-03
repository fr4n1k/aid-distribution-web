import { http, HttpResponse } from 'msw';
import { mockDistributions } from './mockData';

export const handlers = [
  http.get('/api/distributions', ({ request }) => {
    const url = new URL(request.url);
    const region = url.searchParams.get('region');
    const status = url.searchParams.get('status');
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10');

    let data = [...mockDistributions];

    if (region && region !== 'all') {
      data = data.filter(d => d.region === region);
    }
    if (status && status !== 'all') {
      data = data.filter(d => d.status === status);
    }

    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const total = data.length;
    const start = (page - 1) * pageSize;
    const paginated = data.slice(start, start + pageSize);

    return HttpResponse.json({ data: paginated, total });
  }),

  http.get('/api/distributions/:id', ({ params }) => {
    const distribution = mockDistributions.find(d => d.id === params.id);
    if (!distribution) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json({ data: distribution });
  }),
];
