"use client";

import React from "react";
import { Service } from "./ServiceCard";

interface CartProps {
  selectedServices: Service[];
  salonName?: string;
  salonAddress?: string;
  salonImage?: string;
  onContinue?: () => void;
}

const MapPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
      stroke="#676767"
      strokeWidth="1.5"
    />
    <path
      d="M3.75 8.125C3.75 13.75 10 18.125 10 18.125C10 18.125 16.25 13.75 16.25 8.125C16.25 4.67321 13.4518 1.875 10 1.875C6.54822 1.875 3.75 4.67321 3.75 8.125Z"
      stroke="#676767"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Cart({
  selectedServices,
  salonName = "Federico Salon Roma",
  salonAddress = "Corso Unità D'Italia, Milano MI, Italia",
  salonImage = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&h=200&fit=crop",
  onContinue,
}: CartProps) {
  // Calculate total price
  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  return (
    <div
      className="w-full max-w-[400px] bg-white border border-[#E5E7EB] rounded-[14px] sm:rounded-[18px] p-3 sm:p-5"
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Cart Title */}
      <h2 className="text-lg sm:text-xl font-bold leading-[26px] tracking-[-0.01em] text-[#191E3B] mb-3 sm:mb-5">
        Carrello
      </h2>

      {/* Salon Info Section */}
      <div className="flex items-start gap-2.5 sm:gap-3 mb-4 sm:mb-6">
        {/* Salon Image */}
        <img
          src={salonImage}
          alt={salonName}
          className="w-[64px] h-[64px] sm:w-[100px] sm:h-[100px] rounded-[10px] sm:rounded-[14px] object-cover shrink-0"
        />

        {/* Salon Details */}
        <div className="flex flex-col gap-1.5 pt-1.5">
          {/* Salon Name */}
          <h3 className="text-lg font-bold leading-5 tracking-[-0.01em] text-[#191E3B]">
            {salonName}
          </h3>

          {/* Address */}
          <div className="flex items-center gap-1">
            <MapPinIcon />
            <span className="text-xs font-normal leading-[15px] tracking-[-0.01em] text-[#676767]">
              {salonAddress}
            </span>
          </div>
        </div>
      </div>

      {/* Selected Services */}
      <div className="flex flex-col gap-3">
        {selectedServices.map((service) => (
          <div key={service.id} className="flex justify-between items-center">
            <span className="text-base font-semibold leading-[20px] tracking-[-0.01em] text-[#191E3B]">
              {service.name}
            </span>
            <span className="text-base font-semibold leading-[20px] tracking-[-0.01em] text-[#191E3B]">
              €{service.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-b border-[#E5E7EB] my-4" />

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-base font-semibold leading-[20px] tracking-[-0.01em] text-[#191E3B]">
          Totale
        </span>
        <span className="text-base font-semibold leading-[20px] tracking-[-0.01em] text-[#1668E3]">
          €{totalPrice.toFixed(2)}
        </span>
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="w-full h-10 bg-[#1668E3] rounded-[40px] flex items-center justify-center hover:bg-[#1254B8] transition-colors"
      >
        <span className="text-sm font-semibold leading-[17px] tracking-[-0.01em] text-white">
          Continua
        </span>
      </button>
    </div>
  );
}
