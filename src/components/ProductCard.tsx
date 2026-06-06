
import Link from "next/link";

type ProductCardProps = {
    id: string;
    name: string;
    description: string;
    seller:{
        id: string; 
        name: string;
    };
    price: number;
    image: string;
    reviews: { rating: number;}[];
    onClick: () => void;
};

export default function ProductCard({
    id, name, description, seller, price, image, reviews, onClick,
 }: ProductCardProps) {
    const rating = reviews.length > 0
        ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        : 0;

    const fullStars = Math.floor(rating);
    

    return (
        <div onClick={onClick}
            className="border rounded-lg p-4 flex flex-col gap-3 bg-white cursor-pointer hover:shadow-lg transition h-full">

            <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />

            <div className="flex flex-col gap-1 text-left flex-grow">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <p className="text-xs text-gray-500">by {" "}
                    <Link
                        href="/sellers"
                        className="hover:underline"
                    >
                        {seller.name}
                    </Link>
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-yellow-500">
                        {"⭐".repeat(fullStars)}{"☆".repeat(5 - fullStars)}
                    </p>

                    <span className="text-xs text-gray-500">
                        ({reviews.length})
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-3">
                <button className="bg-black text-white px-3 py-2 rounded-md text-sm hover:bg-gray-800">
                    Add to cart
                </button>

                <p className="font-bold text-lg">${price}</p>
            </div>
        </div>
    );
}