import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";


export async function POST(request: Request){
    try{
        const { username, email, password, confirmPassword, role } =
        await request.json();


        if (
            !username ||
            !email ||
            !password ||
            !confirmPassword
        ){
            return NextResponse.json(
                { error:"All fields are required." },
                { status: 400},
            );
        }



        if (password !==confirmPassword){
            return NextResponse.json(
                { error:"Password do not match."},
                { status: 400 }

            );
        }

        if(password.length < 6){
            return NextResponse.json(
                { error: "Password must be at least 6 characters."},
                { status: 400 }
            );
        }



        const userRole = 
        role === "seller" ? "seller" : "buyer";

        const db = await getDb();


        const existingUser = await db.collection("users").findOne({ email });


        if (existingUser){
            return NextResponse.json(
                { error: "Email already registered." },
                { status: 400 }
            );
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        await db.collection("users").insertOne({
            username,
            email,
            password: hashedPassword,
            role: userRole,
            createdAt: new Date(),
        });

        return NextResponse.json(
            { message: "User registered successfully."},
            { status: 201}
        );
    } catch (error) {
        console.error("Register error:", error);

        return NextResponse.json(
            { error: "Internal server error."},
            { status: 500 }
        );
    }
}

