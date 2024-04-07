import { NextRequest, NextResponse } from "next/server";


export async function PUT(req: NextRequest)
{
    const user = req.headers.get("user-id");
    return NextResponse.json({user : user});
}