const features = [
  {
    icon: "⚡",
    title: "High-Efficiency Systems",
    description:
      "Quality solar panels and inverters selected for reliable energy generation.",
  },
  {
    icon: "🛡️",
    title: "Safe Installation",
    description:
      "Professional mounting, wiring and electrical protection for long-term safety.",
  },
  {
    icon: "📋",
    title: "Subsidy Guidance",
    description:
      "Support for eligible residential subsidy documentation and process guidance.",
  },
  {
    icon: "📊",
    title: "Savings Analysis",
    description:
      "Clear estimates for system capacity, generation, savings and project value.",
  },
  {
    icon: "🔧",
    title: "After-Sales Support",
    description:
      "Responsive assistance for system performance, inspection and maintenance.",
  },
  {
    icon: "🌱",
    title: "Clean Energy Future",
    description:
      "Reduce electricity costs and dependence on conventional power sources.",
  },
];

export default function SolarFeatures() {
  return (
    <section className="bg-[#07111f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            Why Choose JMK
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Reliable Solar.
            <span className="text-amber-400"> Complete Support.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}