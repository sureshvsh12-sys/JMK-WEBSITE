import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { JMK_CONTACT, JMK_LINKS } from "../../config/contact";

export default function ContactCTA() {
  return (
    <section className="mb-20 overflow-hidden rounded-[34px] border border-amber-400/20 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-200 p-7 shadow-2xl shadow-amber-500/10 sm:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-slate-800/70">
            Quick Assistance
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Property, finance ya solar requirement? JMK GROUP se direct baat karein.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-800">
            Call ya WhatsApp par apni requirement share karein. Hamari team aapko suitable next step batayegi.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={JMK_LINKS.phone}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <PhoneCall size={20} /> Call {JMK_CONTACT.phoneDisplay}
          </a>
          <a
            href={JMK_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-950/20 bg-white/70 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-white"
          >
            <MessageCircle size={20} /> WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
