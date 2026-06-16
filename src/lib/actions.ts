"use server";

import { getDb } from "./mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface DecodedToken {
    userId: string;
    username: string;
    role: string;
}

export async function createReview(reviewData: { productId: string; rating: number; comment: string }) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        let username = "Anonymous";

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
                username = decoded.username;
            } catch (error) {
                username = "Anonymous";
            }
        }

        const db = await getDb();
        
        const result = await db.collection("reviews").insertOne({
            productId: reviewData.productId,
            user: username, 
            rating: reviewData.rating,
            comment: reviewData.comment,
            createdAt: new Date()
        });

        return { success: true, username: username };
    } catch (error) {
        console.error("Database error in createReview:", error);
        return { success: false, error: "Internal server error. Failed to save review." };
    }
}