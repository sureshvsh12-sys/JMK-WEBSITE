import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  IndianRupee,
  MapPin,
  Phone,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import { Link } from "react-router-dom";
import LogoMark from "../brand/LogoMark";
import { JMK_LINKS } from "../../config/contact";

const businessDivisions = [
  {
    title: "JMK Assets",
    description: "Premium Real Estate Projects & Properties",
    path: "/assets",
    icon: Building2,
    iconClass: "bg-amber-400 text-slate-950",
    linkClass: "text-amber-500",
  },
  {
    title: "JMK Financial Servicess",
    description: "Loans, Investments & Financial Solutions",
    path: "/financial",
    icon: IndianRupee,
    iconClass: "bg-green-500 text-white",
    linkClass: "text-green-600",
  },
  {
    title: "JMK Solar Solutions",
    description: "Rooftop Solar Systems & Green Energy Solutions",
    path: "/solar",
    icon: SunMedium,
    iconClass: "bg-blue-600 text-white",
    linkClass: "text-blue-600",
  },
];

const trustPoints = [
  {
    label: "Trusted Guidance",
    icon: ShieldCheck,
  },
  {
    label: "Transparent Process",
    icon: BadgeCheck,
  },
  {
    label: "Across Madhya Pradesh",
    icon: MapPin,
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020b15] pt-[92px] text-white sm:pt-[104px]">
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#020b15]/98 via-[#03111e]/94 to-[#020b15]/66" />

      <div className="hero-grid absolute inset-0 -z-10 opacity-70" />

      <div className="pointer-events-none absolute -left-48 top-28 h-[430px] w-[430px] rounded-full bg-amber-400/10 blur-[145px]" />

      <div className="pointer-events-none absolute -right-48 top-24 h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="mx-auto max-w-[1500px] px-5 pb-8 pt-12 sm:px-6 lg:px-10 lg:pt-14 xl:px-12 xl:pt-16">
        <div className="grid min-h-[680px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] xl:gap-14">
          <div className="relative z-20 mx-auto max-w-[610px] text-center lg:mx-0 lg:text-left">
            <span className="reveal inline-flex items-center rounded-full border border-amber-400/60 bg-black/25 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.22em] text-amber-400 shadow-lg shadow-black/20 backdrop-blur-md sm:px-6 sm:py-3 sm:text-xs">
              JMK GROUP
              <ArrowRight size={17} className="ml-2" />
            </span>

            <h1 className="reveal-delay mt-7 text-[clamp(3.35rem,7.2vw,7rem)] font-black leading-[0.92] tracking-[-0.065em] sm:mt-8">
              <span className="block text-white">
                Building
              </span>

              <span className="block text-gold-gradient">
                Trust.
              </span>

              <span className="mt-2 block text-white">
                Creating
              </span>

              <span className="block text-gold-gradient">
                Future.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300 sm:mt-8 sm:text-lg lg:mx-0">
              One trusted company delivering premium Real Estate,
              Financial Servicess and Solar Solutions across Madhya
              Pradesh.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {trustPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <span
                    key={point.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-md"
                  >
                    <Icon
                      size={16}
                      className="text-amber-400"
                    />

                    {point.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href={JMK_LINKS.phone}
                className="animate-shine inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
              >
                <Phone size={20} />
                Call Now
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/60 bg-black/20 px-8 py-4 font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
              >
                Get Consultation
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-300 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-green-400"
                />

                Customer-first service
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-green-400"
                />

                Complete business support
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[470px] items-center justify-center sm:min-h-[550px] lg:min-h-[620px]">
            <div className="absolute inset-x-[12%] top-[17%] h-[56%] rounded-full bg-amber-400/10 blur-[105px]" />

            <div className="absolute left-0 top-[8%] z-30 hidden min-w-[210px] rounded-2xl border border-amber-400/35 bg-[#07111f]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl xl:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-400">
                One Group
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Three Trusted Divisions
              </p>
            </div>

            <div className="absolute bottom-[13%] right-[1%] z-30 hidden rounded-2xl border border-white/10 bg-[#07111f]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl xl:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500/15 text-green-400">
                  <BadgeCheck size={22} />
                </span>

                <span>
                  <strong className="block text-sm text-white">
                    Professional Support
                  </strong>

                  <small className="text-slate-400">
                    From enquiry to execution
                  </small>
                </span>
              </div>
            </div>

            <div className="relative z-10 flex w-full justify-center overflow-visible">
              <LogoMark
                size={560}
                animated
                className="w-full max-w-[560px]"
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 overflow-hidden rounded-[28px] border border-white/80 bg-white text-slate-950 shadow-2xl shadow-black/40">
          <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {businessDivisions.map((division) => {
              const Icon = division.icon;

              return (
                <Link
                  key={division.title}
                  to={division.path}
                  className="group flex items-center gap-5 p-6 transition duration-300 hover:bg-slate-50 lg:p-7"
                >
                  <span
                    className={`grid h-16 w-16 shrink-0 place-items-center rounded-full shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:h-20 sm:w-20 ${division.iconClass}`}
                  >
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-lg font-black lg:text-xl">
                      {division.title}
                    </strong>

                    <span className="mt-2 block max-w-[270px] leading-6 text-slate-600">
                      {division.description}
                    </span>

                    <span
                      className={`mt-3 inline-flex items-center gap-2 font-black ${division.linkClass}`}
                    >
                      Explore

                      <ArrowRight
                        size={17}
                        className="transition duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}