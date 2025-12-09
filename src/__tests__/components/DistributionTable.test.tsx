import { render, screen } from '@testing-library/react';
import { DistributionTable } from '@/components/presentation/list/DistributionTable';
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
];

describe('DistributionTable', () => {
  it('renders loading state', () => {
    render(<DistributionTable distributions={[]} loading={true} />);
    expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument();
  });

  it('renders empty state when no distributions', () => {
    render(<DistributionTable distributions={[]} loading={false} />);
    expect(screen.getByText('No distributions found')).toBeInTheDocument();
  });

  it('renders table with distribution data', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    expect(screen.getByText('West Nile')).toBeInTheDocument();
    expect(screen.getByText('Eastern Province')).toBeInTheDocument();
    expect(screen.getByText('1,200')).toBeInTheDocument();
    expect(screen.getByText('850')).toBeInTheDocument();
  });

  it('renders status badges correctly', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    expect(screen.getByText('Planned')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('renders View Details links for each distribution', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    const links = screen.getAllByText('View Details');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/distributions/dst-001');
    expect(links[1]).toHaveAttribute('href', '/distributions/dst-002');
  });
});
