import {
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const points = [
  {
    title: "Trusted Local Brand",
    description:
      "A growing business brand focused on Dewas and customers across Madhya Pradesh.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Guidance",
    description:
      "Practical support for property, financial and solar-related decisions.",
    icon: Users,
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and honest guidance throughout every customer journey.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Support",
    description:
      "Responsive assistance from initial enquiry to service completion.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0b1628] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-blue-500/8 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-400/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          badge="WHY JMK"
          title="Why Choose"
          highlight="JMK GROUP"
          subtitle="We combine customer-focused guidance, transparent processes and professional support under one trusted brand."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/35 hover:bg-white/[0.07] sm:p-8"
              >
                <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.035]">
                  0{index + 1}
                </span>

                <div className="relative flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Icon size={27} />
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}