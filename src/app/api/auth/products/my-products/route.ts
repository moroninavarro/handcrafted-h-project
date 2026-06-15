import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getDb } from "@/lib/mongodb";

export async function GET() {
    try{
        const token = (await cookies()).get("token")?.value;

    if (!token){
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }
    const payload =jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as {
        userId: string;
        role: string;
    };

    const db = await getDb();

    const products = await db
    .collection("products")
    .find({
        sellerId: payload.userId,
    })
    .toArray();

    return NextResponse.json(products);

} catch (error) {
        console.error("My products error:", error);

        return NextResponse.json(
            { error: "Internal server error."},
            { status: 500 }
        );
    }
}