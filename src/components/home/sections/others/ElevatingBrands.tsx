import { Header4, Paragraph1 } from "@/components/Text";
import React from "react";

function ElevatingBrands() {
  const pictureTypes = [
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257934/Card-1_gdvahf.svg",
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257934/Card-3_hlsm6s.svg",
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257934/Frame_77_my5iks.svg",
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257935/image_19-removebg-preview_1_u9hilj.svg",
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257934/Frame_78_gxel57.svg",
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257933/Card-2_dn8kpm.svg",
    "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739257933/Card_wweqao.svg",
  ];

  // Generate an array of 300 items cycling through the picture types
  const brands = Array.from(
    { length: 300 },
    (_, i) => pictureTypes[i % pictureTypes.length]
  );

  return (
    <div className=" bg-p_green text-p_black mt-[50px] sm:mt-[100px] pt-[40px] pb-[20px] relative">
      <div className=" absolute top-[-30px] left-1/2 transform -translate-x-1/2 py-[10px] px-[24px] bg-white rounded-[100px]">  
        <Paragraph1 className="text-center">
          We have worked with{" "}
        </Paragraph1>
      </div>

      <div className="slider-container3 overflow-hidden whitespace-nowrap">
        <div className="slider-content3 flex items-center gap-[45px] animate-slider3">
          {brands.map((brand, index) => (
            <div key={index} className=" flex-shrink-0">
              <img
                src={brand}
                alt={`Brand ${index}`}
                className="h-auto w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElevatingBrands;
 