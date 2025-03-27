"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const users = [
  { mobile: "9876543210", password: "password123" },
  { mobile: "1234567890", password: "admin123" },
];

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const user = users.find((u) => u.mobile === mobile && u.password === password);
    if (user) {
      router.push("/Manager");
    } else {
      setError("Invalid Mobile Number or Password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <div className="flex flex-col items-center">
          <Image src="/accm.png" alt="Logo" width={60} height={60} />
          <h2 className="mt-3 text-xl font-semibold">Sign In</h2>
        </div>
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleLogin} className="w-full mt-2">
            Sign In
          </Button>
          <p className="mt-2 text-sm text-blue-500 text-center cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">© 2025 Deavnet Solutions</p>
      </div>
    </div>
  );
}
