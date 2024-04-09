'use server'
import axios from "axios";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

type CreateUserProps = {
    Name : string | null,
    Username : string | null,
    Email : string | null,
    Password : string | null
}


export async function createuser(Props : CreateUserProps){
    const cookieStore = cookies();
    console.log("Running");
    try {
        const res = await axios.post("https://aeonaxy-assing.vercel.app/api/user", {
          name: Props.Name,
          email: Props.Email,
          password: Props.Password,
          username: Props.Username,
          profilepic: "",
          location: "",
          bio: "",
        });
        const data = res.data;
        console.log(data);
        if(!data.sucess)
            {
                console.log("Inavalid Arguments")
                return ;
            }
        const token = res.data.token;
        console.log(token);
        cookieStore.set("token", token);
    } catch (error) {
          console.log(error);
          return "An error occurred";
    } 
    redirect("/CreateProfile");
}