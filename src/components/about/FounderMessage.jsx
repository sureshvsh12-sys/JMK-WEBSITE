import {
  BadgeCheck,
  Building2,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { JMK_CONTACT } from "../../config/contact";

export default function FounderMessage() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-red-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[44px] bg-gradient-to-br from-red-500/15 via-amber-400/10 to-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0b1628] p-2 shadow-2xl shadow-black/40">
              <img
                src="/images/founder-suresh-vishwakarma.png"
                alt="Suresh Vishwakarma, Founder of JMK Group"
                className="aspect-[4/5] w-full rounded-[32px] object-cover object-top"
                loading="lazy"
              />

              <div className="absolute inset-x-2 bottom-2 rounded-b-[32px] bg-gradient-to-t from-[#020817] via-[#020817]/90 to-transparent px-6 pb-6 pt-24 sm:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-2xl font-black text-white sm:text-3xl">
                      {JMK_CONTACT.founder}
                    </p>
                    <p className="mt-1 font-black text-amber-400">
                      Founder, JMK Group
                    </p>
                  </div>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Trust • Growth • Future
                  </span>
                </div>
              </div>
            </div>

            <div className="relative -mt-7 mx-5 grid grid-cols-3 gap-2 rounded-[24px] border border-white/10 bg-[#102038]/95 p-3 shadow-xl shadow-black/30 backdrop-blur-xl sm:mx-8 sm:gap-3 sm:p-4">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-center">
                <Building2 size={20} className="mx-auto text-emerald-400" />
                <p className="mt-2 text-[10px] font-black text-white sm:text-xs">One Group</p>
              </div>

              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-3 text-center">
                <BadgeCheck size={20} className="mx-auto text-amber-400" />
                <p className="mt-2 text-[10px] font-black text-white sm:text-xs">Trusted Service</p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3 text-center">
                <ShieldCheck size={20} className="mx-auto text-blue-400" />
                <p className="mt-2 text-[10px] font-black text-white sm:text-xs">Customer First</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
              A Message from the Founder
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
              Building Trust Today.
              <span className="block text-amber-400">
                Creating a Better Future Together.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                JMK Group की स्थापना एक स्पष्ट उद्देश्य के साथ हुई—Financial
                Services, Real Estate और Solar Solutions को भरोसेमंद,
                पारदर्शी और ग्राहक-केंद्रित सेवाओं के रूप में एक ही मंच पर
                उपलब्ध कराना।
              </p>

              <p>
                हमारे लिए प्रत्येक ग्राहक केवल एक transaction नहीं, बल्कि एक
                दीर्घकालिक relationship है। हम ईमानदार मार्गदर्शन,
                गुणवत्तापूर्ण सेवा और स्थायी मूल्य देने के लिए प्रतिबद्ध हैं।
              </p>

              <p>
                JMK Group पर विश्वास करने के लिए धन्यवाद। हम आपके साथ मिलकर
                प्रगति और बेहतर भविष्य की दिशा में आगे बढ़ने के लिए तत्पर हैं।
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-[28px] border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.09] to-white/[0.03] p-7 sm:p-8">
              <Quote
                size={72}
                className="absolute right-5 top-3 text-amber-400/10"
              />

              <p className="relative text-xl font-black italic leading-9 text-white sm:text-2xl">
                “हमारा लक्ष्य केवल business बढ़ाना नहीं, बल्कि हर ग्राहक के
                साथ भरोसे का स्थायी रिश्ता बनाना है।”
              </p>

              <div className="relative mt-6 border-l-2 border-amber-400 pl-4">
                <p className="font-black text-white">{JMK_CONTACT.founder}</p>
                <p className="mt-1 text-sm font-bold text-amber-400">
                  Founder, JMK Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
