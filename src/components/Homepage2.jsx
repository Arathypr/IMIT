import React, { useState } from "react";
import paul from "../assets/paul.png";
import image1 from "../assets/image1.png";
import like from "../assets/like.png";

const HomePage2 = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="h-[110vh]">
      <div className="border border-slate-100 shadow-md h-[110vh] sm:mx-24 vvsm:mx-6 rounded-xl p-4">
        <div className="flex items-start justify-between">
          <img
            src={paul}
            alt="Paul"
            className="w-28 h-12 rounded-full cursor-pointer md:w-28 md:h-12 ssm:w-20 vsm:w-16 vvsm:w-14"
            onClick={openPopup}
          />
          <button className="border border-[#CF796C] text-[#CF796C] md:text-base sm:text-sm ssm:text-xs vsm:text-[9px] vvsm:text-[8px] vvsm:px-3 vsm:px-3 md:px-4 ssm:px-3px-4 py-1 rounded-md">
            Report
          </button>
        </div>
        <div className="mt-8">
          <p className="font-Poppins lg:text-[14px] md:text-[12px] sm:text-[11px] ssm:text-[10px] vsm:text-[9px] vvsm:text-[8px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            src={image1}
            alt=""
            className="h-[70vh] w-[100%]"
            onClick={openPopup}
          />
          <div className="flex justify-between">
            <img
              src={like}
              alt=""
              className="lg:w-48 h-10 md:w-44  sm:w-40 ssm:w-32 vsm:w-28 vvsm:w-28"
            />
            <p className="poppins text-xs opacity-50 mt-2">3 comments</p>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button className="border border-[#CF796C] text-[#CF796C] xl:px-48 lg:px-40 md:px-24 vsm:px-9 vvsm:px-8 py-1 rounded-full mr-2 ">
              Like
            </button>
            <button className="border bg-[#CF796C]  xl:px-48 lg:px-40 md:px-24 vsm:px-9 vvsm:px-8 py-1 rounded-full text-white">
              Comment
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closePopup}
        >
          <img src={image1} alt="Popup" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default HomePage2;
