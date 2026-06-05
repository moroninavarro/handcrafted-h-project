
import { getDb } from "@/lib/mongodb";
import ProductGrid from "@/components/ProductGrid";


export default async function Page() {

    const db = await getDb();

    const products = await db.collection("products").find().toArray();

    const reviews = await db.collection("reviews").find().toArray();

    const productsWithReviews = products.map((product: any) => {

        const productReviews = reviews.filter((review: any) => review.productId === product._id.toString()
    ).map((review: any) => ({
        id: review._id.toString(),
        user: review.user,
        rating: review.rating,
        comment: review.comment,
    }));

        return {
            id: product._id.toString(),
            name: product.name,
            description: product.description,
            sellerId: product.sellerId,
            category: product.category,
            price: product.price,
            image: product.image,
            reviews: productReviews,
        };
    });

    
    return (
        <main className="min-h-screen bg-gray-50">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-10">Featured Handcrafts</h1>
                <ProductGrid products={productsWithReviews} />
            </div>
        </main>
    );
}




