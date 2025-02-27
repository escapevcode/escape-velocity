"use client";

import React, { useState } from "react";
import {
  Header1,
  Header3,
  Header4,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import AOS from "aos";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Ayobami Glory Olajide",
    image:
      "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739267834/Mask_group_nvjagc.svg",
    linkedin: "#",
    shortBio:
      "Ayobami Glory Olajide is a venture capital professional who currently leads portfolio management and value creation for Nigeria's most impactful growth-stage companies, including Daystar Power (acquired by Shell), Moniepoint, Flutterwave, MAX, and LemFi, as a Senior Associate at Endeavor Nigeria.",
    fullBio:
      "Previously, he led the research and intelligence function at Ingressive Capital, a $10M Fund I and $50M Fund II. In this role, he actively contributed to the development of investment thesis focused on GDP-transforming technologies and participated in deploying pre-seed investments totaling $3M across agritech, fintech, and insurtech startups. Ayobami is deeply committed to advancing the African startup ecosystem through collaborations with organizations such as the Lagos State Government, HiiL Justice Accelerator, 54Co (formerly Founders Factory Africa), Grooming Endowment Trust, and Africa Business Heroes.",
  },
  {
    id: 2,
    name: "John Doe",
    image:
      "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739267834/Mask_group_1_bzz7ms.svg",
    linkedin: "#",
    shortBio:
      "Johnson Adebisi Chinedu is an investment professional and product builder with extensive experience in early-stage startups and emerging markets. He has built products across Edtech, IoT, Travel, Transport tech, and developer tools, with a strong focus on the African ecosystem.",
    fullBio:
      "At Turing, a unicorn valued at over $4 billion, he played a key role in scaling the platform that connects over 2 million developers globally. At Pathfound, an Edtech startup, he was the first design hire and instrumental in building their MVP. A DreamVC fellowship alumnus with a Computer Science background, currently exploring and storytelling the impact of AI in venture capital, documenting how artificial intelligence is shaping fund operations and decision-making within the industry.",
  },
];

interface Section3Props {}

const Section3: React.FC<Section3Props> = ({}) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div>
      <div className=" h-3 flex w-full bg-gray-100 "> </div>
      <div className=" container1 pt-[34px] xl:pt-[50px]   text-p_black">
        <div
          data-aos="fade-up"
          className="flex justify-center text-white items-center bg-secondary  py-[24px] xl:py-[50px]"
        >
          <Header3>Meet the Core team</Header3>
        </div>{" "}
        <div className="pt-[50px] xl:pt-[76px] grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[132px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-span-1 space-y-[50px]- text-[20px] xl:font-medium flex flex-col"
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="flex w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[100%] h-[500px] object-cover"
                />
              </div>

              {/* LinkedIn Profile */}
              <div className="mt-4 flex gap-2 items-center">
                <img
                  src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739273780/mdi_linkedin_tzqouo.svg"
                  alt=""
                  className=""
                />
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className=" underline"
                >
                  <Paragraph2 className="text-[14px] xl:text-[20px] gray-700 mb- [38px] ">
                    LinkedIn Profile
                  </Paragraph2>
                </Link>
              </div>

              {/* Bio Section */}
              <div className="mt-4">
                <Paragraph2 className="text-[14px] xl:text-[20px] gray-700 mb- [38px] ">
                  {member.shortBio}
                  {expandedMember === member.id && (
                    <motion.span
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="block mt-2 overflow-hidden"
                    >
                      {member.fullBio}
                    </motion.span>
                  )}
                </Paragraph2>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleReadMore(member.id)}
                  className="mt-4 font-medium  text-[14px]  xl:text-[16px] text-black hover:border-b transition-all duration-300"
                >
                  {expandedMember === member.id ? "Show Less" : "Read More..."}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
