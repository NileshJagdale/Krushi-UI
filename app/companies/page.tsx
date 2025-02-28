"use client"; // Mark as Client Component

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BottomNavbar from "@/app/Bottomnavbar";
import { ArrowLeft } from "lucide-react";

const Companies = () => {
  const router = useRouter();

  // Static data (Replace with API calls later)
  const [companies] = useState([
    {
      id: 1,
      name: "ABC Pvt Ltd",
      owner: "Mr. Ramakant Shinde",
      contact: "(+91) 9923056365",
    },
    {
      id: 2,
      name: "XYZ Industries",
      owner: "Ms. Pooja Mehta",
      contact: "(+91) 9876543210",
    },
    {
      id: 3,
      name: "Tech Solutions",
      owner: "Mr. Aman Verma",
      contact: "(+91) 9001234567",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Back Button */}
      <div className="p-4 flex items-center mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/store_management")}
        >
          <ArrowLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-center flex-1">Companies</h2>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Search Bar */}
        <Input placeholder="Search Company" className="w-full p-2 border" />

        {/* Add New Company Button */}
        <Button
          className="bg-blue-500 text-white w-full"
          onClick={() => router.push("/add_new_company")}
        >
          Add New Company
        </Button>

        {/* Active / Deactivated Companies Tabs */}
        <div className="flex gap-2">
          <div className="flex-1 bg-green-100 text-center p-2 rounded">
            <p className="text-sm">Active Companies</p>
            <p className="text-lg font-semibold">12</p>
          </div>
          <div className="flex-1 bg-gray-200 text-center p-2 rounded">
            <p className="text-sm">Deactivated Companies</p>
            <p className="text-lg font-semibold">32</p>
          </div>
        </div>

        {/* Company List with Navigation */}
        <div className="flex flex-col gap-2">
          {companies.map((company) => (
            <Card
              key={company.id}
              className="p-3 border cursor-pointer hover:bg-gray-100 transition"
              onClick={() => router.push("/company_insights")}
            >
              <h2 className="text-lg font-semibold">Business’s Name</h2>
              <p className="text-sm">{company.name}</p>
              <p className="text-sm">
                {company.owner} &nbsp; {company.contact}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Global Bottom Navbar */}
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default Companies;
