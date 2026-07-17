import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#07111F] pb-20 pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <ContactHero />

        <ContactInfo />

        <ContactForm />
      </div>
    </main>
  );
}