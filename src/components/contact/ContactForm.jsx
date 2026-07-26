import { useEffect, useMemo, useState } from "react";
import { BadgeCheck, CheckCircle2, LoaderCircle, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { JMK_CONTACT, JMK_SERVICES } from "../../config/contact";

const emptyForm = { name: "", mobile: "", email: "", city: "Dewas", service: "Property Enquiry", message: "" };

function readEnquiries() {
  try {
    const value = JSON.parse(localStorage.getItem("jmk_website_enquiries") || "[]");
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const prefilledService = useMemo(() => {
    const requested = (searchParams.get("service") || "").trim().toLowerCase();
    const aliases = {
      finance: "Financial Servicess",
      "financial servicess": "Financial Servicess",
      financial: "Financial Servicess",
      solar: "Solar Solutions",
      "solar solutions": "Solar Solutions",
      assets: "Property Enquiry",
      property: "Property Enquiry",
      "property enquiry": "Property Enquiry",
      general: "General Enquiry",
      "general enquiry": "General Enquiry",
    };
    return aliases[requested] || "Property Enquiry";
  }, [searchParams]);
  const [form, setForm] = useState({ ...emptyForm, service: JMK_SERVICES.includes(prefilledService) ? prefilledService : emptyForm.service });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (JMK_SERVICES.includes(prefilledService)) setForm((current) => ({ ...current, service: prefilledService }));
  }, [prefilledService]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("idle"); setError("");
  };

  const validate = () => {
    const mobile = form.mobile.replace(/\D/g, "");
    if (form.name.trim().length < 2) return "Please enter your full name.";
    if (mobile.length !== 10) return "Please enter a valid 10-digit mobile number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (form.message.trim().length < 10) return "Please provide some details about your requirement.";
    return "";
  };

  const submit = (event) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); setStatus("error"); return; }
    setStatus("submitting");
    try {
      const enquiry = {
        id: `WEB-${Date.now()}`,
        ...form,
        name: form.name.trim(), mobile: form.mobile.replace(/\D/g, ""), email: form.email.trim(), city: form.city.trim(), message: form.message.trim(),
        source: "JMK GROUP Website", status: "New",
        segment: form.service === "Financial Servicess" ? "Finance" : form.service === "Solar Solutions" ? "Solar" : form.service === "Property Enquiry" ? "Assets" : "General",
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("jmk_website_enquiries", JSON.stringify([enquiry, ...readEnquiries()]));
      setForm({ ...emptyForm, service: prefilledService });
      setStatus("success");
    } catch {
      setError("Enquiry save nahi ho paayi. Please call or WhatsApp the JMK team.");
      setStatus("error");
    }
  };

  const whatsappText = encodeURIComponent(`Hello JMK GROUP,

Name: ${form.name || "Not entered"}
Mobile: ${form.mobile || "Not entered"}
City: ${form.city || "Not entered"}
Service: ${form.service}
Requirement: ${form.message || "I need more information."}`);
  const whatsappLink = `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${whatsappText}`;
  const inputClass = "w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10";

  return (
    <section id="enquiry-form" className="pb-24 scroll-mt-28">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 md:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400"><BadgeCheck size={16} /> Free Consultation</span>
            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">Tell Us About Your <span className="block text-amber-400">Requirement</span></h2>
            <p className="mt-6 leading-8 text-slate-400">Form submit karne par enquiry is device par securely save hogi. Cloud CRM integration ke baad yahi enquiry automatically CRM aur mobile app mein jayegi.</p>
            <div className="mt-10 space-y-5 text-slate-300">
              <p className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={20} /> Professional consultation</p>
              <p className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-amber-400" size={20} /> Your information stays private</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-6 py-3.5 font-black text-green-400 transition hover:bg-green-500 hover:text-white"><MessageCircle size={20} /> Send on WhatsApp</a>
          </div>

          <form onSubmit={submit} className="grid gap-5 rounded-[28px] border border-white/10 bg-[#091528] p-5 sm:grid-cols-2 sm:p-7">
            <label><span className="mb-2 block text-sm font-bold text-slate-300">Full Name *</span><input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" autoComplete="name" /></label>
            <label><span className="mb-2 block text-sm font-bold text-slate-300">Mobile Number *</span><input name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} placeholder="10-digit mobile" inputMode="numeric" autoComplete="tel" maxLength={10} /></label>
            <label><span className="mb-2 block text-sm font-bold text-slate-300">Email</span><input name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" type="email" autoComplete="email" /></label>
            <label><span className="mb-2 block text-sm font-bold text-slate-300">City</span><input name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="City" autoComplete="address-level2" /></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-slate-300">Service *</span><select name="service" value={form.service} onChange={handleChange} className={inputClass}>{JMK_SERVICES.map((service) => <option key={service}>{service}</option>)}</select></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-slate-300">Requirement Details *</span><textarea name="message" value={form.message} onChange={handleChange} rows={6} className={`${inputClass} resize-none`} placeholder="Property location, budget, required loan, electricity bill or other requirement..." /></label>

            {error && <p role="alert" className="sm:col-span-2 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 font-semibold text-red-300">{error}</p>}
            {status === "success" && <p role="status" className="sm:col-span-2 flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-5 py-4 font-semibold text-green-300"><CheckCircle2 size={20} /> Enquiry saved successfully. JMK GROUP team will contact you.</p>}

            <button disabled={status === "submitting"} className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? <LoaderCircle className="animate-spin" size={20} /> : <Send size={20} />} {status === "submitting" ? "Saving..." : "Submit Enquiry"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
