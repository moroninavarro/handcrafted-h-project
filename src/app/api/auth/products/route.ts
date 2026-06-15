import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getDb } from "@/lib/mongodb";



export async function POST(request: Request){
    try{
        const token = (await cookies()).get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as {
            userId: string;
            username: string;
            role: string;
        };

        if (payload.role !== "seller") {
            return NextResponse.json(
                { error: "Only sellers can add products" },
                { status: 403 }
            );
        }


        const {
            name,
            description,
            category,
            price,
            image,
        } = await request.json();

        if (
            !name ||
            !description ||
            !category ||
            !price ||
            !image 
        ) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const db = await getDb();

        const result = await db.collection("products").insertOne({
            name,
            description,
            category,
            price: Number(price),
            image,

            sellerId: payload.userId,
        });

        return NextResponse.json(
            {
                message: "Product created succesfully.",
                productId: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Internal server error."},
            { status: 500 }
        );
    }


}