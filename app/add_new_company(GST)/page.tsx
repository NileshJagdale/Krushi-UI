"use client"; // Mark as Client Component

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BottomNavbar from "@/app/Bottomnavbar";
import { ArrowLeft } from "lucide-react";

const GSTVerification = () => {
  const router = useRouter();

  // Static GST Data (Replace with API later)
  const gstData = {
    businessName: "Reliance Industries Pvt. Ltd.",
    status: "Active",
    gstin: "9123456789",
    state: "Maharashtra",
    address: "Ground Floor, Tukmirpur, No.123/169 PIN 110094",
    supplyState: "Intra-State",
  };

  // Toggle State for Direct Supply
  const [directSupply, setDirectSupply] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => router.push("/add_new_company")}>
          <ArrowLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-center flex-1">Add New Company</h2>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-center">GST Verification Details</h2>

        {/* Business Name */}
        <div>
          <p className="text-gray-500 text-sm">Business Name</p>
          <p className="text-blue-600 font-semibold cursor-pointer">{gstData.businessName}</p>
        </div>

        {/* GSTIN Status */}
        <div>
          <p className="text-gray-500 text-sm">GSTIN Status</p>
          <p className="text-green-600 font-semibold">{gstData.status}</p>
        </div>

        {/* GSTIN */}
        <div>
          <p className="text-gray-500 text-sm">GSTIN</p>
          <p className="text-blue-600 font-semibold cursor-pointer">{gstData.gstin}</p>
        </div>

        {/* State Jurisdiction */}
        <div>
          <p className="text-gray-500 text-sm">State Jurisdiction</p>
          <p className="text-blue-600 font-semibold cursor-pointer">{gstData.state}</p>
        </div>

        {/* Address */}
        <div>
          <p className="text-gray-500 text-sm">Address</p>
          <p className="text-blue-600 font-semibold cursor-pointer">{gstData.address}</p>
        </div>

        {/* Direct Supply Toggle */}
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">Company Offers Direct Supply?</p>
          <Switch checked={directSupply} onCheckedChange={setDirectSupply} />
        </div>

        {/* State of Supplier */}
        <div>
          <p className="text-gray-500 text-sm">State of Supplier</p>
          <p className="text-blue-600 font-semibold">{gstData.supplyState}</p>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="p-4">
        <Button className="bg-blue-500 text-white w-full" onClick={() => router.push("/company_contact_detail")}>
          Proceed
        </Button>
      </div>

      {/* Global Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default GSTVerification;
