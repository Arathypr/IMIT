import React, { useState } from "react";
import upload from "../assets/upload.png";
import uploadsmall from "../assets/uploadsmall.png";
import paul from "../assets/paul.png";
import smallrect from "../assets/Rect.png";
const Home = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImages([...images, URL.createObjectURL(file)]);
      }
    };
    input.click();
  };

  const openImagePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex items-center justify-end border border-slate-100 shadow-md h-72 sm:mx-24 vvsm:mx-6 rounded-xl overflow-hidden relative mb-5">
        <div className="lg:w-52 md:w-48 sm:w-44 ssm:w-36 vvsm:w-28 vvsm:mt-36 ssm:mt-24 sm:mt-12 md:mt-9 lg:mt-0">
          <img
            src={upload}
            alt=""
            className="h-full object-cover rounded-xl "
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handleUploadClick}
            className="bg-[#C08C5D] text-white xl:px-52 lg:px-40 md:px-24 sm:px-12 ssm:px-7 vvsm:px-7  vvsm:py-2 ssm:py-3 rounded-full font-Poppins"
          >
            Upload Image
          </button>
          <div>
            <div className="absolute left-12 bottom-4">
              <img
                src={smallrect}
                alt="Small Rectangle"
                className="lg:w-20 md:w-16 sm:w-14 ssm:w-12 vvsm:w-10 "
              />
            </div>
          </div>

          <img src={uploadsmall} alt="" className="w-8 mb-10 -ml-5 " />
        </div>
      </div>

      {images.map((imageUrl, index) => (
        <div className="h-[110vh]">
          <div className="border border-slate-100 shadow-md h-[110vh] sm:mx-24 vvsm:mx-6 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <img
                src={paul}
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
                src={imageUrl}
                alt={`Uploaded ${index + 1}`}
                className="h-[70vh] w-[100%]"
                onClick={() => openImagePopup(imageUrl)}
              />

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
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeImagePopup}
        >
          <img
            src={selectedImage}
            alt="Popup"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </>
  );
};

export default Home;
