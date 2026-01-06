"use client";

import React from "react";

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
}

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: (service: Service) => void;
}

const TickSquareIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.33"
      y="2.33"
      width="23.33"
      height="23.33"
      rx="6"
      fill="#1668E3"
    />
    <path
      d="M9 14L12.5 17.5L19 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AddSquareIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.33"
      y="2.33"
      width="23.33"
      height="23.33"
      rx="6"
      fill="#D3D3D3"
    />
    <path
      d="M14 9V19M9 14H19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceCard({
  service,
  isSelected,
  onSelect,
}: ServiceCardProps) {
  return (
    <div
      onClick={() => onSelect(service)}
      className={`
        flex items-center justify-between w-full max-w-[717px] min-h-[76px] sm:min-h-[84px] px-3 sm:px-4 py-3 sm:py-0 bg-white rounded-[18px] sm:rounded-[22px] cursor-pointer transition-all
        ${isSelected ? "border-2 border-[#1668E3]" : "border border-[#E5E7EB]"}
      `}
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Left Section: Service Info */}
      <div className="flex flex-col gap-0.5">
        {/* Service Name */}
        <span className="text-base sm:text-lg font-medium leading-6 text-[#191E3B]">
          {service.name}
        </span>

        {/* Duration */}
        <span className="text-sm font-normal leading-6 text-[#5A6474]">
          {service.duration}
        </span>
      </div>

      {/* Right Section: Price and Checkbox */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Price */}
        <span
          className="text-lg sm:text-xl font-semibold leading-7 text-[#191E3B]"
          style={{ fontFamily: "'SF Pro', Inter, sans-serif" }}
        >
          €{service.price}
        </span>

        {/* Checkbox Icon */}
        {isSelected ? <TickSquareIcon /> : <AddSquareIcon />}
      </div>
    </div>
  );
}
