import { AlignJustify, Bell, Layout, LogOut, Settings, X } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white px-8 py-8 pr-[20rem] text-slate-50 dark:bg-slate-800">
      {/* Icon */}
      <button className="text-lime-700 dark:text-lime-500">
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <ThemeToggle />
        <button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button
                type="button"
                className="relative inline-flex items-center rounded-lg bg-transparent p-3 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
              >
                <Bell className="text-lime-700 dark:text-lime-500" />
                <span className="sr-only">Notifications</span>
                <div className="absolute end-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900">
                  20
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-md px-4 py-2">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/assets/avatar.png"
                    alt="User Profile "
                    width={200}
                    height={200}
                    className="h-8 w-8 rounded-full"
                  />

                  <div className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out,</p>

                    <div className="flex items-center space-x-2">
                      <p className="py-.5 rounded-full bg-red-600 px-3 text-sm text-white">
                        Stock Out
                      </p>
                      <p>Dec 12 2021 - 12:40pm</p>
                    </div>
                  </div>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/assets/avatar.png"
                    alt="User Profile "
                    width={200}
                    height={200}
                    className="h-8 w-8 rounded-full"
                  />

                  <div className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out,</p>

                    <div className="flex items-center space-x-2">
                      <p className="py-.5 rounded-full bg-red-600 px-3 text-sm text-white">
                        Stock Out
                      </p>
                      <p>Dec 12 2021 - 12:40pm</p>
                    </div>
                  </div>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/assets/avatar.png"
                    alt="User Profile "
                    width={200}
                    height={200}
                    className="h-8 w-8 rounded-full"
                  />

                  <div className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out,</p>

                    <div className="flex items-center space-x-2">
                      <p className="py-.5 rounded-full bg-red-600 px-3 text-sm text-white">
                        Stock Out
                      </p>
                      <p>Dec 12 2021 - 12:40pm</p>
                    </div>
                  </div>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <button>
                <Image
                  src="/assets/avatar.png"
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 rounded-md px-4 py-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Layout className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Edit Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </button>
      </div>
    </div>
  );
}
