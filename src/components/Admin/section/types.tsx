// types.ts
export interface Submission {
  id: string;
  name: string;
  email: string;
  companyName: string;
  productDetail?: string; // Ensure this matches the expected type
  description?: string;
  location?: string;
  sector?: string;
  stage?: string;
  raisingIn3Months?: string;
  currentNeeds: string;
  investmentFocus?: string;
  website?: string;
  contactMethod?: string;
  viewed?: boolean;
  timestamp?: string;
  type: "startup" | "capitalProvider"; // To differentiate types
}
