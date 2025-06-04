import React from "react";
import Sidebar from "@/components/frontend/Sidebar";
import Navbar from "@/components/frontend/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Body */}
      <div className="ml-60 w-full">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="mt-16 min-h-screen bg-slate-900 p-8 text-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}
