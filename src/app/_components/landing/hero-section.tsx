import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

interface HighlightItems {
  label: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  highlights: HighlightItems[];
}

export default function HeroSection({
  highlights,
}: HeroSectionProps) {
  return (
    <section className="flex min-h-screen items-center justify-center gap-10 px-18 py-40 max-md:flex-col max-md:px-7 max-md:py-30">
      <div className="flex flex-6 flex-col gap-7 max-md:gap-6">
        <span className="text-dark-orange border-dark-orange w-fit rounded-full border px-3 py-1.5 font-medium">
          PPDB 2027/2028 Telah Dibuka
        </span>
        <h1 className="font-bricolage text-dark-greenblue text-7xl font-bold max-md:text-6xl">
          Fathul Baari <br /> Islamic School
        </h1>
        <p className="text-text text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex w-fit gap-6 max-md:flex-col max-md:gap-2">
          <Link
            href={"#"}
            className="font-bricolage bg-dark-greenblue hover:bg-greenblue flex cursor-pointer items-center gap-3 rounded-[999] px-8 py-2.5 text-xl text-white shadow-md inset-shadow-red-100 transition-all duration-200 max-md:text-sm"
          >
            <GraduationCap />
            Daftar Sekarang
          </Link>

          <Link
            href={"#"}
            className="font-bricolage hover:bg-dark-greenblue bg-greenblue flex cursor-pointer items-center gap-3 rounded-[999] px-8 py-2.5 text-xl text-white shadow-md inset-shadow-red-100 transition-all duration-200 max-md:text-sm"
          >
            <GraduationCap />
            Daftar Sekarang
          </Link>
        </div>

        <div className="flex gap-4 max-md:flex-col">
          {highlights.map((item) => (
            <span
              key={item.label}
              className="text-text flex items-center gap-1.5 text-base"
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-6">
        <Image
          src="/hero.png"
          width={800}
          height={800}
          alt=""
          className="rounded-3xl"
        />
      </div>
    </section>
  )
}