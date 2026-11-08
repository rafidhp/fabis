"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigationLoader } from "@/components/app-layout/navigation-loader";
import { Home, Settings, FolderPen, Newspaper } from "lucide-react";
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
    title: "Kelola Informasi Website",
    url: "/dashboard/information",
    icon: FolderPen,
  },
  {
    title: "Kelola Berita",
    url: "/dashboard/news",
    icon: Newspaper,
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
    <SidebarMenu className="flex flex-col gap-1.5 p-1">
      <SidebarGroupLabel className="mb-2 pb-0">
        MANAJEMEN HALAMAN
      </SidebarGroupLabel>
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
                className={`mx-1 h-10.5 cursor-pointer ${
                  isActive
                    ? "bg-dark-greenblue! hover:bg-dark-greenblue! font-semibold text-white! shadow-lg inset-shadow-sm inset-shadow-indigo-200 hover:text-white"
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
