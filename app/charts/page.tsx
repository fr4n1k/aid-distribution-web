import { ChartsContainer } from '@/components/containers/ChartsContainer';
import Link from 'next/link';

export default function ChartsPage() {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-300 hover:text-blue-400 text-sm font-medium mb-4 inline-block"
        >
          ← Back to Distributions
        </Link>
        <h1 className="text-3xl font-bold text-gray-200">
          Distribution Analytics
        </h1>
        <p className="mt-2 text-gray-400">
          Visual insights and statistics for aid distribution operations
        </p>
      </div>

      <ChartsContainer />
    </div>
  );
}
