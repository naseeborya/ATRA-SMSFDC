import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("landing-page");
  return (
    <header
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        height: "599px",
      }}
    >
      <div className="absolute inset-0  flex items-end justify-left ">
        <div className=" px-[256px] pb-8">
          <h1 className="text-4xl font- font-medium mb-4 text-[72px]">
            {t("brand-name")}
          </h1>
          <p className="text-[40px] font-normal mb-6 ">
            {t("brand-desc-one")} <br></br> {t("brand-desc-two")}
          </p>
        </div>
      </div>
    </header>
  );
}
