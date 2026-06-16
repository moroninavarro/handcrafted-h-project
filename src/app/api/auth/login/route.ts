import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDb } from "@/lib/mongodb";



export async function POST(request: Request){
    try{
        const { identifier, password } = await request.json();

           if (!identifier || !password){
            return NextResponse.json(
                { error:"Username/Email and password are required"},
                { status: 400 }
            );
        }

        const db = await getDb();


        const user = await db.collection("users").findOne({ 
            $or: [{ email: identifier }, { username: identifier }],
         });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid email or passwrod." },
                { status: 401 }
            );
        }


        const isValidPassword = await bcrypt.compare(
            password,
            user.password
        );

          if(!isValidPassword){
            return NextResponse.json(
                { error: "Invalid username/email or password"},
                { status: 401 }
            );
        }

        const token = jwt.sign(
            {
                userId: user._id.toString(),
                username:user.username,
                role: user.role,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );


        const response = NextResponse.json(
            {
                message: "Login successful.",
                user: {
                    username: user.username,
                    role: user.role,
                },
            },
            { status: 200 }
        );


        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });


        return response;
    }   catch (error) {
        console.error("Login error:", error);

        return NextResponse.json(
            {error: "Internal server error."},
            { status: 500 }
        );
    }

}