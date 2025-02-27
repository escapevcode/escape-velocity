import React, { useState } from "react";

interface Submission {
  id: string;
  name: string;
  email: string;
  companyName: string;
  description: string;
  location?: string;
  sector?: string;
  stage?: string;
  raisingIn3Months?: string;
  currentNeeds: string;
  investmentFocus?: string;
  website?: string;
  contactMethod?: string;
  type: "startup" | "capitalProvider"; // Identifies the type of submission
}

interface SearchBarProps {
  submissions: Submission[];
  onSearchResults: (results: Submission[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  submissions,
  onSearchResults,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // If empty, reset to all submissions
    if (!value) {
      onSearchResults(submissions);
      return;
    }

    // Filter submissions based on the search term
    const filteredResults = submissions.filter((submission) =>
      [
        submission.name?.toLowerCase(),
        submission.email?.toLowerCase(),
        submission.companyName?.toLowerCase(),
        submission.description?.toLowerCase(),
        submission.location?.toLowerCase(),
        submission.sector?.toLowerCase(),
        submission.stage?.toLowerCase(),
        submission.raisingIn3Months?.toLowerCase(),
        submission.currentNeeds?.toLowerCase(),
        submission.investmentFocus?.toLowerCase(),
        submission.website?.toLowerCase(),
        submission.contactMethod?.toLowerCase(),
      ].some((field) => field?.includes(value))
    );

    // Update search results in the parent component
    onSearchResults(filteredResults);
  };

  return (
    <div className="flex border w-full max-w-full items-center gap-3 rounded-full px-4 py-3 bg-white text-sm sm:text-base">
      <img src="/icons/search.svg" alt="search-icon" className="w-5 h-5" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search submissions (name, email, company...)"
        className="w-full outline-none text-gray-600 placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
