import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const contacts = [
  {
    icon: "📍",
    title: "Office Address",
    value: "Dewas, Madhya Pradesh, India",
  },
  {
    icon: "📞",
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "info@jmkgroup.in",
    href: "mailto:info@jmkgroup.in",
  },
];

export default function ContactPreview() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#08111F] to-[#0D1830] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="CONTACT"
          title="Let's Start"
          highlight="Your Journey"
          subtitle="Speak with our experts today for property, finance or solar solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <div className="space-y-6">
            {contacts.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 inline-block text-slate-300 hover:text-amber-400 transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-slate-300">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white">
              Request a Free Consultation
            </h3>

            <p className="mt-3 text-slate-400">
              Fill in your details and our team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400"
              />

              <select
                className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400"
              >
                <option>Property Inquiry</option>
                <option>Financial Services</option>
                <option>Solar Solutions</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 py-4 text-lg font-bold text-slate-900 transition hover:bg-amber-300"
              >
                Send Inquiry
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919876543210"
                className="rounded-full border border-green-500 px-6 py-3 text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                WhatsApp
              </a>

              <Link
                to="/contact"
                className="rounded-full border border-amber-400 px-6 py-3 text-amber-400 transition hover:bg-amber-400 hover:text-slate-900"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}