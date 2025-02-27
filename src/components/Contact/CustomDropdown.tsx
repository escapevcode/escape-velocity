import { useState } from "react";
import { ParagraphLink2 } from "../Text";

interface DropdownProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onChange(name, selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <ParagraphLink2 className="font-bold mb-2">{label}</ParagraphLink2>
      <div
        className="p-2 bg-gray-300 bg-opacity-45 flex items-center justify-between rounded-lg cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">
          {options.find((opt) => opt.value === value)?.label ||
            "Select an option..."}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 font-bold"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white shadow-lg rounded-lg mt-1 z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {error && <div className="text-red-500 mt-1">{error}</div>}
    </div>
  );
};

export default CustomDropdown;
