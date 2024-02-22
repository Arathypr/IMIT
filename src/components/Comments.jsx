import React from "react";
import Vector from "../assets/Vector.png";
import comment from "../assets/comment.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import menu from "../assets/menu.png";

function Comment() {
  return (
    <>
      {" "}
      <div className="border border-slate-100 bg-[rgb(225,225,225,0.2)] shadow-md vsm:h-[65vh] vvsm:h-[75vh] sm:mx-2 vvsm:mx-6 rounded-xl p-4 mt-3">
        {/* 1st comment */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Ellipse1} alt="" className="w-14 h-14 rounded-full" />
              <p className="ml-2">
                <span className="font-Poppins font-bold sm::text-base ssm:text-sm vvsm:text-xs">
                  Srutheesh
                </span>{" "}
                <span className="sm:text-[10px] vsm:text-[9px]  vsm:block vvsm:hidden opacity-25 font-Poppins">
                  1 Week ago
                </span>
              </p>
            </div>
            <img src={menu} alt="" />
          </div>
          <div className="ml-16 relative">
            <img src={comment} alt="" className="w-[98%] h-14 relative" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start font-Poppins sm:ml-10 vvsm:ml-3 md:text-[14px] sm:text-[13px] ssm:text-[11px] vsm:text-[10px] vvsm:text-[8px]">
              Nice Images....Good Work
            </div>
          </div>
        </div>
        {/* reply comment */}

        <div className=" ml-20">
          <img src={Vector} alt="" className="h-28 -ml-14 -mt-16" />
          <div className="flex items-center justify-between -mt-7 -ml-8 ">
            <div className="flex items-center">
              <img src={Ellipse2} alt="" className="w-14 h-14 rounded-full" />
              <p className="ml-2">
                <span className="font-Poppins font-bold  sm::text-base ssm:text-sm vvsm:text-xs">
                  Anitta K C
                </span>{" "}
                <span className="sm:text-[10px] vsm:text-[9px]  vsm:block vvsm:hidden opacity-25 font-Poppins">
                  1 Week ago
                </span>
              </p>
            </div>
            <img src={menu} alt="" />
          </div>
          <div className="ml-8 relative">
            <img src={comment} alt="" className="w-[98%] h-14 relative" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start font-Poppins sm:ml-10 vsm:ml-3 vvsm:ml-1 md:text-[14px] sm:text-[13px] ssm:text-[11px] vsm:text-[10px] vvsm:text-[8px]">
              Thankuu..
            </div>
          </div>
        </div>
        {/* last comment */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Ellipse3} alt="" className="w-14 h-14 rounded-full" />
              <p className="ml-2">
                <span className="font-Poppins font-bold  sm::text-base ssm:text-sm vvsm:text-xs">
                  Simi K Sunny
                </span>{" "}
                <span className="sm:text-[10px] vsm:text-[9px]  vsm:block vvsm:hidden opacity-25 font-Poppins">
                  1 Week ago
                </span>
              </p>
            </div>
            <img src={menu} alt="" />
          </div>
          <div className="ml-16 relative">
            <img src={comment} alt="" className="w-[98%] h-14 relative" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start font-Poppins sm:ml-10 vvsm:ml-3 md:text-[14px] sm:text-[13px] ssm:text-[11px] vsm:text-[10px] vvsm:text-[8px]">
              Nice Work
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Comment;
