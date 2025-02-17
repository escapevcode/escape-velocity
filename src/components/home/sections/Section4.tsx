"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  Paragraph2,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

interface Section3Props {
  latestProducts: any;
}
interface Insight {
  id: number;
  title: string;
  imageUrl: string;
}

const insightsData: Insight[] = [
  {
    id: 1,
    title: "THE COMPENSATION MAP: AN AFRICAN INVESTMENT SALARIES REPORT 2025",
    imageUrl: "/placeholder-image.jpg",
  },
  {
    id: 2,
    title: "THE COMPENSATION MAP: AN AFRICAN INVESTMENT SALARIES REPORT 2025",
    imageUrl: "/placeholder-image.jpg",
  },
  {
    id: 3,
    title: "THE COMPENSATION MAP: AN AFRICAN INVESTMENT SALARIES REPORT 2025",
    imageUrl: "/placeholder-image.jpg",
  },
];

const Section3: React.FC<Section3Props> = ({ latestProducts }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="py-[120px] bg-bg_gray mt-[50px]  ">
      {" "}
      <div className=" container1  text-p_green">
        {" "}
        <div
          className=" flex xl:gap-[24px] flex-col w-full mb-[24px] xl:mb-[64px]"
          // data-aos="fade-up"
        >
          <Header3>Check our latest resources! </Header3>{" "}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-4">
          {insightsData.map((insight) => (
            <div
              key={insight.id}
              className="bg-white shadow-md rounded-[10px] p-[20px] border border-gray-200 "
            >
              <img
                src={insight.imageUrl}
                alt={insight.title}
                className="w-full h-[200px] bg-gray-300 rounded-[10px]"
              />
              <Paragraph1 className="text-lg font-semibold mt-4 text-p_green">
                {insight.title}
              </Paragraph1>
              <Link
                href={`/`}
                className="mt-4 px-4 py-2 border border-secondary flex w-fit gray-900 rounded-md hover:bg-black gray-900 hover:text-white transition"
              >
                <Paragraph2>Learn more</Paragraph2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
