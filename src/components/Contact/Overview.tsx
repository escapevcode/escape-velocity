"use client";

import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Import Firestore database
import { Header3, Paragraph2, ParagraphLink1, ParagraphLink2 } from "../Text";
import { sendEmail } from "@/lib/serverActions"; // Import server action
import Button from "../Button";
import CustomDropdown from "./CustomDropdown";

const validationSchema = Yup.object({
  name: Yup.string().required("Your fullname is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  companyName: Yup.string().required("Company name is required"),

  // Conditional validation for startups
  description: Yup.string().when("activeForm", {
    is: "startup",
    then: (schema) => schema.required("Startup description is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  sector: Yup.string().when("activeForm", {
    is: "startup",
    then: (schema) => schema.required("Please select a sector"),
    otherwise: (schema) => schema.notRequired(),
  }),

  stage: Yup.string().when("activeForm", {
    is: "startup",
    then: (schema) => schema.required("Please select your startup stage"),
    otherwise: (schema) => schema.notRequired(),
  }),

  raisingIn3Months: Yup.string().when("activeForm", {
    is: "startup",
    then: (schema) =>
      schema.required("Please specify if you’re raising in 3 months"),
    otherwise: (schema) => schema.notRequired(),
  }),

  currentNeeds: Yup.string().when("activeForm", {
    is: "startup",
    then: (schema) => schema.required("Please specify your current needs"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // Conditional validation for capital providers
  investmentFocus: Yup.string().when("activeForm", {
    is: "capital-Provider",
    then: (schema) => schema.required("Please select your investment focus"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const ContactForm = () => {
  const [activeForm, setActiveForm] = useState<"startup" | "capital-Provider">(
    "startup"
  );
  const [successPopupVisible, setSuccessPopupVisible] = useState(false); // State for popup
  const successPopupRef = useRef<HTMLDivElement>(null);

  const submitToFirestore = async (values: any) => {
    try {
      const docRef = await addDoc(collection(db, "formSubmissions"), {
        ...values,
        activeForm,
        timestamp: new Date(),
        viewed: false, // Add the viewed field and set it to true
      });
      console.log("Document written with ID: ", docRef.id);
      setSuccessPopupVisible(true); // Show success popup
      // Scroll to the success popup (white box)
      setTimeout(() => {
        successPopupRef.current?.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "center", // Center the element in the view
        });
      }, 1000);

      // Send the email notification
      await sendEmail(); // Use the imported server action

      // Handle success case (e.g., show a success message or navigate)
    } catch (error) {
      console.error("Error adding document: ", error);
      // Handle error case (e.g., show an error message)
    }
  };

  const formik = useFormik({
    initialValues: {
      activeForm: {activeForm}, // Tracks whether it's a startup or capital provider form
      name: "",
      email: "",
      companyName: "",
      description: "", // Startup description OR Company website
      sector: "", // Only for startups
      stage: "", // Startup stage (Idea, Seed, Growth)
      raisingIn3Months: "", // Only for startups
      currentNeeds: "", // Needs selection (different for startups and capital providers)
      website: "", // Only for capital providers (renamed from description for clarity)
      contactMethod: "", // Only for capital providers
      investmentFocus: "", // Only for capital providers
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Data", values);
      await submitToFirestore(values); // Call Firestore submission
    },
  });

  const SuccessPopup = () => {
    return (
      <div className="fixed inset-0 -top-[175px] -left-[100px] -right-[100px] h-screen- min-w-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div
          ref={successPopupRef}
          className="bg-white flex flex-col text-center gap-[24px] items-center rounded-lg [20px] sm:px-[82px] p-[24px] sm:py-[62px] shadow-lg"
        >
          <img src="/images/logo.png" alt="" className="h-[50px]" />
          <div>
            <ParagraphLink1 className="text-center font-bold">
              Message Sent!
            </ParagraphLink1>
            <p>
              Thank you for reaching out to Escape Velocity! <br />
              Our team will review your message and get back to you soon.
            </p>
          </div>
          <Button
            text="Done"
            href="/"
            isLink={true}
            additionalClasses=" border-0  "
          />{" "}
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex justify-center text-p_green items-center- py-[150px]- sm:py-[200px] min-h-screen bg-cover bg-gray-100 sm:p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dipwsq5cg/image/upload/v1739796830/Rectangle_11_uwktuz.svg')",
      }}
    >
      {successPopupVisible && <SuccessPopup />} {/* Render the success popup */}
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-2xl p-4 sm:p-[57px] py-[150px] sm:py- shadow-lg bg-white bg-opacity-85 sm:rounded-[15px]"
      >
        <Header3 className="text-center text-2xl font-bold mb-[38px]">
          Contact Form
        </Header3>
        <div className="flex justify-center mb-[30px]  sm:mb-[77px]">
          <div className="relative flex bg-gray-50 rounded-[10px] p-1 w-max">
            {/* Moving Indicator */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full bg-p_green rounded-[10px] transition-all duration-300 ease-in-out ${
                activeForm === "capital-Provider"
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
                activeForm === "capital-Provider"
                  ? "text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveForm("capital-Provider")}
            >
              Capital Provider
            </button>
          </div>
        </div>

        <div className="space-y-[42px]">
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
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 ">{formik.errors.name}</div>
              ) : null}
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
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 ">{formik.errors.email}</div>
              ) : null}
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
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="text-red-500 ">{formik.errors.companyName}</div>
            ) : null}
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
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-red-500 ">
                    {formik.errors.description}
                  </div>
                ) : null}
              </div>

              <CustomDropdown
                label="Startup Sector"
                name="sector"
                options={[
                  { label: "Tech", value: "tech" },
                  { label: "Health", value: "health" },
                  { label: "Finance", value: "finance" },
                  { label: "Agriculture", value: "agriculture" },
                  { label: "Education", value: "education" },
                  { label: "Energy", value: "energy" },
                  { label: "E-Commerce", value: "e-commerce" },
                  { label: "Logistics", value: "logistics" },
                  { label: "Real Estate", value: "real-estate" },
                  { label: "Manufacturing", value: "manufacturing" },
                  { label: "Gaming", value: "gaming" },
                  { label: "Media", value: "media" },
                ]}
                value={formik.values.sector}
                onChange={formik.setFieldValue}
                error={formik.touched.sector ? formik.errors.sector : undefined}
              />

              <CustomDropdown
                label="What stage is your startup?"
                name="stage"
                options={[
                  { label: "Idea", value: "idea" },
                  { label: "Seed", value: "seed" },
                  { label: "Growth", value: "growth" },
                ]}
                value={formik.values.stage}
                onChange={formik.setFieldValue}
                error={formik.touched.stage ? formik.errors.stage : undefined}
              />

              <CustomDropdown
                label="Are you seeking to raise in 3 months?"
                name="raisingIn3Months"
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
                value={formik.values.raisingIn3Months}
                onChange={formik.setFieldValue}
                error={
                  formik.touched.raisingIn3Months
                    ? formik.errors.raisingIn3Months
                    : undefined
                }
              />
              <CustomDropdown
                label="Which of these describes your current needs?"
                name="currentNeeds"
                options={[
                  {
                    label: "Raising Pre-Seed Funding",
                    value: "pre-seed funding",
                  },
                  { label: "Raising Seed Funding", value: "seed funding" },
                  {
                    label: "Raising Series A Funding",
                    value: "series-a funding",
                  },
                  {
                    label: "Growth/Expansion Capital",
                    value: "growth and expansion funding",
                  },
                  {
                    label: "Mentorship & Strategic Guidance",
                    value: "mentorship",
                  },
                  {
                    label: "Investor & Partnership Connections",
                    value: "networking and partnerships",
                  },
                  {
                    label: "Business Model/Financial Advisory",
                    value: "advisory and business model",
                  },
                ]}
                value={formik.values.currentNeeds}
                onChange={formik.setFieldValue}
                error={
                  formik.touched.currentNeeds
                    ? formik.errors.currentNeeds
                    : undefined
                }
              />
            </>
          ) : (
            <>
              <div>
                <ParagraphLink2 className=" font-bold mb-2">
                  Company website (If any)
                </ParagraphLink2>
                <input
                  type="text"
                  name="website"
                  placeholder=""
                  className="border-b px-2- w-full outline-none bg-transparent border-secondary"
                  onChange={formik.handleChange}
                  value={formik.values.website}
                />
              </div>

              <CustomDropdown
                label="How do we get in touch with you?"
                name="contactMethod"
                options={[
                  { label: "Email", value: "email" },
                  { label: "Phone", value: "phone" },
                  { label: "WhatsApp", value: "whatsapp" },
                  { label: "LinkedIn", value: "linkedin" },
                ]}
                value={formik.values.contactMethod}
                onChange={formik.setFieldValue}
                error={
                  formik.touched.contactMethod
                    ? formik.errors.contactMethod
                    : undefined
                }
              />

              <CustomDropdown
                label="Which of these describes your current needs?"
                name="investmentFocus"
                options={[
                  { label: "Pre-Seed Startups", value: "pre-seed Startups" },
                  { label: "Seed-Stage Startups", value: "seed Startups" },
                  { label: "Early-Stage Startups", value: "early Startups" },
                  { label: "Growth-Stage Startups", value: "growth Startups" },
                  {
                    label: "Late-Stage / Pre-IPO Startups",
                    value: "late Startups",
                  },
                  {
                    label: "Impact-Driven Startups",
                    value: "impact-driven Startups",
                  },
                  {
                    label: "Deep-Tech & Innovation Startups",
                    value: "deep-tech innovation Startups",
                  },
                  {
                    label: "Sector-Specific Startups",
                    value: "sector-specific startups",
                  },
                ]}
                value={formik.values.investmentFocus}
                onChange={formik.setFieldValue}
                error={
                  formik.touched.investmentFocus
                    ? formik.errors.investmentFocus
                    : undefined
                }
              />
            </>
          )}
          <div className=" flex justify-center">
            <button
              type="submit"
              className="w-ful bg-p_green text-white hover:bg-black py-4 px-8 sm:py-[22px] sm:px-[170px] rounded-[8px]"
            >
              <Paragraph2 className="  sm:text-[24px]">Submit</Paragraph2>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
