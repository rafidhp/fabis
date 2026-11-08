import PageBreadcrumb from "@/components/page-breadcrumb";

export default function News() {
  return (
    <div className="min-h-[88vh]">
      <PageBreadcrumb
        items={[
          {
            title: "FABIS Dashboard",
            href: "/dashboard",
          },
          {
            title: "Kelola Berita",
            href: "/dashboard/news"
          }
        ]}
      />
      <div>ini kelola berita</div>
    </div>
  );
}
