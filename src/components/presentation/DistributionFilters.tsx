interface DistributionFiltersProps {
  filters: { region?: string; status?: string };
  regions: string[];
  onFilterChange: (filters: { region?: string; status?: string }) => void;
}

const STATUSES = ['all', 'Planned', 'In Progress', 'Completed', 'Cancelled'];

export function DistributionFilters({ filters, regions, onFilterChange }: DistributionFiltersProps) {
  const handleChange = (field: 'region' | 'status', value: string) => {
    onFilterChange({
      ...filters,
      [field]: value === 'all' ? undefined : value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
            Region
          </label>
          <select
            id="region"
            value={filters.region || 'all'}
            onChange={(e) => handleChange('region', e.target.value)}
            className="block w-full px-3 py-2 text-gray-900 bg-white border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option className="text-gray-900" value="all">All Regions</option>
            {regions.map(r => <option className="text-gray-900" key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            id="status"
            value={filters.status || 'all'}
            onChange={(e) => handleChange('status', e.target.value)}
            className="block w-full px-3 py-2 text-gray-900 bg-white border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            {STATUSES.map(s => <option className="text-gray-900" key={s} value={s}>{s === 'all' ? 'All Statuses' : s}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
