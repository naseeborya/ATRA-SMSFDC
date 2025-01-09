import AdminNavigation from "../../ui/components/admin-componets/admin-layout/AdminNavigation";
import AdminHeader from "../../ui/components/admin-componets/admin-layout/AdminHeader";
export default function AdminDashboard({ children, params }) {
  const { locale } = params;

  if (locale) console.log(locale);
  return (
    <div className=" flex  bg-brand-bg gap-6 ">
      <AdminNavigation locale={locale} />

      <div className=" flex flex-col w-full  py-7 gap-4 pe-14 ">
        <AdminHeader />

        <main className=" ">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
