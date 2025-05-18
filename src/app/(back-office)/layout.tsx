import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="">Sidebar</div>
      {/* Main Body */}
      <div className="">
        {/* Header */}
        <h2>Nav Bar</h2>
        {/* Main */}
        <main>{children}</main>
      </div>
    </div>
  );
}
