import { DistributionListContainer } from '@/components/containers/DistributionListContainer';

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-200">
          Aid Distribution Dashboard
        </h1>
        <p className="mt-2 text-gray-400">
          Monitor and manage humanitarian aid distributions across all regions
        </p>
      </div>

      <DistributionListContainer />
    </div>
  );
}
