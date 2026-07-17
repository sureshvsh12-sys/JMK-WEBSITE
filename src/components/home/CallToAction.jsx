import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { JMK_LINKS } from "../../config/contact";

const highlights = [
  {
    title: "Quick Assistance",
    description: "Connect directly with the JMK team.",
    icon: Phone,
  },
  {
    title: "Transparent Guidance",
    description: "Clear information before every decision.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted JMK Brand",
    description: "Three professional divisions under one group.",
    icon: BadgeCheck,
  },
];

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#07111f] via-[#0c1830] to-[#10284a] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400">
          <BadgeCheck size={16} />
          Start Today
        </span>

        <h2 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Let&apos;s Build Your
          <span className="block text-amber-400">
            Dream Future Together
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Whether you are searching for the right property, need financial
          guidance or are planning a solar installation, the JMK GROUP team is
          ready to assist you.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            Submit Enquiry

            <ArrowRight
              size={20}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>

          <a
            href={JMK_LINKS.phone}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-8 py-4 font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href={JMK_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-8 py-4 font-black text-green-400 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-amber-400/10 text-amber-400">
                  <Icon size={24} />
                </span>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}