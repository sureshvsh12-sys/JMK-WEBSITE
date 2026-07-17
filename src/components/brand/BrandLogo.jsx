import jmkLogo from "../../assets/brand/jmk-original-logo.png";

const sizes = {
  sm: {
    logo: "h-11",
    tagline: "text-[7px]",
  },
  md: {
    logo: "h-14",
    tagline: "text-[8px]",
  },
  lg: {
    logo: "h-18",
    tagline: "text-[10px]",
  },
};

export default function BrandLogo({
  size = "md",
  className = "",
}) {
  const current = sizes[size] || sizes.md;

  return (
    <div
      className={`inline-flex flex-col items-start ${className}`}
      aria-label="JMK — Trust Growth Future"
    >
      <img
        src={jmkLogo}
        alt="JMK"
        className={`${current.logo} w-auto object-contain`}
      />

      <span
        className={`mt-2 block w-full whitespace-nowrap text-center font-black uppercase tracking-[0.3em] text-slate-700 ${current.tagline}`}
      >
        Trust • Growth • Future
      </span>
    </div>
  );
}