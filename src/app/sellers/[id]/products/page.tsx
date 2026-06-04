import { notFound } from 'next/navigation';
import { sellers } from '@/data/sellers';
import SellerProducts from '@/components/sellers/SellerProducts';

interface SellerProductsPageProps {
  params: {
    id: string;
  };
}

export default function SellerProductsPage({ params }: SellerProductsPageProps) {
  const seller = sellers.find((item) => item.id === params.id);

  if (!seller) {
    return notFound();
  }

  return <SellerProducts seller={seller} />;
}

export function generateStaticParams() {
  return sellers.map((seller) => ({ id: seller.id }));
}
