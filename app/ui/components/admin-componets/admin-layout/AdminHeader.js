"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GlobalBox } from "@/app/lib/constants/global-classes";

import { IoNotificationsOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function AdminHeader() {
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

  const t = useTranslations("admin-header");
  return (
    <header className={`${GlobalBox} flex items-center justify-between `}>
      <div className=" flex flex-col text-brand-primary px-5 py-3 ">
        <h1 className=" text-xl font-normal ">{t("welcome")}</h1>
        <p className="text-sm">{t("role")}</p>
      </div>

      <div className="flex px-5 items-center gap-3">
        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className=" group relative text-brand-primary border-1 border-brand-primary p-3 rounded-xl hover:bg-brand-secondary hover:text-white hover:border-brand-secondary cursor-pointer"
            onClick={toggleDropdown}
          >
            <GrLanguage size={20} />
            <div className=" absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-brand-secondary text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-brand-secondary ">
              <span className=" ">En</span>
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

        {/* Notification Icon */}
        <div className="group relative text-brand-primary border-1 border-brand-primary p-3 rounded-xl hover:bg-brand-secondary hover:text-white hover:border-brand-secondary">
          <IoNotificationsOutline size={20} />
          <div className=" absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-brand-secondary group-hover:bg-white group-hover:text-brand-secondary text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center  ">
            <span className=" ">10</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
