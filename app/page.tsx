import { DistributionListContainer } from '@/components/containers/DistributionListContainer';
import { Text } from '@/components/ui';

export default function Home() {
  return (
    <div>
      <div className='mb-8'>
        <Text variant='h1' className='text-primary-200'>
          Aid Distribution Dashboard
        </Text>
        <Text variant='body' className='mt-2 text-primary-400'>
          Monitor and manage humanitarian aid distributions across all regions
        </Text>
      </div>

      <DistributionListContainer />
    </div>
  );
}
