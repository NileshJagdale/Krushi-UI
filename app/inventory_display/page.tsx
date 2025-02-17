"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const InventoryPage = () => {
  const router = useRouter();

  // Static Inventory Data (Replace with API call when backend is ready)
  const inventoryData = {
    product: "Tractor Oil",
    company: "QASDERTY",
    totalStock: 12,
    lastPurchaseDate: "12-Dec-2025",
    stockValuation: "87,000 Rs",
    minStockLevel: 5,
  };

  const batches = [
    {
      batchNumber: "3456789",
      expiryDate: "12-Dec-2025",
      stockInHand: 8,
      stockValuation: "45,000 Rs",
    },
    {
      batchNumber: "1234556",
      expiryDate: "12-March-2025",
      stockInHand: 1,
      stockValuation: "45,000 Rs",
    },
    {
      batchNumber: "9853468",
      expiryDate: "12-Dec-2025",
      stockInHand: 19,
      stockValuation: "45,000 Rs",
    },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Back Button */}
      <div className="w-full max-w-md flex items-center mb-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/inventory")} className="mr-2">
          ⬅️
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
      </div>

      {/* Product Info */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{inventoryData.product}</h3>
        <p>
          <strong>Company:</strong> {inventoryData.company}
        </p>
        <p>
          <strong>Total Stock in Hand:</strong> {inventoryData.totalStock}
        </p>
        <p>
          <strong>Last Purchase Date:</strong> {inventoryData.lastPurchaseDate}
        </p>
        <p>
          <strong>Stock Valuation:</strong> {inventoryData.stockValuation}
        </p>

        {/* Min Stock Level */}
        <div className="flex items-center gap-2">
          <p>
            <strong>Min. Stock Level:</strong> {inventoryData.minStockLevel}
          </p>
          <Button variant="outline" size="icon">
            <RefreshCw size={16} />
          </Button>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <Button className="w-1/2 mr-2" onClick={() => router.push("/stock_movement")}>
            Stock Movement
          </Button>
          <Button className="w-1/2 ml-2" variant="secondary" onClick={() => router.push("/detailed_analysis")}>
            Detailed Analysis
          </Button>
        </div>
      </div>

      {/* Batch Information */}
      <div className="mt-4 space-y-4">
        {batches.map((batch, index) => (
          <Card key={index} className="p-3 border border-green-300 bg-green-50">
            <p>
              <strong>Batch Number:</strong> {batch.batchNumber}
            </p>
            <p>
              <strong>Expiry Date:</strong> {batch.expiryDate}
            </p>
            <p>
              <strong>Stock in Hand:</strong> {batch.stockInHand}
            </p>
            <p>
              <strong>Stock Valuation:</strong> {batch.stockValuation}
            </p>
          </Card>
        ))}
      </div>
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default InventoryPage;
