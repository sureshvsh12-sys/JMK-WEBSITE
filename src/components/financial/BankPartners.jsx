const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank",
];

export default function BankPartners() {
  return (
    <section className="py-24 bg-[#08111F]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            OUR PARTNERS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Trusted Banking Partners
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            We work with India's leading banks to provide the best
            financial solutions for every customer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {banks.map((bank) => (
            <div
              key={bank}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg transition hover:border-amber-400/40 hover:-translate-y-2"
            >
              <div className="mb-5 text-5xl">🏦</div>

              <h3 className="text-xl font-bold text-white">
                {bank}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}