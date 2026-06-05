"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function Page() {

    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <main className="min-h-screen bg-gray-50">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-3xl font-bold mb-10">
                    Featured Handcrafts
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            {...p}
                            onClick={() => setSelectedProduct(p)}
                        />
                    ))}

                    {selectedProduct && (
                        <ProductModal
                            product={selectedProduct}
                            onClose={() => setSelectedProduct(null)}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}
}

export const metadata: Metadata = {
    title: 'Products',
};


