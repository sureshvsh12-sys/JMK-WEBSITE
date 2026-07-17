import {
  Handshake,
  Rocket,
  Target,
} from "lucide-react";

const items = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To simplify finance, real estate and solar solutions through professional guidance, transparent processes and dependable customer support.",
    icon: Target,
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "To build JMK GROUP into a trusted integrated business brand with a strong presence across Madhya Pradesh and future expansion beyond.",
    icon: Rocket,
  },
  {
    number: "03",
    title: "Our Commitment",
    description:
      "To create long-term value by understanding customer requirements, communicating clearly and supporting every customer responsibly.",
    icon: Handshake,
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Our Direction
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Purpose That Drives
            <span className="text-amber-400">
              {" "}JMK GROUP
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
            Our mission, vision and commitment guide every customer
            relationship and every business decision.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/35 hover:bg-white/[0.07] sm:p-8"
              >
                <span className="absolute right-6 top-3 text-7xl font-black text-white/[0.035]">
                  {item.number}
                </span>

                <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon size={30} />
                </span>

                <h3 className="relative mt-7 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="relative mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>

                <div className="relative mt-7 h-1 w-16 rounded-full bg-amber-400/70 transition-all duration-300 group-hover:w-28" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}