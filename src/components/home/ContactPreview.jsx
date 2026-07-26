import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { JMK_CONTACT, JMK_LINKS, JMK_SERVICES } from "../../config/contact";
import SectionTitle from "./SectionTitle";

const emptyForm = {
  name: "",
  mobile: "",
  service: "Property Enquiry",
  message: "",
};

function readEnquiries() {
  try {
    const value = JSON.parse(localStorage.getItem("jmk_website_enquiries") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

const contacts = [
  { icon: MapPin, title: "Office Address", value: JMK_CONTACT.address, href: JMK_LINKS.googleMaps, external: true },
  { icon: Phone, title: "Call Us", value: JMK_CONTACT.phoneDisplay, href: JMK_LINKS.phone },
  { icon: MessageCircle, title: "WhatsApp", value: JMK_CONTACT.phoneDisplay, href: JMK_LINKS.whatsapp, external: true },
  { icon: Mail, title: "Email", value: JMK_CONTACT.email, href: JMK_LINKS.email },
];

export default function ContactPreview() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
    setSaved(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const mobile = form.mobile.replace(/\D/g, "");

    if (form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (form.message.trim().length < 10) {
      setError("Please add a few details about your requirement.");
      return;
    }

    const enquiry = {
      id: `WEB-${Date.now()}`,
      name: form.name.trim(),
      mobile,
      email: "",
      city: "Dewas",
      service: form.service,
      message: form.message.trim(),
      source: "JMK GROUP Website",
      status: "New",
      segment:
        form.service === "Financial Servicess"
          ? "Finance"
          : form.service === "Solar Solutions"
            ? "Solar"
            : "Assets",
      createdAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        "jmk_website_enquiries",
        JSON.stringify([enquiry, ...readEnquiries()]),
      );
      setForm(emptyForm);
      setSaved(true);
    } catch {
      setError("Enquiry save nahi ho paayi. Please call or WhatsApp JMK GROUP.");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#08111F] to-[#0D1830] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="CONTACT"
          title="Let's Start"
          highlight="Your Journey"
          subtitle="Speak with our experts today for property, finance or solar solutions."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {contacts.map(({ icon: Icon, title, value, href, external }) => (
              <div key={title} className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <Icon size={25} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="mt-2 inline-block leading-7 text-slate-300 transition hover:text-amber-400"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h3 className="text-3xl font-bold text-white">Request a Free Consultation</h3>
            <p className="mt-3 text-slate-400">Your enquiry is saved in the CRM-ready website enquiry format.</p>

            <form onSubmit={submit} className="mt-8 space-y-5">
              <input name="name" value={form.name} onChange={handleChange} autoComplete="name" placeholder="Your Name" className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400" />
              <input name="mobile" value={form.mobile} onChange={handleChange} type="tel" inputMode="numeric" maxLength={10} autoComplete="tel" placeholder="Mobile Number" className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400" />
              <select name="service" value={form.service} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400">
                {JMK_SERVICES.filter((service) => service !== "General Enquiry").map((service) => <option key={service}>{service}</option>)}
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirement..." className="w-full resize-none rounded-xl border border-white/10 bg-[#101D35] px-5 py-4 text-white outline-none focus:border-amber-400" />

              {error && <p role="alert" className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-300">{error}</p>}
              {saved && <p role="status" className="flex items-center gap-2 rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-green-300"><CheckCircle2 size={19} /> Enquiry saved successfully.</p>}

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-4 text-lg font-bold text-slate-900 transition hover:bg-amber-300">
                <Send size={20} /> Send Enquiry
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href={JMK_LINKS.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-green-500 px-6 py-3 text-green-400 transition hover:bg-green-500 hover:text-white">WhatsApp</a>
              <Link to="/contact" className="rounded-full border border-amber-400 px-6 py-3 text-amber-400 transition hover:bg-amber-400 hover:text-slate-900">Contact Page</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
