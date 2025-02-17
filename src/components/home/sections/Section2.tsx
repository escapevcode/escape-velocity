"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header3, Paragraph2, Paragraph3 } from "@/components/Text";

function Section2() {
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
      title: "Investment Readiness",
      content:
        "We design pitch decks, investor memos, and market research reports that effectively communicate your startup’s potential and value proposition—ensuring you stand out to investors and increase your chances of securing funding.",
    },
    {
      title: "Investor Relations",
      content:
        "Maintain transparent communication with your investors. We ensure you provide consistent updates, creating long-term relationships that not only secure future rounds but also foster lasting support as your startup grows. This service is offered on a limited retainership basis.",
    },
    {
      title: "Startup Support",
      content:
        "Through our proprietary product, OTIK, we provide executive intelligence to founders and C-suite executives in Africa's startup ecosystem. Our mission is to equip startup operators with actionable insights to maximize shareholder value and elevate the ecosystem's overall quality and outlook. ",
    },
  ];

  return (
    <div className="container1 mx-auto pt-[50px] xl:pt-[110px] text-p_black px-6">
      <Paragraph2 className=" xl:text-[20px] mb-[50px] text-black">
        What we do
      </Paragraph2>

      <div className="grid md:grid-cols-2 gap-8 xl:gap-20">
        {/* Left Side Content */}
        <div data-aos="fade-right" className=" space-y-[50px]">
          <Header3 className="text-lg font-bold text-primary green-600">
            FOR STARTUPS
          </Header3>
          <Paragraph3 className="">
            We ensure that founders put forward their best foot during the
            fundraising process - from scoping their capital requirements,
            housekeeping, preparing fundraise documents (memos, market research,
            pitch decks), identifying fit-for-purpose partners, and ongoing
            investor relations support.
          </Paragraph3>
          <button className="mt-6 px-[80px] hidden xl:block py-[25px] border border-gray-500 rounded-[10px] text-black hover:bg-black hover:text-white">
            <Paragraph3 className=" font-bold "> Get started</Paragraph3>
          </button>
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
              {openSection === index && (
                <Paragraph3 className="my-[30px] text-gray-600">
                  {item.content}
                </Paragraph3>
              )}
            </div>
          ))}
        </div>
        <button className="xl:mt-6 mt-4 xl:px-[80px]  flex w-full xl:hidden justify-center items-center py-[15px] xl:py-[25px] border border-gray-500 rounded-[10px] text-black hover:bg-black hover:text-white">
          <Paragraph3 className=" font-bold "> Get started</Paragraph3>
        </button>
      </div>
    </div>
  );
}

export default Section2;
