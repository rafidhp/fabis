"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigationLoader } from "@/components/app-layout/navigation-loader";
import { Home, Settings } from "lucide-react";
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function NavMain() {
  const pathname = usePathname();
  const { startLoading } = useNavigationLoader();

  return (
    <SidebarMenu className="flex flex-col p-1 gap-1.5">
      <SidebarGroupLabel className="mb-2 pb-0">MANAJEMEN PLATFORM</SidebarGroupLabel>
      {items.map((item) => {
        const isActive = pathname === item.url;

        return (
          <SidebarMenuItem key={item.title}>
            <Link
              href={item.url}
              onClick={() => {
                if (pathname !== item.url) {
                  startLoading();
                }
              }}
              className="flex items-center gap-2"
            >
              <SidebarMenuButton
                isActive={isActive}
                className={`h-10.5 cursor-pointer mx-1 ${
                  isActive
                    ? "bg-[#117DA4]! text-white! font-semibold shadow-lg hover:bg-[#117DA4]! hover:text-white"
                    : "transition hover:bg-[#E9F5FF]!"
                } `}
              >
                <item.icon className="size-6" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}