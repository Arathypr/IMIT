import React from "react";
import logo from "../assets/logo.png";
import login from "../assets/loginimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="p-4  sm:block hidden mb-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt=""
              className=" md:w-12 sm:h-14 sm:w-9 ssm:h-12   xl:ml-20 lg:ml-20 md:ml-12 sm:ml-8 ssm:-ml-8"
            />
          </div>

          {/* Right side */}
          <div className="relative flex items-center space-x-5 xl:mr-20 lg:mr-20">
            <input
              type="text"
              placeholder="search ..."
              className="px-3 py-2 md:w-36 ssm:w-28  bg-[#F3F3F3] text-black border-none rounded-full"
            />
            <div className="absolute sm:right-[360px] ssm:right-[280px] ">
              <FontAwesomeIcon
                icon={faSearch}
                size="xs"
                style={{ color: "#a2a2a2" }}
              />
            </div>
            <button className="flex items-center text-white bg-[#E7AD99] rounded-full pr-6 ">
              <img src={login} alt="" className="w-10 h-10 " />
              <span className="pl-4 text-sm font-semibold font-Poppins">
                {" "}
                Asha Sunny
              </span>
            </button>

            <button className="text-white bg-[#E7AD99]  rounded-full px-12  py-2  ">
              <span className="text-sm font-semibold font-Poppins">Logout</span>
            </button>
          </div>
        </div>
      </div>
      {/* Smaller screen */}
      <div className="vvsm:block sm:hidden p-4 mb-6">
        <div className="container mx-auto flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="" className="w-11 h-10 -ml-4" />
          </div>

          <div className="relative flex items-center space-x-5 ">
            <input
              type="text"
              placeholder="search"
              className="px-3  ssm:py-2 vsm:py-1 vvsm:py-[3px]  ssm:w-24 vsm:w-20 vvsm:w-[70px] bg-[#F3F3F3] text-black border-none rounded-full"
            />

            <button className="flex items-center text-white bg-[#E7AD99] rounded-full pr-2 ">
              <img
                src={login}
                alt=""
                className="ssm:w-8 ssm:h-9  vsm:w-8 vvsm:w-7"
              />
              <span className="ssm:pl-3 ssm:text-[12px]  vsm:text-[11px]  vvsm:text-[9px]  font-semibold font-Poppins">
                {" "}
                Asha Sunny
              </span>
            </button>
            <button className="text-white bg-[#E7AD99]  rounded-full ssm:px-6 vsm:px-4 vvsm:px-2  ssm:py-[6.5px] vsm:py-[4px] vvsm:py-[2.4px]  ">
              <span className="text-[12px] vsm:text-[11px] vvsm:text-[10px] font-semibold font-Poppins">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
