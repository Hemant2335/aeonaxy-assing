'use server'
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

type CreateUserProps = {
    profilepic : string | null,
    location : string | null,
}


export async function updateuser(Props : CreateUserProps){
    console.log("Running");
    console.log(Props);
    try {
        const res = await axios.put("http://localhost:3000/api/profile", {
          profilepic: Props.profilepic,
          location: Props.location,
          token: cookies().get("token"),
        });
        const data = res.data;
        console.log(data);
        if(!data.sucess)
            {
                console.log("Inavalid Arguments")
                return ;
            }
    } catch (error) {
          return "An error occurred";
    } 
    redirect("/Role");
}