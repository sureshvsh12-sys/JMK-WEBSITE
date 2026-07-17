const steps = [
  {
    id: "01",
    title: "Free Consultation",
    description:
      "Discuss your financial requirement with our experts and choose the best loan option.",
  },
  {
    id: "02",
    title: "Document Verification",
    description:
      "Submit required documents for quick verification and eligibility checking.",
  },
  {
    id: "03",
    title: "Bank Approval",
    description:
      "We coordinate with our banking partners for the fastest possible approval.",
  },
  {
    id: "04",
    title: "Loan Disbursement",
    description:
      "After approval, your loan amount is processed and disbursed smoothly.",
  },
];

export default function LoanProcess() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Loan Process
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            A simple and transparent process designed to make your
            loan approval faster and stress free.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2"
            >
              <div className="text-5xl font-black text-amber-400">
                {step.id}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}