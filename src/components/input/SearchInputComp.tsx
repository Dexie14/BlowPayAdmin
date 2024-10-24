import { SearchIcon } from "@/assets/svgComp/NavbarIcons";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const SearchInputComp = ({
  placeholder = "search..",
  onChange,
  onClick,
  className,
  icon,
  inputClassName,
}: SearchInputProps) => {
  return (
    <div
      className={`flex items-center text-[#9295AB] bg-shadeBackground rounded-[10px] p-4 h-[36px] w-[287px] focus-within:border-inputBorder focus-within:outline-none focus-within:border ${className}`}
    >
      {/* Search Icon */}
      {!icon && (
        <div className="mr-2">
          <SearchIcon />
        </div>
      )}

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={`flex-grow bg-transparent outline-none placeholder-[#252C58] text-blowText text-sm font-light w-full ${inputClassName}`}
      />

      {icon && <div className="ml-2">{icon}</div>}
    </div>
  );
};

export default SearchInputComp;
