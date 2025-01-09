import React from "react";
import Link from "next/link";
import { GlobalBox } from "@/app/lib/constants/global-classes";

import { IoNotificationsOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { useTranslations } from "next-intl";

function AdminHeader() {
  const t = useTranslations("admin-header");
  return (
    <header className={`${GlobalBox} flex items-center justify-between `}>
      <div className=" flex flex-col text-brand-primary px-5 py-3 ">
        <h1 className=" text-xl font-normal ">{t("welcome")}</h1>
        <p className="text-sm">{t("role")}</p>
      </div>
      <div className=" flex px-5 items-center gap-3 ">
        <div className=" text-brand-primary  border-1 border-brand-primary  p-3 rounded-xl hover:bg-brand-secondary hover:text-white hover:border-brand-secondary ">
          <GrLanguage size={20} />
        </div>
        <div className=" text-brand-primary  border-1 border-brand-primary  p-3 rounded-xl hover:bg-brand-secondary hover:text-white hover:border-brand-secondary ">
          <IoNotificationsOutline size={20} />
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
