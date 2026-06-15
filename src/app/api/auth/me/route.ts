import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function GET() {
    try{
        const token = (await cookies()).get("token")?.value;

    if (!token){
            return NextResponse.json(
                { authenticated: false },
                { status: 401 }
            );
        }
    
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as {
        userId: string;
        username: string;
        role: string;
    };

 return NextResponse.json(
        { authenticated: true,
            userId: decoded.userId,
            username:decoded.username,
            role: decoded.role,
         });

    } catch {
        return NextResponse.json(
            { authenticated: false },
            { status: 401 }
        );
    } 
}