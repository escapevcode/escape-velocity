"use client";

import Button from "@/components/Button";
import { Header1Plus, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";


function section6() {

   React.useEffect(() => {
     AOS.init({
       duration: 1000,
     });
   });
  
  return (
    <div className=" bg-[#28443F]">
      <div
        className=" container1 pt-[24px] sm:py-[80px] text-p_black"
        data-aos="fade-up"
      >
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-[24px]">
          {" "}
          <div className=" flex justify-center">
            <img
              src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739300820/Frame_uzakwm.svg"
              alt=""
            />
          </div>{" "}
          <div>
            {" "}
            <div className="flex flex-col xl:gap-[24px] text-white w-full pb-[64px]">
              <Header1Plus>
                <span className="text-l_green">Together</span>, let's fuel the
                pursuit of your business and company!
              </Header1Plus>
              <Paragraph1 className="max-w-[883px] ">
                Join us as we take your business from scratch to where it should
                be in a matter of time!
              </Paragraph1>
              <Button
                text="Contact us"
                href="/contact-us"
                isLink={true}
                additionalClasses="border-secondary text-black mt-[24px] xl:mt-[48px] w-fit "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section6;
