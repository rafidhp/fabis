import Link from "next/link";
import {
  Megaphone,
  ListCheck,
  CircleCheckBig,
  Download,
  SquareText,
} from "lucide-react";

interface PpdbItems {
  id: string;
  title: string;
  description: string;
  color: string;
}

interface PpdbSectionProps {
  ppdb: PpdbItems[];
  persyaratanSantri: string[];
}

export default function PpdbSection({
  ppdb,
  persyaratanSantri,
}: PpdbSectionProps) {
  return (
    <section
      id="ppdb"
      className="flex min-h-screen flex-col gap-4 px-18 py-40 max-md:px-7 max-md:py-30"
    >
      <div className="flex h-full w-full items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div className="flex flex-col gap-4">
          <span className="font-outfit text-dark-orange flex items-center gap-2 font-semibold">
            <Megaphone />
            PENERIMAAN PESERTA DIDIK BARU TA 2027/2028
          </span>

          <h2 className="font-bricolage text-dark-greenblue text-4xl font-bold">
            Informasi & Pendaftaran Siswa Baru
          </h2>

          <p className="text-text font-outfit font-normal">
            Proses seleksi transparan dan berbasis pembinaan potensi santri.
            Pilih jenjang pendidikan SMP IT Fathul Baari.
          </p>
        </div>

        <div className="flex">
          <div className="flex h-fit w-fit gap-3 max-md:flex-col max-md:gap-2">
            <Link
              href={"#"}
              className="font-bricolage bg-dark-greenblue hover:bg-greenblue flex cursor-pointer items-center gap-3 rounded-xl px-8 py-2.5 text-lg text-white shadow-md inset-shadow-red-100 transition-all duration-200 max-md:text-sm"
            >
              <Download />
              Unduh Pamflet
            </Link>

            <Link
              href={"#"}
              className="font-bricolage hover:bg-dark-greenblue bg-greenblue flex cursor-pointer items-center gap-3 rounded-xl px-8 py-2.5 text-lg text-white shadow-md inset-shadow-red-100 transition-all duration-200 max-md:text-sm"
            >
              <SquareText />
              Isi Formulir Online
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 grid w-full grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:flex-col">
        {ppdb.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col gap-8 rounded-xl bg-white px-6 py-6 shadow-sm"
          >
            <div
              className={`${item.color} font-bricolage w-fit rounded-sm px-4 py-3 font-bold`}
            >
              {item.id}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bricolage text-xl font-medium">
                {item.title}
              </h4>
              <p className="text-text text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3.5">
          <span className="h-fit rounded-md bg-[#006384]/15 p-3">
            <ListCheck />
          </span>
          <div className="flex flex-col">
            <h4 className="font-bricolage text-dark-greenblue text-2xl font-bold">
              Persyaratan Calon Santri
            </h4>
            <p className="text-text">
              Dokumen fisik & digital yang wajib dipersiapkan
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-1.5">
          {persyaratanSantri.map((item, index) => (
            <div className="text-text flex items-center gap-2" key={index}>
              <CircleCheckBig className="text-dark-greenblue size-4" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
