import {
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  JMK_LINKS,
} from "../../config/contact";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        href={JMK_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with JMK GROUP on WhatsApp"
        className="group flex h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 text-white shadow-2xl shadow-emerald-950/40 transition duration-300 hover:-translate-y-1 hover:bg-emerald-400 sm:px-5"
      >
        <MessageCircle size={23} />

        <span className="hidden text-sm font-black sm:inline">
          WhatsApp
        </span>
      </a>

      <a
        href={JMK_LINKS.phone}
        aria-label="Call JMK GROUP"
        className="group flex h-14 items-center justify-center gap-2 rounded-full bg-amber-400 px-4 text-slate-950 shadow-2xl shadow-amber-950/30 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 sm:px-5"
      >
        <Phone size={22} />

        <span className="hidden text-sm font-black sm:inline">
          Call Now
        </span>
      </a>
    </div>
  );
}