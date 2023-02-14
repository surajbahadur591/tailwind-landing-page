import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex h-24 items-center justify-between max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">itsmesuraj</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Resources</li>
        <li className="p-4">Pricing</li>
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
        <h1 className="pt-8 w-full text-3xl font-bold text-[#00df9a]">
          itsmesuraj
        </h1>

        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">Resources</li>
          <li className="p-4 border-b border-gray-500">Pricing</li>
          <li className="p-4">Contact</li>
        </ul>
        </div>
      
    </div>
  );
};

export default Navbar;
