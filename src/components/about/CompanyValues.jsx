import {
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  SearchCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Trust",
    description:
      "We build customer relationships through honesty, responsibility and dependable guidance.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "We believe in clear communication, practical information and transparent processes.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Quality",
    description:
      "We maintain professional standards across finance, property and solar services.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Innovation",
    description:
      "We use modern systems and technology to improve customer service and business efficiency.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Customer First",
    description:
      "Every service begins with understanding the customer’s actual requirement and long-term benefit.",
    icon: Users,
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We aim to create sustainable growth for customers, employees, partners and communities.",
    icon: TrendingUp,
  },
];

export default function CompanyValues() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-amber-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Core Values
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            The Values That Guide
            <span className="text-amber-400">
              {" "}JMK GROUP
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
            These principles define how we work, serve customers and
            build long-term business relationships.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] sm:p-8"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-white/[0.035]">
                  {value.number}
                </span>

                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon size={27} />
                </span>

                <h3 className="relative mt-6 text-2xl font-black text-white">
                  {value.title}
                </h3>

                <p className="relative mt-4 leading-7 text-slate-400">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-[30px] border border-amber-400/20 bg-gradient-to-r from-amber-400/10 via-white/[0.035] to-blue-500/10 px-6 py-8 text-center sm:px-10">
          <p className="text-lg font-bold leading-8 text-slate-200 sm:text-xl">
            Our promise is simple:
            <span className="text-amber-400">
              {" "}honest guidance, professional service and long-term
              customer support.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}