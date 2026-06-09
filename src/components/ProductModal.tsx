"use client";

import { useEffect, useState } from "react";

type ProductModalProps = {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        image: string;
        category: string;
        seller: {
            id: string;
            name: string;
        };
        reviews: { rating: number; }[];
    };
    onClose: () => void;
};

export default function ProductModal({
    product,
    onClose,
}: ProductModalProps) {
    const [userRating, setUserRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const rating =
        product.reviews.length > 0
            ? product.reviews.reduce(
                (acc: number, review: any) => acc + review.rating,
                0
            ) / product.reviews.length
            : 0;

    const fullStars = Math.floor(rating);

    useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        window.removeEventListener("keydown", handleEscape);
        window.scrollTo(0, scrollY);
    };
}, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={onClose}>

            <div
                className="bg-[var(--color-surface)] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    className="float-right text-xl font-bold">✕</button>

                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    <div className="md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center space-y-3">
                        <h2 className="text-2xl font-bold">
                            {product.name}
                        </h2>

                        <p className="text-xl font-semibold">
                            ${product.price}
                        </p>

                        <p className="text-[var(--color-text)]/90">
                            Category: {product.category}
                        </p>

                        <p className="text-[var(--color-text)]/90">
                            Seller: {product.seller.name}
                        </p>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="text-[var(--color-text)/90]">
                                    {i < fullStars ? "⭐" : "☆"}
                                </span>
                            ))}

                            <span className="text-sm text-[var(--color-text)]/90">
                                ({product.reviews.length})
                            </span>
                        </div>

                        <p className="text-[var(--color-text)]/90">
                            {product.description}
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Leave a Review
                    </h3>

                    <div className="flex gap-1 text-3xl mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setUserRating(star)}
                                className="cursor-pointer"
                            >
                                {star <= userRating ? "⭐" : "☆"}
                            </button>
                        ))}
                    </div>

                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review..."
                        className="w-full border rounded-md p-3"
                        rows={4}
                    />

                    <button
                        onClick={() => {
                            console.log({
                                productId: product.id,
                                rating: userRating,
                                review: reviewText,
                            });
                        }}
                        className="mt-3 bg-[var(--color-primary)] text-[var(--color-text)] 
                        font-semibold transition px-4 py-2 rounded-md hover:bg-[var(--color-primary-hover)]">
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
}