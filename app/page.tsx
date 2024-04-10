"use client";
import { FaEnvelope, FaCheck } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Span } from "next/dist/trace";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex  flex-col items-center mt-[5vh] h-[70vh]">
        <h1 className="text-[3.7vh] font-medium">
          Please verify your email...
        </h1>
        <div className="relative w-fit">
          <div className="bg-[#EA4B8B] absolute border-[0.7vh] border-white text-white p-[0.7vh] rounded-[50%] right-[-1vw] top-[2vh]">
            <FaCheck />
          </div>
          <FaEnvelope className="text-[12vh] text-gray-400 mt-[2vh]" />
        </div>
        <div className="text-center md:max-w-[46vw] flex flex-col gap-[3vh] text-gray-600">
          <p>
            Please verify your email address. We&apos;ve sent a confirmation email
            to:
          </p>
          <span className="font-bold text-black">account@refero.design</span>
          <p>
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p className="">
            Didn&apos;t receive the email? Check your Spam folder, it may have been
            caught by a filter. If you still don&apos;t see it, you can{" "}
            <span className="text-[#EA4B8B] font-medium">
              resend the confirmation email.
            </span>
          </p>

          <p>
            Wrong email address?
            <a className="text-[#EA4B8B] font-medium"> Change it.</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
