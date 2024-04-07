"use client";

import React, { useEffect, useState } from "react";
import CreateNavbar from "../components/CreateNavbar";
import Image from "next/image";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue != null) {
        const submitBtn = document.getElementById("submitbtn");
        submitBtn?.classList.add("opacity-100");
        submitBtn?.removeAttribute("disabled");
    }
  }, [selectedValue]);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <CreateNavbar />
      <div className=" w-full justify-center  items-center flex-col flex h-full">
        <div className="text-center  mx-[5vh] h-full">
          <h1 className=" font-black text-[4.5vh]">
            What brings you to Dribble?
          </h1>
          <h2 className="text-gray-600 font-medium text-[2vh] pt-[2vh] pb-[3vh]">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </h2>
          <div className="md:flex-row flex flex-col gap-[4vh] justify-between mt-[4vh]">
            <div className="border-2 flex flex-col items-center justify-center gap-[2vh] pb-2 px-[4vw] rounded-lg">
              <div className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold ">
                <Image
                  layout="responsive"
                  src={require("../assets/Share_design.png")}
                  className="rounded-xl max-h-[20vh] md:max-h-[30vh]"
                  alt="logo"
                />
              </div>
              <h1 className="md:max-w-[15vw] font-bold">
                I'm a Designer looking to Share my work
              </h1>
              <input
                type="radio"
                name="selectValue"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={handleRadioChange}
              />
            </div>
            <div className="border-2 flex flex-col items-center justify-center gap-[2vh] pb-2 px-[4vw] rounded-lg">
              <div className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold ">
                <Image
                  layout="responsive"
                  src={require("../assets/Hire_designer.png")}
                  className="rounded-xl max-h-[20vh] md:max-h-[30vh]"
                  alt="logo"
                />
              </div>
              <h1 className="md:max-w-[15vw] font-bold">
                I'm a looking to hire a designer
              </h1>
              <input
                type="radio"
                name="selectValue"
                value="option2"
                checked={selectedValue === "option2"}
                onChange={handleRadioChange}
              />
            </div>
            <div className="border-2 flex flex-col items-center justify-center gap-[2vh] pb-2 px-[4vw] rounded-lg">
              <div className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold ">
                <Image
                  layout="responsive"
                  src={require("../assets/design_insp.png")}
                  className="rounded-xl max-h-[20vh] md:max-h-[30vh]"
                  alt="logo"
                />
              </div>
              <h1 className="md:max-w-[15vw] font-bold">
                I'm looking for design inspiration
              </h1>
              <input
                type="radio"
                name="selectValue"
                value="option3"
                checked={selectedValue === "option3"}
                onChange={handleRadioChange}
              />
            </div>
            
          </div>
          <button disabled id="submitbtn" className="bg-[#EA4B8B] opacity-50 mt-[10vh] w-fit py-2 px-[5vw] text-white rounded-lg">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default page;
