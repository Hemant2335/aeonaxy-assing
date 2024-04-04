import React from "react";
import CreateNavbar from "../components/CreateNavbar";
import { FaCamera } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <CreateNavbar />
      <div className="md:w-[55vw] w-full justify-center flex-col flex h-full">
        <div className="md:pr-[12vw]  mx-[5vh] h-full">
          <h1 className=" font-black text-[4vh]">
            Welcome! Let's create your profile
          </h1>
          <h2 className="text-gray-600 font-medium text-[2vh] pt-[2vh] pb-[3vh]">
            Let others got to know you better! You can do these later
          </h2>
          <div className="flex flex-col gap-[4vh] mt-[4vh]">
            <h1 className=" font-bold text-[2.7vh]">Add an avatar</h1>
            <div className=" flex gap-[2vw]">
              {/* Image Box */}
              <div className="h-[22vh] text-gray-400 border-[0.5vh] flex justify-center items-center rounded-[50%] border-dashed w-[22vh] border-gray-300">
                <FaCamera />
              </div>
              {/* Select btn */}
              <div className="flex flex-col gap-[2vh]">
                <button className="border-[0.1vh] w-fit text-[1.8vh] font-bold border-gray-400 text-black rounded-md p-[1.5vh] mt-[2vh]">
                  Choose image
                </button>
                <span className="font-semibold text-gray-400">{"> Or choose one of our defaults"}</span>
              </div>
            </div>
            <div>
            <h1 className=" font-bold mt-[4vh] text-[2.7vh]">Add your location</h1>
            <input
              type="text"
              placeholder="Enter a location"
              className="border-b-2 mt-[2vh] w-full text-[2.2vh] font-medium focus:outline-none py-[1.6vh] rounded-md"
              />
              </div>
            <button className="bg-[#EA4B8B] mt-[3vh] w-fit py-2 px-[5vw] text-white rounded-lg">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
