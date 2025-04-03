// src/lib/serverActions.ts

"use server";
import { sendMail, compileWelcomeTemplate } from "@/lib/mail";

export const sendEmail = async () => {
  await sendMail({
    to: "escapevelocity.e12y@gmail.com",
    name: "Escape Velocity",
    subject: "New Form Submission at Escape Velocity",
    body: compileWelcomeTemplate(
      "Escape Velocity",
      "https://www.escapevelocity.africa/admin/dashboard"
    ),
  });
};
