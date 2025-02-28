"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

const Suppliers = () => {
  const router = useRouter();

  // Static Supplier Data (Replace with API later)
  const suppliers = [
    { id: 1, name: "Supplier Business Name", contact: "Mr. Ramakant Shinde", phone: "(+91) 9923056365" },
    { id: 2, name: "Supplier Business Name", contact: "Mr. Ramakant Shinde", phone: "(+91) 9923056365" },
    { id: 3, name: "Supplier Business Name", contact: "Mr. Ramakant Shinde", phone: "(+91) 9923056365" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter suppliers based on search query
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4 shadow-md z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/store_management")} className="text-lg">←</button>
          <h1 className="text-xl font-semibold flex-grow text-center">Suppliers</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Search Bar */}
        <Input
          placeholder="Search Suppliers"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />

        {/* Add New Supplier Button */}
        <Button className="w-full bg-blue-500 mt-4" onClick={() => router.push("/add_new_supplier")}>
          Add New Supplier
        </Button>

        {/* Active & Deactivated Suppliers Summary */}
        <div className="flex gap-4 mt-4">
          <div className="flex-1 bg-green-100 text-center p-3 rounded-md font-semibold">
            Active Suppliers <span className="text-lg font-bold">12</span>
          </div>
          <div className="flex-1 bg-gray-200 text-center p-3 rounded-md font-semibold">
            Deactivated Suppliers <span className="text-lg font-bold">32</span>
          </div>
        </div>

        {/* Supplier List */}
        <div className="space-y-3 mt-4">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-blue-100 p-3 rounded-md shadow-sm cursor-pointer hover:bg-blue-200 transition"
              onClick={() => router.push("/supplier(GST)")}
            >
              <p className="font-bold">Business’s Name</p>
              <p className="text-sm">{supplier.name}</p>
              <p className="text-sm">
                {supplier.contact} <span className="font-semibold">{supplier.phone}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default Suppliers;
