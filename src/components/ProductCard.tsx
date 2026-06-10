import Link from "next/link";

type ProductCardProps = {
    id: string;
    name: string;
    description: string;
    seller: {
        id: string;
        name: string;
    };
    price: number;
    image: string;
    reviews: { rating: number; }[];
};

export default function ProductCard({
    id, name, description, seller, price, image, reviews,
}: ProductCardProps) {
    const safeReviews = Array.isArray(reviews) ? reviews : [];

    const rating =
        safeReviews.length > 0
            ? safeReviews.reduce((acc, r) => acc + r.rating, 0) / safeReviews.length
            : 0;

    const fullStars = Math.floor(rating);


    return (
        <div
            className="relative z-10 border border-[var(--color-text)]/10 rounded-lg p-4 flex flex-col gap-3 
            bg-[var(--color-surface)] cursor-pointer shadow-sm transition-all duration-200 
            hover:shadow-lg hover:-translate-y-1 h-full">

            <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />

            <div className="flex flex-col gap-1 text-left flex-grow">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-[var(--color-text)]">{description}</p>
                <p className="text-xs text-[var(--color-text)]">by {" "}
                    <Link
                        href="/sellers"
                        className="hover:underline">
                        {seller.name}
                    </Link>
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-[var(--color-text)]">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>
                                {i < fullStars ? "⭐" : "☆"}
                            </span>
                        ))}
                    </p>

                    <span className="text-xs text-[var(--color-text)]">
                        ({reviews.length})
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-3">
                <button
                    className="bg-[var(--color-primary)] text-[var(--color-text)] px-3 py-2 rounded-md text-sm
                        font-semibold transition hover:bg-[var(--color-primary-hover)] hover:shadow-md">
                    Add to cart
                </button>

                <p className="font-bold text-lg">${price}</p>
            </div>
        </div>
    );
}