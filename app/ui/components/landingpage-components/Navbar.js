import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("landing-page");
  return (
    <nav className="absolute top-0 left-0 w-full z-10 flex items-center justify-between p-4 lg:px-[256px] md:px-20 sm:px-10">
      <div className="flex items-center gap-3 ">
        {/* Logo */}
        <Image src="/images/atra.png" alt="" width={30} height={30} />
        <h1 className="text-white text-xl font-normal">{t("brand-name")}</h1>
      </div>

      <Link
        href="/login"
        className=" bg-brand-secondary text-white px-8 py-3 rounded hover:bg-brand-primary transition duration-300"
      >
        Sign in
      </Link>
    </nav>
  );
}
