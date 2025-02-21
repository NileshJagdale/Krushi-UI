"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { useState } from "react";
import BottomNavbar from "@/app/Bottomnavbar";

const InventoryShrinkage = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>();

  // Static Data (Replace with API later)
  const productNames = ["Tractor Oil", "Engine Lubricant", "Brake Fluid"];
  const companyNames = ["QASDERTY", "XYZ Corp", "Alpha Ltd"];
  const batchNumbers = ["123456", "654321", "987654"];
  const shrinkageReasons = ["Expired", "Damaged", "Lost"];

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Back Button */}
      <div className="flex items-center mb-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/store_management")}>
          <ArrowLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-center flex-1">Inventory Shrinkage</h2>
      </div>

      {/* Form */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        {/* Product Name */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Product Name" />
          </SelectTrigger>
          <SelectContent>
            {productNames.map((product, index) => (
              <SelectItem key={index} value={product}>
                {product}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Company Name */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Company Name" />
          </SelectTrigger>
          <SelectContent>
            {companyNames.map((company, index) => (
              <SelectItem key={index} value={company}>
                {company}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Batch Number */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Batch Number" />
          </SelectTrigger>
          <SelectContent>
            {batchNumbers.map((batch, index) => (
              <SelectItem key={index} value={batch}>
                {batch}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Shrinkage Reason */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Shrinkage Reason" />
          </SelectTrigger>
          <SelectContent>
            {shrinkageReasons.map((reason, index) => (
              <SelectItem key={index} value={reason}>
                {reason}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Date Inventory Shrinkage */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full flex justify-between">
              {date ? date.toLocaleDateString() : "Date Product Received"}
              <CalendarIcon size={16} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>

        {/* Quantity */}
        <Input type="number" placeholder="Quantity" />

        {/* Buttons */}
        <div className="flex flex-col space-y-2">
          <Button className="w-full" onClick={() => alert("Saved & Adding Another...")}>
            Save & Add Another
          </Button>
          <Button className="w-full" variant="secondary" onClick={() => router.push("/store_management")}>
            Save & Close
          </Button>
        </div>
      </div>
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default InventoryShrinkage;
