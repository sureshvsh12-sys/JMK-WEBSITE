import {
  IndianRupee,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function PropertyFilter({
  search = "",
  type = "",
  location = "",
  budget = "",
  onSearchChange,
  onTypeChange,
  onLocationChange,
  onBudgetChange,
  onReset,
}) {
  return (
    <section className="mb-12 rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 backdrop-blur-lg sm:p-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-amber-400">
            <SlidersHorizontal size={20} />

            <p className="font-black uppercase tracking-[0.14em]">
              Find Your Property
            </p>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Search properties by type, location and budget.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-amber-400/40 hover:text-amber-400"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <label className="relative lg:col-span-1">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange?.(event.target.value)}
            placeholder="Search property..."
            className="w-full rounded-2xl border border-white/10 bg-[#101d35] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
          />
        </label>

        <select
          value={type}
          onChange={(event) => onTypeChange?.(event.target.value)}
          className="rounded-2xl border border-white/10 bg-[#101d35] px-4 py-3.5 text-white outline-none transition focus:border-amber-400"
        >
          <option value="">All Property Types</option>
          <option value="Residential">Residential</option>
          <option value="Row House">Row House</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
          <option value="Farm House">Farm House</option>
        </select>

        <label className="relative">
          <MapPin
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <select
            value={location}
            onChange={(event) => onLocationChange?.(event.target.value)}
            className="w-full appearance-none rounded-2xl border border-white/10 bg-[#101d35] py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-amber-400"
          >
            <option value="">All Locations</option>
            <option value="Dewas">Dewas</option>
            <option value="Station Road">Station Road</option>
            <option value="AB Road">AB Road</option>
            <option value="Indore">Indore</option>
            <option value="Ujjain">Ujjain</option>
          </select>
        </label>

        <label className="relative">
          <IndianRupee
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <select
            value={budget}
            onChange={(event) => onBudgetChange?.(event.target.value)}
            className="w-full appearance-none rounded-2xl border border-white/10 bg-[#101d35] py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-amber-400"
          >
            <option value="">All Budgets</option>
            <option value="below-20">Below ₹20 Lac</option>
            <option value="20-50">₹20–50 Lac</option>
            <option value="above-50">Above ₹50 Lac</option>
          </select>
        </label>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
        >
          <Search size={19} />
          Search
        </button>
      </div>
    </section>
  );
}