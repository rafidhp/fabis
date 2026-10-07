"use client";

import Link from "next/link";
import { SquareArrowOutUpRight } from 'lucide-react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb } from "@/hooks/use-breadcrumb";

export function AppHeader() {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <header className="sticky top-0 z-20 flex h-[7vh] items-center bg-[#F5FAFF] px-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-start">
          <SidebarTrigger className="cursor-pointer" />

          <div className="ml-2">
            {breadcrumbs.length > 0 && (
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                      <div
                        key={`${item.title}-${index}`}
                        className="flex items-center"
                      >
                        <BreadcrumbItem>
                          {isLast || !item.href ? (
                            <BreadcrumbPage className="bg-[#D9EAF8] px-3.5 py-1 rounded-full text-[#006384]">
                              {item.title}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink className="pb-0.5 pe-1">
                              <Link href={item.href}>
                                {item.title}
                              </Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>

                        {!isLast && <BreadcrumbSeparator />}
                      </div>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </div>
        </div>
        <Link href="/" className="text-text text-sm flex items-center justify-center gap-1.5">
          <SquareArrowOutUpRight className="size-4" />
          Lihat Web Publik
        </Link>
      </div>
    </header>
  );
}