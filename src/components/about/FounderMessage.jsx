import {
  BadgeCheck,
  Building2,
  Quote,
} from "lucide-react";
import { JMK_CONTACT } from "../../config/contact";

export default function FounderMessage() {
  return (
    <section className="relative overflow-hidden bg-[#0b1628] py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-amber-400/7 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[42px] bg-amber-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#10284a] via-[#0b1830] to-[#07111f] p-8 text-center shadow-2xl shadow-black/30 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:45px_45px]" />

              <div className="relative mx-auto grid h-40 w-40 place-items-center rounded-full border-4 border-amber-400 bg-[#07111f] shadow-xl shadow-amber-400/15">
                <span className="text-6xl font-black">
                  <span className="text-red-500">
                    S
                  </span>

                  <span className="text-white">
                    V
                  </span>
                </span>
              </div>

              <div className="relative mt-7">
                <h3 className="text-3xl font-black text-white">
                  {JMK_CONTACT.founder}
                </h3>

                <p className="mt-2 font-bold text-amber-400">
                  Founder — JMK GROUP
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                  Trust • Growth • Future
                </p>
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Building2
                    size={22}
                    className="mx-auto text-amber-400"
                  />

                  <p className="mt-2 text-sm font-bold text-white">
                    JMK GROUP
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <BadgeCheck
                    size={22}
                    className="mx-auto text-amber-400"
                  />

                  <p className="mt-2 text-sm font-bold text-white">
                    Customer First
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
              Founder Message
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
              Building More Than Business.
              <span className="block text-amber-400">
                Building Long-Term Trust.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                At JMK GROUP, our goal is to provide reliable guidance
                and complete support across financial, property and
                solar requirements.
              </p>

              <p>
                We believe that every business relationship should be
                based on honesty, transparency and responsibility. Our
                focus is not limited to completing a transaction; we
                want to create real value and trusted relationships.
              </p>

              <p>
                By combining professional service with modern technology,
                we are working to build JMK GROUP as a future-ready and
                respected business brand across Madhya Pradesh.
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-[26px] border border-amber-400/20 bg-amber-400/[0.07] p-7">
              <Quote
                size={60}
                className="absolute right-5 top-4 text-amber-400/10"
              />

              <p className="relative text-xl font-black italic leading-8 text-white sm:text-2xl">
                “Your trust is our greatest responsibility.”
              </p>

              <p className="relative mt-4 font-black text-amber-400">
                — {JMK_CONTACT.founder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}