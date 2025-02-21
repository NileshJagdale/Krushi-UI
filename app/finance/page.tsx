"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import BottomNavbar from "../Bottomnavbar";
import Image from 'next/image';

export default function AccountingFinancePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="relative w-full flex justify-end px-4 mt-6">
        {/* Logo in the top-right corner */}
        <div className="absolute top-2 right-4">
               <Image
                 src="/atlassian_logo.svg"
                 alt="User"
                 width={40} 
                 height={40}
                 className="rounded-full object-cover"
               />
             </div>
      </div>

      {/* Centered Accounting & Finance Title */}
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <h1 className="text-lg font-bold">Accounting & Finance</h1>

        {/* Button positioned below Accounting & Finance */}
        <Button
          className="bg-blue-500 text-white px-6 py-6 rounded-md mt-4"
          onClick={() => router.push("/")}
        >
          Marketing Campaigns
        </Button>
      </div>

      {/* Customers text positioned at the left corner below the logo */}
      <div className="absolute top-16 left-4">
        <h2 className="text-md font-semibold">Customers</h2>
      </div>

      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
