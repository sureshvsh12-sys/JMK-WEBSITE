import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  MapPin,
  Maximize2,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  const details = [
    {
      label: property.area,
      icon: Maximize2,
      visible: Boolean(property.area),
    },
    {
      label:
        property.bedrooms && property.bedrooms !== "-"
          ? `${property.bedrooms} Beds`
          : null,
      icon: BedDouble,
      visible:
        Boolean(property.bedrooms) &&
        property.bedrooms !== "-",
    },
    {
      label:
        property.bathrooms && property.bathrooms !== "-"
          ? `${property.bathrooms} Baths`
          : null,
      icon: Bath,
      visible:
        Boolean(property.bathrooms) &&
        property.bathrooms !== "-",
    },
    {
      label: property.parking,
      icon: Car,
      visible: Boolean(property.parking),
    },
  ].filter((item) => item.visible);

  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/25">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-black/10" />

        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07111f]/85 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md">
          <Building2
            size={15}
            className="text-amber-400"
          />
          {property.type}
        </span>

        {property.featured && (
          <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">
            <Star
              size={14}
              fill="currentColor"
            />
            Featured
          </span>
        )}

        <div className="absolute bottom-5 left-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Starting From
          </p>

          <p className="mt-1 text-3xl font-black text-amber-400">
            {property.price}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-amber-400">
          {property.title}
        </h3>

        <p className="mt-4 flex items-center gap-2 text-slate-400">
          <MapPin
            size={18}
            className="shrink-0 text-amber-400"
          />

          {property.location}, Madhya Pradesh
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {details.slice(0, 4).map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={`${detail.label}-${Icon.displayName || "detail"}`}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/15 px-3 py-3 text-sm font-semibold text-slate-300"
              >
                <Icon
                  size={17}
                  className="shrink-0 text-amber-400"
                />

                <span className="truncate">
                  {detail.label}
                </span>
              </div>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
        >
          Enquire About Property

          <ArrowRight
            size={19}
            className="transition duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}