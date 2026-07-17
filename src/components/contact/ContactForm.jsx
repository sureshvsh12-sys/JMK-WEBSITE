import { useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  JMK_CONTACT,
  JMK_LINKS,
} from "../../config/contact";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  city: "Dewas",
  service: "Property Enquiry",
  message: "",
};

function readExistingEnquiries() {
  try {
    const saved = localStorage.getItem(
      "jmk_website_enquiries",
    );

    const parsed = saved ? JSON.parse(saved) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setStatus("idle");
    setError("");
  };

  const validateForm = () => {
    const cleanMobile = form.mobile.replace(/\D/g, "");

    if (form.name.trim().length < 2) {
      return "Please enter your full name.";
    }

    if (cleanMobile.length !== 10) {
      return "Please enter a valid 10-digit mobile number.";
    }

    if (form.message.trim().length < 10) {
      return "Please provide some details about your requirement.";
    }

    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const enquiry = {
        id: `WEB-${Date.now()}`,
        name: form.name.trim(),
        mobile: form.mobile.replace(/\D/g, ""),
        email: form.email.trim(),
        city: form.city.trim(),
        service: form.service,
        message: form.message.trim(),
        source: "JMK GROUP Website",
        segment:
          form.service === "Financial Servicess"
            ? "Finance"
            : form.service === "Solar Solutions"
              ? "Solar"
              : form.service === "Property Enquiry"
                ? "Assets"
                : "General",
        status: "New",
        createdAt: new Date().toISOString(),
      };

      const existingEnquiries = readExistingEnquiries();

      localStorage.setItem(
        "jmk_website_enquiries",
        JSON.stringify([
          enquiry,
          ...existingEnquiries,
        ]),
      );

      window.setTimeout(() => {
        setForm(initialForm);
        setStatus("success");
      }, 450);
    } catch {
      setError(
        "Enquiry save nahi ho paayi. Please call or WhatsApp the JMK team.",
      );
      setStatus("error");
    }
  };

  const whatsappText = encodeURIComponent(
    `Hello JMK GROUP,

Name: ${form.name || "Not entered"}
Mobile: ${form.mobile || "Not entered"}
City: ${form.city || "Not entered"}
Service: ${form.service}
Requirement: ${form.message || "I need more information."}`,
  );

  const whatsappLink = `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${whatsappText}`;

  return (
    <section className="pb-24">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 md:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400">
              <BadgeCheck size={16} />
              Free Consultation
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Tell Us About Your
              <span className="block text-amber-400">
                Requirement
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Property, finance ya solar service ke liye apni details
              submit karein. JMK GROUP team aapse contact karegi.
            </p>

            <div className="mt-10 space-y-5">
              <p className="flex items-start gap-3 text-slate-300">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                Professional consultation
              </p>

              <p className="flex items-start gap-3 text-slate-300">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                Transparent service process
              </p>

              <p className="flex items-start gap-3 text-slate-300">
                <BadgeCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                Enquiry automatically saved for CRM migration
              </p>
            </div>

            <div className="mt-10 rounded-[24px] border border-green-400/20 bg-green-500/10 p-5">
              <p className="font-black text-white">
                Prefer WhatsApp?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Form details WhatsApp par direct send kar sakte hain.
              </p>

              <a
                href={
                  form.name || form.mobile || form.message
                    ? whatsappLink
                    : JMK_LINKS.whatsapp
                }
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-green-400"
              >
                <MessageCircle size={19} />
                Send on WhatsApp
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  Full Name *
                </span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  Mobile Number *
                </span>

                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                  className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  Email Address
                </span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  City
                </span>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  autoComplete="address-level2"
                  className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">
                Required Service *
              </span>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition focus:border-amber-400"
              >
                <option>Property Enquiry</option>
                <option>Financial Servicess</option>
                <option>Solar Solutions</option>
                <option>General Enquiry</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">
                Requirement Details *
              </span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Property location, budget, required loan, electricity bill or other requirement..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#101d35] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-400 py-4 text-lg font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <LoaderCircle
                    size={21}
                    className="animate-spin"
                  />
                  Saving Enquiry...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Enquiry
                </>
              )}
            </button>

            {status === "success" && (
              <div className="rounded-2xl border border-green-400/30 bg-green-400/10 px-5 py-4 text-center font-semibold text-green-300">
                Enquiry successfully saved. JMK GROUP team aapse
                jaldi contact karegi.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-center font-semibold text-red-300">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}