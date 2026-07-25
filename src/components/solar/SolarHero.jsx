import {
  ArrowRight,
  BadgeIndianRupee,
  BatteryCharging,
  Leaf,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { value: "Up to 90%", label: "Bill Savings", icon: Zap },
  { value: "25+ Years", label: "Panel Life", icon: ShieldCheck },
  { value: "Clean Energy", label: "Green Future", icon: Leaf },
  { value: "Smart ROI", label: "Long-term Value", icon: BadgeIndianRupee },
];

export default function SolarHero() {
  return (
    <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#07111f] via-[#0c2b36] to-[#145c4d] px-6 py-14 shadow-2xl shadow-black/20 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-amber-400/18 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-emerald-400/18 blur-[130px]" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-amber-300">
            <SunMedium size={17} /> JMK Solar Solutions
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Power Your Future
            <span className="block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              With Clean Energy
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Residential, commercial aur agricultural requirements ke liye reliable solar systems,
            professional installation aur long-term savings guidance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact?service=solar"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300"
            >
              Get Free Solar Quote
              <ArrowRight size={20} className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href="#solar-calculator"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
            >
              <BatteryCharging size={20} /> Calculate Savings
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {benefits.map(({ value, label, icon: Icon }, index) => (
            <article
              key={label}
              className={`group rounded-[26px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-400/45 sm:p-7 ${
                index % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <span className="grid h-13 w-13 place-items-center rounded-2xl bg-amber-400 text-slate-950 transition group-hover:rotate-3 group-hover:scale-105 sm:h-14 sm:w-14">
                <Icon size={27} />
              </span>
              <p className="mt-5 text-xl font-black text-white sm:text-2xl">{value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-400">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
