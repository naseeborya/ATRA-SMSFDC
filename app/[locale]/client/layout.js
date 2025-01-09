"use client";
import ClientNavigation from "../../ui/components/client-components/client-layout/ClientNavigation";
import ClientHeader from "../../ui/components/client-components/client-layout/ClientHeader";
import { use } from "react";
export default function ClientDashboard({ children, params }) {
  const { locale } = use(params);

  if (locale) console.log(locale);
  return (
    <div className=" flex  bg-brand-bg gap-6 ">
      <ClientNavigation locale={locale} />

      <div className="flex flex-col w-full py-7 gap-4 pe-14">
        <ClientHeader />

        <main className=" ">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
