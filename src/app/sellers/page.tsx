import SellerCard from '@/components/sellers/sellerCard';
import { getDb } from '@//lib/mongodb';

export default async function SellerGrid() {
  const db = await getDb();
  const sellers = await db.collection("sellers").find({}).toArray();


  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-10 text-center">Our Sellers</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {sellers.map((seller: any) => (
        <SellerCard 
        key={seller._id.toString()} 
        seller={{
          id: seller._id.toString(),
          name: seller.name,
          specialty: seller.specialty,
          location: seller.location,
          image: seller.image,
          bio: seller.bio,
          rating: seller.rating,
          products: seller.products,
        }} /> 
      ))}
    </div>
      </div>
      </main>
  );
}