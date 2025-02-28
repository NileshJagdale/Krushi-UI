"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const ProductsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Static Product Data (Replace with API later)
  const products = [
    {
      id: 1,
      name: "Product Name 1",
      company: "Company Name",
      category: "Seeds",
      shortKey: "Short Key",
      price: 245,
    },
    {
      id: 2,
      name: "Product Name 1",
      company: "Company Name",
      category: "Seeds",
      shortKey: "Short Key",
      price: 245,
    },
    {
      id: 3,
      name: "Product Name 1",
      company: "Company Name",
      category: "Seeds",
      shortKey: "Short Key",
      price: 245,
    },
  ];

  // Filtered Products Based on Search Term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => router.push("/store_management")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Products</h2>
      </div>

      {/* Search Input */}
      <Input
        className="mt-4"
        placeholder="Search Product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add New Product Button */}
      <Button
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
        onClick={() => router.push("/add_new-product")}
      >
        Add New Product
      </Button>

      {/* Status Cards */}
      <div className="mt-4 flex gap-3">
        <Card
          className="flex-1 p-3 text-center bg-green-100 border-green-400 cursor-pointer"
          onClick={() => router.push("/active-products")}
        >
          <p className="text-xs font-semibold">Active Products</p>
          <p className="text-xl font-bold">200</p>
        </Card>

        <Card
          className="flex-1 p-3 text-center bg-gray-100 border-gray-400 cursor-pointer"
          onClick={() => router.push("/deactivated-products")}
        >
          <p className="text-xs font-semibold">Deactivated Products</p>
          <p className="text-xl font-bold">32</p>
        </Card>
      </div>

      {/* Product List */}
      <div className="mt-4 space-y-3">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="p-3 flex justify-between items-center bg-blue-50 border-blue-300"
          >
            <div>
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-xs text-gray-600">{product.company}</p>
              <p className="text-xs text-gray-600">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">{product.shortKey}</p>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Navbar (Global) */}
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default ProductsPage;
