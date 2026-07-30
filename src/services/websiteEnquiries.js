const SUPABASE_URL = String(import.meta.env.VITE_SUPABASE_URL || "").trim().replace(/\/$/, "");
const SUPABASE_KEY = String(
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    "",
).trim();

const SERVICE_SEGMENTS = {
  "Financial Servicess": "finance",
  Finance: "finance",
  "Property Enquiry": "assets",
  Assets: "assets",
  "Solar Solutions": "solar",
  Solar: "solar",
  "General Enquiry": "assets",
};

const VALID_SEGMENTS = new Set(["finance", "assets", "solar"]);

function normalizeMobile(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length > 10 ? digits.slice(-10) : digits;
}

function clean(value) {
  return String(value || "").trim();
}

export function getSegmentForService(service, fallback = "assets") {
  const resolved = SERVICE_SEGMENTS[clean(service)] || clean(fallback).toLowerCase();
  return VALID_SEGMENTS.has(resolved) ? resolved : "assets";
}

export async function submitWebsiteEnquiry({
  segment,
  name,
  mobile,
  email = "",
  city = "",
  district = "",
  message = "",
  page = "",
  reference = "",
}) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Website cloud connection is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.");
  }

  const resolvedSegment = getSegmentForService("", segment);
  const normalizedMobile = normalizeMobile(mobile);

  if (clean(name).length < 2 || !/^[6-9]\d{9}$/.test(normalizedMobile)) {
    throw new Error("Please check the name and mobile number before submitting.");
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_website_enquiry`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_segment: resolvedSegment,
        p_name: clean(name),
        p_mobile: normalizedMobile,
        p_email: clean(email) || null,
        p_city: clean(city) || null,
        p_district: clean(district) || null,
        p_message: clean(message) || null,
        p_page: clean(page) || null,
        p_reference: clean(reference) || null,
      }),
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      const serverMessage = payload?.message || payload?.error_description || payload?.hint;
      throw new Error(serverMessage || "Enquiry CRM me save nahi ho paayi.");
    }

    if (!payload || payload.success !== true) {
      throw new Error(payload?.message || "Enquiry CRM me save nahi ho paayi.");
    }

    return payload;
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error("Connection timed out. Please try again or use WhatsApp.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
