"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

const AddSupplier = () => {
  const router = useRouter();
  const [gstNumber, setGstNumber] = useState("");

  // Mock API Function (Replace this with an actual API later)
  const handleProceed = () => {
    if (gstNumber.length !== 15) {
      alert("Please enter a valid 15-digit GST Number.");
      return;
    }
    // Navigate to the next step after GST validation
    router.push("/add_new_supplier(GST)");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4 shadow-md z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/suppliers")} className="text-lg">←</button>
          <h1 className="text-xl font-semibold flex-grow text-center">Add New Supplier</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 text-center">
        <p className="text-gray-600">
          To add a new supplier, complete the supplier’s business verification by validating their GST number
        </p>

        {/* GST Number Input */}
        <Input
          placeholder="GST Number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
          className="w-full mt-6"
          maxLength={15}
        />

        {/* Proceed Button */}
        <Button className="w-full bg-blue-500 mt-6" onClick={handleProceed}>
          Proceed
        </Button>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default AddSupplier;
