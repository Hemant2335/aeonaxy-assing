import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest){
    const res = NextResponse.next();
    const token = req.cookies.get("token");
    if (!token) {
        return NextResponse.redirect("/Signup");
    }
    // If token is present, continue with the next middleware or route handler
    const decode  = jwt.verify(token.value, process.env.JWT_SECRET || "secret") as string;
    if(!decode)
    {
        return NextResponse.redirect("/Signup");
    }
    console.log(decode);
    req.headers.set("user-id", decode);
    return res;

};

export const config = {
    matcher: '/api/profile/:path*',
  }
