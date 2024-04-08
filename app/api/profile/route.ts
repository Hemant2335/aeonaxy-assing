import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const token = req.cookies.get("token");
  const body = await req.json();
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/Signup", req.url));
  }
  const decode = jwt.verify(
    token.value,
    process.env.JWT_SECRET || "secret"
  ) as string;
  if (!decode) {
    return NextResponse.redirect(new URL("/Signup", req.url));
  }
  //Finding the User in database
  const id = (decode as any).id
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
  return NextResponse.json({ user: decode });
}
