'use client';

import { products } from '@/data/products';
import { Seller } from '@/types/seller';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

interface SellerProductsProps {
  seller: Seller;
}

export default function SellerProducts({ seller }: SellerProductsProps) {
  const sellerProducts = products.filter(p => p.sellerId === seller.id);

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
          {sellerProducts.length} {sellerProducts.length === 1 ? 'Product' : 'Products'}
        </h2>

        {sellerProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellerProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center py-12">
            This seller hasn't added any products yet.
          </p>
        )}
      </div>
    </section>
  );
}
