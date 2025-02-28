"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

// Static store owner data (Replace with API later)
const storeOwner = {
  fullName: "Dhiraj Patil",
  aadhar: "12345 4567 7899",
  phone: "9123456789",
  address: "Abc Floor, Satara\nxyx pqo\nPin 123455",
};

export default function StoreOwnerPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push("/settings")} />
        <h1 className="text-lg font-semibold mx-auto">Store Owner</h1>
      </div>

      {/* Content */}
      <div className="flex-grow p-4">
        <Card className="p-4 bg-white rounded-xl shadow-sm space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Full Name</h2>
            <p className="text-blue-600">{storeOwner.fullName}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Aadhar Number</h2>
            <p className="text-blue-600">{storeOwner.aadhar}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Phone Number</h2>
            <p className="text-blue-600">{storeOwner.phone}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-500">Address</h2>
            <p className="text-blue-600 whitespace-pre-line">{storeOwner.address}</p>
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
