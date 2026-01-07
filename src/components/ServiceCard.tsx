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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      fill="#1668E3"
    />
    <path
      d="M8 12L10.8 15L16 9.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AddSquareIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      fill="#D3D3D3"
    />
    <path
      d="M12 8V16M8 12H16"
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
        flex items-center justify-between w-full max-w-[717px] min-h-[64px] sm:min-h-[72px] px-2.5 sm:px-3.5 py-2.5 sm:py-0 bg-white rounded-[14px] sm:rounded-[18px] cursor-pointer transition-all
        ${isSelected ? "border-2 border-[#1668E3]" : "border border-[#E5E7EB]"}
      `}
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Left Section: Service Info */}
      <div className="flex flex-col gap-0.5">
        {/* Service Name */}
        <span className="text-sm sm:text-base font-medium leading-5 text-[#191E3B]">
          {service.name}
        </span>

        {/* Duration */}
        <span className="text-xs font-normal leading-5 text-[#5A6474]">
          {service.duration}
        </span>
      </div>

      {/* Right Section: Price and Checkbox */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Price */}
        <span
          className="text-base sm:text-lg font-[500] leading-6 text-[#191E3B]"
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
