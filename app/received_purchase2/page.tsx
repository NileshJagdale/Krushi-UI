"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import BottomNavbar from "@/app/Bottomnavbar";

const ReceivedPurchase = () => {
  const router = useRouter();
  
  // Static data for dropdowns (Replace with API later)
  const gstRates = ["5%", "12%", "18%", "28%"];

  const [invoiceDate, setInvoiceDate] = useState<Date | undefined>();
  const [expiryDate, setExpiryDate] = useState<Date | undefined>();
  const [productReceivedDate, setProductReceivedDate] = useState<Date | undefined>();
  const [gstRate, setGstRate] = useState("");

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-green-100 p-4 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/store_management")} className="text-lg">←</button>
          <h1 className="text-xl font-semibold flex-grow text-center">Received Purchase</h1>
        </div>
        <div className="mt-2 text-sm">
          <p className="font-bold">{"<Product Name>"}</p>
          <p className="text-gray-600">{"<Company Name>"}</p>
          <p className="text-gray-500">HSN Code: {"<HSN Code>"} | Unit: {"<Unit>"}</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Supplier Invoice Date */}
        <div>
          <label className="text-sm font-medium">Supplier Invoice Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between mt-2">
                {invoiceDate ? invoiceDate.toDateString() : "Supplier Invoice Date"}
                <CalendarIcon className="w-4 h-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar mode="single" selected={invoiceDate} onSelect={setInvoiceDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Supplier Invoice Number */}
        <div>
          <label className="text-sm font-medium">Supplier Invoice Number</label>
          <Input placeholder="Supplier Invoice Number" />
        </div>

        {/* Batch Number */}
        <div>
          <label className="text-sm font-medium">Batch Number</label>
          <Input placeholder="Batch Number" />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="text-sm font-medium">Expiry Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between mt-2">
                {expiryDate ? expiryDate.toDateString() : "Expiry Date"}
                <CalendarIcon className="w-4 h-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar mode="single" selected={expiryDate} onSelect={setExpiryDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Date Product Received */}
        <div>
          <label className="text-sm font-medium">Date Product Received</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between mt-2">
                {productReceivedDate ? productReceivedDate.toDateString() : "Date Product Received"}
                <CalendarIcon className="w-4 h-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar mode="single" selected={productReceivedDate} onSelect={setProductReceivedDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Per Unit Purchase Price Before Tax */}
        <div>
          <label className="text-sm font-medium">Per Unit Purchase Price before Tax</label>
          <Input placeholder="Rate (Price per Unit)" />
        </div>

        {/* GST Rate */}
        <div>
          <label className="text-sm font-medium">GST Rate (Purchase)</label>
          <Select onValueChange={(value) => setGstRate(value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="GST Rate (Purchase)" />
            </SelectTrigger>
            <SelectContent>
              {gstRates.map((rate, index) => (
                <SelectItem key={index} value={rate}>{rate}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Discount Percentage */}
        <div>
          <label className="text-sm font-medium">Discount Percentage (Purchase)</label>
          <Input placeholder="Discount Percentage (Purchase)" />
        </div>

        {/* MRP Per Unit */}
        <div>
          <label className="text-sm font-medium">M.R.P. Per Unit</label>
          <Input placeholder="M.R.P. per Unit" />
        </div>

        {/* Quantity Purchased */}
        <div>
          <label className="text-sm font-medium">Quantity Purchased</label>
          <Input placeholder="Quantity" />
        </div>

        {/* GST & Total Purchase Price */}
        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-sm">GST Amount (Purchase)</p>
          <p className="font-semibold">₹ 3546</p>
          <p className="text-sm mt-2">Total Purchase Price (Including GST)</p>
          <p className="font-semibold">₹ 87956</p>
        </div>

        {/* Maximum Discount & Selling Price */}
        <div className="bg-green-200 p-4 rounded-md">
          <label className="text-sm font-medium">Maximum Discount %</label>
          <Input placeholder="Max. Discount %" className="mt-2" />
          <label className="text-sm font-medium mt-4">Selling Price (Excluding Tax)</label>
          <Input placeholder="Selling Price" className="mt-2" />
        </div>
      </div>

      {/* Buttons & Bottom Navbar */}
      <div className="p-4 bg-white mb-12">
        <Button className="w-full bg-blue-500" onClick={() => router.push("/received_purchase")}>
          Save & Add Another
        </Button>
        <Button className="w-full bg-blue-600 mt-2" onClick={() => router.push("/store_management")}>
          Save & Close
        </Button>
        
      </div>
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default ReceivedPurchase;
