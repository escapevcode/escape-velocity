"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import {
  Header3,
  HeaderAny,
  Paragraph1,
  Paragraph2,
  ParagraphLink1,
  ParagraphLink2,
} from "./Text";
import { usePathname } from "next/navigation";
import useCartStore, { useCartCount } from "@/stores/cartStore";


function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartCount = useCartCount();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartOpen = useCartStore((state) => state.cartOpen);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }

  return (
    <div
      className={`
    ${
      [
        "/contact-us",
        "/privacy-policy",
        "/insight",
        "/resources",
        "/terms-of-service",
      ].includes(pathname)
        ? "  xl:text-black text-white fixed flex w-full z-20 pb-[8px]"
        : "pb-[8px] bg-secondary  fixed flex w-full text-white z-20"
    }
    ${
      isVisible
        ? " xl:bg-transparent bg-secondary"
        : "  xl:bg-gray-100 bg-secondary"
    }
     ${pathname === "/" ? " xl:bg-secondary " : " "}
  `}
    >
      <div className=" flex flex-col  w-full ">
        <div
          className={` w-full px-4 sm:px-o mb-2  bg-p_green py-[14px] justify-center items-center transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0 "
              : "opacity-0 pointer-events-none- -translate-y-5  hidden "
          } ${pathname === "/" ? " sm:invisible " : " "}`}
        >
          <div>
            <Paragraph2 className=" text-[12px] text-white sm:text-[14px] text-center w-full truncate overflow-hidden whitespace-nowrap">
              Get access to insights in the VC space for free and stay updated
              here
            </Paragraph2>
          </div>
        </div>
        <div
          className={` ${
            isVisible ? "xl:border-b-2  border-p_green xl:pb-4" : "  "
          } ${pathname === "/contact-us" && isVisible ? " text-white" : " "}

          container1 pt-2 flex justify-between xl:justify-center gap-[50px]    font-semibold- w-full items-center`}
        >
          <Link href="/" className={`flex items-center border rounded-lg `}>
            <img
              src="/images/logo.svg"
              alt=""
              className="xl:h-[51px] h-[41px] xl:flex hidden-"
            />
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <img
                src={
                  menuOpen
                    ? "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739309674/close_cjqy1g.png"
                    : "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739309674/menu_fmwnnr.png"
                }
                alt="menu"
                className=" xl:w-[24px] w-[21px] xl:h-[24px] "
              />
            </button>
          </div>
          <div className="  gap-[50px] items-center hidden lg:flex">
            <Link href="/">
              <ParagraphLink1
                className={
                  pathname === "/" ? " border-b border-primary  " : " "
                }
              >
                Home
              </ParagraphLink1>
            </Link>
            <Link href="/insight">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/insight" ? "border-b border-primary " : "  "
                }
              >
                Insight
              </ParagraphLink1>
            </Link>

            <Link href="#" className=" cursor-not-allowed ">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/about-us" ? "border-b border-primary " : "  "
                }
              >
                OTIK (Coming Soon)
              </ParagraphLink1>
            </Link>

            <Link href="/resources">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/resources" ? "border-b border-primary " : "  "
                }
              >
                Resources
              </ParagraphLink1>
            </Link>

            <Button
              text="Contact us"
              href="/contact-us"
              isLink={true}
              backgroundColor="bg-l_green"
              additionalClasses="border-secondary- text-black "
            />
            
          </div>

        
        </div>

        {/* mobile dropdown */}
        {menuOpen && (
          <div className="p-[24px] flex flex-col justify-center font-semibold items-center">
            <div className=" container1 flex flex-col w-full space-y-[24px] justify-between items-center">
              <Link href="/" onClick={toggleMenu}>
                <ParagraphLink1
                  className={pathname === "/" ? "text-primary font-bold " : " "}
                >
                  Home
                </ParagraphLink1>
              </Link>
              <Link href="/insight" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/insight" ? "text-primary font-bold " : "  "
                  }
                >
                  Insight
                </ParagraphLink1>
              </Link>
              <Link
                href="#"
                className="cursor-not-allowed"
                onClick={toggleMenu}
              >
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/about-us" ? "text-primary font-bold " : "  "
                  }
                >
                  OTIK (Coming Soon)
                </ParagraphLink1>
              </Link>

              <Link href="/resources" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/resources" ? "text-primary font-bold " : "  "
                  }
                >
                  Resources
                </ParagraphLink1>
              </Link>
              <Button
                text="Contact us"
                href="/contact-us"
                isLink={true}
                border="  "
                backgroundColor="bg-l_green"
                additionalClasses="border-secondary- text-black "
              />
              {/* <CurrencySwitcher />
              <SearchBar toggleMenu={toggleMenu} /> */}
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
