"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BottomNavbar from "@/app/Bottomnavbar";

const ReceivedPurchase = () => {
  const router = useRouter();

  // Static data for dropdowns (Replace with API later)
  const suppliers = ["Supplier 1", "Supplier 2", "Supplier 3"];
  const companies = ["Company A", "Company B", "Company C"];
  const products = ["Product X", "Product Y", "Product Z"];

  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="flex flex-col h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.push("/store_management")} className="text-lg">←</button>
        <h1 className="text-xl font-semibold flex-grow text-center">Received Purchase</h1>
      </div>

      {/* Supplier Select */}
      <div className="mt-4">
        <label className="text-sm font-medium">Supplier</label>
        <Select onValueChange={(value) => setSelectedSupplier(value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Supplier Name" />
          </SelectTrigger>
          <SelectContent>
            {suppliers.map((supplier, index) => (
              <SelectItem key={index} value={supplier}>{supplier}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Company Select */}
      <div className="mt-4">
        <label className="text-sm font-medium">Company Name</label>
        <Select onValueChange={(value) => setSelectedCompany(value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Company Name" />
          </SelectTrigger>
          <SelectContent>
            {companies.map((company, index) => (
              <SelectItem key={index} value={company}>{company}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Product Select */}
      <div className="mt-4">
        <label className="text-sm font-medium">Product Name</label>
        <Select onValueChange={(value) => setSelectedProduct(value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Product Name" />
          </SelectTrigger>
          <SelectContent>
            {products.map((product, index) => (
              <SelectItem key={index} value={product}>{product}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Next Button */}
      <Button className="mt-6 w-full bg-blue-500" onClick={() => router.push("/received_purchase2")}>
        Next
      </Button>

      {/* Bottom Navbar (Global Component) */}
      <div className="mt-auto">
      <BottomNavbar activeTab=" " />
      </div>
    </div>
  );
};

export default ReceivedPurchase;
