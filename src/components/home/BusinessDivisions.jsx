import SectionTitle from "./SectionTitle";

const divisions = [
  {
    icon: "🏢",
    title: "JMK Assets",
    desc: "Premium residential, commercial and investment properties across Madhya Pradesh.",
  },
  {
    icon: "💰",
    title: "JMK Financial Servicess",
    desc: "Loans, finance consultancy and complete financial solutions for families and businesses.",
  },
  {
    icon: "☀️",
    title: "JMK Solar Solutions",
    desc: "Residential and commercial solar projects with installation and after-sales support.",
  },
];

export default function BusinessDivisions() {
  return (
    <section className="py-24 bg-[#08111f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="OUR BUSINESS"
          title="Three Powerful"
          highlight="Divisions"
          subtitle="One trusted brand delivering Real Estate, Finance and Solar solutions under one roof."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.desc}
              </p>

              <button className="mt-8 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300 transition">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}