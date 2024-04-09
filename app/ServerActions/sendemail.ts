"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SendEmailProps = {
  email : string | null,
};

export async function sendemail(Props: SendEmailProps) {
  console.log(Props.email);
  console.log(cookies().get("token"));
  try {
    const res = await axios.post("http://localhost:3000/api/email", {
        email: Props.email,
        token : cookies().get("token")?.value
    });
  } catch (error) {
    return "An error occurred";
  }
  redirect("/");
}
