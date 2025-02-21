"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

const InventoryPage = () => {
  const router = useRouter();

  
  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Back Button */}
      <div className="w-full max-w-md flex items-center mb-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/inventory_display")} className="mr-2">
          ⬅️
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
      </div>

      <div className="mt-40">
        <p>
        Inventory Turnover Ratiobr <br />
        Days Sales of Inventory (DSI) <br />
        Sell-Through Rate <br />
        Stock-to-Sales Ratio <br />
        Gross Margin Return on Investment (GMROI) <br />
        Stockout Rate <br />
        Fill Rate <br />
        </p>
      </div>
      <BottomNavbar activeTab=" " />
    </div>
  );
};

export default InventoryPage;
