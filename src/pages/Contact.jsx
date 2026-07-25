import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import { JMK_CONTACT, JMK_LINKS } from "../config/contact";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#07111F] pb-20 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <ContactHero />
        <ContactInfo />

        <section className="mb-20 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400">Visit Our Office</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">JMK GROUP, Dewas</h2>
              <p className="mt-5 leading-8 text-slate-300">{JMK_CONTACT.address}</p>
              <a href={JMK_LINKS.googleMaps} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-amber-400 px-7 py-3.5 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300">Open in Google Maps</a>
            </div>
            <iframe title="JMK GROUP office location" src={JMK_LINKS.googleMapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[360px] w-full border-0 lg:min-h-[430px]" />
          </div>
        </section>

        <ContactForm />
      </div>
    </main>
  );
}
