// import { headers } from "next/headers";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// import { LatestPost } from "@/app/_components/post";
// import { auth } from "@/server/better-auth";

import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import {
  GraduationCap,
  ShieldCheck,
  Mosque,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import HeroSection from "@/app/_components/landing/hero-section";
import PpdbSection from "@/app/_components/landing/ppdb-section";
import LocationSection from "@/app/_components/landing/location-section";

export default async function Home() {
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  const highlights = [
    {
      label: "Akreditasi A BAN-S/M",
      icon: <ShieldCheck className="size-4" />
    },
    {
      label: "Kemenag Terdaftar",
      icon: <Mosque className="size-4" />
    },
    {
      label: "Kurikulum Merdeka + Ma'had",
      icon: <GraduationCap className="size-4" />,
    },
  ];

  const schoolInfo = [
    {
      icon: <Clock className="size-4.5" />,
      label: "Jam Operasional",
      desc: "Senin - Sabtu",
      desc2: "07.30 - 16.00 WIB",
    },
    {
      icon: <Phone className="size-4.5" />,
      label: "Telepon Kantor",
      desc: "(021) 8899-2345",
      desc2: "0812-3456-7890 (WA)",
    },
    {
      icon: <Mail className="size-4.5" />,
      label: "Surel Resmi",
      desc: "info@fabis.sch.id",
      desc2: "ppdb@fabis.sch.id",
    },
  ];

  const ppdb = [
    {
      id: "01",
      title: "Registrasi Online",
      description:
        "Mengisi formulir biodata santri dan wali secara online serta mengunggah berkas syarat administratif.",
      color: "bg-[#006384]/15",
    },
    {
      id: "02",
      title: "Tes Observasi & Al-Qur'an",
      description:
        "Uji kelayakan membaca Al-Qur'an (Tahsin/Tahfidz), wawancara komitmen wali santri, dan psikotes pemetaan minat bakat.",
      color: "bg-[#8C4B00]/15",
    },
    {
      id: "03",
      title: "Pengumuman Kelulusan",
      description:
        "Hasil seleksi diumumkan melalui website resmi dan notifikasi WhatsApp langsung ke nomor wali santri.",
      color: "bg-[#006384]/15",
    },
    {
      id: "04",
      title: "Daftar Ulang & Seragam  ",
      description:
        "Penyelesaian administrasi masuk, pengukuran seragam resmi, dan orientasi walisantri & mahasantri baru.",
      color: "bg-[#8C4B00]/15",
    },
  ];

  const persyaratanSantri = [
    "Fotokopi Akta Kelahiran dan Kartu Keluarga (KK) 2 rangkap",
    "Pas foto formal santri berpakaian rapih ukuran 3x4 (4 lembar, latar biru)",
    "Fotokopi Rapor 2 semester terakhir yang telah dilegalisir",
    "Surat Keterangan Sehat & Bebas Hepatitis/TBC dari dokter resmi",
    "Komitmen bersedia tinggal di asrama dan menaati tata tertib Ma'had",
  ];

  return (
    <HydrateClient>
      <Navbar />
      <HeroSection highlights={highlights} />
      <PpdbSection ppdb={ppdb} persyaratanSantri={persyaratanSantri} />
      <LocationSection schoolInfo={schoolInfo} />
      <Footer />
    </HydrateClient>
  );
}
