"use client";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#0CB09F]">
      <div className="px-4 pt-16 mx-auto container md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
          <div className="md:max-w-md lg:col-span-2">
            <p className="text-lg font-bold text-white">Dagency</p>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-white">
                The Hurawalhi Island a place where the sky and sea merge into
                one The Hurawalhi Island a place where the sky into
              </p>
              <div className="flex items-center gap-4 mt-6">
                <BsFillTelephoneFill className="w-10 p-2 h-10 bg-white rounded-full text-[#0CB09F]" />
                <p className="text-white ">+1 256987463</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wide text-white text-2xl">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Our Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white text-2xl">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Discussion
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white text-2xl">
                About
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Team Members
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Lorem Ipsum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-white text-center">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
