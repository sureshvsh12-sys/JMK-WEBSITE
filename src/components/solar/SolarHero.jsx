import { Link } from "react-router-dom";

export default function SolarHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#07111f] via-[#102c3d] to-[#155e4f] px-7 py-20 md:px-12">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-400/15 blur-[110px]" />
      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-emerald-400/15 blur-[120px]" />

      <div className="relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            JMK Solar Solutions
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Power Your Future
            <span className="block text-amber-400">
              With Clean Energy
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Residential, commercial and agricultural solar systems designed
            for long-term savings, reliable performance and a cleaner future.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-900 transition hover:scale-105 hover:bg-amber-300"
            >
              Get Free Solar Quote
            </Link>

            <a
              href="#solar-calculator"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Calculate Savings
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-[90px]" />

          <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-center text-8xl">
              ☀️
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-3xl font-black text-amber-400">
                  90%
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Bill Savings
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-3xl font-black text-amber-400">
                  25 Yr
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Panel Life
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-amber-400 p-5 text-center">
              <p className="font-bold text-slate-900">
                Start saving from your first electricity bill
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}