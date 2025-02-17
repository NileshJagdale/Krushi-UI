"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";
import { useState } from "react";

const Inventory = () => {
  const router = useRouter();

  // Static Inventory Data
  const inventoryData = [
    { id: 1, name: "Product Name 1", stock: 12, value: 12345, date: "12-Dec-2025", minStock: 5 },
    { id: 2, name: "Product Name 2", stock: 8, value: 9876, date: "10-Dec-2025", minStock: 4 },
    { id: 3, name: "Product Name 3", stock: 15, value: 45678, date: "05-Dec-2025", minStock: 6 },
    { id: 4, name: "Product Name 4", stock: 2, value: 5678, date: "01-Dec-2025", minStock: 2 },
    { id: 5, name: "Product Name 5", stock: 20, value: 78901, date: "22-Nov-2025", minStock: 8 },
  ];

  // Search State
  const [search, setSearch] = useState("");

  // Filtered Inventory
  const filteredInventory = inventoryData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 px-4 py-6">
      
      {/* Back Button */}
      <div className="w-full max-w-md flex items-center mb-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/store_management")} className="mr-2">
          ⬅️
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
      </div>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search Product"
        className="w-full max-w-md mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter Buttons */}
      <div className="flex gap-2 w-full max-w-md mb-4">
        {["All", "Low Stock", "Out of Stock", "Expiry Alert"].map((filter, index) => (
          <Button key={index} variant="outline" className="flex-1">
            {filter}
          </Button>
        ))}
      </div>

      {/* Inventory List */}
      <div className="w-full max-w-md space-y-3">
        {filteredInventory.map((item) => (
          <Card
            key={item.id}
            className="w-full cursor-pointer hover:shadow-lg transition"
            onClick={() => router.push("/inventory_display")}
          >
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="text-sm text-gray-700 mt-1">
                <p>Stock in Hand: <strong>{item.stock}</strong></p>
                <p>Stock Value: <strong>{item.value}</strong></p>
                <p>Last Purchase Date</p>
                <p>Min. Stock Qty.: <strong>{item.minStock}</strong></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default Inventory;
