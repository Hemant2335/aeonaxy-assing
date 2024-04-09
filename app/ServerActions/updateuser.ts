"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type CreateUserProps = {
  profilepic: string | null;
  location: string | null;
  bio: string | null;
  redirect: string | null;
};

export async function updateuser(Props: CreateUserProps) {
  console.log("Running");
  console.log(Props);
  let object = {};
  if (Props.profilepic == null && Props.location == null) {
    object = {
      bio: Props.bio,
      token: cookies().get("token"),
    };
  } else {
    object = {
      profilepic: Props.profilepic,
      location: Props.location,
      token: cookies().get("token"),
    };
  }
  try {
    const res = await axios.put("https://aeonaxy-assing.vercel.app/api/profile", object);
    const data = res.data;
    console.log(data);
    if (!data.sucess) {
      console.log("Inavalid Arguments");
      return;
    }
    return data;
  } catch (error) {
    return "An error occurred";
  }
}
