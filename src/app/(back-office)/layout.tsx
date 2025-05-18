import React from "react";
import Sidebar from "@/components/frontend/Sidebar";

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
      <div className="w-full">
        {/* Header */}
        <h2>Nav Bar</h2>
        {/* Main */}
        <main>{children}</main>
      </div>
    </div>
  );
}
