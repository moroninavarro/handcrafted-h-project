import Image from 'next/image';
import { Seller } from '@/types/seller';

interface SellerProfileProps {
  seller: Seller;
}

export default function SellerProfile({
  seller,
}: SellerProfileProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src={seller.image}
          alt={seller.name}
          width={600}
          height={600}
          className="rounded-2xl object-cover"
        />

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {seller.name}
          </h1>

          <p className="text-orange-500 text-xl mb-4">
            {seller.specialty}
          </p>

          <p className="text-gray-700 leading-7 mb-6">
            {seller.bio}
          </p>

          <div className="space-y-2 text-gray-600">
            <p>📍 {seller.location}</p>
            <p>⭐ Rating: {seller.rating}</p>
            <p>🛍️ Products: {seller.products}</p>
          </div>
        </div>
      </div>
    </section>
  );
}