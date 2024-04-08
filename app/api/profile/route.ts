import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const token = req.cookies.get("token");
  const body = await req.json();
  console.log(token);
  if (!token) {
    NextResponse.json({ message: "No Token Provided" });
    return;
  }
  const decode = jwt.verify(
    token.value,
    process.env.JWT_SECRET || "secret"
  ) as string;
  if (!decode) {
    NextResponse.json({ message: "Invalid Token" });
    return ;
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
        },
      });
      console.log(user);
      return NextResponse.json({ user: user });
  } catch (error) {
     console.log(error);
     return NextResponse.json({ message: "An error occurred" });
  }
 
}
