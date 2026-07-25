import { useMemo, useState } from "react";
import { BatteryCharging, IndianRupee, Leaf, Sun } from "lucide-react";

const formatCurrency = (value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000);

  const calculation = useMemo(() => {
    const bill = Math.max(Number(monthlyBill) || 0, 0);
    const recommendedKw = Math.max(Math.ceil(bill / 1000), 1);
    const monthlySaving = Math.round(bill * 0.85);
    const annualSaving = monthlySaving * 12;
    const estimatedCost = recommendedKw * 65000;
    const paybackYears = annualSaving ? estimatedCost / annualSaving : 0;
    const co2Reduction = recommendedKw * 1.2;
    return { recommendedKw, monthlySaving, annualSaving, estimatedCost, paybackYears, co2Reduction };
  }, [monthlyBill]);

  const results = [
    { label: "Recommended System", value: `${calculation.recommendedKw} kW`, icon: Sun },
    { label: "Monthly Saving", value: formatCurrency(calculation.monthlySaving), icon: IndianRupee },
    { label: "Annual Saving", value: formatCurrency(calculation.annualSaving), icon: BatteryCharging },
    { label: "Estimated System Cost", value: formatCurrency(calculation.estimatedCost), icon: IndianRupee },
    { label: "Estimated Payback", value: `${calculation.paybackYears.toFixed(1)} Years`, icon: BatteryCharging },
    { label: "CO₂ Reduction", value: `${calculation.co2Reduction.toFixed(1)} Ton/Year`, icon: Leaf },
  ];

  return (
    <section id="solar-calculator" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rounded-[36px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 sm:p-10 md:p-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400"><Sun size={16}/> Solar Savings Calculator</span>
            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">Estimate Your <span className="text-amber-400">Solar Savings</span></h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">Enter your average monthly electricity bill for an indicative solar capacity, savings and payback estimate.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-3xl border border-white/10 bg-[#0d1b2f] p-7">
              <label htmlFor="monthlyBill" className="font-bold text-white">Average Monthly Electricity Bill</label>
              <div className="mt-4 flex items-center rounded-2xl border border-white/10 bg-[#101f37] px-5"><span className="text-xl font-black text-amber-400">₹</span><input id="monthlyBill" type="number" min="0" value={monthlyBill} onChange={(e) => setMonthlyBill(e.target.value)} className="w-full bg-transparent px-4 py-5 text-2xl font-black text-white outline-none" /></div>
              <input type="range" min="1000" max="100000" step="500" value={Math.min(Math.max(Number(monthlyBill) || 1000, 1000), 100000)} onChange={(e) => setMonthlyBill(e.target.value)} className="mt-8 w-full accent-amber-400" />
              <div className="mt-3 flex justify-between text-sm text-slate-500"><span>₹1,000</span><span>₹1,00,000</span></div>
              <p className="mt-7 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-6 text-slate-300">Final capacity and subsidy depend on site survey, sanctioned load, roof area and current government rules.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {results.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-[#0d1b2f] p-6 transition hover:-translate-y-1 hover:border-amber-400/30">
                  <Icon size={22} className="text-amber-400" />
                  <p className="mt-4 text-sm text-slate-400">{label}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
