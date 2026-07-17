import {
  BadgeCheck,
  Building2,
  Handshake,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Residential Options",
    icon: Building2,
  },
  {
    value: "65+",
    label: "Commercial Options",
    icon: MapPinned,
  },
  {
    value: "500+",
    label: "Customers Assisted",
    icon: Handshake,
  },
  {
    value: "100%",
    label: "Professional Guidance",
    icon: BadgeCheck,
  },
];

export default function PropertyStats() {
  return (
    <section className="grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.label}
            className="group rounded-[26px] border border-white/10 bg-white/[0.045] p-7 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-amber-400/35 hover:bg-white/[0.07]"
          >
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
              <Icon size={27} />
            </span>

            <h3 className="mt-5 text-4xl font-black tracking-tight text-amber-400">
              {item.value}
            </h3>

            <p className="mt-3 font-bold text-slate-200">
              {item.label}
            </p>
          </article>
        );
      })}
    </section>
  );
}