import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import FounderMessage from "../components/about/FounderMessage";
import CompanyValues from "../components/about/CompanyValues";
import CallToAction from "../components/home/CallToAction";

export default function About() {
  return (
    <main className="min-h-screen bg-[#07111F] pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <AboutHero />
      </div>

      <MissionVision />

      <FounderMessage />

      <CompanyValues />

      <CallToAction />
    </main>
  );
}