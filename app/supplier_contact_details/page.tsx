"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import BottomNavbar from "@/app/Bottomnavbar";

const SupplierContact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    alternativeNumber: "",
    email: "",
    supplierStatus: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({ ...prev, supplierStatus: !prev.supplierStatus }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Supplier Contact Data:", formData);
    // API Call (Mocked)
    router.push("/next-step"); // Navigate to the next page
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4 shadow-md z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/add_new_supplier(GST)")} className="text-lg">←</button>
          <h1 className="text-xl font-semibold flex-grow text-center">Supplier Contact Details</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Point of Contact - First Name</label>
            <Input name="firstName" placeholder="Point of Contact - First Name" onChange={handleChange} required />
          </div>

          <div>
            <label className="text-sm font-medium">Point of Contact - Last Name</label>
            <Input name="lastName" placeholder="Last Name" onChange={handleChange} required />
          </div>

          <div>
            <label className="text-sm font-medium">Mobile Number</label>
            <Input name="mobileNumber" placeholder="Mobile Number" type="tel" onChange={handleChange} required />
          </div>

          <div>
            <label className="text-sm font-medium">Alternative Number</label>
            <Input name="alternativeNumber" placeholder="Alternative Number" type="tel" onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <Input name="email" placeholder="Email Address" type="email" onChange={handleChange} required />
          </div>

          {/* Supplier Status Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Supplier Status</label>
            <Switch checked={formData.supplierStatus} onCheckedChange={handleToggle} />
          </div>

          {/* Save Button */}
          <Button className="w-full bg-blue-500 mt-6" onClick={() => router.push("/suppliers")}>
          Save
        </Button>
        </form>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default SupplierContact;
