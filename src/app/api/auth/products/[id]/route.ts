import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export async function PUT(
     request: Request,
    { params }: { params: Promise<{ id: string }> }

) {
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
                };

        const { id } = await params;

        const {
            name,
            description,
            category,
            price,
            image,
        } = await request.json();

        const db = await getDb();

        const product= await db.collection("products").findOne({
            _id: new ObjectId(id),
        });



         if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        if (product.sellerId !== payload.userId) {
            return NextResponse.json(
                { error: "Forbidden" },
                { status: 403 }
            );
        }

        await db.collection("products").updateOne(
            {
                _id: new ObjectId(id),
            },
            {
                $set: {
                    name,
                    description,
                    category,
                    price: Number(price),
                    image,
                },
            }
        );

        return NextResponse.json({
            message: "Product updated successfully.",
        });

        } catch (error) {
            console.error(error);

            return NextResponse.json(
                { error: "Internal server error." },
                { status: 500 }
            );
        }
}




export async function GET(
     request: Request,
    { params }: { params: Promise<{ id: string }> }

) {
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
                };

        const { id } = await params;
        
        const db = await getDb();

        const product= await db.collection("products").findOne({
            _id: new ObjectId(id),
        });



         if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        if (product.sellerId !== payload.userId) {
            return NextResponse.json(
                { error: "Forbidden" },
                { status: 403 }
            );
        }

        return NextResponse.json(product);

}   catch (error) {
    console.error(error);

    return NextResponse.json(
        { error: "Internal server error." },
        { status: 500 }
    );
    }
}


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
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
                };


        const { id } = await params;
        
        const db = await getDb();

        const product= await db.collection("products").findOne({
            _id: new ObjectId(id),
        });

        if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        if (product.sellerId !== payload.userId) {
            return NextResponse.json(
                { error: "Forbidden" },
                { status: 403 }
            );
        }


        await db.collection("products").deleteOne({
            _id: new ObjectId(id),
        });

        return NextResponse.json({
            message: "Product deleted successfully.",
        });

        } catch (error) {
            console.error(error);

            return NextResponse.json(
                { error: "Internal server error." },
                { status: 500 }
            );
        }
    }

        
    
