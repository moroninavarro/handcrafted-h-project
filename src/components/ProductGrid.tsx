"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid({ products }: any) {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((p: any) => (
                    <ProductCard
                        key={p.id}
                        {...p}
                        onClick={() => setSelectedProduct(p)}
                    />
                ))}
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}