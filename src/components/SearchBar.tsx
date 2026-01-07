"use client";

import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MagnifyingGlassIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="5.5"
      stroke="#676767"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 12L16 16"
      stroke="#676767"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cerca servizi...",
}: SearchBarProps) {
  return (
    <div
      className="flex items-center gap-2.5 w-full max-w-[637px] h-12 px-5 bg-white border border-[#E5E7EB] rounded-[32px]"
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Magnifying Glass Icon */}
      <MagnifyingGlassIcon />

      {/* Search Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 text-[15px] leading-[120%] tracking-[-0.01em] text-[#191E3B] placeholder:text-[#676767] bg-transparent outline-none font-normal"
      />
    </div>
  );
}
