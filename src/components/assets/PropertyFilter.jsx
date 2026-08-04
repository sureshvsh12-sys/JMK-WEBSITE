import {
  IndianRupee,
  MapPin,
  Maximize2,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const inputClass = "w-full rounded-2xl border border-white/10 bg-[#101d35] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400";

export default function PropertyFilter({
  filters,
  cities = [],
  localities = [],
  onChange,
  onReset,
}) {
  return (
    <section className="mb-12 rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 backdrop-blur-lg sm:p-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-amber-400">
            <SlidersHorizontal size={20} />
            <p className="font-black uppercase tracking-[0.14em]">Advanced Property Search</p>
          </div>
          <p className="mt-2 text-sm text-slate-400">Filter live JMK Assets inventory by location, type, price and area.</p>
        </div>
        <button type="button" onClick={onReset} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-amber-400/40 hover:text-amber-400">
          <RotateCcw size={16} /> Reset
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className="relative xl:col-span-2">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input value={filters.search} onChange={(event) => onChange("search", event.target.value)} placeholder="Title, locality, city, facing..." className={`${inputClass} pl-11`} />
        </label>

        <select value={filters.type} onChange={(event) => onChange("type", event.target.value)} className={inputClass}>
          <option value="">All Types</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Plot">Plot</option>
          <option value="Agricultural">Agricultural</option>
        </select>

        <select value={filters.category} onChange={(event) => onChange("category", event.target.value)} className={inputClass}>
          <option value="">All Categories</option>
          <option value="Sale">For Sale</option>
          <option value="Rent">For Rent</option>
          <option value="Lease">For Lease</option>
        </select>

        <label className="relative">
          <MapPin size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <select value={filters.city} onChange={(event) => onChange("city", event.target.value)} className={`${inputClass} appearance-none pl-11`}>
            <option value="">All Cities</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
        </label>

        <select value={filters.locality} onChange={(event) => onChange("locality", event.target.value)} className={inputClass}>
          <option value="">All Localities</option>
          {localities.map((locality) => <option key={locality} value={locality}>{locality}</option>)}
        </select>

        <label className="relative">
          <IndianRupee size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input type="number" min="0" value={filters.minPrice} onChange={(event) => onChange("minPrice", event.target.value)} placeholder="Minimum price" className={`${inputClass} pl-11`} />
        </label>

        <label className="relative">
          <IndianRupee size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input type="number" min="0" value={filters.maxPrice} onChange={(event) => onChange("maxPrice", event.target.value)} placeholder="Maximum price" className={`${inputClass} pl-11`} />
        </label>

        <label className="relative">
          <Maximize2 size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input type="number" min="0" value={filters.minArea} onChange={(event) => onChange("minArea", event.target.value)} placeholder="Minimum area" className={`${inputClass} pl-11`} />
        </label>

        <select value={filters.status} onChange={(event) => onChange("status", event.target.value)} className={inputClass}>
          <option value="">All Statuses</option>
          <option value="Available">Available</option>
          <option value="Reserved">Reserved</option>
          <option value="Sold">Sold</option>
        </select>

        <select value={filters.sort} onChange={(event) => onChange("sort", event.target.value)} className={inputClass}>
          <option value="featured">Featured First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="area-high">Area: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </section>
  );
}
