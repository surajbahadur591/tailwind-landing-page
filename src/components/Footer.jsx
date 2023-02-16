import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8">
        <div className="text-white">
          <h1 className=" text-[#3BDC95] text-2xl uppercase font-bold md:text-3xl py-2">
            Datatech
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            voluptas nihil asperiores earum quaerat eaque dolorum hic? Inventore
            ut ipsum excepturi neque error. Omnis, mollitia hic suscipit quo sit
            aliquam.
          </p>
          <div className="flex justify-between md:-w-[75%] my-6">
            <FaGithubSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaLinkedin size={30} />
            <FaYoutubeSquare size={30} />
          </div>
        </div>
        <div className="lg:cols-span-3 flex justify-between mt-6 ">
        <div className="text-white">
            <h6 className="font-medium text-gray-400">Features</h6>
            <ul>
                <li className="py-1" >Analtics</li>
                <li className="py-1">Marketing</li>
                <li className="py-1">Solution</li>
                <li className="py-1">Pricing</li>
            </ul>
        </div>
        <div className="text-white">
            <h6 className="font-medium text-gray-400">Features</h6>
            <ul>
                <li className="py-1" >Analtics</li>
                <li className="py-1">Marketing</li>
                <li className="py-1">Solution</li>
                <li className="py-1">Pricing</li>
            </ul>
        </div>
        <div className="text-white">
            <h6 className="font-medium text-gray-400">Features</h6>
            <ul>
                <li className="py-1" >Analtics</li>
                <li className="py-1">Marketing</li>
                <li className="py-1">Solution</li>
                <li className="py-1">Pricing</li>
            </ul>
        </div>
        <div className="text-white">
            <h6 className="font-medium text-gray-400">Features</h6>
            <ul>
                <li className="py-1" >Analtics</li>
                <li className="py-1">Marketing</li>
                <li className="py-1">Solution</li>
                <li className="py-1">Pricing</li>
            </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
