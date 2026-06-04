import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sellers } from '@/data/sellers';

interface SellerPageProps {
  params: {
    id: string;
  };
}

export default function SellerPage({ params }: SellerPageProps) {
  const seller = sellers.find((item) => item.id === params.id);

  if (!seller) {
    return notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] items-center bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-72 lg:h-[420px]">
          <Image
            src={seller.image}
            alt={seller.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 lg:p-12">
          <p className="text-orange-500 font-semibold mb-3">{seller.specialty}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{seller.name}</h1>
          <p className="text-gray-600 mb-6">{seller.bio}</p>

          <div className="grid gap-4 sm:grid-cols-3 mb-8 text-sm text-gray-700">
            <div className="rounded-3xl bg-gray-50 p-5">
              <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Location</span>
              <strong>{seller.location}</strong>
            </div>
            <div className="rounded-3xl bg-gray-50 p-5">
              <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Rating</span>
              <strong>{seller.rating} ⭐</strong>
            </div>
            <div className="rounded-3xl bg-gray-50 p-5">
              <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Products</span>
              <strong>{seller.products}</strong>
            </div>
          </div>

          <Link
            href={`/sellers/${seller.id}/products`}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return sellers.map((seller) => ({ id: seller.id }));
}