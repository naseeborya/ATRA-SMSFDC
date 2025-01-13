"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GrLanguage } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ locale }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const selectLanguage = (language) => {
    const currentPath = window.location.pathname; // Get the current URL path
    const newLocale = language.toLowerCase(); // Convert language to lowercase (e.g., "en", "ps", "fa")

    // Construct the new URL with the updated locale
    const newPath = `/${newLocale}${currentPath.replace(/^\/(en|ps|fa)/, "")}`;

    router.push(newPath); // Navigate to the new URL
    console.log(`Selected language: ${language}`);
    setIsDropdownOpen(false); // Close the dropdown
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const t = useTranslations("landing-page");
  return (
    <nav className="absolute top-0 left-0 w-full z-10 flex items-center justify-between p-4 lg:px-[256px] md:px-20 sm:px-10">
      <div className="flex items-center gap-3 ">
        {/* Logo */}
        <Image src="/images/atra.png" alt="" width={30} height={30} />
        <h1 className="text-white text-xl font-normal">{t("brand-name")}</h1>
      </div>
      <div className="relative" ref={dropdownRef}>
        <div
          className=" group relative text-white border-1 border-white p-3 rounded-xl hover:bg-brand-secondary hover:text-white hover:border-brand-secondary cursor-pointer"
          onClick={toggleDropdown}
        >
          <GrLanguage size={20} />
          <div className=" absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-brand-secondary text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-brand-secondary ">
            <span className=" ">{locale}</span>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-20 bg-white border border-brand-light rounded-2xl right-[-50%] shadow-lg z-10">
            <ul className="p-2 space-y-1">
              <li
                className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                onClick={() => selectLanguage("en")}
              >
                English
              </li>
              <li
                className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                onClick={() => selectLanguage("ps")}
              >
                Pashto
              </li>
              <li
                className="text-sm text-brand-primary cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                onClick={() => selectLanguage("fa")}
              >
                Dari
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* <Link
        href="/login"
        className=" bg-brand-secondary text-white px-8 py-3 rounded hover:bg-brand-primary transition duration-300"
      >
        Sign in
      </Link> */}
    </nav>
  );
}
