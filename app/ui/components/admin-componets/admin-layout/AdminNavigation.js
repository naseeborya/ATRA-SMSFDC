"use client";
import { GlobalBox } from "@/app/lib/constants/global-classes";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AdminNavigationLinks } from "@/app/lib/constants/navigation-links";
import { CiLogout } from "react-icons/ci";
import { useTranslations } from "next-intl";

export default function AdminNavigation({ locale }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === "/" + locale + path;
  const t = useTranslations("admin-navigation");
  return (
    <div className="flex flex-col gap-4 w-96 h-screen sticky top-0 left-0 py-7 ps-14">
      {/* Header */}
      <div className={`${GlobalBox} flex gap-2 p-3 items-center`}>
        <div className="bg-brand-gray rounded-md py-1 px-3 flex items-center">
          <Image src="/images/atra.png" alt="" width={24} height={37} />
        </div>
        <div className="flex flex-col text-brand-primary gap-1">
          <h1 className=" font-bold text-base">{t("atra-admin")}</h1>
          <p className="text-sm font-normal">{t("sms")}</p>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`flex flex-col p-3 flex-1 text-brand-primary gap-1 ${GlobalBox}`}
      >
        {AdminNavigationLinks.map((item) => (
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
            <span className="text-base font-medium">{t(item.label)}</span>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className={`${GlobalBox} p-2 text-brand-primary`}>
        <Link
          href="#"
          className="flex items-center gap-2 p-2 hover:bg-brand-gray hover:rounded-xl"
        >
          <div style={locale !== "en" ? { transform: "scaleX(-1)" } : {}}>
            <CiLogout size={20} />
          </div>
          <span className="text-base font-medium">{t("logout")}</span>
        </Link>
      </div>
    </div>
  );
}
