import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 space-y-6 bg-slate-700 p-3 text-slate-50">
      <Link className="mb-6" href="#">
        Logo
      </Link>
      <div className="flex flex-col space-y-3">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
