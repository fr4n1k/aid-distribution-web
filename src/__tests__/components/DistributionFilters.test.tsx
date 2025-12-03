
import { render, screen, fireEvent } from '@testing-library/react';
import { DistributionFilters } from '@/components/presentation/DistributionFilters';
import type { DistributionFilters as Filters } from '@/types';

const mockRegions = ['West Nile', 'Eastern Province', 'Northern Region'];

describe('DistributionFilters', () => {
  it('renders filter controls', () => {
    const mockOnFilterChange = jest.fn();
    const filters: Filters = {};

    render(
      <DistributionFilters
        filters={filters}
        regions={mockRegions}
        onFilterChange={mockOnFilterChange}
      />
    );

    expect(screen.getByLabelText('Region')).toBeInTheDocument();
    expect(screen.getByLabelText('Status')).toBeInTheDocument();
  });

  it('displays all regions in dropdown', () => {
    const mockOnFilterChange = jest.fn();
    const filters: Filters = {};

    render(
      <DistributionFilters
        filters={filters}
        regions={mockRegions}
        onFilterChange={mockOnFilterChange}
      />
    );

    const regionSelect = screen.getByLabelText('Region') as HTMLSelectElement;
    const options = Array.from(regionSelect.options).map((opt) => opt.value);

    expect(options).toContain('all');
    expect(options).toContain('West Nile');
    expect(options).toContain('Eastern Province');
    expect(options).toContain('Northern Region');
  });

  it('calls onFilterChange when region is selected', () => {
    const mockOnFilterChange = jest.fn();
    const filters: Filters = {};

    render(
      <DistributionFilters
        filters={filters}
        regions={mockRegions}
        onFilterChange={mockOnFilterChange}
      />
    );

    const regionSelect = screen.getByLabelText('Region');
    fireEvent.change(regionSelect, { target: { value: 'West Nile' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      region: 'West Nile',
    });
  });

  it('calls onFilterChange when status is selected', () => {
    const mockOnFilterChange = jest.fn();
    const filters: Filters = {};

    render(
      <DistributionFilters
        filters={filters}
        regions={mockRegions}
        onFilterChange={mockOnFilterChange}
      />
    );

    const statusSelect = screen.getByLabelText('Status');
    fireEvent.change(statusSelect, { target: { value: 'Completed' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      status: 'Completed',
    });
  });

  it('sets region to undefined when "all" is selected', () => {
    const mockOnFilterChange = jest.fn();
    const filters: Filters = { region: 'West Nile' };

    render(
      <DistributionFilters
        filters={filters}
        regions={mockRegions}
        onFilterChange={mockOnFilterChange}
      />
    );

    const regionSelect = screen.getByLabelText('Region');
    fireEvent.change(regionSelect, { target: { value: 'all' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      region: undefined,
    });
  });
});
