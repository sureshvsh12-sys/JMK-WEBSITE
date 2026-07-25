import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Requirement Discussion",
    description: "Loan purpose, amount, income profile aur current obligations samjhe jaate hain.",
  },
  {
    id: "02",
    title: "Eligibility & Documents",
    description: "Suitable options identify karke required documents ki clear checklist di jaati hai.",
  },
  {
    id: "03",
    title: "Application Processing",
    description: "Selected financial institution ke saath application submit aur coordinate ki jaati hai.",
  },
  {
    id: "04",
    title: "Approval & Disbursement",
    description: "Sanction, final formalities aur disbursement process mein continued assistance milti hai.",
  },
];

export default function LoanProcess() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Simple Process
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Loan Journey In
            <span className="text-amber-400"> Four Clear Steps</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Har stage par clarity, coordination aur practical assistance ke saath.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent lg:block" />

          {steps.map((step, index) => (
            <article
              key={step.id}
              className="group relative rounded-[28px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 sm:p-8"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-400 text-2xl font-black text-slate-950 shadow-lg shadow-amber-400/15">
                  {step.id}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="text-white/20 lg:hidden" size={24} />
                )}
              </div>

              <h3 className="mt-6 text-xl font-black text-white sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-400">
                <CheckCircle2 size={18} />
                Guided by JMK Team
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
