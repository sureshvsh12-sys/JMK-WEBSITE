import {
  BadgeCheck,
  Gauge,
  Headphones,
  Leaf,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Quality Equipment",
    description: "Reliable panels, inverter aur structure options selected for performance and durability.",
    icon: BadgeCheck,
  },
  {
    title: "Professional Installation",
    description: "Safe wiring, mounting aur commissioning ke saath systematic installation process.",
    icon: Wrench,
  },
  {
    title: "Performance Focus",
    description: "Roof space, shadow aur consumption pattern ke hisaab se suitable system planning.",
    icon: Gauge,
  },
  {
    title: "Long-term Protection",
    description: "Equipment warranty aur system documentation ke baare mein clear guidance.",
    icon: ShieldCheck,
  },
  {
    title: "Clean Energy",
    description: "Electricity cost reduce karne ke saath environment-friendly energy generation.",
    icon: Leaf,
  },
  {
    title: "After-Sales Support",
    description: "Installation ke baad performance aur service assistance ke liye continued support.",
    icon: Headphones,
  },
];

export default function SolarFeatures() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0b1628] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Why Choose JMK Solar
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Built For Reliable
            <span className="text-amber-400"> Long-Term Savings</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            System selection se installation aur support tak practical, transparent aur professional approach.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] sm:p-8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400 text-slate-950 transition group-hover:rotate-3 group-hover:scale-105">
                <Icon size={28} />
              </span>
              <h3 className="mt-6 text-xl font-black text-white sm:text-2xl">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
