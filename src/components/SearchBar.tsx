"use client";

import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MagnifyingGlassIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="7"
      stroke="#676767"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M15 15L20 20"
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
      className="flex items-center gap-3 w-full max-w-[637px] h-14 px-6 bg-white border border-[#E5E7EB] rounded-[36px]"
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
        className="flex-1 text-[17px] leading-[120%] tracking-[-0.01em] text-[#191E3B] placeholder:text-[#676767] bg-transparent outline-none font-normal"
      />
    </div>
  );
}
