"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, UserCircle, FileText } from "lucide-react";

// Define type for data
type MonitorItem = {
  id: number;
  name: string;
  status: string;
};

// Static data simulating API response
const data: MonitorItem[] = [
  { id: 1, name: "System Health", status: "Good" },
  { id: 2, name: "CPU Usage", status: "Moderate" },
  { id: 3, name: "Memory", status: "Stable" },
];

export default function Monitor() {
  const [loading, setLoading] = useState(true);
  const [monitorData, setMonitorData] = useState<MonitorItem[]>([]);

  const router = useRouter();

  // Simulate fetching data from API
  useEffect(() => {
    setTimeout(() => {
      setMonitorData(data);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
     

     
            </div>
         
      
      );}

     
 
    
