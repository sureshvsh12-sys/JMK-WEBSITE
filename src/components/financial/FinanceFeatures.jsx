const features = [
  "Fast Loan Approval",
  "Minimum Documentation",
  "Multiple Bank Options",
  "Expert Financial Guidance",
  "Transparent Process",
  "Dedicated Relationship Manager",
];

export default function FinanceFeatures() {
  return (
    <section className="py-24 bg-[#0B1628]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black text-white">
          Why Choose
          <span className="text-amber-400"> JMK Financial Servicess</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-xl font-semibold text-white transition hover:border-amber-400/40 hover:-translate-y-2"
            >
              ✅ {feature}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}