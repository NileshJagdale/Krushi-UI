"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, PlusCircle } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

export default function InvoiceInformation() {
  const router = useRouter();

  // Static initial data until API is implemented
  const [images, setImages] = useState<{ [key: string]: string }>({
    logo: "/logo_invoice.png",
    signature: "/signature.png",
    stamp: "/stamp.png",
  });

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0]; // Ensuring `files` is not null
    if (file) {
      setImages((prev) => ({ ...prev, [field]: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-50">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push("/Setting")} />
        <h1 className="text-lg font-semibold">Invoice Information</h1>
      </div>

      {/* Instructions */}
      <p className="text-sm text-gray-600 mb-4">
        To generate your invoice, please provide the following information.
      </p>

      {/* Image Upload Fields */}
      {[
        { label: "Logo for Invoice", field: "logo" },
        { label: "Signature for Invoice", field: "signature" },
        { label: "Stamp for Invoice", field: "stamp" },
      ].map(({ label, field }) => (
        <Card key={field} className="p-3 mb-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={images[field]} alt={label} className="w-12 h-12 object-cover rounded" />
            <span>{label}</span>
          </div>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e, field)}
            />
            <PlusCircle className="text-blue-500" />
          </label>
        </Card>
      ))}

      {/* Invoice Number Format */}
      <Card className="p-4 mb-4">
        <h2 className="text-sm font-semibold mb-3">Invoice Number Format</h2>
        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="Prefix" />
          <select className="border rounded-md p-2 text-black bg-white">
            <option>Pattern</option>
            <option>Incremental</option>
          </select>
        </div>
        <div className="mt-3">
          <Input placeholder="007" />
        </div>
        <Button className="w-full mt-3">Save</Button>
        <p className="text-xs text-gray-500 text-center mt-2">Invoice numbers reset every April 1st</p>
      </Card>

      {/* Sample Invoice Button */}
      <Button className="w-full bg-blue-500 text-white" onClick={() => router.push("/sample-invoice")}>
        View Sample Invoice
      </Button>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="settings" />
    </div>
  );
}
