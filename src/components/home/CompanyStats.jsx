import {
  Building2,
  IndianRupee,
  Smile,
  SunMedium,
} from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Happy Customers",
    description: "Customers served across our business divisions.",
    icon: Smile,
  },
  {
    value: "100+",
    label: "Property Options",
    description: "Residential, commercial and investment opportunities.",
    icon: Building2,
  },
  {
    value: "200+",
    label: "Finance Cases",
    description: "Loan and financial consultation cases supported.",
    icon: IndianRupee,
  },
  {
    value: "150+",
    label: "Solar Projects",
    description: "Residential and commercial solar requirements handled.",
    icon: SunMedium,
  },
];

export default function CompanyStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#07111f] via-[#0c1830] to-[#10284a] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400">
            JMK GROUP IN NUMBERS
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Growing Through Trust and
            <span className="text-amber-400"> Customer Support</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group rounded-[26px] border border-white/10 bg-white/[0.055] p-7 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.08]"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon size={27} />
                </span>

                <h3 className="mt-5 text-4xl font-black tracking-tight text-amber-400 sm:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-lg font-black text-white">
                  {item.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}