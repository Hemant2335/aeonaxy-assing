import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function PUT(req: NextRequest)
{
    const token = req.cookies.get("token");
    console.log(token);
    if (!token) {
        return NextResponse.redirect(new URL('/Signup', req.url));
    }
    // If token is present, continue with the next middleware or route handler
    const decode  = jwt.verify(token.value, process.env.JWT_SECRET || "secret") as string;
    if(!decode)
    {
        return NextResponse.redirect(new URL('/Signup', req.url));
    }
    return NextResponse.json({user : decode});
}