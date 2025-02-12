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
import Image from "next/image";
import CartSummary from "./Cart/CartSummary";
import useCartStore, { useCartCount } from "@/stores/cartStore";
import SearchBar from "./SearchBar";
import CurrencySwitcher from "./CurrencySwitcher";

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
      className={
        ["/contact-us", "/privacy-policy", "/terms-of-service"].includes(
          pathname
        )
          ? " pt-[64px]- bg-secondary  fixed flex w-full z-20 pb-[8px] "
          : "  pb-[8px] bg-secondary pt-[64px]-  fixed flex w-full z-20"
      }
    >
      <div className=" flex flex-col  w-full text-white">
        <div
          className={` w-full px-4 sm:px-o mb-2  bg-p_green py-[14px] justify-center items-center transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0 "
              : "opacity-0 pointer-events-none- -translate-y-5  hidden "
          } ${pathname === "/" ? " sm:invisible " : " "}`}
          // className="flex hidden invisible w-full bg-p_green py-[14px] justify-center items-center"
        >
          <div>
            <Paragraph1>
              Get access to insights in the VC space for free and stay updated
              here
            </Paragraph1>
          </div>
        </div>
        <div className=" container1 pt-2 flex justify-between sm:justify-center gap-[50px] sm:border-b-2 border-p_green sm:pb-4 font-semibold- w-full items-center">
          <Link href="/" className="flex items-center border rounded-lg p-2">
            <img
              src="/images/logo.svg"
              alt=""
              className="h-[31px] xl:flex hidden-"
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
                className=" w-[24px] h-[24px] "
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
            <Link href="/products">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/products" ? "border-b border-primary " : "  "
                }
              >
                Insight
              </ParagraphLink1>
            </Link>

            <Link href="/about-us">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/about-us" ? "border-b border-primary " : "  "
                }
              >
                OTIK (Coming Soon)
              </ParagraphLink1>
            </Link>

            <Link href="/blog">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/blog" ? "border-b border-primary " : "  "
                }
              >
                Resources
              </ParagraphLink1>
            </Link>

            <Button
              text="Contact us"
              href="/contact-us"
              isLink={true}
              border=" bg-primary "
              additionalClasses="border-secondary text-black "
            />
            {/* <SearchBar toggleMenu={toggleMenu} />
            <CurrencySwitcher /> */}
          </div>

          {/* <div
            onClick={() => toggleCart()}
            className=" border rounded-lg p-2 cursor-pointer flex relative "
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:scale-110 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div className=" absolute -top-2 -right-4 bg-primary p-1 px-2 text-white text-[10px] rounded-full">
              {cartCount > 0 ? cartCount : 0}
            </div>
          </div>

          <CartSummary isOpen={cartOpen} onClose={() => toggleCart()} /> */}
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
              <Link href="/products" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/products" ? "text-primary font-bold " : "  "
                  }
                >
                  Insight
                </ParagraphLink1>
              </Link>
              <Link href="/about-us" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/about-us" ? "text-primary font-bold " : "  "
                  }
                >
                  OTIK (Coming Soon)
                </ParagraphLink1>
              </Link>

              <Link href="/blog" onClick={toggleMenu}>
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/blog" ? "text-primary font-bold " : "  "
                  }
                >
                  Resources
                </ParagraphLink1>
              </Link>
              <Button
                text="Contact us"
                href="/contact-us"
                isLink={true}
                border=" bg-primary "
                additionalClasses="border-secondary text-black "
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
