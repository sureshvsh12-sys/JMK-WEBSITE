import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  Copy,
  IndianRupee,
  MapPin,
  Maximize2,
  MessageCircle,
  Navigation,
  Phone,
  Ruler,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropertyGallery from "../components/assets/PropertyGallery";
import SimilarProperties from "../components/assets/SimilarProperties";
import { JMK_CONTACT, JMK_LINKS } from "../config/contact";
import properties from "../data/properties";

function buildWhatsAppLink(property) {
  const message = `Hello JMK Group, I am interested in ${property.title} at ${property.location}. Please share complete details and arrange a site visit.`;
  return `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${encodeURIComponent(message)}`;
}

function getPropertyMapLinks(property) {
  const location = `${property.location}, Madhya Pradesh`;
  const query = encodeURIComponent(location);

  return {
    embed: `https://www.google.com/maps?q=${query}&output=embed`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${query}`,
  };
}

export default function PropertyDetails() {
  const { propertyId } = useParams();
  const [shareStatus, setShareStatus] = useState("");
  const property = properties.find(
    (item) => String(item.id) === String(propertyId),
  );

  if (!property) return <Navigate to="/assets" replace />;

  const highlights = [
    { label: "Area", value: property.area, icon: Maximize2 },
    { label: "Dimensions", value: property.dimensions, icon: Ruler },
    { label: "Frontage", value: property.frontage, icon: Building2 },
    { label: "Parking", value: property.parking, icon: Car },
    {
      label: "Bedrooms",
      value: property.bedrooms !== "-" ? property.bedrooms : "N/A",
      icon: BedDouble,
    },
    {
      label: "Bathrooms",
      value: property.bathrooms !== "-" ? property.bathrooms : "N/A",
      icon: Bath,
    },
  ];

  const whatsappLink = buildWhatsAppLink(property);
  const mapLinks = getPropertyMapLinks(property);

  const handleShare = async () => {
    const shareData = {
      title: `${property.title} | JMK Assets`,
      text: `${property.title} at ${property.location} — ${property.price}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus("Shared");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus("Link copied");
      }
    } catch (error) {
      if (error?.name !== "AbortError") setShareStatus("Unable to share");
    }

    window.setTimeout(() => setShareStatus(""), 2500);
  };

  return (
    <main className="min-h-screen bg-[#07111f] pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/assets"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
          >
            <ArrowLeft size={18} />
            Back to Properties
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
          >
            {shareStatus === "Link copied" ? <Copy size={18} /> : <Share2 size={18} />}
            {shareStatus || "Share Property"}
          </button>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <section>
            <PropertyGallery
              images={property.images?.length ? property.images : [property.image]}
              title={property.title}
            />

            <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-950">
                  <Building2 size={15} />
                  {property.type}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-black text-emerald-300">
                  <CheckCircle2 size={15} />
                  Available
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                {property.title}
              </h1>

              <p className="mt-4 flex items-start gap-2 text-lg text-slate-400">
                <MapPin size={21} className="mt-1 shrink-0 text-amber-400" />
                {property.location}
                {!property.location.toLowerCase().includes("madhya pradesh") &&
                  ", Madhya Pradesh"}
              </p>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                {property.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <Icon size={20} className="text-amber-400" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 font-black text-white">
                      {value || "On Request"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <h2 className="text-2xl font-black sm:text-3xl">Property Features</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {(property.amenities || [
                  "Prime location",
                  "Clear guidance",
                  "Site visit support",
                  "Documentation assistance",
                ]).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045]">
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                    Location
                  </p>
                  <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                    Explore the Area
                  </h2>
                  <p className="mt-2 text-slate-400">{property.location}</p>
                </div>
                <a
                  href={mapLinks.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300"
                >
                  <Navigation size={19} />
                  Get Directions
                </a>
              </div>
              <iframe
                title={`${property.title} location map`}
                src={mapLinks.embed}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="px-6 py-4 text-xs leading-5 text-slate-500 sm:px-8">
                Map shows the property area. Exact site location is shared during
                enquiry or site-visit confirmation.
              </p>
            </div>
          </section>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[32px] border border-amber-400/25 bg-gradient-to-b from-[#10284a] to-[#0a172a] p-6 shadow-2xl shadow-black/25 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                Property Price
              </p>
              <p className="mt-3 flex items-center gap-2 text-3xl font-black sm:text-4xl">
                {property.priceValue > 0 && <IndianRupee size={30} />}
                {property.price}
              </p>

              <div className="mt-7 space-y-3">
                <Link
                  to="/contact"
                  state={{
                    service: "Property Enquiry",
                    property: property.title,
                    message: `I am interested in ${property.title} at ${property.location}. Please contact me and arrange a site visit.`,
                  }}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300"
                >
                  Enquire Now
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-green-400"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

                <a
                  href={JMK_LINKS.phone}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
                >
                  <Phone size={20} />
                  Call {JMK_CONTACT.phoneDisplay}
                </a>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="font-black text-white">Free Site Visit Support</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Get price discussion, location guidance and documentation
                  assistance directly from JMK Assets.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <SimilarProperties currentProperty={property} properties={properties} />
      </div>
    </main>
  );
}
