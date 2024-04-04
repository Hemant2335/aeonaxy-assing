"use client"
import logo from "../assets/dribble.png";
import Image from "next/image";

const CreateNavbar = () => {
  return (
    <div className="w-full px-[2vw]">
        <div
          className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold "
        >
          <Image
            layout="responsive"
            src={require("../assets/dribble.png")}
            className="rounded-xl max-h-[10vh] md:max-h-[12vh]"
            alt="logo"
          />
        </div>
    </div>
  )
}

export default CreateNavbar