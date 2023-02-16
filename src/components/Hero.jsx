import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className=" p-12 text-2xl text-[#3BDC95]">
        Datatech gives you ability to track and monitor your entire business
        </p>
        <h1 className="md:text-6xl px-6 font-bold sm:text-5xl text-4xl ">
          Track your entire business in realtime{" "}
        </h1>

        <div className="flex px-6 justify-center items-center">
          <p className="font-bold">Try</p>
          <Typed
            className="font-bold p-2"
            strings={[" demo account!"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </div>

        <button className="bg-[#3BDC95] w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-black" >Start Tracking</button>
      </div>
    </div>
  );
};

export default Hero;
