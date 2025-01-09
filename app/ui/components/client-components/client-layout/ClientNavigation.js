"use client";

import { GlobalBox } from "@/app/lib/constants/global-classes";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { CiLogout } from "react-icons/ci";
import { ClientNavigationLinks } from "@/app/lib/constants/navigation-links";
import { useTranslations } from "next-intl";

export default function ClientNavigation({ locale }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === "/" + locale + path;
  const t = useTranslations("client-navigation");

  return (
    <div className="flex flex-col gap-4 w-96 h-screen sticky top-0 left-0 py-7 ps-14">
      <div className={`${GlobalBox} flex gap-3 p-3 items-center`}>
        <div className="bg-brand-gray rounded-md py-1 px-3 flex items-center">
          <Image src="/images/atra.png" alt="" width={24} height={37} />
        </div>
        <div className="flex flex-col text-brand-primary gap-1">
          <h1 className="font-semibold text-base">ATRA</h1>
          <p className="text-sm font-normal">SMS For DC</p>
        </div>
      </div>

      <div
        className={`flex flex-col p-3 flex-1 text-brand-primary gap-1 ${GlobalBox}`}
      >
        {ClientNavigationLinks.map((item) => (
          <Link
            key={item.route}
            href={"/" + locale + item.route}
            className={`flex items-center gap-2 p-2 mt-2 ${
              isActive(item.route)
                ? "text-white bg-brand-secondary rounded-xl"
                : "hover:bg-brand-gray hover:rounded-xl"
            }`}
          >
            {item.icon}
            <span className="text-base">{t(item.label)}</span>
          </Link>
        ))}
      </div>

      <div className={`${GlobalBox} p-[6px] text-brand-primary`}>
        <Link
          href="#"
          className="flex items-center gap-2 p-2  hover:bg-brand-gray hover:rounded-xl"
        >
          <div style={locale !== "en" ? { transform: "scaleX(-1)" } : {}}>
            <CiLogout size={20} />
          </div>
          <span className=" text-base">{t("logout")}</span>
        </Link>
      </div>
    </div>
  );
}
