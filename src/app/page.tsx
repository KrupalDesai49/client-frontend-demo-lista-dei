"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import ServiceCard, { Service } from "@/components/ServiceCard";
import Cart from "@/components/Cart";

// Sample data matching the Figma design
const servicesData: Service[] = [
  { id: "1", name: "Taglio e Shampoo", duration: "30 minuti", price: 18 },
  { id: "2", name: "Taglio, shampoo e barba", duration: "45 minuti", price: 10 },
  { id: "3", name: "Barba modellata", duration: "15 minuti", price: 12 },
  { id: "4", name: "Barba e sopracciglia", duration: "20 minuti", price: 15 },
  { id: "5", name: "Barba a lama", duration: "10 minuti", price: 22 },
  { id: "6", name: "Colore barba", duration: "1 ora", price: 40 },
  { id: "7", name: "Colore barba", duration: "1 ora", price: 40 },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(["1"]); // First one selected by default

  const breadcrumbItems = [
    { label: "Lista dei servizi", active: true },
    { label: "Scegli collaboratore", active: false },
    { label: "Scegli data e ora", active: false },
    { label: "Conferma", active: false },
  ];

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return servicesData;
    const query = searchQuery.toLowerCase();
    return servicesData.filter(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.duration.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get selected services for cart
  const selectedServices = useMemo(() => {
    return servicesData.filter((service) =>
      selectedServiceIds.includes(service.id)
    );
  }, [selectedServiceIds]);

  // Toggle service selection
  const handleServiceSelect = (service: Service) => {
    setSelectedServiceIds((prev) => {
      if (prev.includes(service.id)) {
        return prev.filter((id) => id !== service.id);
      }
      return [...prev, service.id];
    });
  };

  const handleContinue = () => {
    console.log("Continue to next step with services:", selectedServices);
    // Navigate to next step
  };

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Main Container with responsive padding */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-20 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb Section */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Content - Two Column Layout */}
        <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-12">
          {/* Left Section - Services List */}
          <div className="flex-1 max-w-full lg:max-w-[717px]">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-tight lg:leading-[34px] tracking-[-0.01em] text-[#191E3B] mb-1.5">
              Lista dei servizi
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-[15px] font-normal leading-[140%] tracking-[-0.01em] text-[#191E3B] mb-4 sm:mb-6">
              Sfoglia la lista dei servizi disponibili
            </p>

            {/* Search Bar */}
            <div className="mb-4 sm:mb-5">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Cerca servizi..."
              />
            </div>

            {/* Service Cards List */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedServiceIds.includes(service.id)}
                  onSelect={handleServiceSelect}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Cart (Sticky on desktop) */}
          <div className="w-full lg:w-auto lg:shrink-0">
            <div className="lg:sticky lg:top-4">
              <Cart
                selectedServices={selectedServices}
                onContinue={handleContinue}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
