type ShopProps = {
    name: string;
    description: string;
    seller: string;
    price: number;
    image: string;
};

export default function Shop({
    name, description, seller, price, image, }:
    ShopProps) {
    return (
        <div className="border p-4 flex gap-4">

            <img src={image} alt={name} className="w-24 h-24 object-cover" />

            <div className="flex-1">
                <h3 className="font-bold">{name}</h3>
                <p>{description}</p>
                <p className="text-sm">by {seller}</p>
            </div>

            <div>
                <p className="font-bold">${price}</p>
            </div>
        </div>
    );
}