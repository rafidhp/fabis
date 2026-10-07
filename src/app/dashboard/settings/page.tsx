import PageBreadcrumb from "@/components/page-breadcrumb";

export default function Settings() {
  return (
    <div className="min-h-[88vh]">
      <PageBreadcrumb
        items={[
          {
            title: "FABIS Dashboard",
            href: "/dashboard",
          },
          {
            title: "Settings",
            href: "/dashboard/settings"
          }
        ]}
      />
      <div>ini settings</div>
    </div>
  );
}
