import React from "react";
import Sidebar from "@/components/backoffice/Sidebar";
import Navbar from "@/components/backoffice/Navbar";

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
      <div className="ml-0 min-h-screen flex-grow bg-slate-100 lg:ml-60">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="mt-16 bg-slate-100 p-8 text-slate-50 dark:bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  );
}
