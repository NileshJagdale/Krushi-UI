"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building, Phone } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const CompanyInsights = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"bestSelling" | "slowMoving">("bestSelling");

  // Static Data (Replace with API later)
  const products = [
    { name: "Product Name1", myStore: 12, market: 32 },
    { name: "Product Name2", myStore: 11, market: 20 },
    { name: "Product Name3", myStore: 11, market: 20 },
    { name: "Product Name4", myStore: 11, market: 20 },
    { name: "Product Name5", myStore: 11, market: 20 },
    { name: "Product Name6", myStore: 11, market: 20 },
    { name: "Product Name7", myStore: 11, market: 20 },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => router.push("/companies")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Company Insights</h2>
      </div>

      {/* Company Name & Total Products */}
      <div className="flex justify-between items-center mt-1">
        <p className="text-gray-500 text-sm">{"<Company Name>"}</p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => router.push("/company_insights_company")}>
            <Building className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => router.push("/company_contact_detail")}>
            <Phone className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-4">Total No. of Products: 12</p>

      {/* Snapshot Title */}
      <h3 className="text-md font-semibold text-gray-700 mb-2">Snapshot: Past 365 Days</h3>

      {/* Tabs: Best Selling & Slow Moving */}
      <div className="flex justify-center space-x-2">
        <Button
          className={`w-1/2 ${
            selectedTab === "bestSelling" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedTab("bestSelling")}
        >
          Best Selling
        </Button>
        <Button
          className={`w-1/2 ${
            selectedTab === "slowMoving" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedTab("slowMoving")}
        >
          Slow Moving
        </Button>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-2 mt-3">
        <Button className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1">
          Based on Units Sold
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1">
          Based on Revenue
        </Button>
      </div>

      {/* Product Table */}
      <Card className="mt-4 p-3">
        {/* Table Header */}
        <div className="flex justify-between font-semibold text-blue-600 border-b pb-2 text-sm">
          <p>My Store</p>
          <p>Market</p>
        </div>

        {products.map((product, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <p className="text-gray-700 text-sm">{product.name}</p>
            <div className="flex gap-4 text-sm">
              <p className="text-gray-800">{product.myStore}</p>
              <p className="text-gray-800">{product.market}</p>
            </div>
          </div>
        ))}
      </Card>

      {/* Bottom Navbar (Global) */}
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default CompanyInsights;
