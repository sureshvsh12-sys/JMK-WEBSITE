import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Handshake,
  IndianRupee,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Real Estate",
    description:
      "Residential, commercial and investment property guidance.",
    icon: Building2,
  },
  {
    title: "Financial Servicess",
    description:
      "Home, business and property finance consultation.",
    icon: IndianRupee,
  },
  {
    title: "Solar Solutions",
    description:
      "Residential and commercial rooftop solar systems.",
    icon: SunMedium,
  },
  {
    title: "Customer First",
    description:
      "Transparent support from consultation to completion.",
    icon: Handshake,
  },
];

const trustPoints = [
  "Professional guidance",
  "Transparent process",
  "Long-term relationships",
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-amber-400/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-blue-500/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] xl:gap-20">
          <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[30px] border border-amber-400/20 bg-amber-400/5" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <div className="aspect-[4/5] overflow-hidden rounded-[30px]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=85"
                  alt="Modern commercial building representing JMK Group"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-x-2 bottom-2 rounded-b-[30px] bg-gradient-to-t from-[#020b15] via-[#020b15]/65 to-transparent px-7 pb-7 pt-28">
                <div className="flex items-center gap-3 text-white">
                  <BadgeCheck
                    size={25}
                    className="shrink-0 text-amber-400"
                  />
                  <p className="font-bold">
                    Trusted solutions under one JMK brand
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-2 rounded-[26px] border border-amber-300/40 bg-amber-400 px-7 py-6 text-slate-950 shadow-2xl shadow-amber-400/20 sm:-right-8 sm:px-9">
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                10+
              </p>
              <p className="mt-1 font-bold">
                Years of Trust
              </p>
            </div>

            <div className="absolute -left-3 bottom-16 hidden rounded-2xl border border-white/10 bg-[#0c1830]/95 p-4 text-white shadow-xl backdrop-blur-xl sm:flex sm:items-center sm:gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-green-500/15 text-green-400">
                <ShieldCheck size={23} />
              </span>

              <span>
                <strong className="block text-sm">
                  Complete Transparency
                </strong>
                <small className="text-slate-400">
                  At every step
                </small>
              </span>
            </div>
          </div>

          <div>
            <SectionTitle
              badge="ABOUT JMK GROUP"
              title="Building Trust,"
              highlight="Creating Lasting Value"
              subtitle="JMK GROUP brings trusted Real Estate, Financial Servicess and Solar Solutions together under one professional brand."
              align="left"
            />

            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              We simplify important decisions through honest consultation,
              practical solutions and dependable support. From selecting a
              property and arranging finance to installing solar energy, our
              team remains connected with every customer from the first
              conversation to final execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                >
                  <BadgeCheck
                    size={17}
                    className="text-amber-400"
                  />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400/35 hover:bg-white/[0.07]"
                  >
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                        <Icon size={24} />
                      </span>

                      <div>
                        <h3 className="text-lg font-black text-white">
                          {service.title}
                        </h3>

                        <p className="mt-2 leading-6 text-slate-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-400/15 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              Discover JMK Group
              <ArrowRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
