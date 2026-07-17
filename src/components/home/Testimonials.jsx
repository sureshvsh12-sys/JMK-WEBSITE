import {
  Building2,
  IndianRupee,
  Quote,
  Star,
  SunMedium,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Rajesh Sharma",
    city: "Dewas",
    service: "JMK Assets",
    review:
      "The JMK team guided us professionally during our property search. Communication was clear and the entire experience felt transparent.",
    icon: Building2,
  },
  {
    name: "Neha Verma",
    city: "Indore",
    service: "JMK Financial Servicess",
    review:
      "We received proper guidance for our home loan requirement. The team explained the process clearly and supported us at every step.",
    icon: IndianRupee,
  },
  {
    name: "Amit Patel",
    city: "Ujjain",
    service: "JMK Solar Solutions",
    review:
      "The solar consultation was practical and easy to understand. The team provided timely support and answered all our questions.",
    icon: SunMedium,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0b1628] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-amber-400/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          badge="TESTIMONIALS"
          title="What Our"
          highlight="Clients Say"
          subtitle="Customer trust and long-term relationships remain at the heart of JMK GROUP."
        />

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {testimonials.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.name}
                className="group relative rounded-[30px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/35 hover:bg-white/[0.07] sm:p-8"
              >
                <Quote
                  size={52}
                  className="absolute right-7 top-7 text-amber-400/10"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-amber-400/10 text-amber-400">
                    <Icon size={25} />
                  </span>

                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <p className="relative mt-7 leading-8 text-slate-300">
                  “{item.review}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-xl font-black text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-amber-400">
                    {item.service}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.city}, Madhya Pradesh
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          Testimonials shown here are sample website content and can be
          replaced with verified customer feedback.
        </p>
      </div>
    </section>
  );
}