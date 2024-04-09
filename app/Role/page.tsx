"use client";

import React, { useEffect, useState } from "react";
import CreateNavbar from "../components/CreateNavbar";
import Image from "next/image";
import { updateuser } from "../ServerActions/updateuser";
import { sendemail } from "../ServerActions/sendemail";
import { useRouter } from "next/navigation";

const Role = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const router = useRouter();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handlefinish = async() =>{
    let bio = "";
    console.log(selectedValue);
    if(selectedValue === "option1"){ bio = "I'm a Designer looking to Share my work";}
      else if(selectedValue === "option2"){ bio = "I'm a looking to hire a designer";}
      else if(selectedValue === "option3"){ bio = "I'm looking for design inspiration";}
      const data = await updateuser({
        profilepic: null,
        location: null,
        bio: bio,
        redirect: null,
      });
      console.log(data);
      const issent = await sendemail({
        email : data?.user?.email
      })
      console.log(issent);
      router.push("/");
  }

  useEffect(() => {
    if (selectedValue != null) {
      const submitBtn = document.getElementById("submitbtn");
      submitBtn?.classList.remove("opacity-50");
      submitBtn?.classList.add("opacity-100");
      submitBtn?.removeAttribute("disabled");
    }
    else{
      const submitBtn = document.getElementById("submitbtn");
      submitBtn?.classList.add("opacity-50");
      submitBtn?.classList.remove("opacity-100");
      submitBtn?.setAttribute("disabled", "true");
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
            Select the options that best describe you. Don&apos;t worry, you can
            explore other options later.
          </h2>
          <div className="md:flex-row flex flex-col gap-[4vh] justify-between mt-[4vh]">
            <div className="relative border-2 max-h-[45vh] flex flex-col items-center justify-center gap-[2vh] pb-2 px-[4vw] rounded-lg">
              <div className=" flex cursor-pointer text-[3vh] w-fit h-fit font-bold ">
                <Image
                  layout="responsive"
                  src={require("../assets/Share_design.png")}
                  className="rounded-xl max-h-[20vh] md:max-h-[25vh]"
                  alt="logo"
                />
              </div>
              <h1 className="md:max-w-[15vw] font-bold ">
                I&apos;m a Designer looking to Share my work
              </h1>
              {selectedValue === "option1" && (
                <p className="md:max-w-[12vw] md:mb-[5vh] text-[1.7vh] text-gray-400 text-center">
                  With over 7 million shots from a vast community of disigners.
                  Dribble is the leading source for design inspiration
                </p>
              )}
              <span className="mb-[2vh] md:flex hidden" ></span>
              <div className="md:absolute bottom-4">
              <input
                type="radio"
                name="selectValue"
                className="md:fixed"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={handleRadioChange}
              />
              </div>
            </div>
            <div className="border-2 flex relative max-h-[45vh] flex-col items-center justify-center gap-[2vh] pb-2 px-[4vw] rounded-lg">
              <div className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold ">
                <Image
                  layout="responsive"
                  src={require("../assets/Hire_designer.png")}
                  className="rounded-xl max-h-[20vh] md:max-h-[25vh]"
                  alt="logo"
                />
              </div>
              <h1 className="md:max-w-[15vw] font-bold">
                I&apos;m a looking to hire a designer
              </h1>
              {selectedValue === "option2" && (
                <p className="md:max-w-[12vw] md:mb-[5vh] text-[1.7vh] text-gray-400 text-center">
                  With over 7 million shots from a vast community of disigners.
                  Dribble is the leading source for design inspiration
                </p>
              )}
              <span className="mb-[2vh] md:flex hidden"></span>
              <div className="md:absolute bottom-4">
              <input
                type="radio"
                name="selectValue"
                value="option2"
                className="md:fixed"
                checked={selectedValue === "option2"}
                onChange={handleRadioChange}
              />
              </div>
            </div>
            <div className="border-2 relative flex max-h-[45vh] flex-col items-center justify-center gap-[2vh] pb-2 px-[4vw] rounded-lg">
              <div className="flex cursor-pointer   text-[3vh] w-fit h-fit font-bold ">
                <Image
                  layout="responsive"
                  src={require("../assets/design_insp.png")}
                  className="rounded-xl max-h-[20vh] md:max-h-[25vh]"
                  alt="logo"
                />
              </div>
              <h1 className="md:max-w-[15vw] font-bold ">
                I&apos;m looking for design inspiration
              </h1>
              {selectedValue === "option3" && (
                <p className="md:max-w-[12vw] md:mb-[5vh] text-[1.7vh] text-gray-400 text-center">
                  With over 7 million shots from a vast community of disigners.
                  Dribble is the leading source for design inspiration
                </p>
              )}
              <span className="mb-[2vh] md:flex hidden"></span>
              <div className="md:absolute bottom-4">
              <input
                type="radio"
                name="selectValue"
                value="option3"
                className="md:fixed"
                checked={selectedValue === "option3"}
                onChange={handleRadioChange}
              />
              </div>
            </div>
          </div>
          <button
            id="submitbtn"
            onClick={()=>handlefinish()}
            className="bg-[#EA4B8B] opacity-50 mt-[10vh] w-fit py-2 px-[5vw] text-white rounded-lg"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Role;
