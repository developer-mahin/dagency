import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className={style.newsletter}>
      <div className="py-20">
        <div>
          <h1 className="text-center lg:text-[48px] text-[30px] text-white font-bold">
            Subscribe for newsletter
          </h1>
          <div className="flex items-center justify-center  mt-12 mx-auto">
            <div className="flex items-center lg:flex-row flex-col">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="lg:pl-20 pl-10 pr-5 py-4 rounded border lg:w-[500px] w-full focus:outline-none"
                />
                <Image
                  src="/images/PaperPlaneTilt.png"
                  alt=""
                  height={25}
                  width={25}
                  className="absolute top-4 lg:left-12 left-4"
                />
              </div>
              <button className="bg-[#1BC8B6] lg:w-auto w-full lg:mt-0 mt-3 border border-[#1BC8B6] lg:px-12 px-6 py-4 rounded text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
