import jmkLogo from "../../assets/brand/jmk-original-logo.png";

const sizes = {
  sm: {
    logo: "h-10",
    tagline: "text-[7px]",
  },
  md: {
    logo: "h-14",
    tagline: "text-[8px]",
  },
  lg: {
    logo: "h-16",
    tagline: "text-[10px]",
  },
};

export default function HeaderLogo({
  size = "md",
  className = "",
}) {
  const current = sizes[size] || sizes.md;

  return (
    <div
      className={`inline-flex flex-col items-center ${className}`}
      aria-label="JMK — Trust Growth Future"
    >
      <img
        src={jmkLogo}
        alt="JMK"
        className={`${current.logo} w-auto max-w-full object-contain`}
      />

      <span
        className={`mt-2 whitespace-nowrap font-black uppercase tracking-[0.32em] text-slate-700 ${current.tagline}`}
      >
        Trust • Growth • Future
      </span>
    </div>
  );
}