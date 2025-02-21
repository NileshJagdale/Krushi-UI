"use client"; // Mark as Client Component

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import BottomNavbar from "@/app/Bottomnavbar";
import { ArrowLeft } from "lucide-react";

const CompanyContact = () => {
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    alternativeNumber: "",
    email: "",
    companyStatus: false,
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => router.push("/add_new_company(GST)")}>
          <ArrowLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-center flex-1">Company Contact Details</h2>
      </div>

      {/* Form Section */}
      <div className="p-6 flex flex-col gap-4">
        {/* First Name */}
        <div>
          <p className="text-gray-500 text-sm">Point of Contact - First Name</p>
          <Input
            name="firstName"
            placeholder="Point of Contact - First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div>
          <p className="text-gray-500 text-sm">Point of Contact - Last Name</p>
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Mobile Number */}
        <div>
          <p className="text-gray-500 text-sm">Mobile Number</p>
          <Input
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        {/* Alternative Number */}
        <div>
          <p className="text-gray-500 text-sm">Alternative Number</p>
          <Input
            name="alternativeNumber"
            placeholder="Alternative Number"
            value={formData.alternativeNumber}
            onChange={handleChange}
          />
        </div>

        {/* Email Address */}
        <div>
          <p className="text-gray-500 text-sm">Email Address</p>
          <Input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Company Status Toggle */}
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">Company Status</p>
          <Switch
            checked={formData.companyStatus}
            onCheckedChange={(checked) => setFormData({ ...formData, companyStatus: checked })}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="p-4">
        <Button className="bg-blue-500 text-white w-full" onClick={() => router.push("/companies")}>
          Save
        </Button>
      </div>

      {/* Global Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default CompanyContact;
