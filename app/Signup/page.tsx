"use client"
import Image from "next/image";

const page = () => {
  return (
    <div className="flex">
      <div className="flex cursor-pointer  text-[3vh] w-[40vw] h-screen font-bold ">
        <Image
          src={require("../assets/banner.jpg")}
          className=" object-cover w-full h-full"
          alt="logo"
        />
      </div>
      <div className="w-[60vw] justify-center flex h-full">
            <div className="w-fit h-full">
                    <h1 className=" font-bold text-[3vh]">Sign up to Dribble</h1>
            </div>
      </div>
    </div>
  );
};

export default page;
