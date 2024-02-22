import React, { useState, useEffect } from "react";
import anitta from "../assets/anitta.png";
import image2 from "../assets/img.png";
import like from "../assets/like.png";
import Comment from "./Comments";
import ImagePopup from "./ImagePopup";

const HomePage1 = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const openPopup = () => {
    setPopupOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupOpen(false);

    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="vsm:h-[180vh] vvsm:h-[200vh]">
      <div className="border border-slate-100 shadow-md vsm:h-[175vh] vvsm:h-[200vh] sm:mx-24 vvsm:mx-6 rounded-xl p-4">
        <div className="flex items-start justify-between">
          <img
            src={anitta}
            alt="Paul"
            className="w-28 h-12 rounded-full cursor-pointer md:w-28 md:h-12 ssm:w-20 vsm:w-16 vvsm:w-14"
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
            src={image2}
            alt=""
            className="h-[70vh] w-[100%]"
            onClick={isLargeScreen ? openPopup : null}
          />
          <div className="flex justify-between">
            <img src={like} alt="" className="w-48 h-10" />
            <p className="poppins text-xs opacity-50">3 comments</p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="border border-[#CF796C] text-[#CF796C] xl:px-48 lg:px-40 md:px-24 vsm:px-9 vvsm:px-8 py-1 rounded-full mr-2 ">
              Like
            </button>
            <button className="border bg-[#CF796C]  xl:px-48 lg:px-40 md:px-24 vsm:px-9 vvsm:px-8 py-1 rounded-full text-white">
              Comment
            </button>
          </div>
          <Comment />
        </div>
      </div>

      {isPopupOpen && <ImagePopup imageUrl={image2} onClose={closePopup} />}
    </div>
  );
};

export default HomePage1;
