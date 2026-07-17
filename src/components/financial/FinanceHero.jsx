import { Link } from "react-router-dom";

export default function FinanceHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-[#07111F] via-[#0B1830] to-[#10284A] px-8 py-20">

      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative grid items-center gap-14 lg:grid-cols-2">

        <div>

          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            JMK FINANCIAL SERVICES
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Finance Made
            <span className="block text-amber-400">
              Simple & Secure
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Get the right financial solution for your dream home,
            business expansion or personal needs with expert guidance.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-amber-300"
            >
              Apply Now
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white hover:border-amber-400 hover:text-amber-400"
            >
              Learn More
            </Link>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg">
            <div className="text-5xl">🏠</div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Home Loan
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg">
            <div className="text-5xl">🏢</div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Business Loan
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg">
            <div className="text-5xl">💳</div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Personal Loan
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg">
            <div className="text-5xl">🏦</div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Mortgage Loan
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}