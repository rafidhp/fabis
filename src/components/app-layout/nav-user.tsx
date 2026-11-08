"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { UserRound, ChevronsUpDown, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useNavigationLoader } from "@/components/app-layout/navigation-loader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
  const { data: session } = authClient.useSession();
  const { state } = useSidebar();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { startLoading } = useNavigationLoader();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      if (pathname !== "/") {
        startLoading();
      }
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const user = session?.user;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="h-14 cursor-pointer transition hover:bg-zinc-100! data-[state=open]:bg-zinc-100"
              />
            }
          >
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name ?? "User"}
                width={36}
                height={36}
                className="shrink-0 rounded-full"
              />
            ) : (
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/70">
                <UserRound className="size-6!" />
              </div>
            )}

            <div className="flex min-w-0 flex-1 flex-col text-left">
              <span className="truncate font-medium">{user?.name}</span>
              <span className="text-muted-foreground truncate text-xs">
                {user?.email}
              </span>
            </div>

            <ChevronsUpDown className="ml-auto size-4 shrink-0" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="center"
            side={state === "collapsed" ? "left" : "bottom"}
          >
            <div className="p-2">
              <div className="text-sm font-medium">{user?.name}</div>
              <div className="text-muted-foreground text-xs">{user?.email}</div>
              <div className="mt-2 text-base">
                <Button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-sm border border-red-500/50 bg-red-500/10 py-1! text-red-500 transition hover:bg-red-500/30"
                >
                  <LogOut />
                  {isLoggingOut ? "Keluar..." : "Keluar"}
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
