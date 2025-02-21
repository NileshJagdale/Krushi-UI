"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic"; 
import { Input } from "@/components/ui/input";

// Dynamically import BottomNavbar to fix SSR issues
const BottomNavbar = dynamic(() => import("../Bottomnavbar"), { ssr: false });

const customers = [
  { id: 1, name: "Rajendra Shedge", mobile: "9923056365", due: "12300" },
  { id: 2, name: "John Doe", mobile: "9876543210", due: "4500" },
  { id: 3, name: "Jane Smith", mobile: "9988776655", due: "7800" },
  { id: 4, name: "Michael Johnson", mobile: "9123456789", due: "2500" },
];

export default function Customers() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issue by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter customers based on search input
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.mobile.includes(searchQuery)
  );

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <div className="p-4 bg-white min-h-screen">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => router.back()} className="text-blue-500 text-2xl">
          ←
        </button>
        {isClient && <h1 className="text-2xl font-bold text-center flex-grow">Customers</h1>}
      </div>

      {/* Search Label & Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Search</label>
        <Input
          placeholder="Mobile Number/Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Customer List */}
      {filteredCustomers.length > 0 ? (
        filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            onClick={() => router.push(`/returned_product/timeline1`)}
            className="bg-gray-100 p-4 rounded-lg mb-3 cursor-pointer shadow-sm hover:bg-gray-200 transition"
          >
            <p className="font-semibold">{customer.name}</p>
            <p className="text-blue-500">{customer.mobile}</p>
            <p className="text-gray-700">Due ₹{customer.due}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No customers found.</p>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full">
        <BottomNavbar activeTab="" />
      </div>
    </div>
  );
}
