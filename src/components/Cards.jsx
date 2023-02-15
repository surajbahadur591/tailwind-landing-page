import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <>
      <div className="bg-white w-full py-16 px-4">
        <div className="max-w-[1240] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$150</p>
            <div className="text-center font-medium" >
              <p className="py-2 border-b-2 mx-8 mt-8" >1 course</p>
              <p className="py-2 border-b-2 mx-8">1 year Access</p>
              <p className="py-2 border-b-2 mx-8">Unlimited Watches</p>
            </div>
            <button className="bg-[#3BDC95] w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-black">Start trail</button>
          </div>

          <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
            <p className="text-center text-4xl font-bold">$200</p>
            <div className="text-center font-medium" >
              <p className="py-2 border-b-2 mx-8 mt-8" >5 course</p>
              <p className="py-2 border-b-2 mx-8">1 year Access</p>
              <p className="py-2 border-b-2 mx-8">Unlimited Watches</p>
            </div>
            <button className="bg-black w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-[#3BDC95]">Start trail</button>
          </div>


          <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Enterprise User</h2>
            <p className="text-center text-4xl font-bold">$500</p>
            <div className="text-center font-medium" >
              <p className="py-2 border-b-2 mx-8 mt-8" >All course</p>
              <p className="py-2 border-b-2 mx-8">1 year Access</p>
              <p className="py-2 border-b-2 mx-8">Unlimited Watches</p>
            </div>
            <button className="bg-[#3BDC95] w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-black">Start trail</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
