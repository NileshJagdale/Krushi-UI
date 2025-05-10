"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

export default function LicenseInfoPage() {
  const router = useRouter();

  // Static license information (Replace with API logic later)
  const [formData, setFormData] = useState({
    shopActLicense: "",
    fertilizerLicense: "",
    pesticideLicense: "",
    seedsLicense: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Replace with API call
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push("/Setting")} />
        <h1 className="text-lg font-semibold mx-auto">License Information</h1>
      </div>

      {/* Form Section */}
      <div className="flex-grow p-4">
        <h2 className="text-sm text-center text-gray-500 mb-4">
          To generate your invoice, please provide the following information
        </h2>

        <Card className="p-4 bg-white rounded-xl shadow-sm space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">Shop ACT License</label>
              <Input
                type="text"
                name="shopActLicense"
                placeholder="Shop ACT License Number"
                value={formData.shopActLicense}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600">Fertilizer License</label>
              <Input
                type="text"
                name="fertilizerLicense"
                placeholder="Fertilizer License Number"
                value={formData.fertilizerLicense}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600">Pesticide License</label>
              <Input
                type="text"
                name="pesticideLicense"
                placeholder="Pesticide License Number"
                value={formData.pesticideLicense}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600">Seeds License</label>
              <Input
                type="text"
                name="seedsLicense"
                placeholder="Seeds License Number"
                value={formData.seedsLicense}
                onChange={handleChange}
              />
            </div>

            {/* Save Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={() => router.push("/Setting")}>
              Save
            </Button>
          </form>
        </Card>
      </div>

      {/* Bottom Navbar (Global) */}
      <div className="fixed bottom-0 left-0 w-full border-t bg-white">
        <BottomNavbar activeTab="settings" />
      </div>
    </div>
  );
}
