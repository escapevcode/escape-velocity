"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import ProductCard from "@/components/Products/ProductCard";

interface Section3Props {
  latestProducts: any;
}

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-[24px]">
          {latestProducts && latestProducts.length > 0
            ? latestProducts.slice(0, 3).map((product: any) => (
                <div className=" w-full">
                  <ProductCard
                    key={product.id}
                    image={product.productImageURL1}
                    title={product.name}
                    price={product.currentPrice}
                    product={product}
                  />
                </div>
              ))
            : Array(3)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-[200px] xl:min-w-[250px] bg-gray-200 rounded-md animate-pulse"
                  ></div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
