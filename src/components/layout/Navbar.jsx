import { useEffect, useState } from "react";
import {
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "../brand/HeaderLogo";
import { JMK_LINKS } from "../../config/contact";

const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "JMK Assets",
    path: "/assets",
  },
  {
    label: "Financial Servicess",
    path: "/financial",
  },
  {
    label: "Solar Solutions",
    path: "/solar",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/95 shadow-xl shadow-slate-950/10 backdrop-blur-xl"
          : "border-slate-200/80 bg-white shadow-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-[104px] max-w-[1500px] items-center justify-between gap-5 px-5 lg:px-8 xl:px-12"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="shrink-0"
          aria-label="JMK GROUP Home"
        >
          <HeaderLogo size="md" />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 xl:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative inline-flex h-[104px] items-center whitespace-nowrap px-1 text-[15px] font-bold transition ${
                  isActive
                    ? "text-red-600 font-black"
                    : "text-slate-700 hover:text-red-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  <span
                    className={`absolute inset-x-0 bottom-[24px] h-[3px] rounded-full bg-amber-400 transition-all duration-300 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
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
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-950 transition hover:border-amber-400 hover:bg-amber-50 xl:hidden"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[104px] overflow-y-auto border-t border-slate-200 bg-white px-5 pb-8 pt-5 shadow-2xl xl:hidden"
        >
          <div className="mx-auto grid max-w-3xl gap-3">
            {navigationItems.map((item) => (
              <NavLink
                key={`mobile-${item.path}`}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-4 font-bold transition ${
                    isActive
                      ? "bg-red-600 text-slate-950"
                      : "border border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-amber-50"
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
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-black text-white transition hover:bg-green-600"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href={JMK_LINKS.phone}
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 font-black text-slate-950 transition hover:bg-amber-300"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500">
              Property • Finance • Solar
            </p>
          </div>
        </div>
      )}
    </header>
  );
}