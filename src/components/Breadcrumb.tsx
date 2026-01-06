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
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12L10 8L6 4"
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
      <div className="flex flex-row items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((item, index) => (
          <div
            key={index}
            ref={item.active ? activeRef : null}
            className="flex flex-row items-center gap-1.5 sm:gap-2 shrink-0"
          >
            {/* Label */}
            <span
              className={`font-medium text-sm sm:text-base leading-6 whitespace-nowrap ${
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
      <div className="relative mt-4 w-full">
        {/* Full gray line */}
        <div
          className="w-full"
          style={{
            height: "5px",
            backgroundColor: "rgba(137, 139, 151, 0.06)",
            borderRadius: "2.5px",
          }}
        />
        {/* Active blue line overlay */}
        <div
          className="absolute top-0 left-0"
          style={{
            width: `${activeWidth}px`,
            height: "5px",
            backgroundColor: "#1668E3",
            borderRadius: "2.5px",
          }}
        />
      </div>
    </div>
  );
}
