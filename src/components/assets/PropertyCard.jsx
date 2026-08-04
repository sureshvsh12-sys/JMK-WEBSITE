import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  MapPin,
  Maximize2,
  MessageCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { JMK_CONTACT } from "../../config/contact";

function buildWhatsAppLink(property) {
  const message = `Hello JMK Group, I am interested in ${property.title} (${property.location}). Please share more details.`;
  return `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${encodeURIComponent(message)}`;
}

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
      visible: Boolean(property.bedrooms) && property.bedrooms !== "-",
    },
    {
      label:
        property.bathrooms && property.bathrooms !== "-"
          ? `${property.bathrooms} Baths`
          : null,
      icon: Bath,
      visible: Boolean(property.bathrooms) && property.bathrooms !== "-",
    },
    {
      label: property.parking,
      icon: Car,
      visible: Boolean(property.parking),
    },
  ].filter((item) => item.visible);

  const whatsappLink = buildWhatsAppLink(property);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/25">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-72"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/15 to-black/10" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07111f]/85 px-3.5 py-2 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:text-xs">
          <Building2 size={15} className="text-amber-400" />
          {property.type}
        </span>

        {property.featured && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3.5 py-2 text-[11px] font-black text-white shadow-lg sm:right-5 sm:top-5 sm:px-4 sm:text-xs">
            <Star size={14} fill="currentColor" />
            Featured
          </span>
        )}

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">
              Price
            </p>
            <p className="mt-1 text-2xl font-black text-amber-400 sm:text-3xl">
              {property.price}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1.5 text-[11px] font-black text-emerald-300 backdrop-blur-md">
            <CheckCircle2 size={14} />
            {property.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-amber-400">
          {property.title}
        </h3>

        <p className="mt-4 flex items-start gap-2 text-slate-400">
          <MapPin size={18} className="mt-0.5 shrink-0 text-amber-400" />
          <span>
            {property.location}
            {!property.location.toLowerCase().includes("madhya pradesh") &&
              ", Madhya Pradesh"}
          </span>
        </p>

        {property.description && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
            {property.description}
          </p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3">
          {details.slice(0, 4).map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={`${detail.label}-${Icon.displayName || Icon.name}`}
                className="flex min-h-12 items-center gap-2 rounded-2xl border border-white/10 bg-black/15 px-3 py-3 text-sm font-semibold text-slate-300"
              >
                <Icon size={17} className="shrink-0 text-amber-400" />
                <span className="truncate">{detail.label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-[1fr_auto]">
          <Link
            to={`/assets/${property.id}`}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-5 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            View Details
            <ArrowRight
              size={19}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Enquire about ${property.title} on WhatsApp`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400/35 bg-green-500/10 px-5 py-3.5 font-black text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={19} />
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
