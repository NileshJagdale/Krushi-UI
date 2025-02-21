"use client"; // Mark as Client Component

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const AddCompany = () => {
  const router = useRouter();
  const [gstNumber, setGstNumber] = useState("");
  const [error, setError] = useState("");

  const handleProceed = () => {
    if (!gstNumber.trim()) {
      setError("GST Number is required");
      return;
    }
    setError("");
    router.push("/add_new_company(GST)"); // Example redirection
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6">
      {/* Header with Back Button */}
      <div className="w-full max-w-sm mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.push("/companies")}>
          <ArrowLeft size={20} />
        </Button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Add New Company</h1>
      <p className="text-gray-600 text-center mb-4">
        To add a new company, complete the company's business verification by validating their GST number.
      </p>

      {/* GST Input */}
      <div className="w-full max-w-sm">
        <Input
          placeholder="GST Number"
          className="w-full p-2 border"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {/* Proceed Button */}
        <Button className="bg-blue-500 text-white w-full mt-4" onClick={handleProceed}>
          Proceed
        </Button>
      </div>
    <BottomNavbar activeTab=" " />
    </div>
  );
};

export default AddCompany;
