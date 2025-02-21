"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Fragment } from "react";
import BottomNavbar from "@/app/Bottomnavbar";

const StoreManagement = () => {
  const router = useRouter();

  const inventoryManagement = [
    { title: "Stock Tracking", icon: "📦", path: "/inventory" },
    { title: "Inventory Valuation", icon: "🏷️", path: "/inventory-valuation" },
    { title: "Inventory Shrinkage", icon: "📉", path: "/inventory_shrinkage" },
    { title: "Product Catalog", icon: "🛒", path: "/product-catalog" },
    { title: "Companies", icon: "🏭", path: "/companies" },
    { title: "Categories", icon: "📂", path: "/categories" },
  ];

  const purchaseManagement = [
    { title: "Stock Arrival", icon: "📦", path: "/stock-arrival" },
    { title: "Purchase Order", icon: "📝", path: "/purchase-order" },
    { title: "Suppliers", icon: "📜", path: "/suppliers" },
  ];

  return (
    <Fragment>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Store Management</h1>

        {/* Inventory Management */}
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Inventory Management</h2>
          <div className="grid grid-cols-2 gap-4">
            {inventoryManagement.map((item, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition" onClick={() => router.push(item.path)}>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm font-medium text-gray-700">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purchase Management */}
        <div className="w-full max-w-md mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Purchase Management</h2>
          <div className="grid grid-cols-2 gap-4">
            {purchaseManagement.map((item, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition" onClick={() => router.push(item.path)}>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm font-medium text-gray-700">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <BottomNavbar activeTab="" />
      </div>
      
    </Fragment>
  );
};

export default StoreManagement;
