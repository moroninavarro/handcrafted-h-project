import { Metadata } from 'next';
import { getDb } from '@/lib/mongodb';


export default async function Page() {

  const db = await getDb();
  
  const categories = await db.collection("categories").find({}).toArray();

  return (
  <div>
   <h1 className="text-3xl font-bold">Categories Page</h1>

    <ul className="mt-4">
      {categories.map((category: any) => (
        <li key={category._id.toString()}>
          {category.name}
        </li>
      ))}
    </ul>
  </div>
  );
}


export const metadata: Metadata = {
  title: "Categories",
};

