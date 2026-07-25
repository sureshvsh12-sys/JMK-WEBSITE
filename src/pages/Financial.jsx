import EMICalculator from "../components/financial/EMICalculator";
import FinanceCTA from "../components/financial/FinanceCTA";
import FinanceFeatures from "../components/financial/FinanceFeatures";
import FinanceHero from "../components/financial/FinanceHero";
import FinanceSectionTitle from "../components/financial/FinanceSectionTitle";
import FinanceStats from "../components/financial/FinanceStats";
import LoanCard from "../components/financial/LoanCard";
import LoanProcess from "../components/financial/LoanProcess";
import loans from "../data/loans";

export default function Financial() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] pb-24 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <FinanceHero />

        <div className="mt-20 sm:mt-24">
          <FinanceSectionTitle />
        </div>

        <FinanceStats />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {loans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </div>

      <LoanProcess />
      <FinanceFeatures />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <EMICalculator />
      </div>

      <FinanceCTA />
    </main>
  );
}
