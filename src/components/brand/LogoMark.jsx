import heroLogo from "../../assets/brand/jmk-hero-logo.png";

export default function LogoMark({
  size = 610,
  animated = false,
  className = "",
}) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: `min(100%, ${size}px)`,
        aspectRatio: "1 / 1",
      }}
      aria-label="JMK — Trust Growth Future"
    >
      <div className="absolute inset-[1%] rounded-full bg-amber-400/15 blur-[85px]" />

      <div
        className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border-[3px] border-amber-400 bg-[#05080d]/95 shadow-[0_0_25px_rgba(251,191,36,0.95),0_0_80px_rgba(251,191,36,0.4)] ${
          animated ? "animate-float" : ""
        }`}
      >
        <div className="absolute inset-[2px] rounded-full border border-amber-100/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_62%)]" />

        <img
          src={heroLogo}
          alt="JMK"
          className="relative w-[72%] max-w-[460px] object-contain"
        />

        <p className="relative mt-8 whitespace-nowrap text-center text-[clamp(0.72rem,1.35vw,1.1rem)] font-black uppercase tracking-[0.38em] text-slate-200">
          Trust • Growth • Future
        </p>
      </div>
    </div>
  );
}
