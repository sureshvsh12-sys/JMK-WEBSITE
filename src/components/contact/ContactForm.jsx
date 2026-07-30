import { useEffect, useMemo, useState } from "react";
import { BadgeCheck, CheckCircle2, LoaderCircle, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import { JMK_CONTACT, JMK_SERVICES } from "../../config/contact";
import { getSegmentForService, submitWebsiteEnquiry } from "../../services/websiteEnquiries";

const emptyForm = {
  name: "",
  mobile: "",
  email: "",
  city: "Dewas",
  service: "Property Enquiry",
  message: "",
};

const serviceAliases = {
  finance: "Financial Servicess",
  financial: "Financial Servicess",
  "financial servicess": "Financial Servicess",
  solar: "Solar Solutions",
  "solar solutions": "Solar Solutions",
  assets: "Property Enquiry",
  property: "Property Enquiry",
  "property enquiry": "Property Enquiry",
  general: "General Enquiry",
  "general enquiry": "General Enquiry",
};

function normalizePrefillService(value) {
  const requested = String(value || "").trim().toLowerCase();
  return serviceAliases[requested] || "Property Enquiry";
}

export default function ContactForm() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const enquiryContext = useMemo(() => {
    const state = location.state && typeof location.state === "object" ? location.state : {};
    const service = normalizePrefillService(searchParams.get("service") || state.service);
    const loan = String(searchParams.get("loan") || state.loan || "").trim();
    const property = String(searchParams.get("property") || state.property || "").trim();
    const stateMessage = String(state.message || "").trim();

    let message = stateMessage;
    if (!message && loan) message = `I am interested in ${loan}. Please contact me with eligibility, documents and available options.`;
    if (!message && property) message = `I am interested in ${property}. Please contact me and arrange a site visit.`;

    return {
      service: JMK_SERVICES.includes(service) ? service : emptyForm.service,
      message,
      reference: property || loan || "",
    };
  }, [location.state, searchParams]);

  const [form, setForm] = useState({
    ...emptyForm,
    service: enquiryContext.service,
    message: enquiryContext.message,
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setForm((current) => ({
      ...current,
      service: enquiryContext.service,
      message: enquiryContext.message || current.message,
    }));
  }, [enquiryContext]);

  const handleChange = ({ target: { name, value } }) => {
    const nextValue = name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
    setStatus("idle");
    setError("");
  };

  const validate = () => {
    const mobile = form.mobile.replace(/\D/g, "");
    if (form.name.trim().length < 2) return "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(mobile)) return "Please enter a valid Indian 10-digit mobile number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.city.trim()) return "Please enter your city.";
    if (form.message.trim().length < 10) return "Please provide some details about your requirement.";
    return "";
  };

  const submit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      await submitWebsiteEnquiry({
        segment: getSegmentForService(form.service),
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        city: form.city,
        district: form.city,
        message: `${form.service}: ${form.message.trim()}`,
        page: window.location.pathname,
        reference: enquiryContext.reference || `WEB-${Date.now()}`,
      });

      setForm({ ...emptyForm, service: enquiryContext.service });
      setStatus("success");
    } catch (submitError) {
      setError(submitError?.message || "Enquiry save nahi ho paayi. Please call or WhatsApp the JMK team.");
      setStatus("error");
    }
  };

  const whatsappText = encodeURIComponent(`Hello JMK GROUP,\n\nName: ${form.name || "Not entered"}\nMobile: ${form.mobile || "Not entered"}\nCity: ${form.city || "Not entered"}\nService: ${form.service}\nRequirement: ${form.message || "I need more information."}`);
  const whatsappLink = `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${whatsappText}`;
  const inputClass = "w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10";

  return (
    <section id="enquiry-form" className="scroll-mt-28 pb-24">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 md:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400"><BadgeCheck size={16} /> Free Consultation</span>
            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">Tell Us About Your <span className="block text-amber-400">Requirement</span></h2>
            <p className="mt-6 leading-8 text-slate-400">Form submit karte hi enquiry JMK CRM ke segment-wise Raw Contacts mein securely save hogi.</p>
            <div className="mt-10 space-y-5 text-slate-300">
              <p className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={20} /> Professional consultation</p>
              <p className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-amber-400" size={20} /> Your information stays private</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-6 py-3.5 font-black text-green-400 transition hover:bg-green-500 hover:text-white"><MessageCircle size={20} /> Send on WhatsApp</a>
          </div>

          <form onSubmit={submit} noValidate className="grid gap-5 rounded-[28px] border border-white/10 bg-[#091528] p-5 sm:grid-cols-2 sm:p-7">
            <label><span className="mb-2 block text-sm font-bold text-slate-300">Full Name *</span><input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" autoComplete="name" required /></label>
            <label><span className="mb-2 block text-sm font-bold text-slate-300">Mobile Number *</span><input name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} placeholder="10-digit mobile" inputMode="numeric" autoComplete="tel" maxLength={10} required /></label>
            <label><span className="mb-2 block text-sm font-bold text-slate-300">Email</span><input name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" type="email" autoComplete="email" /></label>
            <label><span className="mb-2 block text-sm font-bold text-slate-300">City *</span><input name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="City" autoComplete="address-level2" required /></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-slate-300">Service *</span><select name="service" value={form.service} onChange={handleChange} className={inputClass}>{JMK_SERVICES.map((service) => <option key={service}>{service}</option>)}</select></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-slate-300">Requirement Details *</span><textarea name="message" value={form.message} onChange={handleChange} rows={6} className={`${inputClass} resize-none`} placeholder="Property location, budget, required loan, electricity bill or other requirement..." required /></label>

            {error && <p role="alert" className="sm:col-span-2 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 font-semibold text-red-300">{error}</p>}
            {status === "success" && <p role="status" className="sm:col-span-2 flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-5 py-4 font-semibold text-green-300"><CheckCircle2 size={20} /> Enquiry saved successfully. JMK GROUP team will contact you.</p>}

            <button type="submit" disabled={status === "submitting"} className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60">
              {status === "submitting" ? <LoaderCircle className="animate-spin" size={20} /> : <Send size={20} />}
              {status === "submitting" ? "Saving..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
