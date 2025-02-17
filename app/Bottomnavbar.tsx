"use client"; // This makes sure this is a client component in Next.js

import React from "react";
import { useRouter } from "next/navigation"; // For navigation
import { Calendar, Users, Percent, Receipt, List } from "lucide-react";

// Define prop types for the BottomNavbar component
interface BottomNavbarProps {
  activeTab: string;
  onTabChange?: (tab: string) => void; // Optional if navigation is handled internally
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeTab }) => {
  const router = useRouter(); // Next.js router for navigation

  const tabs = [
    { id: "today", icon: Calendar, label: "Today", route: "/today" },
    { id: "customer", icon: Users, label: "Customer", route: "/customer" },
    { id: "sales", icon: Percent, label: "Sales", route: "/order" },
    { id: "inventory", icon: List, label: "Inventory", route: "/store_management" },
    { id: "finance", icon: Receipt, label: "Finance", route: "/finance" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label, route }) => (
          <button
            key={id}
            onClick={() => router.push(route)} // Navigate to the page
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
