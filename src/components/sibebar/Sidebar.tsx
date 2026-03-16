"use client";

import {
  LayoutDashboard,
  Ticket,
  QrCode,
  Settings,
  CircleQuestionMark,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Sidebar() {
  const routing = [
    { name: "Dashboard", icon: LayoutDashboard, route: "/admin/dashboard" },
    { name: "Quản lý vé", icon: Ticket, route: "/admin/ticket-management" },
    { name: "Check in", icon: QrCode, route: "/admin/checkin" },
  ];
  const pathname = usePathname();
  return (
    <aside className="w-[255px] min-h-screen flex flex-col justify-between p-2">
      {/* TOP */}
      <div>
        {/* COMPANY */}
        <div className="company-section flex items-center gap-3 h-[52px] p-2">
          <div className="flex w-8 h-8 items-center justify-center bg-black rounded-xl">
            <LayoutDashboard color="white" size={16} />
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold">Indie-Indie</h1>
            <h2 className="text-sm text-gray-600">enterprise</h2>
          </div>
        </div>

        {/* MENU */}
        <div className="sidebar-menu flex flex-col gap-2 pt-2">
          {routing.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.route; // Check if current path matches

            return (
              <Link key={item.route} href={item.route}>
                <div
                  className={`
                    ${isActive ? "bg-gray-900 text-white" : "hover:bg-gray-950 hover:text-[#FFFFFF]"}
                    flex items-center gap-3 p-2 rounded  cursor-pointer `}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-2">
        <div className="setting-section">
          <div className="setting-menu">
            <div className="setting-item">
              <div className="flex flex-row p-2 gap-2 items-center cursor-pointer hover:bg-gray-950 hover:text-[#FFFFFF]">
                <Settings size={16} />
                <span>Cài đặt</span>
              </div>
              <div className="flex flex-row p-2 gap-2 items-center cursor-pointer hover:bg-gray-950 hover:text-[#FFFFFF]">
                <CircleQuestionMark size={16} />
                <span>Hỗ trợ</span>
              </div>
            </div>
            <div className="setting-item"></div>
          </div>
        </div>

        <div className="user-section items-center flex gap-2 p-2 rounded">
          <div className="flex w-8 h-8 items-center justify-center bg-black rounded-xl">
            <User color="white" size={16} />
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold">User</h1>
            <h2 className="text-sm text-gray-600">user@example.com</h2>
          </div>
        </div>
      </div>
    </aside>
  );
}
