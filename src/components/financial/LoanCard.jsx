import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoanCard({ loan }) {
  return (
    <article className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.045] p-7 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-400 text-3xl shadow-lg shadow-amber-400/15 transition group-hover:rotate-3 group-hover:scale-105">
          {loan.icon}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
          JMK Finance
        </span>
      </div>

      <h3 className="mt-7 text-2xl font-black text-white">{loan.title}</h3>
      <p className="mt-4 leading-7 text-slate-400">{loan.description}</p>

      <ul className="mt-6 space-y-3">
        {loan.features?.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-300">
            <CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={18} />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={`/contact?service=${encodeURIComponent("Financial Servicess")}&loan=${encodeURIComponent(loan.title)}`}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-black text-slate-950 transition hover:bg-amber-300"
      >
        Apply Now <ArrowRight size={18} />
      </Link>
    </article>
  );
}
