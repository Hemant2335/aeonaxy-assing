"use client";
import React, { useState } from "react";
import CreateNavbar from "../components/CreateNavbar";
import { FaCamera } from "react-icons/fa6";
import Image from "next/image";
import { updateuser } from "../ServerActions/updateuser";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

const CreateProfile = () => {
  const [isselected, setisselected] = useState<any>(null);
  const [isuploaded, setisuploaded] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [location, setlocation] = useState<string | null>(null);
  const [imgurl, setimgurl] = useState<string | null>(null);
  const router  = useRouter();
  const handleNext = async () => {
    if (!isuploaded) {
      alert("Please upload an image");
      return;
    }
    if (!location) {
      alert("Please enter a location");
      return;
    }
    console.log(imgurl);
    const data = await updateuser({
      profilepic: imgurl,
      location: location,
      bio: null,
      redirect: "Role",
    });
    if(!data.sucess)
      {
        alert(data.message);
        return;
      }
    router.push("/Role");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <CreateNavbar />
      <div className="md:w-[55vw] w-full justify-center flex-col flex h-full">
        <div className="md:pr-[12vw]  mx-[5vh] h-full">
          <h1 className=" font-black text-[4vh]">
            Welcome! Let&apos;s create your profile
          </h1>
          <h2 className="text-gray-600 font-medium text-[2vh] pt-[2vh] pb-[3vh]">
            Let others got to know you better! You can do these later
          </h2>
          <div className="flex flex-col gap-[4vh] mt-[4vh]">
            <h1 className=" font-bold text-[2.7vh]">Add an avatar</h1>
            <div className=" md:flex gap-[2vw]">
              {/* Image Box */}
              <div className="h-[22vh] overflow-hidden text-gray-400 border-[0.5vh] flex justify-center items-center rounded-[50%] border-dashed w-[22vh] border-gray-300">
                {!isuploaded ? (
                  <FaCamera />
                ) : (
                  <div className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold ">
                    <Image
                      layout="responsive"
                      src={imgurl as string}
                      className=" max-h-[10vh] md:max-h-[25vh]"
                      alt="logo"
                      width={200}
                      height={200}
                    />
                  </div>
                )}
              </div>
              {/* Select btn */}
              <div className="flex flex-col  gap-[2vh]">
                <CldUploadButton
                  options={{ multiple: true }}
                  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                  onSuccess={(res) => {setimgurl((res?.info as any).url); setisuploaded(true);}}
                >
                  <span className="border-[0.1vh] float-start  w-fit text-[1.8vh] font-bold border-gray-400 text-black rounded-md p-[1.5vh] mt-[2vh]">
                    {" "}
                    Choose file
                  </span>
                </CldUploadButton>

                <span className="font-semibold text-gray-400">
                  {"> Or choose one of our defaults"}
                </span>
              </div>
            </div>
            <div>
              <h1 className=" font-bold mt-[4vh] text-[2.7vh]">
                Add your location
              </h1>
              <input
                type="text"
                placeholder="Enter a location"
                className="border-b-2 mt-[2vh] w-full text-[2.2vh] font-medium focus:outline-none py-[1.6vh] rounded-md"
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
              />
            </div>

            <button
              onClick={handleNext}
              className="bg-[#EA4B8B] mt-[3vh] w-fit py-2 px-[5vw] text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
