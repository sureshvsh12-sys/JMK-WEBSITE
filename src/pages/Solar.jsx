import {
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import SolarHero from "../components/solar/SolarHero";
import SolarSectionTitle from "../components/solar/SolarSectionTitle";
import SolarStats from "../components/solar/SolarStats";
import SolarCard from "../components/solar/SolarCard";
import SolarCalculator from "../components/solar/SolarCalculator";
import SolarProcess from "../components/solar/SolarProcess";
import SolarFeatures from "../components/solar/SolarFeatures";
import SolarLeadForm from "../components/solar/SolarLeadForm";
import solarServices from "../data/solar";
import { JMK_LINKS } from "../config/contact";

export default function Solar() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SolarHero />

        <div className="mt-24">
          <SolarSectionTitle />
        </div>

        <SolarStats />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {solarServices.map((service) => (
            <SolarCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>

      <SolarCalculator />

      <SolarProcess />

      <SolarFeatures />

      <SolarLeadForm />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <section className="mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#102c3d] to-[#155e4f] p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">
                Free Solar Consultation
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Apne electricity bill ki details share karein
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                JMK Solar Solutions team aapki requirement samajhkar
                suitable system capacity aur estimated savings ki
                guidance degi.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact?service=Solar%20Solutions#enquiry-form"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Get Solar Quote
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href={JMK_LINKS.phone}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href={JMK_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-7 py-4 font-black text-green-400 transition hover:-translate-y-1 hover:bg-green-500 hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}