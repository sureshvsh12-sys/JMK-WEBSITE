import PropertyCard from "./PropertyCard";

function normalize(value) { return String(value || "").trim().toLowerCase(); }

function scoreProperty(candidate, current) {
  let score = 0;
  if (normalize(candidate.type) === normalize(current.type)) score += 5;
  if (normalize(candidate.category) === normalize(current.category)) score += 3;
  if (normalize(candidate.city) === normalize(current.city)) score += 4;
  if (normalize(candidate.locality) && normalize(candidate.locality) === normalize(current.locality)) score += 5;
  if (candidate.priceValue && current.priceValue) {
    const difference = Math.abs(candidate.priceValue - current.priceValue) / current.priceValue;
    if (difference <= 0.15) score += 4;
    else if (difference <= 0.35) score += 2;
  }
  if (candidate.featured) score += 1;
  return score;
}

export default function SimilarProperties({ currentProperty, properties = [] }) {
  const similarProperties = properties
    .filter((property) => String(property.id) !== String(currentProperty.id) && property.status === "Available")
    .map((property) => ({ property, score: scoreProperty(property, currentProperty) }))
    .sort((a, b) => b.score - a.score || Number(b.property.featured) - Number(a.property.featured))
    .slice(0, 3)
    .map((entry) => entry.property);

  if (!similarProperties.length) return null;

  return (
    <section className="mt-16 border-t border-white/10 pt-14">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">More Opportunities</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Similar Properties</h2>
        <p className="mt-4 leading-7 text-slate-400">Matched by property type, category, location and price range.</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {similarProperties.map((property) => <PropertyCard key={property.id} property={property} />)}
      </div>
    </section>
  );
}
