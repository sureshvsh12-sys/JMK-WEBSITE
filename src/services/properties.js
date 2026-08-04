const URL = String(import.meta.env.VITE_SUPABASE_URL || "").trim().replace(/\/$/, "");
const KEY = String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || "").trim();

function mapProperty(row) {
  const images = row.image_urls || [];
  return {
    id: row.id, slug: row.slug, title: row.title, type: row.type, category: row.category,
    location: row.location || [row.locality, row.city, row.state].filter(Boolean).join(", "),
    locality: row.locality, city: row.city, state: row.state, price: row.price,
    priceValue: Number(row.price_value || 0), negotiable: Boolean(row.negotiable),
    area: `${Number(row.area_value || 0)} ${row.area_unit || "Sq. Ft."}`,
    dimensions: `${Number(row.area_value || 0)} ${row.area_unit || "Sq. Ft."}`,
    frontage: row.road_width || "Contact JMK Assets", facing: row.facing || "Not specified",
    roadWidth: row.road_width || "", description: row.description || "", amenities: row.amenities || [],
    image: row.cover_image_url || images[0] || "", images, status: row.status || "Available",
    featured: Boolean(row.featured), mapUrl: row.map_url || "", latitude: row.latitude,
    longitude: row.longitude, officeLocation: row.office_location || "JMK Group Office, Dewas",
    bedrooms: "-", bathrooms: "-", parking: (row.amenities || []).some((x) => /parking/i.test(x)) ? "Available" : "Contact",
  };
}

export async function fetchProperties() {
  if (!URL || !KEY) throw new Error("Property cloud connection is not configured.");
  const response = await fetch(`${URL}/rest/v1/properties?select=*&published=eq.true&order=featured.desc,created_at.desc`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } });
  if (!response.ok) throw new Error("Properties cloud se load nahi ho saki.");
  return (await response.json()).map(mapProperty);
}
