import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const prisma = new PrismaClient();

const UserSchema = z.object({
    name : z.string(),
    email : z.string().email(),
    password : z.string(),
    username : z.string(),
    profilepic : z.string().url(),
    location : z.string(),
    bio : z.string()
})

type Body = z.infer<typeof UserSchema>;


// Initialising the POST function to create a User in the database Path: app/api/user/Route.ts
export async function POST(req : NextRequest) {
    const body : Body = await req.json();
    // Zod Validation
    const parseduser = UserSchema.safeParse(body);
    if(!parseduser.success)
    {
        NextResponse.json({sucess : false , message : "Invalid Input"});
    }
    try {
        const user = await prisma.user.create({
            data : {
                name : body.name,
                email : body.email,
                password : body.password,
                username : body.username,
                profilepic : body.profilepic,
                location : body.location,
                bio : body.bio
            }
        });
        return NextResponse.json({sucess : true , user});
    } catch (error) {
        return NextResponse.json({sucess : false , message : error});
    }
    
}
