'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, ArrowLeft } from 'lucide-react';
import BottomNavbar from '@/app/Bottomnavbar';

type ReturnData = {
  returnDate: string;
  quantity: number;
  reason: string;
};

export default function ReturnForm() {
  const router = useRouter();
  const [returnData, setReturnData] = useState<ReturnData>({
    returnDate: '',
    quantity: 0,
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnData({ ...returnData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saved Data:', returnData);
    router.push('/returned_product/timeline3'); // Navigate to another page after saving
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden relative">
        {/* Header Section */}
        <div className="bg-gray-100 px-4 py-3 flex items-center relative">
          <button
            onClick={() => router.push('/returned_product/timeline1')} // Replace '/desiredPage' with the route you want to navigate to
            className="absolute left-4 text-blue-500 hover:text-blue-700"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold text-center flex-1">Timeline</h2>
        </div>
        <div className="px-4 py-2 border-b">
          <p className="text-sm font-semibold">Rajendra Shedge</p>
        </div>
        {/* Invoice Section */}
        <div className="px-4 py-2 border-b text-sm">
          <p><strong>12-Aug 2025</strong></p>
          <p className="text-gray-500">Invoice ID: AXR/2025-26/002</p>
        </div>
        {/* Product Info */}
        <div className="px-4 py-2 bg-gray-200 text-sm font-semibold">&lt;Product Name&gt;</div>
        <div className="px-4 py-2 text-sm">No. of Items: 32</div>
        {/* Form Section */}
        <CardContent className="px-4 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-medium">Return Date</label>
              <div className="relative">
                <Input
                  type="date"
                  name="returnDate"
                  value={returnData.returnDate}
                  onChange={handleChange}
                  required
                />
                {/* <CalendarIcon className="absolute right-2 top-2 w-5 h-5 text-gray-500" /> */}
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium">Quantity</label>
              <Input
                type="number"
                name="quantity"
                value={returnData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium">Reason for Return</label>
              <Input
                type="text"
                name="reason"
                value={returnData.reason}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-md">
              Save
            </Button>
          </form>
        </CardContent>
       <BottomNavbar activeTab={''}></BottomNavbar>
      </div>
    </div>
  );
}
