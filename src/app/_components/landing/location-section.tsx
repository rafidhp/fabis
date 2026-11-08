import type React from "react";
import { MapPinned } from "lucide-react";

export interface SchoolInfoItems {
  icon: React.ReactNode;
  label: string;
  desc: string;
  desc2: string;
}

interface LocationSectionProps {
  schoolInfo: SchoolInfoItems[];
}

export default function LocationSection({
  schoolInfo,
}: LocationSectionProps) {
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1080068671213!2d107.5876296696549!3d-6.877661698293992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e760fc4d1ba5%3A0x36d49ff2e3f5c045!2sFathul%20Baari%20Islamic%20School!5e0!3m2!1sid!2sid!4v1794144250595!5m2!1sid!2sid";

  return (
    <section id="location" className="flex flex-col gap-4 mb-32 px-18 max-md:px-7 max-md:py-30">
      <span className="font-outfit text-dark-orange flex items-center gap-2 font-semibold">
        <MapPinned />
        AYO KUNJUNGI KAMI DI FATHUL BAARI ISLAMIC SCHOOL
      </span>

      <h2 className="font-bricolage text-dark-greenblue text-4xl font-bold">
        Lokasi Sekolah FABIS
      </h2>

      <p className="text-text font-outfit font-normal">
        Kami menyambut kehadiran Ayah/Bunda untuk melihat langsung suasana
        pembelajaran, sarana mahad, dan berdiskusi dengan tim akademik kami.
      </p>

      <div className="relative h-95 w-full overflow-hidden rounded-2xl shadow-sm border border-zinc-100 my-2">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Sekolah FABIS"
          className="h-full w-full z-0"
        />
      </div>

      <div className="flex w-full gap-3 max-sm:flex-col">
        {schoolInfo.map((item) => (
          <div
            key={item.label}
            className="flex w-full flex-col gap-2 rounded-xl bg-white px-6 py-6 shadow-sm"
          >
            {item.icon}
            <h4 className="font-bricolage text-text text-lg font-semibold">
              {item.label}
            </h4>
            <div className="flex flex-col">
              <p className="font-outfit text-text font-normal">{item.desc}</p>
              <p className="font-outfit text-text font-normal">{item.desc2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
