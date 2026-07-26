import {
  Building2,
  ChevronRight,
  Clock3,
  IndianRupee,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SunMedium,
} from "lucide-react";
import { Link } from "react-router-dom";
import FooterLogo from "../brand/FooterLogo";
import { JMK_CONTACT, JMK_LINKS } from "../../config/contact";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["JMK Assets", "/assets"],
  ["Financial Servicess", "/financial"],
  ["Solar Solutions", "/solar"],
  ["Contact Us", "/contact"],
];

const divisions = [
  {
    title: "JMK Financial Servicess",
    description:
      "Home, business, personal and property loan guidance.",
    path: "/financial",
    icon: IndianRupee,
    iconClass: "bg-green-500 text-white",
  },
  {
    title: "JMK Assets",
    description:
      "Residential, commercial and investment properties.",
    path: "/assets",
    icon: Building2,
    iconClass: "bg-amber-400 text-slate-950",
  },
  {
    title: "JMK Solar Solutions",
    description:
      "Residential and commercial solar energy solutions.",
    path: "/solar",
    icon: SunMedium,
    iconClass: "bg-blue-600 text-white",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-400/30 bg-[#020b15] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-8 pt-20 lg:px-10 xl:px-12">
        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-[1.05fr_0.75fr_1.25fr_1fr]">
          <div>
            <Link
              to="/"
              className="inline-flex"
              aria-label="JMK GROUP Home"
            >
              <div className="[&_span]:!text-white [&_span:first-child]:!text-red-600">
                <FooterLogo size="lg" />
              </div>
            </Link>

            <p className="mt-8 max-w-sm text-lg leading-9 text-slate-300">
              One trusted corporate group delivering professional
              Financial Servicess, Real Estate and Solar Solutions
              across Madhya Pradesh.
            </p>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-amber-400">
              Trust • Growth • Future
            </p>

            <div className="mt-8 flex gap-4">
              <Social
                href={JMK_LINKS.whatsapp}
                label="WhatsApp"
                icon={MessageCircle}
              />

              <Social
                href={JMK_LINKS.phone}
                label="Call"
                icon={Phone}
              />

              <Social
                href={JMK_LINKS.email}
                label="Email"
                icon={Mail}
              />
            </div>
          </div>

          <div>
            <Heading>Quick Links</Heading>

            <ul className="mt-8 space-y-4">
              {quickLinks.map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-2 text-lg text-slate-300 transition hover:text-amber-400"
                  >
                    <ChevronRight
                      size={18}
                      className="text-amber-400 transition group-hover:translate-x-1"
                    />

                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading>Business Divisions</Heading>

            <div className="mt-8 space-y-7">
              {divisions.map(
                ({
                  title,
                  description,
                  path,
                  icon: Icon,
                  iconClass,
                }) => (
                  <Link
                    key={title}
                    to={path}
                    className="group flex items-center gap-5"
                  >
                    <span
                      className={`grid h-16 w-16 shrink-0 place-items-center rounded-full shadow-xl ${iconClass}`}
                    >
                      <Icon size={30} />
                    </span>

                    <span>
                      <strong className="block text-lg font-black text-white transition group-hover:text-amber-400">
                        {title}
                      </strong>

                      <span className="mt-1 block max-w-[260px] leading-6 text-slate-400">
                        {description}
                      </span>
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <Heading>Contact Information</Heading>

            <div className="mt-8 space-y-6 text-lg text-slate-300">
              <Contact
                icon={MapPin}
                href={JMK_LINKS.googleMaps}
                text={JMK_CONTACT.address}
                external
              />

              <Contact
                icon={Phone}
                href={JMK_LINKS.phone}
                text={JMK_CONTACT.phoneDisplay}
              />

              <Contact
                icon={MessageCircle}
                href={JMK_LINKS.whatsapp}
                text={`WhatsApp: ${JMK_CONTACT.phoneDisplay}`}
                external
              />

              <Contact
                icon={Mail}
                href={JMK_LINKS.email}
                text={JMK_CONTACT.email}
              />

              <Contact
                icon={Clock3}
                text={JMK_CONTACT.workingHours}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-amber-400/30 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 lg:flex-row lg:text-left">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-amber-400">
                JMK GROUP
              </span>
              . All Rights Reserved.
            </p>

            <p>Trust • Growth • Future</p>

            <p>
              Developed By –{" "}
              <span className="font-bold text-amber-400">
                {JMK_CONTACT.founder}
              </span>
              , Founder, JMK GROUP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Heading({ children }) {
  return (
    <div>
      <h2 className="text-2xl font-black text-white">
        {children}
      </h2>

      <span className="mt-4 block h-1 w-12 rounded-full bg-amber-400" />
    </div>
  );
}

function Social({ href, label, icon: Icon }) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-14 w-14 place-items-center rounded-full border border-white/30 text-white transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
    >
      <Icon size={23} />
    </a>
  );
}

function Contact({
  icon: Icon,
  text,
  href,
  external = false,
}) {
  const content = (
    <>
      <Icon
        size={22}
        className="mt-1 shrink-0 text-amber-400"
      />

      <span className="leading-7">
        {text}
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex gap-4 transition hover:text-amber-400"
    >
      {content}
    </a>
  ) : (
    <div className="flex gap-4">
      {content}
    </div>
  );
}