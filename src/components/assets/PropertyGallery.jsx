import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function PropertyGallery({ images = [], title = "Property" }) {
  const gallery = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [gallery]);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? gallery.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % gallery.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gallery.length, isLightboxOpen]);

  if (!gallery.length) return null;

  const activeImage = gallery[activeIndex];
  const showPrevious = () =>
    setActiveIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % gallery.length);

  return (
    <section aria-label={`${title} gallery`}>
      <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]">
        <img
          src={activeImage}
          alt={`${title} main view ${activeIndex + 1}`}
          className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[560px]"
          decoding="async"
          fetchPriority="high"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/60 via-transparent to-black/10" />

        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07111f]/80 px-4 py-2.5 text-sm font-black text-white backdrop-blur-md transition hover:border-amber-400 hover:text-amber-400"
          aria-label="Open full screen gallery"
        >
          <Expand size={18} />
          View Gallery
        </button>

        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#07111f]/80 px-4 py-2 text-xs font-black text-white backdrop-blur-md">
          {activeIndex + 1} / {gallery.length}
        </span>

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07111f]/75 p-3 text-white opacity-100 backdrop-blur-md transition hover:border-amber-400 hover:text-amber-400 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07111f]/75 p-3 text-white opacity-100 backdrop-blur-md transition hover:border-amber-400 hover:text-amber-400 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {gallery.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-2xl border transition ${
                activeIndex === index
                  ? "border-amber-400 ring-2 ring-amber-400/25"
                  : "border-white/10 hover:border-white/30"
              }`}
              aria-label={`Show gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${title} view ${index + 1}`}
                className="h-24 w-full object-cover sm:h-28"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full screen gallery`}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:border-amber-400 hover:text-amber-400"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:border-amber-400 hover:text-amber-400 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={activeImage}
            alt={`${title} full screen view ${activeIndex + 1}`}
            className="max-h-[86vh] max-w-[90vw] rounded-2xl object-contain"
          />

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:border-amber-400 hover:text-amber-400 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <span className="absolute bottom-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white">
            {activeIndex + 1} / {gallery.length}
          </span>
        </div>
      )}
    </section>
  );
}
