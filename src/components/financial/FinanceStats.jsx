const stats = [
  {
    value: "₹100Cr+",
    label: "Loan Processed",
  },
  {
    value: "2500+",
    label: "Happy Clients",
  },
  {
    value: "25+",
    label: "Bank Partners",
  },
  {
    value: "99%",
    label: "Success Rate",
  },
];

export default function FinanceStats() {
  return (
    <section className="grid gap-6 py-12 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
        >
          <h3 className="text-5xl font-black text-amber-400">
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