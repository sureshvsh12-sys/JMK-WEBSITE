import {
  BadgeCheck,
  Building2,
  IndianRupee,
  MessageCircle,
  Phone,
  SunMedium,
} from "lucide-react";
import { JMK_LINKS } from "../../config/contact";

const services = [
  {
    title: "JMK Financial Servicess",
    icon: IndianRupee,
  },
  {
    title: "JMK Assets",
    icon: Building2,
  },
  {
    title: "JMK Solar Solutions",
    icon: SunMedium,
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#07111f] via-[#0b1830] to-[#10284a] px-6 py-16 text-center shadow-2xl shadow-black/20 sm:px-10 md:py-20 lg:px-14">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
          <BadgeCheck size={16} />
          Contact JMK GROUP
        </span>

        <h1 className="mt-7 text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s Build Your
          <span className="block text-amber-400">
            Future Together
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Property, finance ya solar requirement ke liye JMK GROUP
          team se connect karein. Hum aapki requirement samajhkar
          transparent aur professional guidance denge.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
                  <Icon size={20} />
                </span>

                <span className="text-sm font-bold text-slate-200">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={JMK_LINKS.phone}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-black text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href={JMK_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-8 py-4 font-black text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>

        <p className="mt-7 text-sm font-semibold text-slate-400">
          Trust • Growth • Future
        </p>
      </div>
    </section>
  );
}