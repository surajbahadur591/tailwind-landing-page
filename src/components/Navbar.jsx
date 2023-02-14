import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex h-24 items-center justify-between max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-[#3BDC95]">itsmesuraj</h1>

      <ul className="hidden md:flex">
        
        <li className="p-4">Services</li>
        <li className="p-4">/</li>
        <li className="p-4">Pricing</li>
        <li className="p-4">/</li>
        <li className="p-4">Contact</li>
      </ul>

      {/* mobile screen  */}

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed  ease-in-out duration-1000 top-0 w-[50%] h-full border-r border-r-gray-800 bg-[#000300]  "
            : "fixed  left-[-100%] "
        }
      >
        <h1 className="pt-8 w-full text-3xl font-bold text-[#3BDC95]">
          itsmesuraj
        </h1>

        <ul className="p-4 uppercase">
          
          <li className="p-4 border-b border-gray-500">Services</li>
          <li className="p-4 border-b border-gray-500">Pricing</li>
          <li className="p-4">Contact</li>
        </ul>
        </div>
      
    </div>
  );
};

export default Navbar;
