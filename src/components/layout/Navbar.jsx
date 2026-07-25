import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import HeaderLogo from "../brand/HeaderLogo";
import { JMK_CONTACT, JMK_LINKS } from "../../config/contact";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "JMK Assets", path: "/assets" },
  { label: "Financial Servicess", path: "/financial" },
  { label: "Solar Solutions", path: "/solar" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1280) setMobileMenuOpen(false);
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const headerHeight = isScrolled ? "h-[88px]" : "h-[104px]";
  const mobileTop = isScrolled ? "top-[88px]" : "top-[104px]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "shadow-xl shadow-slate-950/10" : "shadow-sm"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 transition-all duration-300 lg:px-8 xl:px-12 ${headerHeight}`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="JMK GROUP Home"
        >
          <HeaderLogo size={isScrolled ? "sm" : "md"} />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 xl:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={`relative inline-flex items-center whitespace-nowrap px-1 text-[15px] font-black text-slate-800 transition-all duration-300 hover:text-red-600 ${headerHeight}`}
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-red-600" : "text-slate-800"}>
                    {item.label}
                  </span>
                  <span
                    className={`absolute inset-x-0 h-[3px] rounded-full bg-amber-400 transition-all duration-300 ${
                      isScrolled ? "bottom-[17px]" : "bottom-[24px]"
                    } ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={JMK_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3.5 font-black text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-600"
          >
            <MessageCircle size={19} />
            WhatsApp
          </a>

          <a
            href={JMK_LINKS.phone}
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3.5 font-black text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
          >
            <Phone size={19} />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-amber-400 hover:bg-amber-50 xl:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className={`fixed inset-x-0 bottom-0 overflow-y-auto border-t border-slate-200 bg-white px-5 pb-8 pt-5 shadow-2xl transition-all duration-300 xl:hidden ${mobileTop}`}
        >
          <div className="mx-auto grid max-w-3xl gap-3">
            {navigationItems.map((item) => (
              <NavLink
                key={`mobile-${item.path}`}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `rounded-2xl border px-5 py-4 font-black transition ${
                    isActive
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:border-amber-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a
                href={JMK_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-black text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href={JMK_LINKS.phone}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 font-black text-slate-950"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 p-4 text-center text-slate-600">
              <p className="text-sm font-bold">{JMK_CONTACT.phoneDisplay}</p>
              <p className="mt-1 text-xs">Finance • Assets • Solar</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
