import React from "react";

import { GlobalBox } from "@/app/lib/constants/global-classes";
import { useTranslations } from "next-intl";

function Cards() {
  const t = useTranslations("admin-dasboard-cards");
  return (
    <div className={`${GlobalBox} p-5 `}>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
        <div
          className={`${GlobalBox} flex items-left flex-col justify-center text-brand-primary bg-slate-50 p-3  `}
        >
          <h2 className="text-4xl font-medium">850</h2>
          <p className="text-xl font-normal">{t("submittedforms")}</p>
        </div>
        <div
          className={`${GlobalBox} flex items-left flex-col justify-center text-brand-primary bg-slate-50 p-3  `}
        >
          <h2 className="text-4xl font-medium">777</h2>
          <p className="text-xl font-normal">{t("aprovedforms")}</p>
        </div>
        <div
          className={`${GlobalBox} flex items-left flex-col justify-center text-brand-primary bg-slate-50 p-3  `}
        >
          <h2 className="text-4xl font-medium">415</h2>
          <p className="text-xl font-normal">{t("pendingforms")}</p>
        </div>
        <div
          className={`${GlobalBox} flex items-left flex-col justify-center text-brand-primary bg-slate-50 p-3  `}
        >
          <h2 className="text-4xl font-medium">1000</h2>
          <p className="text-xl font-normal">{t("rejectedforms")}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
