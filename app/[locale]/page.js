import Link from "next/link";
import FAQ from "../ui/components/landingpage-components/FAQ";
import Navbar from "../ui/components/landingpage-components/Navbar";
import Hero from "../ui/components/landingpage-components/Hero";
import SubHero from "../ui/components/landingpage-components/SubHero";
import AvailableForms from "../ui/components/landingpage-components/AvailableForms";
import Instructions from "../ui/components/landingpage-components/Instructions";
import Footer from "../ui/components/landingpage-components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <SubHero />
      <AvailableForms />
      <Instructions />
      <FAQ />
      <Footer />
    </div>
  );
}
