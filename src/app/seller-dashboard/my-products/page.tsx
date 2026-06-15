"use client";
import { useEffect, useState } from "react";


interface Product {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
}


export default function MyProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(
                    "/api/auth/products/my-products"
                );

                const data = await response.json();

                if (response.ok) {
                    setProducts(data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="p-10 max-w-5xl mx-auto">Loading...</p>;
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">
                My Products
            </h1>

            {products.length === 0 ? (
                <p>You haven't created any products yet.</p>
            ) : (
                <div className="space-y-4">
                    {products.map((product) =>(
                        <div
                        key={product._id}
                        className="border rounded-xl p-6 flex justify-between items-center shadow-md min-h-35"
                        >
                <div className="flex items-center gap-6">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg border"
                    />


                    <div>
                        <h2 className="font-bold text-2xl">
                            {product.name}
                        </h2>
                        <p className="text-gray-600">{product.category}</p>

                        <p className="font-semibold text-lg">${product.price}</p>
                    </div>
                </div>     



                <div className="flex gap-2">
                    <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                        Edit
                    </button>

                    <button className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                        </button>
                    </div>  
                </div>
                 ))}
            </div>
            )}
        </div>
    );
}