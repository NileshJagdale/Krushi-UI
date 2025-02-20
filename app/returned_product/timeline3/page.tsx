"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BottomNavbar from "@/app/Bottomnavbar";

const timelineDetails = {
  id: "AXR/2025-24802",
  date: "12-Aug 2025",
  productName: "Product Name",
  items: 32,
  creditNoteNumber: "CN/2025/001",
  creditNoteDate: "March 15, 2025",
  amountOfCredit: "₹2,000",
  gstAdjustment: "₹214.29",
};

export default function TimelineDetails() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-100 p-4 flex items-center">
        <ArrowLeft
          className="text-blue-500 cursor-pointer"
          onClick={() => router.push("/returned_product/timeline2")}
        />
        <h1 className="text-lg font-semibold mx-auto">Timeline</h1>
      </div>

      {/* Customer Info */}
      <div className="p-4">
        <h2 className="text-md font-medium">Rajendra Shedge</h2>
      </div>

      {/* Timeline Section */}
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Timeline</h3>
        <p className="text-gray-500">{timelineDetails.date}</p>
        <p className="text-gray-700">Invoice ID: {timelineDetails.id}</p>
      </div>

      {/* Product Details */}
      <div className="p-4 bg-gray-100">
        <h4 className="font-semibold">{timelineDetails.productName}</h4>
        <p className="text-gray-500">No. of Items: {timelineDetails.items}</p>
      </div>

      {/* Credit Note Details */}
      <div className="p-4 border rounded-md bg-green-100 mt-4 mx-4">
        <p>
          <span className="font-medium">Credit Note Number:</span>{" "}
          {timelineDetails.creditNoteNumber}
        </p>
        <p>
          <span className="font-medium">Credit Note Date:</span>{" "}
          {timelineDetails.creditNoteDate}
        </p>
        <p>
          <span className="font-medium">Amount of Credit:</span>{" "}
          {timelineDetails.amountOfCredit}
        </p>
        <p>
          <span className="font-medium">GST Adjustment:</span>{" "}
          {timelineDetails.gstAdjustment}
        </p>
      </div>

      {/* Done Button */}
      <div className="p-4 flex justify-center mt-4">
        <Button
          className="bg-blue-500 text-white w-48"
          onClick={() => router.push("/order")}
        >
          Done
        </Button>
      </div>

      <BottomNavbar activeTab={""}></BottomNavbar>
    </div>
  );
}
