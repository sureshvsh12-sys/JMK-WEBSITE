import { Building2 } from "lucide-react";

export default function PropertySectionTitle({
  badge = "JMK ASSETS",
  title = "Premium Properties",
  highlight = "Collection",
  subtitle = "Explore residential, commercial and investment property opportunities with professional guidance from JMK Assets.",
}) {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
        <Building2 size={16} />
        {badge}
      </span>

      <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}{" "}
        <span className="text-amber-400">
          {highlight}
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
        {subtitle}
      </p>

      <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}