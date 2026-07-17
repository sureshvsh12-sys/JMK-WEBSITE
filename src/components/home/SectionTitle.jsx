const SectionTitle = ({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
}) => {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} gap-4 mb-14`}>
      {badge && (
        <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
          {badge}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-amber-400">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="max-w-3xl text-slate-400 text-lg leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;