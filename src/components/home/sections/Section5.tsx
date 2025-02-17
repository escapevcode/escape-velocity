import { db } from "@/lib/firebase"; // Firestore setup
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import { Header3, Paragraph2 } from "@/components/Text";
import React, { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Save email to Firestore
      const docRef = await addDoc(collection(db, "emails"), { email });
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear input after successful submission
    } catch (error) {
      console.error("Error saving email:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#A8D46F] text-secondary relative py-[50px]">
      <div className="container1">
        <div className=" grid grid-cols-1 sm:grid-cols-2  ">
          {" "}
          <div>
            <Header3 className="text font-bold">
              Expert Connections. Actionable insights. Greater Outcomes.
            </Header3>
            <Paragraph2 className="">
              OTIK connects founders with experts, delivering executive
              intelligence to maximize shareholder value and elevate Africa’s
              startup ecosystem.
            </Paragraph2>

            <div className="px-[24px] py-[18px]  flex flex-col xl:flex-row justify-between  text-[14px] bg-secondary rounded-[10px] mt-4 overflow-hidden">
              <div className=" flex items-center gap-2 py-2 mb-4 xl:mb-0">
                <img
                  src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739301642/dashicons_email-alt_xjhnm6.svg"
                  alt=""
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-ful text-white p outline-none bg-secondary"
                  placeholder="Enter your email"
                />
              </div>

              <button
                className="p-2  font-bold bg-l_green rounded-[10px] hover:bg-black hover:text-white"
                onClick={handleSubscribe}
              >
                <Paragraph2>Join the waitlist</Paragraph2>
              </button>
            </div>
          </div>
          <div></div>
        </div>

        {message && <p className="text-center mt-4 text-red-500-">{message}</p>}
      </div>
      <div className=" absolute right-0 -bottom-0 hidden sm:block">
        <img
          src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739305947/happy-confident-young-interracial-team-members-embracing_1_xtzhcp.png"
          alt=""
          className=" h-[380px] "
        />
      </div>
    </div>
  );
}

export default NewsLetter;
