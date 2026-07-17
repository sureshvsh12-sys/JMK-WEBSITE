import {
  ArrowLeft,
  Building2,
  Home as HomeIcon,
  MessageCircle,
} from "lucide-react";
import {
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/common/FloatingActions";
import ScrollToTop from "./components/common/ScrollToTop";
import SEOManager from "./components/seo/SEOManager";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import Financial from "./pages/Financial";
import Solar from "./pages/Solar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { JMK_LINKS } from "./config/contact";

function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111f] px-5 pb-24 pt-36 text-center sm:px-6">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <section className="relative w-full max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.045] px-6 py-14 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-10 sm:py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-400">
          <Building2 size={16} />
          JMK GROUP Website
        </span>

        <p className="mt-7 text-8xl font-black tracking-tight text-amber-400 sm:text-9xl">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Aap jis page ko open kar rahe hain woh available nahi hai,
          ya uska address change ho gaya hai.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            <HomeIcon size={20} />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
          >
            <ArrowLeft size={20} />
            Contact JMK
          </Link>

          <a
            href={JMK_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400/40 bg-green-500/10 px-8 py-4 font-black text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>

        <p className="mt-9 text-sm font-bold text-slate-500">
          Trust • Growth • Future
        </p>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <ScrollToTop />

      <SEOManager />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/assets"
          element={<Assets />}
        />

        <Route
          path="/financial"
          element={<Financial />}
        />

        <Route
          path="/finance"
          element={
            <Navigate
              to="/financial"
              replace
            />
          }
        />

        <Route
          path="/solar"
          element={<Solar />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />

      <FloatingActions />
    </div>
  );
}