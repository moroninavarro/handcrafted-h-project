"use server";

import { getDb } from "./mongodb";

export async function createReview(reviewData: { productId: string; user: string; rating: number; comment: string }) {
    try {
        const db = await getDb();
        
        const result = await db.collection("reviews").insertOne({
            productId: reviewData.productId,
            user: reviewData.user,
            rating: reviewData.rating,
            comment: reviewData.comment,
        });

        return { success: true, id: result.insertedId.toString() };
    } catch (error) {
        console.error("Database error in createReview:", error);
        return { success: false, error: "Failed to save review" };
    }
}