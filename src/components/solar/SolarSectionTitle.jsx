export default function SolarSectionTitle({
  badge = "JMK SOLAR SOLUTIONS",
  title = "Clean Energy.",
  highlight = "Smarter Future.",
  subtitle = "Premium residential and commercial solar solutions designed to reduce electricity costs and create long-term energy independence.",
}) {
  return (
    <div className="mb-14 text-center">
      <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
        {title} <span className="text-amber-400">{highlight}</span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}