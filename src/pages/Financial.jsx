import FinanceHero from "../components/financial/FinanceHero";
import FinanceSectionTitle from "../components/financial/FinanceSectionTitle";
import FinanceStats from "../components/financial/FinanceStats";
import LoanCard from "../components/financial/LoanCard";
import LoanProcess from "../components/financial/LoanProcess";
import FinanceFeatures from "../components/financial/FinanceFeatures";
import EMICalculator from "../components/financial/EMICalculator";
import loans from "../data/loans";

export default function Financial() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <FinanceHero />

        <div className="mt-24">
          <FinanceSectionTitle />
        </div>

        <FinanceStats />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan) => (
            <LoanCard
              key={loan.id}
              loan={loan}
            />
          ))}
        </div>
      </div>

      <LoanProcess />

      <FinanceFeatures />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <EMICalculator />

        <p className="-mt-16 pb-10 text-center text-sm leading-6 text-slate-500">
          EMI calculation is indicative only. Actual eligibility,
          interest rate and approval depend on the selected financial
          institution and applicant profile.
        </p>
      </div>
    </main>
  );
}