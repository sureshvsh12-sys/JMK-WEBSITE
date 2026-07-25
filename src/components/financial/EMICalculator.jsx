import { Calculator, IndianRupee, Percent, Timer } from "lucide-react";
import { useMemo, useState } from "react";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

export default function EMICalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const principal = Math.max(Number(amount) || 0, 0);
    const annualRate = Math.max(Number(rate) || 0, 0);
    const tenureYears = Math.max(Number(years) || 1, 1);
    const months = tenureYears * 12;
    const monthlyRate = annualRate / 12 / 100;
    const emi =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = Math.max(totalPayment - principal, 0);

    return { emi, totalPayment, totalInterest };
  }, [amount, rate, years]);

  return (
    <section id="emi-calculator" className="py-20 sm:py-24">
      <div className="overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-6 backdrop-blur-xl sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-amber-400">
            <Calculator size={16} /> EMI Calculator
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Plan Your Monthly
            <span className="text-amber-400"> EMI</span>
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            Loan amount, interest rate aur tenure enter karke indicative EMI dekhein.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[28px] border border-white/10 bg-[#0b1729] p-6 sm:p-8">
            <Field
              id="loan-amount"
              label="Loan Amount"
              icon={IndianRupee}
              value={amount}
              onChange={setAmount}
              min={100000}
              max={50000000}
              step={50000}
            />
            <Field
              id="interest-rate"
              label="Interest Rate (%)"
              icon={Percent}
              value={rate}
              onChange={setRate}
              min={1}
              max={24}
              step={0.1}
            />
            <Field
              id="loan-tenure"
              label="Tenure (Years)"
              icon={Timer}
              value={years}
              onChange={setYears}
              min={1}
              max={30}
              step={1}
            />
          </div>

          <div className="rounded-[28px] bg-amber-400 p-7 text-slate-950 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-700">
              Estimated Monthly EMI
            </p>
            <p className="mt-3 text-4xl font-black sm:text-6xl">
              {formatCurrency(result.emi)}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ResultCard label="Principal Amount" value={formatCurrency(Number(amount) || 0)} />
              <ResultCard label="Total Interest" value={formatCurrency(result.totalInterest)} />
              <ResultCard label="Total Payment" value={formatCurrency(result.totalPayment)} full />
            </div>

            <p className="mt-7 text-sm font-semibold leading-6 text-slate-700">
              Actual EMI, rate aur approval applicant profile aur selected financial institution par depend karega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, icon: Icon, value, onChange, min, max, step }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 font-black text-white">
        <Icon size={18} className="text-amber-400" />
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-lg font-bold text-white outline-none transition focus:border-amber-400/60 focus:ring-4 focus:ring-amber-400/10"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(Math.max(Number(value) || min, min), max)}
        onChange={(event) => onChange(event.target.value)}
        className="mt-4 w-full accent-amber-400"
        aria-label={`${label} slider`}
      />
    </div>
  );
}

function ResultCard({ label, value, full = false }) {
  return (
    <div className={`rounded-2xl bg-slate-950/10 p-5 ${full ? "sm:col-span-2" : ""}`}>
      <p className="text-sm font-bold text-slate-700">{label}</p>
      <p className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">{value}</p>
    </div>
  );
}
