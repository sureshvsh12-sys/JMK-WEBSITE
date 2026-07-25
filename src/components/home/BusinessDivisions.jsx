import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  SunMedium,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const divisions = [
  {
    icon: Building2,
    title: "JMK Assets",
    subtitle: "Real Estate",
    description:
      "Premium residential, commercial and investment properties across Madhya Pradesh.",
    points: ["Residential & commercial", "Verified opportunities"],
    route: "/assets",
    number: "01",
  },
  {
    icon: BadgeIndianRupee,
    title: "JMK Financial Servicess",
    subtitle: "Finance",
    description:
      "Loans, finance consultancy and complete financial solutions for families and businesses.",
    points: ["Multiple loan solutions", "Professional guidance"],
    route: "/financial",
    number: "02",
  },
  {
    icon: SunMedium,
    title: "JMK Solar Solutions",
    subtitle: "Solar Energy",
    description:
      "Residential and commercial solar projects with installation and dependable after-sales support.",
    points: ["Lower electricity costs", "End-to-end installation"],
    route: "/solar",
    number: "03",
  },
];

export default function BusinessDivisions() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          badge="OUR BUSINESS"
          title="Three Powerful"
          highlight="Divisions"
          subtitle="One trusted brand delivering Real Estate, Finance and Solar solutions under one roof."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {divisions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-amber-400/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/25 sm:p-8"
              >
                <span className="pointer-events-none absolute right-6 top-4 text-6xl font-black text-white/[0.035] transition duration-500 group-hover:text-amber-400/[0.08] sm:text-7xl">
                  {item.number}
                </span>

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Icon size={31} strokeWidth={2.2} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="relative z-10 mt-7 text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-amber-400">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="relative z-10 mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-amber-400"
                      />
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  to={item.route}
                  className="relative z-10 mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
                >
                  Explore Division
                  <ArrowRight
                    size={19}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
