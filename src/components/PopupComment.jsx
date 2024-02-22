import React from "react";
import Vector from "../assets/Vector.png";
import comment from "../assets/comment.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import menu from "../assets/menu.png";
import send from "../assets/send.png";
function PopupComment() {
  return (
    <>
      <>
        {" "}
        <div className="border border-slate-100 bg-[rgb(225,225,225,0.2)] shadow-md h-[80vh] sm:mx-2 vvsm:mx-6 rounded-xl p-4">
          {/* 1st comment */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={Ellipse1} alt="" className="w-14 h-14 rounded-full" />
                <p className="ml-2">
                  <span className="font-Poppins font-bold text-base">
                    Srutheesh
                  </span>{" "}
                  <span className="text-[10px] opacity-25 font-Poppins">
                    1 Week ago
                  </span>
                </p>
              </div>
              <img src={menu} alt="" />
            </div>
            <div className="ml-16 relative">
              <img src={comment} alt="" className="w-[98%] h-14 relative" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start font-Poppins ml-10 text-[15px]">
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
                  <span className="font-Poppins font-bold text-base">
                    Anitta K C
                  </span>{" "}
                  <span className="text-[10px] opacity-25 font-Poppins">
                    1 Week ago
                  </span>
                </p>
              </div>
              <img src={menu} alt="" />
            </div>
            <div className="ml-8 relative">
              <img src={comment} alt="" className="w-[98%] h-14 relative" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start font-Poppins ml-10 text-[15px]">
                Thankuu....
              </div>
            </div>
          </div>
          {/* last comment */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={Ellipse3} alt="" className="w-14 h-14 rounded-full" />
                <p className="ml-2">
                  <span className="font-Poppins font-bold text-base">
                    Simi Sunny
                  </span>{" "}
                  <span className="text-[10px] opacity-25 font-Poppins">
                    1 Week ago
                  </span>
                </p>
              </div>
              <img src={menu} alt="" />
            </div>
            <div className="ml-16 relative">
              <img src={comment} alt="" className="w-[98%] h-14 relative" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start font-Poppins ml-10 text-[15px]">
                Good Work
              </div>
              <div className="text-[#CF796C] text-xs  font-Poppins flex justify-end mr-5">
                Reply
              </div>
            </div>
            <div className="mt-6">
              <button className="flex items-center justify-between   text-black  bg-[rgb(236,200,174,0.4)] rounded-full w-[100%] ">
                <img src={Ellipse2} alt="" className="w-10 h-10 " />
                <span className="pl-4 text-sm  font-Poppins opacity-20 ">
                  {" "}
                  Write a Comment
                </span>
                <img src={send} alt="" className="w-5 h-5  mr-7" />
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default PopupComment;
