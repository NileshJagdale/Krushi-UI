"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

// Mock Data for GST Verification
const gstVerificationData = {
  businessName: "Reliance Industries Pvt. Ltd.",
  gstinStatus: "Active",
  gstin: "9123456789",
  stateJurisdiction: "Maharashtra",
  address: "Ground Floor, Tukmirpur, No.123/169 PIN 110094",
  stateOfSupplier: "Intra-State",
};

const GSTVerification = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4 shadow-md z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/add_new_supplier")} className="text-lg">←</button>
          <h1 className="text-xl font-semibold flex-grow text-center">Supplier</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-lg font-semibold text-center mb-4">GST Verification Details</h2>

        <div className="space-y-2">
          <div>
            <p className="font-medium">Business Name</p>
            <p className="text-blue-600">{gstVerificationData.businessName}</p>
          </div>

          <div>
            <p className="font-medium">GSTIN Status</p>
            <p className="text-blue-600">{gstVerificationData.gstinStatus}</p>
          </div>

          <div>
            <p className="font-medium">GSTIN</p>
            <p className="text-blue-600">{gstVerificationData.gstin}</p>
          </div>

          <div>
            <p className="font-medium">State Jurisdiction</p>
            <p className="text-blue-600">{gstVerificationData.stateJurisdiction}</p>
          </div>

          <div>
            <p className="font-medium">Address</p>
            <p className="text-blue-600">{gstVerificationData.address}</p>
          </div>

          <div>
            <p className="font-medium">State of Supplier</p>
            <p className="text-blue-600">{gstVerificationData.stateOfSupplier}</p>
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="p-4 mb-60">
        <Button className="w-full bg-blue-500" onClick={() => router.push("/supplier_contact_details")}>
          Proceed
        </Button>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default GSTVerification;
