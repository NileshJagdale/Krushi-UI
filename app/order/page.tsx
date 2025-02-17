'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Briefcase } from "lucide-react";
import Image from 'next/image';

// Dynamically import BottomNavbar to avoid hydration mismatches
const BottomNavbar = dynamic(() => import('../Bottomnavbar'), { ssr: false });

export default function SalesManagement() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issue by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [pendingPayments] = useState([
    { type: 'Retail', count: 9, route: '/pending-retail' },
    { type: 'Business', count: 5, route: '/pending-business' }
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-md mx-auto relative">
      
      {/* Logo at Upper-Right Corner */}
      <div className="absolute top-2 right-4">
        <Image
          src="/atlassian_logo.svg"
          alt="User"
          width={40} 
          height={40}
          className="rounded-full object-cover"
        />
      </div>

      {/* Sales Management Title - Reduced Gap */}
      {isClient && <h1 className="text-2xl font-bold text-center mt-2 mb-6">Sales Management</h1>}

      {/* New Order Button */}
      <Button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg mb-6"
        onClick={() => router.push('/order/neworder')}
      >
        New Order
      </Button>

      {/* Pending Payments Section */}
      <div className="w-full mb-6">
        <h2 className="text-lg font-semibold text-center mb-4">Pending Payment Customers</h2>
        <div className="flex gap-4 justify-center">
          {pendingPayments.map((payment, index) => (
            <Card
              key={index}
              onClick={() => router.push(payment.route)}
              className="flex flex-col items-center justify-center border border-red-500 bg-pink-200 p-4 w-1/2 cursor-pointer hover:bg-pink-300 transition text-center"
            >
              <span className="text-sm font-medium">{payment.type}</span>
              <Badge className="bg-red-500 text-white mt-2">{payment.count}</Badge>
              {payment.type === 'Retail' ? (
                <ShoppingCart size={24} className="text-red-500 mt-2" />
              ) : (
                <Briefcase size={24} className="text-red-500 mt-2" />
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Customer Return Section */}
      <div className="w-full mb-6">
        <h2 className="text-lg font-semibold text-center mb-2">Customer Return</h2>
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg"
          onClick={() => router.push('/returned_product')}
        >
          Returned Product
        </Button>
      </div>

      {/* Sales Reports Section */}
      <div className="w-full mb-6">
        <h2 className="text-lg font-semibold text-center mb-2">Sales Reports</h2>
        <Button
          variant="outline"
          className="border-green-500 text-green-700 w-full py-3 text-lg"
          onClick={() => router.push('/sales-reports')}
        >
          Daily Sales
        </Button>
      </div>

      {/* Bottom Navbar */}
      <div className="absolute bottom-0 w-full">
        <BottomNavbar activeTab="" />
      </div>
    </div>
  );
}
