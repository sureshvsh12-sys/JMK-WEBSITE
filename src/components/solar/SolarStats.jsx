const stats = [
  {
    value: "150+",
    label: "Solar Projects",
  },
  {
    value: "500kW+",
    label: "Installed Capacity",
  },
  {
    value: "90%",
    label: "Electricity Savings",
  },
  {
    value: "25 Years",
    label: "Panel Performance",
  },
];

export default function SolarStats() {
  return (
    <section className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-amber-400/40"
        >
          <h3 className="text-4xl font-black text-amber-400 md:text-5xl">
            {item.value}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}