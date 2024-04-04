import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="md:w-[60vw] w-full justify-center flex-col flex h-full">
        <div className="md:px-[12vw]  m-[5vh] h-full">
          <h1 className=" font-black text-[3.5vh]">Sign up to Dribble</h1>
          <h2 className="text-red-400 font-medium text-[2vh] pt-[2vh] pb-[3vh]">
            • Username has already been taken
          </h2>
          <div className="flex flex-col gap-[4vh]">
            <div className="flex flex-col gap-[4vh] md:flex-row justify-between">
              <div>
                <h1 className="font-black text-[2.1vh] mb-[0.7vh]">Name</h1>
                <input
                  type="text"
                  placeholder="eg. John Doe"
                  className="bg-[#F3F3F3] w-full font-medium text-sm  focus:outline-none p-[1.6vh] rounded-md"
                />
              </div>
              <div>
                <h1 className="font-black text-[2.1vh] mb-[0.7vh]">Username</h1>
                <input
                  type="text"
                  placeholder="eg. johndoe"
                  className="bg-[#F3F3F3] w-full font-medium text-sm focus:outline-none p-[1.6vh] rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="font-black text-[2.1vh] mb-[0.7vh]">Email</h1>
              <input
                type="text"
                placeholder="eg. test@gmail.com"
                className="bg-[#F3F3F3] w-full text-sm font-medium focus:outline-none p-[1.6vh] rounded-md"
              />
            </div>
            <div>
              <h1 className="font-black text-[2.1vh] mb-[0.7vh]">Password</h1>
              <input
                type="text"
                placeholder="6+ characters"
                className="bg-[#F3F3F3] w-full text-sm font-medium focus:outline-none p-[1.6vh] rounded-md"
              />
            </div>
            <div className="flex gap-[1vw]">
              <input type="checkbox" height={30} name="Terms" id="terms" />
              <label
                htmlFor="terms"
                className="text-gray-700 text-[2vh] font-medium "
              >
                Creating an account means you're okay with our{" "}
                <a className="text-blue-400">
                  Terms of Service, Privacy Policy,
                </a>{" "}
                and our default{" "}
                <a className="text-blue-400">Notification Settings.</a>
              </label>
            </div>
            <button className="bg-[#EA4B8B] w-fit py-2 px-[2vw] text-white rounded-lg">
              Create Account
            </button>
            <p className="text-[1.5vh] md:max-w-[20vw] text-gray-700 font-medium">
              This site is protected by reCAPTCHA and the Google{" "}
              <a className="text-blue-400 text-[1.7vh]">Privacy Policy</a> and{" "}
              <a className="text-blue-400 text-[1.7vh]">Terms of Service</a>{" "}
              apply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
