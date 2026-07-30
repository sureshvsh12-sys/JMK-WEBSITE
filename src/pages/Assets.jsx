import { useMemo, useState } from "react";
import {
  Building2,
  MessageCircle,
  SearchX,
} from "lucide-react";
import { Link } from "react-router-dom";
import PropertySectionTitle from "../components/assets/PropertySectionTitle";
import PropertyStats from "../components/assets/PropertyStats";
import PropertyFilter from "../components/assets/PropertyFilter";
import PropertyCard from "../components/assets/PropertyCard";
import properties from "../data/properties";
import { JMK_LINKS } from "../config/contact";

const initialFilters = {
  search: "",
  type: "",
  location: "",
  budget: "",
};

function getBudgetMatch(property, budget) {
  if (!budget) {
    return true;
  }

  if (!property.priceValue) {
    return true;
  }

  if (budget === "below-20") {
    return property.priceValue < 2000000;
  }

  if (budget === "20-50") {
    return (
      property.priceValue >= 2000000 &&
      property.priceValue <= 5000000
    );
  }

  if (budget === "above-50") {
    return property.priceValue > 5000000;
  }

  return true;
}

export default function Assets() {
  const [filters, setFilters] = useState(initialFilters);

  const filteredProperties = useMemo(() => {
    const searchValue = filters.search.trim().toLowerCase();

    return properties.filter((property) => {
      const searchableText = [
        property.title,
        property.type,
        property.location,
        property.area,
        property.description,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchValue || searchableText.includes(searchValue);

      const matchesType =
        !filters.type || property.type === filters.type;

      const matchesLocation =
        !filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      const matchesBudget = getBudgetMatch(
        property,
        filters.budget,
      );

      return (
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesBudget
      );
    });
  }, [filters]);

  const updateFilter = (name, value) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] pb-24 pt-36">
      <div className="pointer-events-none fixed -left-40 top-40 h-96 w-96 rounded-full bg-amber-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <PropertySectionTitle
          badge="JMK ASSETS"
          title="Find Your Ideal"
          highlight="Property"
          subtitle="Explore residential, row house and commercial property opportunities with trusted guidance from JMK Assets."
        />

        <PropertyStats />

        <PropertyFilter
          search={filters.search}
          type={filters.type}
          location={filters.location}
          budget={filters.budget}
          onSearchChange={(value) =>
            updateFilter("search", value)
          }
          onTypeChange={(value) =>
            updateFilter("type", value)
          }
          onLocationChange={(value) =>
            updateFilter("location", value)
          }
          onBudgetChange={(value) =>
            updateFilter("budget", value)
          }
          onReset={resetFilters}
        />

        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">
            Showing{" "}
            <strong className="text-white">
              {filteredProperties.length}
            </strong>{" "}
            property options
          </p>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">
            <Building2
              size={17}
              className="text-amber-400"
            />
            JMK Assets
          </span>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <section className="rounded-[30px] border border-white/10 bg-white/[0.045] px-6 py-16 text-center">
            <SearchX
              size={52}
              className="mx-auto text-amber-400"
            />

            <h2 className="mt-5 text-2xl font-black text-white">
              No matching property found
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
              Change the filters or send your exact property requirement
              to the JMK Assets team.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-7 rounded-full bg-amber-400 px-7 py-3 font-black text-slate-950 transition hover:bg-amber-300"
            >
              Clear Filters
            </button>
          </section>
        )}

        <section className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-r from-[#0b1830] to-[#10284a] p-7 sm:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">
                Property Requirement
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Property list me option nahi mila?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Apni preferred location, property type aur budget share
                karein. JMK Assets team suitable options ke liye aapse
                contact karegi.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact?service=Property%20Enquiry&property=Custom%20Property%20Requirement"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Submit Requirement
              </Link>

              <a
                href={JMK_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400/40 bg-green-500/10 px-7 py-4 font-black text-green-400 transition hover:-translate-y-1 hover:bg-green-500 hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}