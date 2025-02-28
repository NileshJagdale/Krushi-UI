"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

// Static store information data (Replace with API later)
const storeInfo = {
  businessName: "Reliance Industries Pvt. Ltd.",
  gstVerifiedDate: "12-Dec-2025",
  gstNumber: "9123456789",
  jurisdiction: "Maharashtra",
  address: "Ground Floor, Tukmirpur, No.123/169\nPIN 110094",
};

export default function StoreInfoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push("/settings")} />
        <h1 className="text-lg font-semibold mx-auto">Store Information</h1>
      </div>

      {/* Content */}
      <div className="flex-grow p-4">
        <h2 className="text-md font-semibold text-center mb-4">GST Verification Details</h2>
        <Card className="p-4 bg-white rounded-xl shadow-sm space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Business Name</h2>
            <p className="text-blue-600">{storeInfo.businessName}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">GSTIN Status Verified Date</h2>
            <p className="text-blue-600">{storeInfo.gstVerifiedDate}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">GSTIN</h2>
            <p className="text-blue-600">{storeInfo.gstNumber}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">State Jurisdiction</h2>
            <p className="text-blue-600">{storeInfo.jurisdiction}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Address</h2>
            <p className="text-blue-600 whitespace-pre-line">{storeInfo.address}</p>
          </div>
        </Card>
      </div>

      {/* Bottom Navbar (Global) */}
      <div className="fixed bottom-0 left-0 w-full border-t bg-white">
        <BottomNavbar activeTab="settings" />
      </div>
    </div>
  );
}
