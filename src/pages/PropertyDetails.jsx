import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  IndianRupee,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Ruler,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import PropertyGallery from "../components/assets/PropertyGallery";
import properties from "../data/properties";
import { JMK_LINKS } from "../config/contact";

function buildWhatsAppLink(property) {
  const message = `Hello JMK Group, I am interested in ${property.title} at ${property.location}. Please share complete details and arrange a site visit.`;
  return `https://wa.me/919753109732?text=${encodeURIComponent(message)}`;
}

export default function PropertyDetails() {
  const { propertyId } = useParams();
  const property = properties.find(
    (item) => String(item.id) === String(propertyId),
  );

  if (!property) {
    return <Navigate to="/assets" replace />;
  }

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

  return (
    <main className="min-h-screen bg-[#07111f] pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Link
          to="/assets"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
        >
          <ArrowLeft size={18} />
          Back to Properties
        </Link>

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
                {property.location}, Madhya Pradesh
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
                    <p className="mt-1 font-black text-white">{value || "On Request"}</p>
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
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
                    message: `I am interested in ${property.title} at ${property.location}. Please contact me.`,
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
                  Call Now
                </a>
              </div>

              <p className="mt-6 text-center text-sm leading-6 text-slate-400">
                Site visit, price discussion and documentation guidance available from JMK Assets.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
