import { DistributionDetailContainer } from '@/components/containers/DistributionDetailContainer';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DistributionDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div>
      <DistributionDetailContainer id={id} />
    </div>
  );
}
