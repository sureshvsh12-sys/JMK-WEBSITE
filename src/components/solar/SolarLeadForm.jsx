import { useMemo, useState } from "react";
import {
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
  Send,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import { JMK_CONTACT } from "../../config/contact";

const emptyForm = {
  name: "",
  mobile: "",
  city: "Dewas",
  propertyType: "Residential",
  monthlyBill: "",
  roofArea: "",
  message: "",
};

function readLeads() {
  try {
    const value = JSON.parse(localStorage.getItem("jmk_website_enquiries") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export default function SolarLeadForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const recommendedCapacity = useMemo(() => {
    const bill = Number(form.monthlyBill) || 0;
    return bill > 0 ? Math.max(Math.ceil(bill / 1000), 1) : 0;
  }, [form.monthlyBill]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("idle");
    setError("");
  };

  const validate = () => {
    const mobile = form.mobile.replace(/\D/g, "");
    if (form.name.trim().length < 2) return "Please enter your full name.";
    if (mobile.length !== 10) return "Please enter a valid 10-digit mobile number.";
    if (!Number(form.monthlyBill) || Number(form.monthlyBill) < 500) {
      return "Please enter a valid monthly electricity bill.";
    }
    return "";
  };

  const submit = (event) => {
    event.preventDefault();
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const enquiry = {
        id: `WEB-SOLAR-${Date.now()}`,
        name: form.name.trim(),
        mobile: form.mobile.replace(/\D/g, ""),
        email: "",
        city: form.city.trim() || "Dewas",
        service: "Solar Solutions",
        message:
          form.message.trim() ||
          `${form.propertyType} solar enquiry. Monthly bill ₹${form.monthlyBill}. Roof area ${form.roofArea || "not shared"}.`,
        propertyType: form.propertyType,
        monthlyBill: Number(form.monthlyBill),
        roofArea: form.roofArea.trim(),
        recommendedCapacity,
        source: "JMK GROUP Website",
        segment: "Solar",
        status: "New",
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "jmk_website_enquiries",
        JSON.stringify([enquiry, ...readLeads()])
      );

      setForm(emptyForm);
      setStatus("success");
    } catch {
      setError("Lead save nahi ho paayi. Please WhatsApp ya call karein.");
      setStatus("error");
    }
  };

  const whatsappText = encodeURIComponent(`Hello JMK GROUP,

I need a solar consultation.

Name: ${form.name || "Not entered"}
Mobile: ${form.mobile || "Not entered"}
City: ${form.city || "Dewas"}
Property Type: ${form.propertyType}
Monthly Bill: ₹${form.monthlyBill || "Not entered"}
Roof Area: ${form.roofArea || "Not entered"}
Estimated Capacity: ${recommendedCapacity ? `${recommendedCapacity} kW` : "To be assessed"}
Requirement: ${form.message || "Please contact me for a solar quotation."}`);

  const whatsappLink = `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${whatsappText}`;

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10";

  return (
    <section id="solar-lead-form" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 sm:p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400">
                <SunMedium size={16} />
                Solar Lead Form
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Get A Practical
                <span className="block text-amber-400">Solar Recommendation</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Electricity bill aur site details share karein. Lead website
                enquiry storage mein save hogi aur CRM integration ke liye ready
                rahegi.
              </p>

              <div className="mt-9 space-y-4 text-slate-300">
                <p className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={20} />
                  Indicative system capacity
                </p>
                <p className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={20} />
                  Residential and commercial consultation
                </p>
                <p className="flex gap-3">
                  <ShieldCheck className="mt-0.5 shrink-0 text-amber-400" size={20} />
                  Information used only for your enquiry
                </p>
              </div>

              {recommendedCapacity > 0 && (
                <div className="mt-8 rounded-3xl border border-amber-400/25 bg-amber-400/10 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
                    Indicative Capacity
                  </p>
                  <p className="mt-2 text-4xl font-black text-white">
                    {recommendedCapacity} kW
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Final capacity site survey, load and roof condition par depend karegi.
                  </p>
                </div>
              )}
            </div>

            <form
              onSubmit={submit}
              className="grid gap-5 rounded-[28px] border border-white/10 bg-[#091528] p-5 sm:grid-cols-2 sm:p-7"
            >
              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">Full Name *</span>
                <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" autoComplete="name" />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">Mobile Number *</span>
                <input name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} placeholder="10-digit mobile" inputMode="numeric" maxLength={10} autoComplete="tel" />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">City</span>
                <input name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="City" autoComplete="address-level2" />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">Property Type</span>
                <select name="propertyType" value={form.propertyType} onChange={handleChange} className={inputClass}>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Agriculture</option>
                </select>
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">Monthly Bill *</span>
                <input name="monthlyBill" value={form.monthlyBill} onChange={handleChange} className={inputClass} placeholder="Example: 5000" inputMode="numeric" type="number" min="0" />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">Approx. Roof Area</span>
                <input name="roofArea" value={form.roofArea} onChange={handleChange} className={inputClass} placeholder="Example: 600 sq.ft." />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-slate-300">Requirement Details</span>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={`${inputClass} resize-none`} placeholder="Any preferred capacity, phase, location or installation detail..." />
              </label>

              {error && (
                <p role="alert" className="sm:col-span-2 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 font-semibold text-red-300">
                  {error}
                </p>
              )}

              {status === "success" && (
                <p role="status" className="sm:col-span-2 flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-500/10 px-5 py-4 font-semibold text-green-300">
                  <CheckCircle2 size={20} />
                  Solar enquiry saved successfully.
                </p>
              )}

              <button
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {status === "submitting" ? <LoaderCircle className="animate-spin" size={20} /> : <Send size={20} />}
                {status === "submitting" ? "Saving..." : "Submit Solar Enquiry"}
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-7 py-4 font-black text-green-400 transition hover:bg-green-500 hover:text-white sm:col-span-2"
              >
                <MessageCircle size={20} />
                Send Details on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
