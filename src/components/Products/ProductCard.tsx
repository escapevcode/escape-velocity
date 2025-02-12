import React from "react";
import { Paragraph1, Paragraph2, Paragraph3, ParagraphLink2 } from "../Text";
import Button from "../Button";
import Link from "next/link";
import useCartStore from "../../stores/cartStore";
import AOS from "aos";
import { useExchangeRateStore } from "@/stores/exchangeRateStore";

interface ProductCardProps {
  image: string;
  title: string;
  price: any;
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  product,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const productID = product.id;
  const { selectedCurrency, exchangeRate } = useExchangeRateStore();

  const displayPrice =
    selectedCurrency === "USD" && exchangeRate > 0
      ? price / exchangeRate // Convert to USD
      : price; // Default to NGN

  const currencySymbol = selectedCurrency === "USD" ? "$" : "₦";

  const formattedPrice =
    selectedCurrency === "USD"
      ? displayPrice.toFixed(2) // Format for USD with 2 decimal places
      : displayPrice; // Format for NGN (comma-separated)

  const handleAddToCart = () => {
    addToCart(productID); // Just pass the ID
    // @ts-ignore
    toggleCart(true); // Ensure the cart is open
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      // data-aos="fade-up"
      className="max-w-full bg-white text-p_black rounded-lg  overflow-hidden  -shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="bg-white relative p-[20px]  overflow-hidden  rounded-[10px] ">
        <Link href={`/products/${productID}`}>
          {" "}
          <img
            // src={
            //   image
            //     ? image.replace("/upload/", "/upload/w_500,f_auto/")
            //     : "/images/default-product.png"
            // }
            src="https://res.cloudinary.com/dvao98wnj/image/upload/v1738849472/385327d1_edited_a943_k0mz9c.webp"
            alt={title}
            className="w-full h-[200px] rounded-[10px] object-cover  hover:scale-110- transition-transform- duration-300 "
          />
        </Link>
        <div className=" space-y-2 flex flex-col  border-t- pt-3   ga -rounded-lg  bg-white bg-opacity-65">
          <Paragraph1 className=" text-[14px] xl:text-[16px] font-bold  uppercase  ">
            {" "}
            {title}{" "}
          </Paragraph1>

          <Link
            href={`/products/${productID}`}
            onClick={handleAddToCart}
            className="whitespace-nowrap font-semibold   flex w-fit justify-center  border hover:bg-black hover:text-white rounded-[10px] border-black  px-[41px] py-[16px]  "
          >
            <ParagraphLink2>Learn more</ParagraphLink2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
