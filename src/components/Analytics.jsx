import React from "react";
import TempImg from '../assets/skills-image.png'
const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">

            <img className="w-[500px]  mx-auto" src={TempImg} alt="temp img" />
            <div className="flex flex-col justify-center p-6">
                <p className="text-xl text-[#3BDC95] uppercase font-bold md:text-2xl" >Data Analytic Dashboard </p>
                <h1 className="text-2xl uppercase font-bold md:text-3xl py-2" >Manage Data Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptas nihil asperiores earum quaerat eaque dolorum hic? Inventore ut ipsum excepturi neque error. Omnis, mollitia hic suscipit quo sit aliquam.</p>
                <button className="bg-[#3BDC95] w-[120px] rounded-md mx-auto md:mx-0 my-6 font-medium py-3 text-black">Get Started</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
