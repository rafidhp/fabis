import PageBreadcrumb from "@/components/page-breadcrumb";

export default function Information() {
  return (
    <div className="min-h-[88vh]">
      <PageBreadcrumb
        items={[
          {
            title: "FABIS Dashboard",
            href: "/dashboard",
          },
          {
            title: "Kelola Informasi Website",
            href: "/dashboard/information"
          }
        ]}
      />
      <div>ini kelola informasi website</div>
    </div>
  );
}
