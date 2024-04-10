import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const resend = new Resend(process.env.EMAIL_API_KEY || "");

export async function POST(req: NextRequest) {
  console.log(process.env.EMAIL_API_KEY)
  const body = await req.json();
  const confirmationLink = `https://aeonaxy-assing.vercel.app/api/email?token=${body.token}`; // Replace with your actual confirmation link

  const htmlContent = `
    <p>Please click the following link to confirm your email:</p>
    <a href="${confirmationLink}">Confirm Email</a>
  `;
 try {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: body.email,
        subject: 'Confirmation Email',
        html: htmlContent
      });
    
      return NextResponse.json('Email sent successfully'); // Optional response
 } catch (error) {
    console.log(error);
    return NextResponse.json('An error occurred while sending the email'); // Optional response
 }
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  console.log("I am token" , token);
  if (!token) {
    return NextResponse.json({ message: "No Token Provided" });
  }
  console.log();
  
  try {
    const decode = jwt.verify(
        token,
        process.env.JWT_SECRET || "secret"
      ) as string;
      if (!decode) {
        return NextResponse.json({ message: "Invalid Token" });
      }
      //Finding the User in database
      const id = (decode as any).id
    const user = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          isemailverified: true,
        },
      });
      console.log(user);
      return NextResponse.json({sucess: true ,  user: user });
  } catch (error) {
     console.log(error);
     return NextResponse.json({ sucess: false  , message: "An error occurred" });
  }
}
