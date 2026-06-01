export type Review = {
    id: string;
    user: string;
    rating: number;
    comment: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    sellerId: string;
    category: string;
    price: number;
    image: string;
    reviews: Review[];
};

export const products: Product[] = [
    {
        id: "1",
        name: "African Beaded Necklace",
        description: "Handmade necklace inspired by traditional African patterns.",
        sellerId: "1",
        category: "jewelry",
        price: 25,
        image: "/images/necklace.jpg",
        reviews: [
            {
                id: "r1",
                user: "User name",
                rating: 5,
                comment: "Review comment"
            },
            {
                id: "r2",
                user: "User name",
                rating: 2,
                comment: "Review comment"
            }
        ]
    },
    {
        id: "2",
        name: "Wood Carved Bowl",
        description: "Hand-carved wooden bowl made from local hardwood.",
        sellerId: "2",
        category: "home-decor",
        price: 40,
        image: "/images/bowl.jpg",
        reviews: [
            {
                id: "r1",
                user: "User name",
                rating: 5,
                comment: "Review comment"
            },
            {
                id: "r2",
                user: "User name",
                rating: 3,
                comment: "Review comment"
            },
            {
                id: "r3",
                user: "User name",
                rating: 2,
                comment: "Review comment"
            }
        ]
    },
    {
        id: "3",
        name: "African Print Dress",
        description: "Modern African-inspired fashion dress.",
        sellerId: "3",
        category: "fashion",
        price: 60,
        image: "/images/dress.jpg",
        reviews: [
            {
                id: "r2",
                user: "User name",
                rating: 3,
                comment: "Review comment"
            },
            {
                id: "r3",
                user: "User name",
                rating: 4,
                comment: "Review comment"
            }
        ]
    }
];
