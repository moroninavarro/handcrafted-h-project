import { notFound } from 'next/navigation';
import { sellers } from '@/data/sellers';
import SellerProducts from '@/components/sellers/SellerProducts';

interface SellerPageProps {
  params: {
    id: string;
  };
}

export default function SellerPage({ params }: SellerPageProps) {
  const seller = sellers.find(
    (item) => item.id === params.id
  );

  if (!seller) {
    return notFound();
  }

  return <SellerProducts seller={seller} />;
}