import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    description: "Electricity bill, property type aur expected solar requirement samjhi jaati hai.",
  },
  {
    number: "02",
    title: "Site Survey",
    description: "Roof space, shadow, direction aur electrical setup ka technical assessment hota hai.",
  },
  {
    number: "03",
    title: "System Proposal",
    description: "Suitable capacity, equipment options, estimated generation aur savings proposal diya jaata hai.",
  },
  {
    number: "04",
    title: "Installation",
    description: "Quality mounting, wiring aur safety standards ke saath professional installation hota hai.",
  },
  {
    number: "05",
    title: "Testing & Handover",
    description: "System testing, commissioning aur basic usage guidance complete ki jaati hai.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    description: "Performance, maintenance aur service requirements ke liye continued assistance milti hai.",
  },
];

export default function SolarProcess() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Installation Process
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Consultation Se
            <span className="text-amber-400"> Clean Energy Tak</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Safe installation aur reliable performance ke liye clear six-step process.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 sm:p-8"
            >
              <span className="absolute right-5 top-0 text-8xl font-black text-white/[0.025]">
                {step.number}
              </span>
              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-400 text-2xl font-black text-slate-950 shadow-lg shadow-amber-400/15">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-black text-white sm:text-2xl">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{step.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-400">
                  <CheckCircle2 size={18} /> JMK Team Assistance
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
