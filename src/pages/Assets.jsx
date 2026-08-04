import { useMemo, useState } from "react";
import { Building2, MessageCircle, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import PropertySectionTitle from "../components/assets/PropertySectionTitle";
import PropertyStats from "../components/assets/PropertyStats";
import PropertyFilter from "../components/assets/PropertyFilter";
import PropertyCard from "../components/assets/PropertyCard";
import useCloudProperties from "../hooks/useCloudProperties";
import { JMK_LINKS } from "../config/contact";

const initialFilters = { search: "", type: "", category: "", city: "", locality: "", minPrice: "", maxPrice: "", minArea: "", status: "", sort: "featured" };

function areaNumber(property) {
  const value = Number.parseFloat(String(property.area || "").replace(/,/g, ""));
  return Number.isFinite(value) ? value : 0;
}

export default function Assets() {
  const [filters, setFilters] = useState(initialFilters);
  const { properties, loading, error, reload } = useCloudProperties();

  const cities = useMemo(() => [...new Set(properties.map((item) => item.city).filter(Boolean))].sort(), [properties]);
  const localities = useMemo(() => [...new Set(properties.filter((item) => !filters.city || item.city === filters.city).map((item) => item.locality).filter(Boolean))].sort(), [filters.city, properties]);

  const filteredProperties = useMemo(() => {
    const search = filters.search.trim().toLowerCase();
    const minPrice = Number(filters.minPrice || 0);
    const maxPrice = Number(filters.maxPrice || 0);
    const minArea = Number(filters.minArea || 0);

    const result = properties.filter((property) => {
      const searchable = [property.title, property.type, property.category, property.location, property.locality, property.city, property.facing, property.description, ...(property.amenities || [])].join(" ").toLowerCase();
      return (!search || searchable.includes(search))
        && (!filters.type || property.type === filters.type)
        && (!filters.category || property.category === filters.category)
        && (!filters.city || property.city === filters.city)
        && (!filters.locality || property.locality === filters.locality)
        && (!filters.status || property.status === filters.status)
        && (!minPrice || property.priceValue >= minPrice)
        && (!maxPrice || property.priceValue <= maxPrice)
        && (!minArea || areaNumber(property) >= minArea);
    });

    return [...result].sort((a, b) => {
      if (filters.sort === "price-low") return a.priceValue - b.priceValue;
      if (filters.sort === "price-high") return b.priceValue - a.priceValue;
      if (filters.sort === "area-high") return areaNumber(b) - areaNumber(a);
      if (filters.sort === "newest") return String(b.id).localeCompare(String(a.id));
      return Number(b.featured) - Number(a.featured);
    });
  }, [filters, properties]);

  const updateFilter = (name, value) => setFilters((current) => ({ ...current, [name]: value, ...(name === "city" ? { locality: "" } : {}) }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] pb-24 pt-36 text-white">
      <div className="pointer-events-none fixed -left-40 top-40 h-96 w-96 rounded-full bg-amber-400/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <PropertySectionTitle badge="JMK ASSETS" title="Find Your Ideal" highlight="Property" subtitle="Explore live residential, commercial, plot and agricultural property opportunities from JMK Assets." />
        <PropertyStats />

        {loading && <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">Properties cloud se load ho rahi hain...</div>}
        {error && <div className="mb-8 rounded-2xl border border-red-400/30 bg-red-500/10 p-5 text-center text-red-200">{error}<button type="button" onClick={reload} className="ml-3 rounded-full bg-red-500 px-4 py-2 font-bold text-white">Retry</button></div>}

        <PropertyFilter filters={filters} cities={cities} localities={localities} onChange={updateFilter} onReset={() => setFilters(initialFilters)} />

        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">Showing <strong className="text-white">{filteredProperties.length}</strong> of <strong className="text-white">{properties.length}</strong> live properties</p>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300"><Building2 size={17} className="text-amber-400" />JMK Assets</span>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)}</div>
        ) : !loading && (
          <section className="rounded-[30px] border border-white/10 bg-white/[0.045] px-6 py-16 text-center">
            <SearchX size={52} className="mx-auto text-amber-400" />
            <h2 className="mt-5 text-2xl font-black">No matching property found</h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">Filters clear karein ya apni exact property requirement JMK Assets ko bhejein.</p>
            <button type="button" onClick={() => setFilters(initialFilters)} className="mt-7 rounded-full bg-amber-400 px-7 py-3 font-black text-slate-950 transition hover:bg-amber-300">Clear Filters</button>
          </section>
        )}

        <section className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-r from-[#0b1830] to-[#10284a] p-7 sm:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div><p className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">Property Requirement</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Property list me option nahi mila?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Preferred location, type aur budget share karein. JMK Assets team suitable options ke liye contact karegi.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Link to="/contact?service=Property%20Enquiry&property=Custom%20Property%20Requirement" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300">Submit Requirement</Link><a href={JMK_LINKS.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400/40 bg-green-500/10 px-7 py-4 font-black text-green-400 transition hover:-translate-y-1 hover:bg-green-500 hover:text-white"><MessageCircle size={20} />WhatsApp</a></div>
          </div>
        </section>
      </div>
    </main>
  );
}
