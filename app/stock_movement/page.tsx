"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const StockMovement = () => {
  const router = useRouter();

  // Static Data (Replace with API later)
  const stockData = [
    {
      date: "21-Jan-25",
      openingStock: 62,
      purchased: 0,
      sales: 3,
      returned: 0,
      damaged: 0,
      closingStock: 59,
    },
    {
      date: "24-Jan-25",
      openingStock: 59,
      purchased: 50,
      sales: 0,
      returned: 0,
      damaged: 0,
      closingStock: 109,
    },
    {
      date: "25-Jan-25",
      openingStock: 109,
      purchased: 0,
      sales: 80,
      returned: 15,
      damaged: 0,
      closingStock: 44,
    },
    {
      date: "29-Jan-25",
      openingStock: 44,
      purchased: 3,
      sales: 3,
      returned: 0,
      damaged: 1,
      closingStock: 43,
    },
    {
      date: "30-Jan-25",
      openingStock: 43,
      purchased: 0,
      sales: 0,
      returned: 3,
      damaged: 0,
      closingStock: 46,
    },
    {
      date: "31-Jan-25",
      openingStock: 46,
      purchased: 26,
      sales: 13,
      returned: 0,
      damaged: 0,
      closingStock: 59,
    },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Back Button */}
      <div className="w-full max-w-md flex items-center mb-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/inventory_display")} className="mr-2">
          ⬅️
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Stock Movement</h1>
      </div>

      {/* Product Info */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Tractor Oil</h3>
        <p>
          <strong>Company:</strong> QASDERTY
        </p>
      </div>

      {/* Stock Movement Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Opening Stock</th>
              <th className="border border-gray-300 p-2">Purchased</th>
              <th className="border border-gray-300 p-2">Sales</th>
              <th className="border border-gray-300 p-2">Returned</th>
              <th className="border border-gray-300 p-2">Damaged</th>
              <th className="border border-gray-300 p-2">Closing Stock</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((entry, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{entry.date}</td>
                <td className="border border-gray-300 p-2">{entry.openingStock}</td>
                <td className="border border-gray-300 p-2">{entry.purchased}</td>
                <td className="border border-gray-300 p-2">{entry.sales}</td>
                <td className="border border-gray-300 p-2">{entry.returned}</td>
                <td className="border border-gray-300 p-2">{entry.damaged}</td>
                <td className="border border-gray-300 p-2">{entry.closingStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default StockMovement;
