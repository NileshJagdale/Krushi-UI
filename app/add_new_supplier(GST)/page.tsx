"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/app/Bottomnavbar";

const SupplierDetails = () => {
  const router = useRouter();

  // Mock API Data (Replace this with actual API response later)
  const supplierData = {
    businessName: "Reliance Industries Pvt. Ltd.",
    gstStatus: "Active",
    gstin: "9123456789",
    stateJurisdiction: "Maharashtra",
    address: "Ground Floor, Tukmirpur, No.123/169 PIN 110094",
    stateOfSupplier: "Intra-State",
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4 shadow-md z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/add_new_supplier")} className="text-lg">←</button>
          <h1 className="text-xl font-semibold flex-grow text-center">Add New Supplier</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-lg font-semibold text-center mb-4">GST Verification Details</h2>

        <div className="space-y-4">
          <p><strong>Business Name</strong><br />
            <a href="#" className="text-blue-600 underline">{supplierData.businessName}</a>
          </p>

          <p><strong>GSTIN Status</strong><br />
            <a href="#" className="text-blue-600 underline">{supplierData.gstStatus}</a>
          </p>

          <p><strong>GSTIN</strong><br />
            <a href="#" className="text-blue-600 underline">{supplierData.gstin}</a>
          </p>

          <p><strong>State Jurisdiction</strong><br />
            <a href="#" className="text-blue-600 underline">{supplierData.stateJurisdiction}</a>
          </p>

          <p><strong>Address</strong><br />
            <a href="#" className="text-blue-600 underline">{supplierData.address}</a>
          </p>

          <p><strong>State of Supplier</strong><br />
            {supplierData.stateOfSupplier}
          </p>
        </div>

        {/* Proceed Button */}
        <Button className="w-full bg-blue-500 mt-6" onClick={() => router.push("/supplier_contact_details")}>
          Proceed
        </Button>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar activeTab="" />
    </div>
  );
};

export default SupplierDetails;
