"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItem = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname == "/"
              ? "text-[#5FB2FF] border-b-2 border-[#5FB2FF]"
              : " text-gray-100"
          } font-bold`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="font-medium text-gray-100">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/service" className="font-medium text-gray-100">
          Service
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#333333]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-bold">
            Dagency
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menuItem}
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                className="inline-flex items-center justify-center py-2.5 px-10 font-medium rounded-[6px] bg-white"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <BiMenuAltRight className="text-3xl text-white cursor-pointer" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-[#333] border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/" className="text-white text-3xl font-bold">
                        Dagency
                      </Link>
                    </div>
                    <div>
                      <button
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <AiOutlineClose className="text-3xl text-white border rounded-full p-1 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuItem}
                      <li>
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center py-2.5 px-10 font-medium rounded-[6px] bg-white"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
