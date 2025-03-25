"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header3, Paragraph2, Paragraph3 } from "@/components/Text";
import { motion } from "framer-motion";
import Link from "next/link";

function Section2B() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Entrepreneur Support Programs",
      content:
        "With our extensive network of experts spread across Africa, startup verticals, and subject themes relevant to startup growth, we are able to design and implement impactful startup programs that delivers ROI for organizations and tangible results for participants. ",
    },
    {
      title: "Market Intelligence",
      content:
        "We create bespoke reports on sectors and countries to inform executive teams, guide the investment thesis of international investors, and equip decision-makers with actionable intelligence. Our goal is to enable informed decisions that create shared value while maximizing profitability.",
    },
    {
      title: "Due Diligence",
      content:
        "We perform thorough evaluations of startups to ensure they align with your mandate, identifying risks and opportunities to help you invest confidently and maximize returns.",
    },
  ];

  

  return (
    <div className="container1 mx-auto py-[50px] xl:py-[180px] text-p_black px-6">
      <Paragraph2 className=" xl:text-[20px] mb-[20px] xl:mb-[50px] text-black">
        What we do
      </Paragraph2>

      <div className="grid md:grid-cols-2 gap-8 xl:gap-20">
        {/* Left Side Content */}
        <div
          data-aos="fade-right"
          className=" space-y-[20px] xl:space-y-[50px]"
        >
          <Header3 className="text-lg font-bold text-primary green-600">
            FOR CAPITAL PROVIDERS{" "}
          </Header3>
          <Paragraph3 className="">
            We help capital providers maximize ROI by connecting them with
            aligned startups, designing entrepreneur support programs, and
            offering market intelligence and due diligence services.
          </Paragraph3>
          <Link href="/contact-us" className="mt-6 px-[80px] w-fit hidden xl:block py-[25px] border border-gray-500 rounded-[10px] text-black hover:bg-black hover:text-white">
            <Paragraph3 className=" font-bold ">
              {" "}
              Book an appointment
            </Paragraph3>
          </Link>
        </div>

        {/* Right Side Accordion */}
        <div data-aos="fade-left">
          {sections.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                className="w-full text-left py-3 mb-[30px] flex justify-between items-center text-lg font-semibold"
                onClick={() => toggleSection(index)}
              >
                <Paragraph3>{item.title}</Paragraph3>
                <span className="text-[34px]">
                  {openSection === index ? "-" : "+"}
                </span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openSection === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Paragraph3 className="mb-[30px] text-gray-600">
                  {item.content}
                </Paragraph3>
              </motion.div>
            </div>
          ))}
        </div>

        <Link
          href="/contact-us"
          className="xl:mt-6 mt-4 xl:px-[80px]  flex w-full xl:hidden justify-center items-center py-[15px] xl:py-[25px] border border-gray-500 rounded-[10px] text-black hover:bg-black hover:text-white"
        >
          <Paragraph3 className=" font-bold "> Book an appointment</Paragraph3>
        </Link>
      </div>
    </div>
  );
}

export default Section2B;
