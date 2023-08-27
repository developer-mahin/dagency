"use client";
import React from "react";
import style from "./style.module.css";

const Banner = () => {
  return (
    <div className="bg-[#2D8AE0]">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div className="">
            <div>
              <div>
                <h2 className="lg:text-[60px] text-[40px] lg:pt-0 pt-10 font-bold text-white">
                  Amplyfy Your Digital Presence
                </h2>
                <p className="text-white mt-3">
                  Discover the ultimate expression of digital artistry with our
                  Creative Agency WordPress Theme. Seamlessly blending
                  cutting-edge design with intuitive functionality.
                </p>
              </div>
              <div className="mt-9 flex items-center gap-8">
                <button className="lg:px-16 px-8 text-base py-4 text-[#2D8AE0] lg:text-xl font-bold bg-white rounded">
                  Our Services
                </button>
                <button className="lg:px-16 px-8 text-base py-4 border-2 border-gray-50 text-white lg:text-xl font-bold  rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className={style.banner}></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
