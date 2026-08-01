import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import BusinessDivisions from "../components/home/BusinessDivisions";
import CompanyStats from "../components/home/CompanyStats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Testimonials from "../components/home/Testimonials";
import ContactPreview from "../components/home/ContactPreview";
import CallToAction from "../components/home/CallToAction";
import FounderMessage from "../components/about/FounderMessage";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutPreview />

      <BusinessDivisions />

      <CompanyStats />

      <WhyChooseUs />

      <FeaturedProperties />

      <Testimonials />

      <ContactPreview />

      <FounderMessage />

      <CallToAction />
    </main>
  );
}