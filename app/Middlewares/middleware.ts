import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// const CookieParser = cookieParser();

const Authentication = async (req: NextRequest) => {
    const res = NextResponse.next();
    const token = req.cookies.get("token");
    if (!token) {
        return NextResponse.redirect("/Signup");
    }
    // If token is present, continue with the next middleware or route handler
    const decode  = jwt.verify(token.value, process.env.JWT_SECRET || "secret");
    if(!decode)
    {
        return NextResponse.redirect("/Signup");
    }
    

};

export default Authentication;
