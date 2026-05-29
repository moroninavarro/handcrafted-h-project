import SellerCard from './sellerCard';
import { sellers } from '@/data/sellers';

export default function SellerGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sellers.map((seller) => (
        <SellerCard key={seller.id} seller={seller} />
      ))}
    </div>
  );
}