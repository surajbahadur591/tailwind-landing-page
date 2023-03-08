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
          We build data lakes, lakehouses and data warehouses
implement cutting-edge analytics
and develop Big Data applications
          </p>
          <div className="flex justify-between md:-w-[75%] my-6 px-24">
            <FaGithubSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaLinkedin size={30} />
            <FaYoutubeSquare size={30} />
          </div>
        </div>
        <div className="lg:cols-span-3 flex justify-between mt-6 ">
        <div className="text-white">
            <h6 className="font-semibold  text-gray-400">Expertise</h6>
            <ul>
                <li className="py-1" >Data Science & AI</li>
                <li className="py-1">Machine Learning</li>
                <li className="py-1">AI Software Development</li>
                <li className="py-1">AI Mobile Apps Development</li>
            </ul>
        </div>
        <div className="text-white">
            <h6 className="font-semibold text-gray-400">Services</h6>
            <ul>
                <li className="py-1" >Natural Language Processing</li>
                <li className="py-1">Data Capture & OCR</li>
                
            </ul>
        </div>
        <div className="text-white">
            <h6 className="font-semibold text-gray-400">Big Data Solutions</h6>
            <ul>
                <li className="py-1" >BI & Data Visualizations</li>
                <li className="py-1">Predictive Analytics</li>
                <li className="py-1">Cloud Services</li>
                
            </ul>
        </div>
        <div className="text-white">
            <h6 className="font-semibold text-gray-400">About Us</h6>
            <ul>
                <li className="py-1" >Success Stories</li>
                <li className="py-1">Careers</li>
                <li className="py-1">About</li>
                <li className="py-1">Write for Us</li>
            </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
