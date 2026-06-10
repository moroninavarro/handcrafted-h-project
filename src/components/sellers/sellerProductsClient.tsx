"use client";
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';import { use } from 'react';

export default function SellerProductsClient(
    {products,

    }: {
        products: any[];
    }){
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => (
            <ProductCard
                key={product.id}
                {...product}
                onClick={() => setSelectedProduct(product)}
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
