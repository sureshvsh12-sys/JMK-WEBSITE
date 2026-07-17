import {
  ArrowRight,
  Building2,
  IndianRupee,
  MessageCircle,
  SunMedium,
} from "lucide-react";
import { Link } from "react-router-dom";
import LogoMark from "../brand/LogoMark";
import { JMK_LINKS } from "../../config/contact";

const divisions = [
  {
    title: "Financial Servicess",
    icon: IndianRupee,
  },
  {
    title: "JMK Assets",
    icon: Building2,
  },
  {
    title: "Solar Solutions",
    icon: SunMedium,
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#07111f] via-[#0b1830] to-[#10284a] px-6 py-16 shadow-2xl shadow-black/20 sm:px-9 md:py-20 lg:px-14">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            About JMK GROUP
          </span>

          <h1 className="mt-7 text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            One Trusted Group.
            <span className="block text-amber-400">
              Three Powerful Businesses.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            JMK GROUP brings Financial Servicess, Real Estate and Solar
            Solutions together under one professional, transparent and
            customer-focused corporate identity.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {divisions.map((division) => {
              const Icon = division.icon;

              return (
                <div
                  key={division.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
                    <Icon size={20} />
                  </span>

                  <span className="text-sm font-bold text-slate-200">
                    {division.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              Connect With Us

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href={JMK_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-8 py-4 font-black text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-[100px]" />

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-amber-400/30 bg-white/[0.045] shadow-2xl shadow-black/30 backdrop-blur-xl sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]">
              <div className="absolute inset-5 rounded-full border border-white/10" />

              <LogoMark size={245} />
            </div>

            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-amber-400/30 bg-[#07111f] px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-amber-400 shadow-xl">
              Trust • Growth • Future
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}