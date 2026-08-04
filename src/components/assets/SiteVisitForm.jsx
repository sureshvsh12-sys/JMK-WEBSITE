import { CalendarDays, CheckCircle2, Loader2, UserRound, X } from "lucide-react";
import { useMemo, useState } from "react";
import { submitWebsiteEnquiry } from "../../services/websiteEnquiries";

const INITIAL_FORM = { name: "", mobile: "", preferredDate: "", preferredTime: "Morning", message: "" };

export default function SiteVisitForm({ property, open, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  if (!open) return null;

  const update = (name, value) => setForm((current) => ({ ...current, [name]: value }));

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const visitText = [
        `Site visit request for ${property.title}.`,
        `Property location: ${property.location}.`,
        `Preferred date: ${form.preferredDate || "Flexible"}.`,
        `Preferred time: ${form.preferredTime}.`,
        form.message ? `Customer note: ${form.message}` : "",
      ].filter(Boolean).join(" ");

      await submitWebsiteEnquiry({
        segment: "assets",
        name: form.name,
        mobile: form.mobile,
        city: property.city || "Dewas",
        district: property.city || "Dewas",
        message: visitText,
        page: window.location.pathname,
        reference: `site-visit:${property.id}:${property.title}`,
      });

      setStatus({ type: "success", message: "Site visit request CRM aur mobile team ko bhej di gayi hai." });
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus({ type: "error", message: error?.message || "Site visit request submit nahi ho paayi." });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Book a site visit">
      <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[30px] border border-white/10 bg-[#0b1830] p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">JMK Assets</p>
            <h2 className="mt-2 text-2xl font-black text-white">Book Free Site Visit</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{property.title} · {property.location}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400" aria-label="Close site visit form">
            <X size={20} />
          </button>
        </div>

        {status.type === "success" ? (
          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-center">
            <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
            <p className="mt-4 font-bold text-emerald-200">{status.message}</p>
            <button type="button" onClick={onClose} className="mt-6 rounded-full bg-amber-400 px-6 py-3 font-black text-slate-950">Done</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-200">Full Name</span>
              <div className="relative">
                <UserRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input required minLength={2} value={form.name} onChange={(event) => update("name", event.target.value)} className="w-full rounded-2xl border border-white/10 bg-[#101d35] py-3.5 pl-11 pr-4 text-white outline-none focus:border-amber-400" placeholder="Your full name" />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-200">Mobile Number</span>
              <input required inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" value={form.mobile} onChange={(event) => update("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))} className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-4 py-3.5 text-white outline-none focus:border-amber-400" placeholder="10-digit mobile number" />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-bold text-slate-200">Preferred Date</span>
                <div className="relative">
                  <CalendarDays size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input type="date" min={minDate} value={form.preferredDate} onChange={(event) => update("preferredDate", event.target.value)} className="w-full rounded-2xl border border-white/10 bg-[#101d35] py-3.5 pl-11 pr-3 text-white outline-none focus:border-amber-400" />
                </div>
              </label>
              <label>
                <span className="mb-2 block text-sm font-bold text-slate-200">Preferred Time</span>
                <select value={form.preferredTime} onChange={(event) => update("preferredTime", event.target.value)} className="w-full rounded-2xl border border-white/10 bg-[#101d35] px-4 py-3.5 text-white outline-none focus:border-amber-400">
                  <option>Morning</option><option>Afternoon</option><option>Evening</option><option>Flexible</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-200">Message (optional)</span>
              <textarea rows={3} maxLength={500} value={form.message} onChange={(event) => update("message", event.target.value)} className="w-full resize-none rounded-2xl border border-white/10 bg-[#101d35] px-4 py-3.5 text-white outline-none focus:border-amber-400" placeholder="Any special requirement" />
            </label>

            {status.type === "error" && <p className="rounded-2xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{status.message}</p>}

            <button disabled={status.type === "loading"} type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60">
              {status.type === "loading" && <Loader2 size={19} className="animate-spin" />}
              {status.type === "loading" ? "Submitting..." : "Confirm Site Visit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
