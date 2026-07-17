export default function LoanCard({ loan }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-amber-400/40">
      <div className="text-5xl">
        {loan.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {loan.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {loan.description}
      </p>

      <button className="mt-8 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300">
        Apply Now →
      </button>
    </div>
  );
}