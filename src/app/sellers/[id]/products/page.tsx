import { notFound } from 'next/navigation';
import { sellers } from '@/data/sellers';
import SellerProducts from '@/components/sellers/SellerProducts';

interface SellerProductsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SellerProductsPage({ params }: SellerProductsPageProps) {
  const { id } = await params;
  const seller = sellers.find((item) => String(item.id) === String(id));

  if (!seller) {
    return notFound();
  }

  return <SellerProducts seller={seller} />;
}

export function generateStaticParams() {
  return sellers.map((seller) => ({ id: seller.id }));
}
