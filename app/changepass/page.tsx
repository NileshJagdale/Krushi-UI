"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

export default function ChangePassword() {
  const router = useRouter();

  // State for passwords
  const [form, setForm] = useState({
    existingPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State for error message
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    // TODO: API call to change password (Replace with actual API logic)
    console.log("Password Changed:", form);
    setError(""); // Clear error

    // Redirect after successful change (for now, just simulate delay)
    setTimeout(() => {
      router.push("/Setting"); // Change this to the correct route
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-50">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push("/Setting")} />
        <h1 className="text-lg font-semibold">Change Password</h1>
      </div>

      {/* Form */}
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Existing Password</label>
            <Input
              type="password"
              name="existingPassword"
              placeholder="Existing Password"
              value={form.existingPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <Input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full bg-blue-500 text-white">
            Save
          </Button>
        </form>
      </Card>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="settings" />
    </div>
  );
}
