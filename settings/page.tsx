"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

// Static settings sections (Replace with API later)
const settingsSections = [
  {
    title: "Account Settings",
    items: [
      { label: "Store Owner Information", icon: "👤", path: "/store_owner" },
      { label: "Store Information", icon: "🏪", path: "/store_info" },
      { label: "License Information", icon: "📜", path: "/license" },
      { label: "Invoice Information", icon: "🧾", path: "/invoice" },
    ],
  },
  {
    title: "Invite Friends",
    items: [{ label: "Invite a Friend", icon: "👥", path: "/invite" }],
  },
  {
    title: "Password",
    items: [{ label: "Change Password", icon: "🔑", path: "/change-password" }],
  },
  {
    title: "Help",
    items: [
      { label: "Help Center", icon: "❓", path: "/help" },
      { label: "Terms and Privacy Policy", icon: "📄", path: "/terms" },
    ],
  },
];

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        <h1 className="text-lg font-semibold mx-auto">Settings</h1>
      </div>

      {/* Sections */}
      <div className="flex-grow p-4 space-y-4">
        {settingsSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-gray-500 mb-2">{section.title}</h2>
            <Card className="p-2 bg-white rounded-xl shadow-sm">
              {section.items.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="flex w-full justify-between text-left p-3 rounded-lg hover:bg-gray-100"
                  onClick={() => router.push(item.path)}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Button>
              ))}
            </Card>
          </div>
        ))}
      </div>

      {/* Bottom Navbar (Global) */}
      <div className="fixed bottom-0 left-0 w-full border-t bg-white">
        <BottomNavbar activeTab="settings" />
      </div>
    </div>
  );
}
