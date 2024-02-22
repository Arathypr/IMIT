import React from "react";
import PropTypes from "prop-types";
import image2 from "../assets/image2.png";
import PopupComment from "./PopupComment";
import asha from "../assets/asha.png";
import Heart from "../assets/Heart.png";
import CloseIcon from "../assets/close.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const ImagePopup = ({ onClose }) => {
  return (
    <div className="lg:block hidden">
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-4 w-[70%] max-h-full overflow-auto flex flex-col">
          <div className="flex justify-end">
            <img
              src={CloseIcon}
              alt="Close"
              className="cursor-pointer w-6 h-6"
              onClick={onClose}
            />
          </div>
          <div className="flex-grow flex">
            <div className="w-1/2 pr-4">
              <img src={image2} alt="" className="w-full h-full" />
            </div>
            <div className="w-1/2">
              <div className="mt-4">
                <div className="flex items-start justify-between ">
                  <img
                    src={asha}
                    alt="asha"
                    className="w-28 h-12 rounded-full"
                  />
                  <button className="border border-[#CF796C] text-[#CF796C] px-2 text-sm font-Poppins rounded-md mt-2">
                    Report
                  </button>
                </div>
                <hr />
                <div className="flex items-center justify-center mt-4 mb-4">
                  <button className="flex items-center border border-[#CF796C] text-[#CF796C] px-14 py-1 rounded-full mr-2">
                    <img src={Heart} alt="" className="w-3 h-4" />
                    <span className="ml-2">Like</span>
                  </button>
                  <button className="border bg-[#CF796C] px-12 py-1 rounded-full text-white">
                    Comment
                  </button>
                </div>
                <PopupComment />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">Latest</h2>
            <div className="flex flex-wrap">
              <img
                src={image3}
                alt="Latest Image"
                className="w-full sm:w-1/3 p-1"
              />
              <img
                src={image4}
                alt="Latest Image"
                className="w-full sm:w-1/3 p-1"
              />
              <img
                src={image5}
                alt="Latest Image"
                className="w-full sm:w-1/3 p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ImagePopup;
