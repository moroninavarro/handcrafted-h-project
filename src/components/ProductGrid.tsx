"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid({ products }: any) {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((product: any) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>

         <div className="mb-8 flex justify-center">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-md px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2"
            />
        </div>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((p: any) => (
                    <ProductCard
                        key={p.id}
                        {...p}
                        onClick={() => setSelectedProduct(p)}
                    />
                ))}
            </div>


            
        {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500">
                No products found.
            </p>
        )}

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}