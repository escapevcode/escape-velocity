// src/lib/serverActions.ts

"use server";
import { sendMail, compileWelcomeTemplate } from "@/lib/mail";

export const sendEmail = async () => {
  await sendMail({
    to: "escapevelocity.e12y@gmail.com",
    name: "Escape Velocity",
    subject: "New Form Submission at Escape Velocity",
    body: compileWelcomeTemplate(
      "Test",
      "https://your-website.vercel.app/admin/dashboard"
    ),
  });
};
