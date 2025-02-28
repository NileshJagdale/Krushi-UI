"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const AddProductPage = () => {
  const router = useRouter();
  const [productStatus, setProductStatus] = useState(true);

  return (
    <div className="p-4 max-w-md mx-auto h-screen flex flex-col">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-2 mb-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/store_management")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Add New Product</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-16">
        <Input placeholder="Product Name" className="bg-gray-100" />
        
        {/* Company Name */}
        <Select>
          <SelectTrigger className="bg-gray-100 w-full">
            <SelectValue placeholder="Company Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="company1">Company 1</SelectItem>
            <SelectItem value="company2">Company 2</SelectItem>
          </SelectContent>
        </Select>

        {/* Category */}
        <Select>
          <SelectTrigger className="bg-gray-100 w-full">
            <SelectValue placeholder="Category Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category1">Category 1</SelectItem>
            <SelectItem value="category2">Category 2</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="HSN Code" className="bg-gray-100" />
        <Input placeholder="Stock Keeping Unit (SKU)" className="bg-gray-100" />
        
        {/* Unit of Measures */}
        <Select>
          <SelectTrigger className="bg-gray-100 w-full">
            <SelectValue placeholder="Unit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kg">Kilogram (KG)</SelectItem>
            <SelectItem value="pcs">Pieces (PCS)</SelectItem>
          </SelectContent>
        </Select>

        {/* GST Rate & Short Key */}
        <div className="flex gap-2">
        <Select>
        <SelectTrigger className="bg-gray-100 w-full">
            <SelectValue placeholder="GST Rate" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="5%">5%</SelectItem>
            <SelectItem value="12%">12%</SelectItem>
            <SelectItem value="18%">18%</SelectItem>
            </SelectContent>
            </Select>


          <Input placeholder="Short Key" className="bg-gray-100 flex-1" />
        </div>

        {/* Toggle Switch for Product Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm">Product Status</span>
          <Switch checked={productStatus} onCheckedChange={setProductStatus} />
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-16 left-0 w-full px-4 mb-48">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm" onClick={() => router.push("/Products")}>
          Save
        </Button>
      </div>

      {/* Bottom Navbar (Global) */}
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default AddProductPage;
