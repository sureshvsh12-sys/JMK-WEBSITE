import { useState } from "react";

export default function EMICalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  const emi =
    monthlyRate === 0
      ? amount / months
      : (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-lg">

        <h2 className="text-4xl font-black text-center text-white">
          EMI Calculator
        </h2>

        <div className="mt-10 grid gap-6">

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="rounded-xl bg-[#101D35] p-4 text-white"
            placeholder="Loan Amount"
          />

          <input
            type="number"
            value={rate}
            step="0.1"
            onChange={(e) => setRate(Number(e.target.value))}
            className="rounded-xl bg-[#101D35] p-4 text-white"
            placeholder="Interest Rate"
          />

          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="rounded-xl bg-[#101D35] p-4 text-white"
            placeholder="Years"
          />

        </div>

        <div className="mt-10 rounded-2xl bg-amber-400 p-8 text-center">
          <h3 className="text-lg font-semibold text-slate-800">
            Estimated Monthly EMI
          </h3>

          <p className="mt-3 text-5xl font-black text-slate-900">
            ₹ {emi.toFixed(0)}
          </p>
        </div>

      </div>
    </section>
  );
}