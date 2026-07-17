import { useMemo, useState } from "react";

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000);

  const calculation = useMemo(() => {
    const safeBill = Math.max(Number(monthlyBill) || 0, 0);
    const recommendedKw = Math.max(Math.ceil(safeBill / 1000), 1);
    const monthlySaving = Math.round(safeBill * 0.85);
    const annualSaving = monthlySaving * 12;
    const estimatedCost = recommendedKw * 65000;

    return {
      recommendedKw,
      monthlySaving,
      annualSaving,
      estimatedCost,
    };
  }, [monthlyBill]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section
      id="solar-calculator"
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Solar Savings Calculator
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Estimate Your
              <span className="text-amber-400"> Solar Savings</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Enter your average monthly electricity bill to get a quick
              estimate of the recommended solar system and possible savings.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0d1b2f] p-7">
              <label
                htmlFor="monthlyBill"
                className="font-semibold text-white"
              >
                Average Monthly Electricity Bill
              </label>

              <div className="mt-4 flex items-center rounded-2xl border border-white/10 bg-[#101f37] px-5">
                <span className="text-xl font-bold text-amber-400">
                  ₹
                </span>

                <input
                  id="monthlyBill"
                  type="number"
                  min="0"
                  value={monthlyBill}
                  onChange={(event) => setMonthlyBill(event.target.value)}
                  className="w-full bg-transparent px-4 py-5 text-xl font-bold text-white outline-none"
                />
              </div>

              <input
                type="range"
                min="1000"
                max="100000"
                step="500"
                value={Math.min(Math.max(Number(monthlyBill) || 1000, 1000), 100000)}
                onChange={(event) => setMonthlyBill(event.target.value)}
                className="mt-8 w-full accent-amber-400"
              />

              <div className="mt-3 flex justify-between text-sm text-slate-500">
                <span>₹1,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label="Recommended System"
                value={`${calculation.recommendedKw} kW`}
              />

              <ResultCard
                label="Monthly Saving"
                value={formatCurrency(calculation.monthlySaving)}
              />

              <ResultCard
                label="Annual Saving"
                value={formatCurrency(calculation.annualSaving)}
              />

              <ResultCard
                label="Estimated System Cost"
                value={formatCurrency(calculation.estimatedCost)}
              />
            </div>
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-slate-500">
            This is an indicative estimate. Final capacity, subsidy and price
            depend on site conditions, electricity usage and technical survey.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0d1b2f] p-6">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-black text-amber-400">
        {value}
      </h3>
    </div>
  );
}