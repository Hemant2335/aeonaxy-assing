import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const token = body.token;
  console.log("I am token" , token);
  if (!token) {
    return NextResponse.json({ message: "No Token Provided" });
  }
  console.log();
  const decode = jwt.verify(
    token.value,
    process.env.JWT_SECRET || "secret"
  ) as string;
  if (!decode) {
    return NextResponse.json({ message: "Invalid Token" });
  }
  //Finding the User in database
  const id = (decode as any).id
  try {
    const user = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          profilepic: body.profilepic,
          location: body.location,
          bio: body.bio,
        },
      });
      console.log(user);
      return NextResponse.json({sucess: true ,  user: user });
  } catch (error) {
     console.log(error);
     return NextResponse.json({ sucess: false  , message: "An error occurred" });
  }
 
}
