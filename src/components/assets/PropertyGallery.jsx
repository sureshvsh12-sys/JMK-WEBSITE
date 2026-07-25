import { useState } from "react";

export default function PropertyGallery({ images = [], title = "Property" }) {
  const gallery = images.filter(Boolean);
  const [activeImage, setActiveImage] = useState(gallery[0] || "");

  if (!activeImage) {
    return null;
  }

  return (
    <section>
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]">
        <img
          src={activeImage}
          alt={`${title} main view`}
          className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[560px]"
        />
      </div>

      {gallery.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`overflow-hidden rounded-2xl border transition ${
                activeImage === image
                  ? "border-amber-400 ring-2 ring-amber-400/25"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <img
                src={image}
                alt={`${title} view ${index + 1}`}
                className="h-24 w-full object-cover sm:h-28"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
