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
            <h2 className="text-2xl font-bold text-center py-8">Individual Pack</h2>
            <p className="text-center text-4xl font-bold">$12 <span className="text-2xl">/month</span></p>
            <div className="text-center font-medium" >
              <p className="py-2 border-b-2 mx-8 mt-8" >5 projects</p>
              <p className="py-2 border-b-2 mx-8">24/7 Support</p>
              <p className="py-2 border-b-2 mx-8">Customized charts to predict growth</p>
            </div>
            <button className="bg-[#3BDC95] w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-black">Start trail</button>
          </div>

          <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Startup Starter Pack</h2>
            <p className="text-center text-4xl font-bold">$45 <span className="text-2xl">/month</span></p>
            <div className="text-center font-medium" >
              <p className="py-2 border-b-2 mx-8 mt-8" >200 projects</p>
              <p className="py-2 border-b-2 mx-8">24/7 Support</p>
              <p className="py-2 border-b-2 mx-8">Customized charts to predict growth</p>
            </div>
            <button className="bg-black w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-[#3BDC95]">Start trail</button>
          </div>


          <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Enterprise Pack</h2>
            <p className="text-center text-4xl font-bold">$80 <span className="text-2xl">/month</span></p>
            <div className="text-center font-medium" >
              <p className="py-2 border-b-2 mx-8 mt-8" >1k projects</p>
              <p className="py-2 border-b-2 mx-8">24/7 Support</p>
              <p className="py-2 border-b-2 mx-8">Customized charts to predict growth</p>
            </div>
            <button className="bg-[#3BDC95] w-[120px] rounded-md mx-auto my-6 font-medium py-3 text-black">Start trail</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
