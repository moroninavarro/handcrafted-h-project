
import { getDb } from '@/lib/mongodb';
import { Seller } from '@/types/seller';
import ProductCard from '@/components/ProductCard';
import SellerProductsClient from './sellerProductsClient';
import Image from 'next/image';

interface SellerProductsProps {
  seller: Seller;
}

export default async function SellerProducts({ seller }: SellerProductsProps) {

  const db = await getDb();
  const products = await db.collection("products").find({}).toArray();
  const reviews = await db.collection("reviews").find({}).toArray();

  const sellerProducts = products
  .filter((p: any) => p.sellerId === seller.id)
  .map((p: any) => ({
    id: p._id.toString(),
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
    category: p.category,
    reviews: reviews
    .filter((r: any) => r.productId === p._id.toString())
    .map((r: any) => ({
      id: r._id.toString(),
      userId: r.userId,
      rating: r.rating,
      comment: r.comment,
    })),
    seller: {
      id: seller.id,
      name: seller.name,
    }
  }));

  return (
    <section className="w-full">
      {/* Seller Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-12 px-6 mb-12 rounded-2xl">
        <div className="max-w-5xl mx-auto flex gap-8 items-center">
          <Image
            src={seller.image}
            alt={seller.name}
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-white"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{seller.name}</h1>
            <p className="text-lg mb-2">{seller.specialty}</p>
            <p className="text-sm mb-4">{seller.bio}</p>
            <div className="flex gap-6 text-sm">
              <span>📍 {seller.location}</span>
              <span>⭐ {seller.rating}</span>
              <span>🛍️ {seller.products} Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          {sellerProducts.length} 
        </h2>

        {
          sellerProducts.length > 0 ? (
            <SellerProductsClient products={sellerProducts} />
          ) : (
            <p className="text-center py-20">
              This seller has no products listed yet. Check back later!
            </p>
          )
        }
      </div>
    </section>
  );
}
