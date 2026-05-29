import { notFound } from 'next/navigation';
import { sellers } from '@/data/sellers';
import SellerProfile from '@/components/sellers/SellerProfile';

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

  return <SellerProfile seller={seller} />;
}