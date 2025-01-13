import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function SubHero({ locale }) {
  const t = useTranslations("landing-page");
  return (
    <div className="px-[256px] py-14 bg-white">
      <p className=" mb-14 text-base font-normal text-brand-primary ">
        {t("about-brand")}
      </p>

      <Link
        href={"/" + locale + "/login"}
        className=" bg-brand-secondary text-white px-8 py-4 rounded-xl hover:bg-brand-primary transition duration-300"
      >
        Sign in
      </Link>
    </div>
  );
}

export default SubHero;
