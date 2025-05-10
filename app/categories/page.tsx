"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RefreshCcw } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const Categories = () => {
  const router = useRouter();

  // Static category data (Replace with API later)
  const [categories, setCategories] = useState([
    { id: 1, name: "Fertilizer", editable: false },
    { id: 2, name: "Seeds", editable: false },
    { id: 3, name: "Pesticides", editable: false },
    { id: 4, name: "Pumps", editable: true },
    { id: 5, name: "Pipes", editable: true },
  ]);

  return (
    <div className="flex flex-col h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.push("/store_management")} className="text-lg">
          ←
        </button>
        <h1 className="text-xl font-semibold flex-grow text-center">
          Categories
        </h1>
      </div>

      {/* Category Input */}
      <div className="mt-4">
        <label className="text-sm font-medium">Category</label>
        <Input placeholder="Category Name" className="mt-2" />
      </div>

      {/* Save & Close Button */}
      <Button className="mt-4 w-full bg-blue-500" onClick={() => router.push("/store_management")}>
        Save & Close
      </Button>

      {/* Category List */}
      <div className="mt-6 space-y-2">
        {categories.map((category) => (
          <Card key={category.id} className="p-4 flex justify-between items-center">
            {category.editable ? (
              <Input defaultValue={category.name} className="w-full bg-blue-50" />
            ) : (
              <span className="text-gray-700">{category.name}</span>
            )}
            {category.editable && (
              <RefreshCcw className="w-5 h-5 text-blue-500 cursor-pointer" />
            )}
          </Card>
        ))}
      </div>

      {/* Bottom Navbar (Global Component) */}
      <div className="mt-auto">
      <BottomNavbar activeTab=" " />
      </div>
    </div>
  );
};

export default Categories;
