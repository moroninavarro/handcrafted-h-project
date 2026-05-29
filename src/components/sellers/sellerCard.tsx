import Link from 'next/link';
import Image from 'next/image';
import { Seller } from '@/types/seller';

interface SellerCardProps {
  seller: Seller;
}

export default function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Image
        src={seller.image}
        alt={seller.name}
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {seller.name}
        </h2>

        <p className="text-orange-500 font-medium">
          {seller.specialty}
        </p>

        <p className="text-gray-500 mt-2">
          {seller.location}
        </p>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>{seller.products} Products</span>
          <span>⭐ {seller.rating}</span>
        </div>

        <Link
          href={`/sellers/${seller.id}`}
          className="inline-block mt-5 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}