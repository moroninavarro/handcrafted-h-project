import { notFound } from 'next/navigation';
import { getDb } from '@//lib/mongodb';
import { ObjectId } from 'mongodb';
import SellerProducts from '@/components/sellers/SellerProducts';

interface SellerProductsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SellerProductsPage({ params }: SellerProductsPageProps) {
  const { id } = await params;
  const db = await getDb();
  const seller = await db.collection("sellers").findOne({ _id: new ObjectId(id) });

  if (!seller) {
    return notFound();
  }

  return <SellerProducts seller={{
    id: seller._id.toString(),
    name: seller.name,
    specialty: seller.specialty,
    location: seller.location,
    image: seller.image,
    bio: seller.bio,
    rating: seller.rating,
    products: seller.products,
  }} />;
}

export async function generateStaticParams() {
  const db = await getDb();
 const sellers = await db
    .collection("sellers")
    .find({}, { projection: { _id: 1 } })
    .toArray();
    
  return sellers.map((seller: any) => ({ id: seller._id.toString() }));
}
