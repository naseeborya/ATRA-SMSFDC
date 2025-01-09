import { useTranslations } from "next-intl";
import {
  FiRadio,
  FiHardDrive,
  FiTool,
  FiWifi,
  FiAperture,
} from "react-icons/fi";

export default function AvailableForms() {
  const t = useTranslations("landing-page");
  const forms = [
    { name: "base-station", icon: <FiRadio size={40} /> },
    { name: "fixed-base-station", icon: <FiHardDrive size={40} /> },
    { name: "equipment", icon: <FiTool size={40} /> },
    { name: "frequency", icon: <FiWifi size={40} /> },
    { name: "antena", icon: <FiAperture size={40} /> },
  ];

  return (
    <section className="px-[256px] pt-12 pb-20  ">
      <div className="container mx-auto text-center">
        <h2 className=" text-5xl font-medium text-brand-primary my-20">
          {t("available-forms")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {forms.map((form, index) => (
            <div
              key={index}
              className="bg-white  p-4 rounded-md hover:bg-brand-secondary duration-300 transition group"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-4 text-brand-primary group-hover:text-white">
                  {form.icon}
                </div>
                <h3 className=" font-semibold text-base text-brand-primary group-hover:text-white">
                  {t(form.name)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
