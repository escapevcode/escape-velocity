import { useState } from "react";
import { Header3, Paragraph1, Paragraph2 } from "../Text";
import { db } from "@/lib/firebase"; // Firestore setup
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

const SubscribeForm = () => {
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
    <div className="mb-[24px] xl:mb-[64px] xl:max-w-[60%]" data-aos="fade-up">
      <Header3 className="text-p_green">
        Subscribe below to get access to the latest insights in the VC landscape
        and stay up to date.
      </Header3>
      <div className="px-[24px] py-[18px] xl:max-w-[70%] flex flex-col xl:flex-row justify-between text-[14px] bg-secondary rounded-[10px] mt-4 overflow-hidden">
        <div className="flex items-center gap-2 py-2 mb-4 xl:mb-0">
          <img
            src="https://res.cloudinary.com/dipwsq5cg/image/upload/v1739301642/dashicons_email-alt_xjhnm6.svg"
            alt="Email Icon"
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
  );
};

export default SubscribeForm;
