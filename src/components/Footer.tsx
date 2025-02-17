"use client";

import React from "react";
import {
  HeaderAny,
  Paragraph1,
  Paragraph2,
  ParagraphLink1,
  ParagraphLink2,
} from "./Text";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }

  return (
    <div
      className={
        ["/insight-", "/resources-"].includes(pathname)
          ? "bg-bg_gray hidden sm:py-[100px]-"
          : " bg-white sm:py-[100px]-"
      }
    >
      <div className="  bg-bg_gray [#4A4A4A]  ">
        <div className=" container1 py-[32px] sm:py-[40px] ">
          {/* desktop */}
          <div className="sm:flex hidden items-start justify-between ">
            <div className=" flex flex-col gap-2 items-center- justify-center-">
              <div className=" flex items-center gap-2 text-[#ECECEC]- ">
                <img
                  src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307167/Subtract_jgiou5.svg"
                  alt=""
                />

                <Paragraph2> hello@skillbridge.com</Paragraph2>
              </div>
              <div className=" flex items-center gap-2 text-[#ECECEC]- ">
                <img
                  src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307165/Icon_qauggf.svg"
                  alt=""
                />

                <Paragraph2> +91 91813 23 2309</Paragraph2>
              </div>

              <div className=" flex items-center gap-2 text-[#ECECEC]- ">
                <img
                  src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307165/Icon_1_wx7kpq.svg"
                  alt=""
                />

                <Paragraph2> Somewhere in the World</Paragraph2>
              </div>
            </div>
            <div className=" flex gap-1 [48px] flex-col">
              <Link href="/">
                <ParagraphLink2
                  className={
                    pathname === "/"
                      ? "text-[#ECECEC]- font-bold- "
                      : " text-[#ECECEC]- "
                  }
                >
                  Home
                </ParagraphLink2>
              </Link>{" "}
              <Link href="/about-us">
                {" "}
                <ParagraphLink2
                  className={
                    pathname === "/about-us"
                      ? "text-[#ECECEC]- font-bold- "
                      : " text-[#ECECEC]- "
                  }
                >
                  Insight
                </ParagraphLink2>
              </Link>
              <Link href="/insight">
                {" "}
                <ParagraphLink2
                  className={
                    pathname === "/insight"
                      ? "text-[#ECECEC]- font-bold- "
                      : " text-[#ECECEC]- "
                  }
                >
                  OTIK (Coming Soon)
                </ParagraphLink2>
              </Link>
              <Link href="/resourcess">
                {" "}
                <ParagraphLink2
                  className={
                    pathname === "/resourcess"
                      ? "text-[#ECECEC]- font-bold- "
                      : " text-[#ECECEC]- "
                  }
                >
                  Resources
                </ParagraphLink2>
              </Link>
            </div>
            <div></div>
            <div>
              <Paragraph2>Social Profiles</Paragraph2>
              <div className=" flex gap-2 items-center my-[14px]">
                <Link
                  href="https://www.instagram.com/grandiosegrin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307164/Button_opw4ju.svg"
                    alt=""
                    className=""
                  />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307162/Button_2_lyy5lh.svg"
                    alt=""
                    className=" "
                  />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307163/Button_1_btncbr.svg "
                    alt=""
                    className=" "
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className=" sm:flex justify-center items-center hidden py-4"></div>

          {/* mobile  */}
          <div className=" mb-[24px] sm:hidden sm:mb-[110px]">
            <div className=" space-y-[24px] mb-[24px] ">
              {" "}
              <Link href="/">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]-  ">
                  Home{" "}
                </ParagraphLink2>
              </Link>
              <Link href="/about-us">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]-  ">
                  Insight{" "}
                </ParagraphLink2>
              </Link>
              <Link href="/insight">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]- ">
                  OTIK (Coming Soon)
                </ParagraphLink2>
              </Link>
              <Link href="/resources">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]- ">
                  Resources
                </ParagraphLink2>
              </Link>
              <div className=" flex flex-col p-4- gap-2 items-center- justify-center-">
                <div>
                  <Paragraph2>Social Profiles</Paragraph2>
                  <div className=" flex gap-2 items-center my-[14px]">
                    <Link
                      href="https://www.instagram.com/grandiosegrin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307164/Button_opw4ju.svg"
                        alt=""
                        className=""
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307162/Button_2_lyy5lh.svg"
                        alt=""
                        className=" "
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307163/Button_1_btncbr.svg "
                        alt=""
                        className=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 items-center- justify-center-">
                  <div className=" flex items-center gap-2 text-[#ECECEC]- ">
                    <img
                      src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307167/Subtract_jgiou5.svg"
                      alt=""
                    />

                    <Paragraph2> hello@skillbridge.com</Paragraph2>
                  </div>
                  <div className=" flex items-center gap-2 text-[#ECECEC]- ">
                    <img
                      src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307165/Icon_qauggf.svg"
                      alt=""
                    />

                    <Paragraph2> +91 91813 23 2309</Paragraph2>
                  </div>

                  <div className=" flex items-center gap-2 text-[#ECECEC]- ">
                    <img
                      src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739307165/Icon_1_wx7kpq.svg"
                      alt=""
                    />

                    <Paragraph2> Somewhere in the World</Paragraph2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 order-2 sm:order-1 hidden">
              {" "}
              <img
                src="/images/logo2.png"
                alt="photographer"
                className=" "
              />{" "}
            </div>
          </div>

          <div className=" border-t border-black pt-[24px] sm:pt-[32px] flex justify-center">
            <ParagraphLink2 className="  text-[#ECECEC]- ">
              © 2025 Escape Velocity. All rights reserved.{" "}
            </ParagraphLink2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
