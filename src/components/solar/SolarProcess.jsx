const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We understand your electricity usage, property type and solar requirement.",
  },
  {
    number: "02",
    title: "Site Survey",
    description:
      "Our technical team checks roof space, shadow area and electrical setup.",
  },
  {
    number: "03",
    title: "System Design",
    description:
      "We prepare the right system capacity, layout and savings proposal.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Professional installation is completed with quality equipment and safety.",
  },
  {
    number: "05",
    title: "Commissioning",
    description:
      "The system is tested, activated and connected for energy generation.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    description:
      "Our team remains available for maintenance and performance assistance.",
  },
];

export default function SolarProcess() {
  return (
    <section className="bg-[#0b1628] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            Installation Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            From Consultation To
            <span className="text-amber-400"> Clean Energy</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
            A transparent end-to-end process for safe installation, reliable
            performance and long-term energy savings.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40"
            >
              <span className="text-5xl font-black text-amber-400">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}