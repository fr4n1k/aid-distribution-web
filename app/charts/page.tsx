import { ChartsContainer } from '@/components/containers/ChartsContainer';
import { Text } from '@/components/ui/Text';
import Link from 'next/link';

export default function ChartsPage() {
  return (
    <div>
      <div className='mb-8'>
        <Link
          href='/'
          className='text-blue-300 hover:text-blue-400 text-sm font-medium mb-4 inline-block'
        >
          ← Back to Distributions
        </Link>
        <Text variant='h1' className='text-primary-200'>
          Distribution Analytics
        </Text>
        <Text variant='body' className='mt-2 text-primary-400'>
          Visual insights and statistics for aid distribution operations
        </Text>
      </div>

      <ChartsContainer />
    </div>
  );
}
