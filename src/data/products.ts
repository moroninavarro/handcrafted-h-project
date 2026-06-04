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
    
    // JEWELRY (Sarah Crafts)
    {
        id: "1",
        name: "Maasai Beaded Necklace",
        description: "Colorful handmade necklace inspired by traditional Maasai beadwork.",
        sellerId: "1",
        category: "Jewelry",
        price: 35,
        image: "/images/maasai-necklace.jpg",
        reviews: [
            { id: "r1", user: "Alice", rating: 5, comment: "Beautiful craftsmanship." },
            { id: "r2", user: "Sam", rating: 4, comment: "Looks amazing." }
        ]
    },
    {
        id: "2",
        name: "Brass Hoop Earrings",
        description: "Elegant handcrafted brass earrings with a modern African touch.",
        sellerId: "1",
        category: "Jewelry",
        price: 22,
        image: "/images/brass-earrings.jpg",
        reviews: [
            { id: "r3", user: "Chloe", rating: 5, comment: "Love these earrings." },
            { id: "r4", user: "Sophia", rating: 5, comment: "Very stylish." }
        ]
    },
    {
        id: "3",
        name: "Colorful Beaded Bracelet",
        description: "Handwoven bracelet featuring vibrant local patterns.",
        sellerId: "1",
        category: "Jewelry",
        price: 18,
        image: "/images/beaded-bracelet.jpg",
        reviews: [
            { id: "r5", user: "Marcus", rating: 4, comment: "Nice quality." },
            { id: "r6", user: "Olivia", rating: 3, comment: "Good for the price." }
        ]
    },

     //CANDLES (Sarah Crafts)
    {
        id: "4",
        name: "Vanilla Soy Candle",
        description: "Hand-poured soy candle with a warm vanilla fragrance.",
        sellerId: "1",
        category: "Candles",
        price: 15,
        image: "/images/vanilla-candle.jpg",
        reviews: [
            { id: "r7", user: "John", rating: 5, comment: "Smells wonderful." },
            { id: "r8", user: "Sarah", rating: 4, comment: "Long lasting scent." }
        ]
    },
    {
        id: "5",
        name: "Lavender Scented Candle",
        description: "Relaxing lavender candle perfect for evenings and meditation.",
        sellerId: "1",
        category: "Candles",
        price: 17,
        image: "/images/lavender-candle.jpg",
        reviews: [
            { id: "r9", user: "Chloe", rating: 5, comment: "Very calming." },
            { id: "r10", user: "Daniel", rating: 5, comment: "My favorite candle." }
        ]
    },
    {
        id: "6",
        name: "Beeswax Artisan Candle",
        description: "Natural beeswax candle made using traditional methods.",
        sellerId: "1",
        category: "Candles",
        price: 20,
        image: "/images/beeswax-candle.jpg",
        reviews: [
            { id: "r11", user: "Grace", rating: 4, comment: "Burns evenly." },
            { id: "r12", user: "Lucas", rating: 3, comment: "Nice but small." }
        ]
    },

    // WOODWORKING (Brian Woodworks)
    {
        id: "7",
        name: "Carved Wooden Bowl",
        description: "Hand-carved bowl crafted from locally sourced hardwood.",
        sellerId: "2",
        category: "Woodworking",
        price: 42,
        image: "/images/wooden-bowl.jpg",
        reviews: [
            { id: "r13", user: "Alice", rating: 5, comment: "Excellent quality." },
            { id: "r14", user: "Sam", rating: 4, comment: "Beautiful finish." }
        ]
    },
    {
        id: "8",
        name: "Wooden Serving Tray",
        description: "Decorative serving tray handcrafted by local artisans.",
        sellerId: "2",
        category: "Woodworking",
        price: 38,
        image: "/images/serving-tray.jpg",
        reviews: [
            { id: "r15", user: "Sophia", rating: 4, comment: "Very practical." },
            { id: "r16", user: "Marcus", rating: 4, comment: "Looks great." }
        ]
    },
    {
        id: "9",
        name: "Handcrafted Jewelry Box",
        description: "Elegant wooden jewelry box with carved decorative details.",
        sellerId: "2",
        category: "Woodworking",
        price: 50,
        image: "/images/jewelry-box.jpg",
        reviews: [
            { id: "r17", user: "Chloe", rating: 5, comment: "Perfect gift." },
            { id: "r18", user: "Olivia", rating: 5, comment: "Highly recommend." }
        ]
    },

    // PAINTINGS (Brian Woodworks)
    {
        id: "10",
        name: "Savannah Sunset Canvas",
        description: "Acrylic painting capturing the beauty of an African sunset.",
        sellerId: "2",
        category: "Paintings",
        price: 75,
        image: "/images/savannah-sunset.jpg",
        reviews: [
            { id: "r19", user: "John", rating: 5, comment: "Stunning artwork." },
            { id: "r20", user: "Sarah", rating: 4, comment: "Looks great on my wall." }
        ]
    },
    {
        id: "11",
        name: "Wildlife Watercolor",
        description: "Original watercolor painting featuring native wildlife.",
        sellerId: "2",
        category: "Paintings",
        price: 65,
        image: "/images/wildlife-watercolor.jpg",
        reviews: [
            { id: "r21", user: "Lucas", rating: 4, comment: "Lovely colors." },
            { id: "r22", user: "Grace", rating: 3, comment: "Smaller than expected." }
        ]
    },
    {
        id: "12",
        name: "Tribal Heritage Painting",
        description: "Hand-painted canvas celebrating traditional African culture.",
        sellerId: "2",
        category: "Paintings",
        price: 85,
        image: "/images/tribal-painting.jpg",
        reviews: [
            { id: "r23", user: "Daniel", rating: 5, comment: "Amazing details." },
            { id: "r24", user: "Alice", rating: 5, comment: "Beautiful piece." }
        ]
    },

    // TEXTILES (Grace Fashion)
    {
        id: "13",
        name: "African Print Dress",
        description: "Modern dress featuring vibrant African-inspired patterns.",
        sellerId: "3",
        category: "Textiles",
        price: 60,
        image: "/images/african-dress.jpg",
        reviews: [
            { id: "r25", user: "Sophia", rating: 5, comment: "Fits perfectly." },
            { id: "r26", user: "Chloe", rating: 4, comment: "Great fabric." }
        ]
    },
    {
        id: "14",
        name: "Handwoven Scarf",
        description: "Soft handmade scarf woven using traditional techniques.",
        sellerId: "3",
        category: "Textiles",
        price: 28,
        image: "/images/scarf.jpg",
        reviews: [
            { id: "r27", user: "Olivia", rating: 4, comment: "Very comfortable." },
            { id: "r28", user: "Marcus", rating: 4, comment: "Good quality." }
        ]
    },
    {
        id: "15",
        name: "Cotton Throw Blanket",
        description: "Decorative blanket featuring colorful woven patterns.",
        sellerId: "3",
        category: "Textiles",
        price: 45,
        image: "/images/throw-blanket.jpg",
        reviews: [
            { id: "r29", user: "John", rating: 5, comment: "Beautiful design." },
            { id: "r30", user: "Lucas", rating: 4, comment: "Very cozy." }
        ]
    },

    // POTTERY (Grace Fashion)
    {
        id: "16",
        name: "Handcrafted Clay Vase",
        description: "Traditional clay vase shaped and painted by hand.",
        sellerId: "3",
        category: "Pottery",
        price: 48,
        image: "/images/clay-vase.jpg",
        reviews: [
            { id: "r31", user: "Grace", rating: 5, comment: "Beautiful centerpiece." },
            { id: "r32", user: "Sam", rating: 4, comment: "Very authentic." }
        ]
    },
    {
        id: "17",
        name: "Ceramic Tea Cup",
        description: "Handmade ceramic cup perfect for tea and coffee lovers.",
        sellerId: "3",
        category: "Pottery",
        price: 14,
        image: "/images/tea-cup.jpg",
        reviews: [
            { id: "r33", user: "Chloe", rating: 4, comment: "Nice craftsmanship." },
            { id: "r34", user: "Daniel", rating: 3, comment: "A bit small." }
        ]
    },
    {
        id: "18",
        name: "Decorative Pottery Bowl",
        description: "Traditional pottery bowl designed for display and decoration.",
        sellerId: "3",
        category: "Pottery",
        price: 32,
        image: "/images/pottery-bowl.jpg",
        reviews: [
            { id: "r35", user: "Sarah", rating: 5, comment: "Absolutely beautiful." },
            { id: "r36", user: "Sophia", rating: 5, comment: "Excellent quality." }
        ]
    }
];