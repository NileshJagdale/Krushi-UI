"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";


const timelineData = [
  {
    date: "12-Aug 2025",
    invoiceId: "AXR/2025-26/002",
    products: [
      { name: "Product A", items: 32 },
      { name: "Product B", items: 32 },
      { name: "Product C", items: 32 },
    ],
  },
  {
    date: "10-Jun 2025",
    invoiceId: "AXR/2025-26/002",
    products: [
      { name: "Product D", items: 32 },
      { name: "Product E", items: 32 },
    ],
  },
];

export default function Timeline() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Header */}
      <div className="bg-gray-100 p-4 rounded-t-lg flex items-center space-x-2">
        <button onClick={() => router.push("/returned_product")}> {/* Navigate to a specific page */}
          <ChevronLeft className="text-blue-500" size={24} />
        </button>
        <h1 className="text-lg font-bold">Timeline</h1>
      </div>

      {/* Customer Name */}
      <div className="p-4 font-semibold text-black">Rajendra Shedge</div>

      {/* Timeline Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold">Timeline</h2>

        {timelineData.map((entry, index) => (
          <div key={index} className="mt-4">
            {/* Date & Invoice ID */}
            <div className="text-sm text-gray-600">{entry.date}</div>
            <div className="text-sm font-semibold">
              Invoice ID: {entry.invoiceId}
            </div>

            {/* Product List */}
            {entry.products.map((product, idx) => (
              <div
                key={idx}
                onClick={() => router.push(`/returned_product/timeline2`)}
                className="flex justify-between items-center bg-gray-100 p-4 mt-2 rounded-lg cursor-pointer hover:bg-gray-200"
              >
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">No. of Items {product.items}</p>
                </div>
                <Button
                  variant="outline"
                  className="bg-yellow-400 text-black font-semibold"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents parent div click
                    router.push(`/return/${product.name.toLowerCase().replace(/\s+/g, "-")}`);
                  }}
                >
                  Return
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
