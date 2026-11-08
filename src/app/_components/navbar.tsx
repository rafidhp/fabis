"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "#" },
    { label: "PPDB", href: "#ppdb" },
    { label: "Lokasi", href: "#location" },
  ];

  return (
    <nav className="fixed z-50 flex w-screen items-center justify-between bg-white px-16 py-4 shadow-sm max-md:px-4 max-md:py-2.5">
      <Link href={"/"}>
        <Image
          src="/logo-fabis-with-text.jpg"
          width={200}
          height={200}
          alt=""
        />
      </Link>

      <div className="text-md text-dark-greenblue absolute left-1/2 flex -translate-x-1/2 gap-3 font-medium max-md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-bricolage transition-all duration-200 hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="max-md:hidden">
        <Link
          href="https://wa.me/6281211066905"
          className="font-bricolage bg-dark-greenblue hover:bg-greenblue flex cursor-pointer gap-2 rounded-[999] px-8 py-2.5 text-lg text-white inset-shadow-red-100 transition-all duration-200"
        >
          Contact
          <ArrowUpRight />
        </Link>
      </div>

      {isOpen && (
        <div className="text-dark-greenblue absolute top-18 right-0 flex w-full flex-col items-end gap-3.5 bg-white px-4 py-8 text-2xl font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-bricolage transition-all duration-200 hover:font-bold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={"#"}
            className="font-bricolage bg-dark-greenblue hover:bg-greenblue mt-2 flex cursor-pointer gap-2 rounded-[999] px-8 py-2.5 text-xl text-white inset-shadow-red-100 transition-all duration-200"
          >
            Contact
            <ArrowUpRight />
          </Link>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden max-md:block"
      >
        <Menu />
      </button>
    </nav>
  );
}
