import { ArrowRight, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { JMK_CONTACT, JMK_LINKS } from "../../config/contact";

export default function FinanceCTA() {
  const whatsappText = encodeURIComponent(
    "Hello JMK GROUP, I want guidance for a loan. Please contact me."
  );
  const whatsappLink = `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${whatsappText}`;

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-[34px] border border-amber-400/25 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-200 p-7 text-slate-950 shadow-2xl shadow-amber-500/10 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em]">
              <ShieldCheck size={16} /> Trusted Loan Assistance
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              सही loan option चुनने के लिए JMK expert से बात करें
            </h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-800 sm:text-lg">
              Eligibility, documents, bank options और application process के लिए professional guidance पाएं।
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/contact?service=Financial%20Servicess&loan=Loan%20Consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-slate-800"
            >
              Apply for Loan <ArrowRight size={19} />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-950/20 bg-white/45 px-7 py-4 font-black transition hover:bg-white"
            >
              <MessageCircle size={19} /> WhatsApp
            </a>
            <a
              href={JMK_LINKS.phone}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-950/20 bg-white/45 px-7 py-4 font-black transition hover:bg-white"
            >
              <PhoneCall size={19} /> Call {JMK_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
