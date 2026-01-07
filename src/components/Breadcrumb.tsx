"use client";

import React, { useRef, useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const ChevronRight = ({ color = "#898B97" }: { color?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 11L9 7L5 3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const activeRef = useRef<HTMLDivElement>(null);
  const [activeWidth, setActiveWidth] = useState(144);

  useEffect(() => {
    if (activeRef.current) {
      setActiveWidth(activeRef.current.offsetWidth);
    }
  }, [items]);

  return (
    <div className="w-full  ">
      {/* Breadcrumb Navigation - Scrollable on mobile */}
      <div className="flex flex-row items-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1.5 scrollbar-hide">
        {items.map((item, index) => (
          <div
            key={index}
            ref={item.active ? activeRef : null}
            className="flex flex-row items-center gap-1 sm:gap-1.5 shrink-0"
          >
            {/* Label */}
            <span
              className={`font-medium text-xs sm:text-sm leading-5 whitespace-nowrap ${
                item.active ? "text-[#1668E3]" : "text-[#898B97]"
              }`}
            >
              {item.label}
            </span>

            {/* Chevron Icon */}
            <ChevronRight color={item.active ? "#1668E3" : "#898B97"} />
          </div>
        ))}
      </div>

      {/* Bottom Line Container */}
      <div className="relative mt-3 w-full">
        {/* Full gray line */}
        <div
          className="w-full"
          style={{
            height: "4px",
            backgroundColor: "rgba(137, 139, 151, 0.06)",
            borderRadius: "2px",
          }}
        />
        {/* Active blue line overlay */}
        <div
          className="absolute top-0 left-0"
          style={{
            width: `${activeWidth}px`,
            height: "4px",
            backgroundColor: "#1668E3",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
}
