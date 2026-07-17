import {
  ArrowRight,
  BadgeCheck,
  Building2,
  MapPin,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const properties = [
  {
    id: 1,
    title: "Premium Residential Plot",
    location: "Dewas, Madhya Pradesh",
    price: "₹18 Lac",
    category: "Residential Plot",
    area: "1,200 Sq. Ft.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: 2,
    title: "Commercial Property",
    location: "Indore Road, Dewas",
    price: "₹55 Lac",
    category: "Commercial",
    area: "2,800 Sq. Ft.",
    status: "Prime Location",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: 3,
    title: "Premium Luxury Villa",
    location: "Ujjain Road, Dewas",
    price: "₹95 Lac",
    category: "Luxury Villa",
    area: "3,200 Sq. Ft.",
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&auto=format&fit=crop&q=85",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-400/8 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            badge="FEATURED PROPERTIES"
            title="Discover Premium"
            highlight="Property Opportunities"
            subtitle="Explore selected residential, commercial and investment properties with trusted guidance from JMK Assets."
            align="left"
          />

          <Link
            to="/assets"
            className="group inline-flex w-fit items-center justify-center gap-3 rounded-full border border-amber-400/50 bg-amber-400/10 px-7 py-3.5 font-black text-amber-400 transition duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-slate-950"
          >
            View All Properties

            <ArrowRight
              size={19}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-xl shadow-black/15 transition duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020b15] via-transparent to-black/10" />

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07111f]/85 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md">
                    <Building2
                      size={15}
                      className="text-amber-400"
                    />

                    {property.category}
                  </span>
                </div>

                <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-black text-white shadow-lg">
                  <BadgeCheck size={15} />

                  {property.status}
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-3xl font-black text-amber-400">
                    {property.price}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-amber-400">
                  {property.title}
                </h3>

                <div className="mt-4 flex items-start gap-2 text-slate-400">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-400"
                  />

                  <span>{property.location}</span>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-slate-300">
                  <Maximize2
                    size={18}
                    className="text-amber-400"
                  />

                  <span className="text-sm font-semibold">
                    Property Area:
                  </span>

                  <strong className="ml-auto text-white">
                    {property.area}
                  </strong>
                </div>

                <Link
                  to="/assets"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
                >
                  View Property Details

                  <ArrowRight
                    size={19}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">
                Looking for something specific?
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Tell us your property requirement
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Share your preferred location, property type and budget. Our
                team will help you find suitable options.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-black text-white transition duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
            >
              Submit Requirement

              <ArrowRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}