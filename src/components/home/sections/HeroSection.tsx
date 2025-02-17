/** @format */

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { Header1, Paragraph3, ParagraphLink1 } from "@/components/Text";
import Link from "next/link";
import ElevatingBrands from "./others/ElevatingBrands";

const HomePage = () => {
  const imageUrls = [
    "https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/lagos-pic-13_nc3jec.jpg",
    "https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/385327d1_edited_a943_1_nhssvp.webp",
    "https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/lagos-pic-13_nc3jec.jpg",
  ];

  return (
    <div
      className="sm:pt-[240px] pt-[150px] bg-gradient-to-b from-secondary via-secondary/120 to-primary"
      style={{
        // height: "140vh",
        background:
          "linear-gradient(to bottom, #0C221E 40%, #285E38 80%, #8CC63F 100%)",
      }}
    >
      <div className=" text-white   " data-aos="zoom-in-up">
        <div className="flex flex-col items-center justify-center py-2 container1 ">
          <div className="text-center">
            <Header1>
              <span className=" text-primary">Fuelling</span> the pursuit of{" "}
              <span className=" text-primary">profits</span>{" "}
              <br className=" hidden sm:block" /> and purpose in{" "}
              <span className=" text-primary"> venture</span>
            </Header1>

            <Paragraph3 className="mt-6">
              We connect intelligent capital and resources with mission-aligned{" "}
              <br />
              startups and businesses across Africa.
            </Paragraph3>

            <div className="xl:py-[80px] py-[30px] flex w-full justify-center items-center">
              <Link
                href="/products"
                className=" sm:px-[68px] px-[30px] py-[15px] text-[18px] w-full xl:w-fit hover:text-white hover:bg-black sm:py-[35px] sm:text-[24px] bg-l_green text-black rounded-[15px] "
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <ElevatingBrands />
    </div>
  );
};

export default HomePage;
