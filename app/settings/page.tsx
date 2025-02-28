'use client';

import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import BottomNavbar from '../Bottomnavbar';

export default function LicenseInformation() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md h-full">
        <div className="flex items-center mb-4">
          <ArrowLeft 
            className="text-blue-500 cursor-pointer" 
            onClick={() => router.push('/your-target-page')} 
          />
          <h2 className="text-lg font-bold ml-2">License Information</h2>
        </div>
        <p className="text-gray-600 mb-4">To generate your invoice, please provide the following information</p>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Shop ACT License</label>
            <Input placeholder="Shop ACT License Number" />
          </div>
          <div>
            <label className="text-sm font-medium">Fertilizer License</label>
            <Input placeholder="Fertilizer License Number" />
          </div>
          <div>
            <label className="text-sm font-medium">Pesticide License</label>
            <Input placeholder="Pesticide License Number" />
          </div>
          <div>
            <label className="text-sm font-medium">Seeds License</label>
            <Input placeholder="Seeds License Number" />
          </div>
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-4" 
            onClick={() => router.push('/save-target-page')}
          >
            Save
          </Button>
        </div>
      </div>
      <BottomNavbar activeTab={''}></BottomNavbar>
    </div>
  );
}
