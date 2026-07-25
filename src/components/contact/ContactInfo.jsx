import { Clock3, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { JMK_CONTACT, JMK_LINKS } from "../../config/contact";

const items = [
  { icon: MapPin, title: "Office Address", value: JMK_CONTACT.address, href: JMK_LINKS.googleMaps, action: "Open in Maps", external: true },
  { icon: Phone, title: "Call Us", value: JMK_CONTACT.phoneDisplay, href: JMK_LINKS.phone, action: "Call Now" },
  { icon: MessageCircle, title: "WhatsApp", value: JMK_CONTACT.phoneDisplay, href: JMK_LINKS.whatsapp, action: "Start Chat", external: true },
  { icon: Mail, title: "Email", value: JMK_CONTACT.email, href: JMK_LINKS.email, action: "Send Email" },
  { icon: Clock3, title: "Working Hours", value: JMK_CONTACT.workingHours },
];

export default function ContactInfo() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mb-12 text-center">
        <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-amber-400">Contact Information</span>
        <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl md:text-5xl">Reach the <span className="text-amber-400">JMK GROUP Team</span></h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">Call, WhatsApp, email ya office visit ke through humse directly connect karein.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] sm:p-8 ${index === items.length - 1 ? "md:col-span-2" : ""}`}>
              <span className="absolute right-6 top-3 text-7xl font-black text-white/[0.025]">0{index + 1}</span>
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/15 transition duration-300 group-hover:rotate-3 group-hover:scale-105"><Icon size={29} /></span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-black text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 break-words leading-7 text-slate-300">{item.value}</p>
                  {item.href && <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="mt-5 inline-flex items-center gap-2 font-black text-amber-400 transition hover:gap-3 hover:text-amber-300">{item.action}{item.external ? <ExternalLink size={17} /> : <span aria-hidden="true">→</span>}</a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
