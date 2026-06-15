
import { getDb } from "@/lib/mongodb";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";




export default async function Page({ searchParams }: any) {

    const db = await getDb();

    const categories = await db.collection("categories").find({}).toArray();

    const selectedCategory = (await searchParams)?.category;

    const products = await db.collection("products")
        .find({}, { projection: { name: 1, description: 1, price: 1, image: 1, category: 1, sellerId: 1 } })
        .toArray();

    const reviews = await db.collection("reviews").find().toArray();

    const filteredProducts = selectedCategory
        ? products.filter((p: any) => p.category === selectedCategory)
        : products;


    const sellers = await db.collection("sellers").find().toArray();

    const productsWithReviews = filteredProducts.map((product: any) => {
        const productReviews = reviews.filter((review: any) => review.productId === product._id.toString()
        ).map((review: any) => ({
            id: review._id.toString(),
            user: review.user,
            rating: review.rating,
            comment: review.comment,
        }));

        const seller = sellers.find(
            (s: any) => s._id.toString() === product.sellerId);

        return {
            id: product._id.toString(),
            name: product.name,
            description: product.description,
            seller: seller
                ? { id: seller._id.toString(), name: seller.name }
                : { id: "", name: "Unknown Seller" },
            category: product.category,
            price: product.price,
            image: product.image,
            reviews: productReviews,
        };
    });

    return (
        <main className="min-h-screen bg-(--color-background)">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-3xl font-semibold mb-10 text-center">Featured Handcrafts</h1>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <Link
                        href="/products"
                        className={`px-4 py-2 rounded-xl font-semibold transition shadow-sm
                                ${!selectedCategory
                                ? "bg-white text-black"
                                : "bg-(--color-primary) text-(--color-text) hover:bg-(--color-primary-hover)"
                            }`}>
                        All</Link>

                    {categories.map((category: any) => {
                        const isActive = selectedCategory === category.name;
                        return (
                            <Link
                                key={category._id.toString()}
                                href={{ pathname: "/products", query: { category: category.name } }}
                                className={`px-4 py-2 rounded-xl font-semibold transition shadow-sm
                                        ${isActive
                                        ? "bg-white text-black"
                                        : "bg-(--color-primary) text-(--color-text) hover:bg-(--color-primary-hover)"
                                    }`}>
                                {category.name}
                            </Link>
                        );
                    })}
                </div>
                <ProductGrid products={productsWithReviews} />
            </div>
        </main>
    );
}




