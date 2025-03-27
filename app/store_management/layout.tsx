"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Home, Search, PlusCircle, User } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="">
      {/* Header Navigation */}
      <header className="sticky inset-x-0 top-0 w-full bg-transparent border-b-2 p-2 border-border flex items-center justify-between">
        <div className="text-2xl font-bold"></div>
        <nav className="flex items-center justify-between md:justify-end">
          {/* Clickable User Icon */}
          <Image
            src="/atlasian.svg"
            alt="User Icon"
            className="rounded-full cursor-pointer"
            width={40}
            height={40}
            onClick={() => router.push("/Setting")}
          />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-0">{children}</main>
    </div>
  );
}
