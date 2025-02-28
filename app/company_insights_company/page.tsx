"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const GSTVerification = () => {
  const router = useRouter();
  const [directSupply, setDirectSupply] = useState(false);

  // Static Data (Replace with API later)
  const gstDetails = {
    businessName: "Reliance Industries Pvt. Ltd.",
    gstinStatus: "Active",
    gstin: "9123456789",
    stateJurisdiction: "Maharashtra",
    address: "Ground Floor, Tukmirpur, No.123/169 PIN 110094",
    stateOfSupplier: "Intra-State",
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Company</h2>
      </div>

      {/* GST Verification Details */}
      <h3 className="text-md font-semibold text-center mt-3">GST Verification Details</h3>

      {/* GST Info */}
      <Card className="mt-4 p-4 space-y-2">
        <p className="text-sm font-semibold">Business Name</p>
        <p
          className="text-blue-600 underline text-sm cursor-pointer"
          onClick={() => router.push("/business-details")}
        >
          {gstDetails.businessName}
        </p>

        <p className="text-sm font-semibold">GSTIN Status</p>
        <p
          className="text-blue-600 underline text-sm cursor-pointer"
          onClick={() => router.push("/gst-status")}
        >
          {gstDetails.gstinStatus}
        </p>

        <p className="text-sm font-semibold">GSTIN</p>
        <p
          className="text-blue-600 underline text-sm cursor-pointer"
          onClick={() => router.push("/gst-number")}
        >
          {gstDetails.gstin}
        </p>

        <p className="text-sm font-semibold">State Jurisdiction</p>
        <p className="text-blue-600 text-sm">{gstDetails.stateJurisdiction}</p>

        <p className="text-sm font-semibold">Address</p>
        <p
          className="text-blue-600 underline text-sm cursor-pointer"
          onClick={() => router.push("/location")}
        >
          {gstDetails.address}
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-semibold">Company Offers direct Supply?</p>
          <Switch checked={directSupply} onCheckedChange={setDirectSupply} />
        </div>

        <p className="text-sm font-semibold">State of Supplier</p>
        <p className="text-blue-600 text-sm">{gstDetails.stateOfSupplier}</p>

        {/* Order Button with Icon */}
        <div
          className="flex items-center text-blue-600 text-sm cursor-pointer mt-2"
          onClick={() => router.push("/order")}
        >
          <FileText className="h-4 w-4 mr-1" /> Order
        </div>
      </Card>

      {/* Done Button with Navigation */}
      <Button
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
        onClick={() => router.push("/company_contact_detail")}
      >
        Done
      </Button>

      {/* Bottom Navbar (Global) */}
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default GSTVerification;
