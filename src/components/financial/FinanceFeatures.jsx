import {
  BadgeCheck,
  FileCheck2,
  Handshake,
  Landmark,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Multiple Bank Options",
    description: "Applicant profile ke hisaab se suitable banking options compare karne mein help.",
    icon: Landmark,
  },
  {
    title: "Minimum Documentation",
    description: "Required documents ki clear checklist aur submission support.",
    icon: FileCheck2,
  },
  {
    title: "Eligibility Guidance",
    description: "Income, obligation aur profile ke basis par practical eligibility assessment.",
    icon: SearchCheck,
  },
  {
    title: "Transparent Process",
    description: "Application se disbursement tak har step ki clear information.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Assistance",
    description: "Aapke case ke liye continuous coordination aur timely updates.",
    icon: Handshake,
  },
  {
    title: "Professional Support",
    description: "Home, business, personal aur property loan requirements ke liye guidance.",
    icon: BadgeCheck,
  },
];

export default function FinanceFeatures() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0b1628] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Why JMK
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Better Guidance. Better
            <span className="text-amber-400"> Financial Decisions.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            JMK Financial Servicess ka focus sirf application submit karna nahi,
            balki customer ko suitable aur transparent solution tak pahunchana hai.
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
              <h3 className="mt-6 text-xl font-black text-white sm:text-2xl">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
