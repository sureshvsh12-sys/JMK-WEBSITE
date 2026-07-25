import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Home,
  Landmark,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { label: "Home Loan", icon: Home },
  { label: "Business Loan", icon: Building2 },
  { label: "Personal Loan", icon: UserRound },
  { label: "Mortgage Loan", icon: Landmark },
];

export default function FinanceHero() {
  return (
    <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#07111f] via-[#0b1b34] to-[#12345a] px-6 py-14 shadow-2xl shadow-black/20 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-amber-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-blue-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-amber-300 sm:px-5 sm:text-xs">
            <ShieldCheck size={16} />
            JMK Financial Servicess
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Finance Made
            <span className="block bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Simple, Clear & Secure
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Home, business, personal aur property loan ke liye expert guidance,
            transparent process aur multiple bank options — sab ek hi jagah.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <BadgeCheck size={17} className="text-amber-400" />
              Minimum Documentation
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <BadgeCheck size={17} className="text-amber-400" />
              Dedicated Assistance
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact?service=finance"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300"
            >
              Apply for Loan
              <ArrowRight size={20} className="transition group-hover:translate-x-1" />
            </Link>

            <a
              href="#emi-calculator"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
            >
              Calculate EMI
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {products.map(({ label, icon: Icon }, index) => (
            <article
              key={label}
              className={`group rounded-[26px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-amber-400/45 hover:bg-white/[0.08] sm:p-7 ${
                index % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/15 transition group-hover:rotate-3 group-hover:scale-105">
                <Icon size={28} />
              </span>
              <h3 className="mt-5 text-lg font-black text-white sm:text-xl">
                {label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Eligibility aur suitable bank option ke liye professional guidance.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
