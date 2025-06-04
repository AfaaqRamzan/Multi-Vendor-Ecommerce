import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <div className="fixed top-0 flex h-16 w-full items-center justify-between bg-slate-800 px-8 py-4 text-slate-50">
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
