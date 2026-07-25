import PropertyCard from "./PropertyCard";

export default function SimilarProperties({ currentProperty, properties = [] }) {
  const sameType = properties.filter(
    (property) =>
      property.id !== currentProperty.id && property.type === currentProperty.type,
  );
  const others = properties.filter(
    (property) =>
      property.id !== currentProperty.id && property.type !== currentProperty.type,
  );
  const similarProperties = [...sameType, ...others].slice(0, 3);

  if (!similarProperties.length) return null;

  return (
    <section className="mt-16 border-t border-white/10 pt-14">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
          More Opportunities
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          Similar Properties
        </h2>
        <p className="mt-4 leading-7 text-slate-400">
          Explore more verified property options available through JMK Assets in
          and around Dewas.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
