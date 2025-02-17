"use client";

import React, { useState, useEffect } from "react";
import { Header3, Paragraph1, Paragraph2 } from "../Text";
import AOS from "aos";
import Link from "next/link";

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

function Insight() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSubscribe = () => {
    // Add subscription logic here
  };

  return (
    <div
      className="relative text-p_green bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dipwsq5cg/image/upload/v1739707061/Rectangle_9521_mgqmtd.svg')",
      }}
    >
      {/* {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-[100px] w-[100px] border-t-2 border-b-2 border-primary"></div>
        </div>
      )} */}
      <div className="container1 min-h-screen py-[154px] xl:py-[200px]  text-p_black">
        <div>
          <div>
            <div
              className="mb-[24px] xl:mb-[64px] xl:max-w-[60%]"
              data-aos="fade-up"
            >
              <Header3 className="text-p_green">
                Subscribe below to get access to the latest insights in the VC
                landscape and stay up to date.
              </Header3>
              <div className="px-[24px] py-[18px] xl:max-w-[70%] flex flex-col xl:flex-row justify-between text-[14px] bg-secondary rounded-[10px] mt-4 overflow-hidden">
                <div className="flex items-center gap-2 py-2 mb-4 xl:mb-0">
                  <img
                    src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739301642/dashicons_email-alt_xjhnm6.svg"
                    alt=""
                  />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-white p outline-none bg-secondary"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  className="p-2 px-4 font-bold bg-l_green rounded-[10px] hover:bg-black hover:text-white"
                  onClick={handleSubscribe}
                >
                  <Paragraph2>Get access</Paragraph2>
                </button>
              </div>
            </div>

            <Header3 className="mb-8 text-p_green">Latest Insights</Header3>

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
      </div>
    </div>
  );
}

export default Insight;
