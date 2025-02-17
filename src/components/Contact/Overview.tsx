"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db as firebaseDb } from "@/lib/firebase"; // Import Firestore database
import { Header3, Paragraph2, ParagraphLink2 } from "../Text";

const ContactForm = () => {
  const [activeForm, setActiveForm] = useState<"startup" | "capitalProvider">(
    "startup"
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      companyName: "",
      description: "",
      sector: "",
      stage: "",
      investmentFocus: "",
    },
    onSubmit: async (values) => {
      try {
        // await addDoc(collection(db, activeForm), values);
        alert("Form submitted successfully");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  });

  return (
    <div
      className="flex justify-center text-p_green items-center- py-[150px]- sm:py-[200px] min-h-screen bg-cover bg-gray-100 sm:p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dipwsq5cg/image/upload/v1739796830/Rectangle_11_uwktuz.svg')",
      }}
    >
      <div className="w-full max-w-2xl p-4 sm:p-[57px] py-[150px] sm:py- shadow-lg bg-white bg-opacity-85 sm:rounded-[15px]">
        <Header3 className="text-center text-2xl font-bold mb-[38px]">
          Contact Form
        </Header3>
        <div className="flex justify-center mb-[30px]  sm:mb-[77px]">
          <div className="relative flex bg-gray-50 rounded-[10px] p-1 w-max">
            {/* Moving Indicator */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full bg-p_green rounded-[10px] transition-all duration-300 ease-in-out ${
                activeForm === "capitalProvider"
                  ? "translate-x-full"
                  : "translate-x-0"
              }`}
            ></div>

            <button
              className={`relative px-6 py-2 w-[150px] sm:w-[170px] 32 text-center transition-all duration-300 ease-in-out ${
                activeForm === "startup" ? "text-white" : "text-gray-600"
              }`}
              onClick={() => setActiveForm("startup")}
            >
              Startup
            </button>
            <button
              className={`relative px-6 py-2 sm:w-[170px] w-[150px] 32 text-center transition-all duration-300 ease-in-out ${
                activeForm === "capitalProvider"
                  ? "text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveForm("capitalProvider")}
            >
              Capital Provider
            </button>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-[42px]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ParagraphLink2 className=" font-bold mb-2">Name </ParagraphLink2>
              <input
                type="text"
                name="name"
                placeholder=""
                className="border-b px-2- w-full outline-none bg-transparent border-secondary"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div>
              <ParagraphLink2 className=" font-bold mb-2">
                Email{" "}
              </ParagraphLink2>

              <input
                type="email"
                name="email"
                placeholder=""
                className="border-b px-2- w-full outline-none bg-transparent border-secondary"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div>
            {" "}
            <ParagraphLink2 className=" font-bold mb-2">
              {activeForm === "startup" ? "Startup Name" : "Company Name"}{" "}
            </ParagraphLink2>
            <input
              type="text"
              name="companyName"
              placeholder={activeForm === "startup" ? "" : ""}
              className="border-b px-2- w-full outline-none bg-transparent border-secondary"
              onChange={formik.handleChange}
              value={formik.values.companyName}
            />
          </div>

          {activeForm === "startup" ? (
            <>
              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Describe your startup in one sentence{" "}
                </ParagraphLink2>
                <input
                  type="text"
                  name="description"
                  placeholder=""
                  className="border-b px-2- w-full outline-none bg-transparent border-secondary"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>

              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Startup Sector{" "}
                </ParagraphLink2>
                <div className="  p-2 bg-white bg-opacity-45 rounded-lg">
                  <select
                    name="sector"
                    className=" w-full bg-transparent outline-none "
                    onChange={formik.handleChange}
                    value={formik.values.sector}
                  >
                    <option value="">Select your option..</option>
                    <option value="tech">Tech</option>
                    <option value="health">Health</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>
              </div>

              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  What stage is your startup?
                </ParagraphLink2>
                <div className="  p-2 bg-white bg-opacity-45 rounded-lg">
                  <select
                    name="stage"
                    className=" w-full bg-transparent outline-none "
                    onChange={formik.handleChange}
                    value={formik.values.stage}
                  >
                    <option value="">Select your option.. </option>
                    <option value="idea">Idea</option>
                    <option value="seed">Seed</option>
                    <option value="growth">Growth</option>
                  </select>
                </div>
              </div>

              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Are you seeking to raise in 3 months
                </ParagraphLink2>
                <div className="  p-2 bg-white bg-opacity-45 rounded-lg">
                  <select
                    name="stage"
                    className=" w-full bg-transparent outline-none"
                    onChange={formik.handleChange}
                    value={formik.values.stage}
                  >
                    <option value="">Select your option.. </option>
                    <option value="idea">Yes</option>
                    <option value="seed">No</option>
                  </select>
                </div>
              </div>
              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Which of this describes your current needs?
                </ParagraphLink2>
                <div className="  p-2 bg-white bg-opacity-45 rounded-lg">
                  <select
                    name="stage"
                    className=" w-full bg-transparent outline-none"
                    onChange={formik.handleChange}
                    value={formik.values.stage}
                  >
                    <option value="">Select your option.. </option>
                    <option value="idea">Yes</option>
                    <option value="seed">No</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Company website (If any)
                </ParagraphLink2>
                <input
                  type="text"
                  name="description"
                  placeholder=""
                  className="border-b px-2- w-full outline-none bg-transparent border-secondary"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>

              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  How do we get in touch with you?{" "}
                </ParagraphLink2>
                <div className="  p-2 bg-white bg-opacity-45 rounded-lg">
                  <select
                    name="investmentFocus"
                    className=" w-full bg-transparent outline-none"
                    onChange={formik.handleChange}
                    value={formik.values.investmentFocus}
                  >
                    <option value="">Investment Focus</option>
                    <option value="early">Early Stage</option>
                    <option value="growth">Growth Stage</option>
                    <option value="late">Late Stage</option>
                  </select>
                </div>
              </div>

              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Which of this describes your current needs?
                </ParagraphLink2>
                <div className="  p-2 bg-white bg-opacity-45 rounded-lg">
                  <select
                    name="investmentFocus"
                    className=" w-full bg-transparent outline-none"
                    onChange={formik.handleChange}
                    value={formik.values.investmentFocus}
                  >
                    <option value="">Investment Focus</option>
                    <option value="early">Early Stage</option>
                    <option value="growth">Growth Stage</option>
                    <option value="late">Late Stage</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div className=" flex justify-center">
            <button
              type="submit"
              className="w-ful bg-p_green text-white py-4 px-8 sm:py-[22px] sm:px-[170px] rounded-[8px]"
            >
              <Paragraph2 className="  sm:text-[24px]">Submit</Paragraph2>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
