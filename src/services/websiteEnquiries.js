const SUPABASE_URL = String(import.meta.env.VITE_SUPABASE_URL || "")
  .trim()
  .replace(/\/$/, "");
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
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function normalizeMobile(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length > 10 ? digits.slice(-10) : digits;
}

function clean(value, maxLength = 5000) {
  return String(value || "").trim().slice(0, maxLength);
}

function unwrapPayload(payload) {
  if (Array.isArray(payload)) return payload[0] || null;
  return payload;
}

export function getSegmentForService(service, fallback = "assets") {
  const resolved = SERVICE_SEGMENTS[clean(service, 100)] || clean(fallback, 100).toLowerCase();
  return VALID_SEGMENTS.has(resolved) ? resolved : "assets";
}

export function isWebsiteEnquiryConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_KEY);
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
  if (!isWebsiteEnquiryConfigured()) {
    throw new Error(
      "Website cloud connection is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  const resolvedSegment = getSegmentForService("", segment);
  const normalizedMobile = normalizeMobile(mobile);
  const cleanedName = clean(name, 120);
  const cleanedEmail = clean(email, 180);

  if (cleanedName.length < 2) {
    throw new Error("Please enter your full name.");
  }
  if (!/^[6-9]\d{9}$/.test(normalizedMobile)) {
    throw new Error("Please enter a valid Indian 10-digit mobile number.");
  }
  if (cleanedEmail && !EMAIL_PATTERN.test(cleanedEmail)) {
    throw new Error("Please enter a valid email address.");
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
        Accept: "application/json",
      },
      body: JSON.stringify({
        p_segment: resolvedSegment,
        p_name: cleanedName,
        p_mobile: normalizedMobile,
        p_email: cleanedEmail || null,
        p_city: clean(city, 120) || null,
        p_district: clean(district, 120) || null,
        p_message: clean(message, 3000) || null,
        p_page: clean(page, 500) || null,
        p_reference: clean(reference, 250) || null,
      }),
    });

    const rawPayload = await response.json().catch(() => null);
    const payload = unwrapPayload(rawPayload);

    if (!response.ok) {
      const serverMessage =
        payload?.message ||
        payload?.error_description ||
        payload?.details ||
        payload?.hint;
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
    if (error instanceof TypeError) {
      throw new Error("Network connection failed. Please try again or use WhatsApp.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
