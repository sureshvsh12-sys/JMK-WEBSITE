import { Link } from "react-router-dom";

export default function SolarCard({ service }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-amber-400/40">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-3xl shadow-lg shadow-amber-400/20">
        {service.icon}
      </div>

      <h3 className="mt-7 text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {service.description}
      </p>

      <ul className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-slate-300"
          >
            <span className="mt-1 text-amber-400">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
      >
        Get Free Quote →
      </Link>
    </article>
  );
}