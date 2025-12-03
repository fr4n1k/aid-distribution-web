import type { Distribution } from '@/types';
import Link from 'next/link';

interface DistributionDetailViewProps {
  distribution: Distribution;
}

export function DistributionDetailView({ distribution }: DistributionDetailViewProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-5 border-b border-gray-200">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-block"
        >
          ← Back to Distributions
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">
          Aid Distribution Details
        </h2>
      </div>

      <div className="px-6 py-5 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailField label="Region" value={distribution.region} />
          <DetailField
            label="Date"
            value={new Date(distribution.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          />
          <DetailField label="Status" value={distribution.status} />
          <DetailField label="Aid Type" value={distribution.aidType} />
          <DetailField
            label="Delivery Channel"
            value={distribution.deliveryChannel}
          />
          <DetailField
            label="Total Beneficiaries"
            value={distribution.beneficiaries.toLocaleString()}
          />
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Beneficiaries</h3>
          {distribution.beneficiaryList && distribution.beneficiaryList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {distribution.beneficiaryList.map(b => (
                <div key={b.id} className="bg-gray-50 px-4 py-3 rounded-md">
                  <p className="text-sm font-medium text-gray-900">{b.name}</p>
                  <p className="text-xs text-gray-500">{b.id}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No beneficiary information available</p>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-lg text-gray-900">{value}</dd>
    </div>
  );
}
