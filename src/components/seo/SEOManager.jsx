import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultSeo = {
  title:
    "JMK GROUP | Property, Finance & Solar Solutions in Dewas",
  description:
    "JMK GROUP provides professional property services, financial servicess and solar solutions in Dewas, Madhya Pradesh.",
  keywords:
    "JMK GROUP, JMK Assets, JMK Financial Servicess, JMK Solar Solutions, property in Dewas, home loan Dewas, business loan Dewas, solar installation Dewas",
};

const seoData = {
  "/": {
    title:
      "JMK GROUP | Property, Finance & Solar Solutions in Dewas",
    description:
      "Explore trusted property opportunities, financial servicess and solar solutions from JMK GROUP in Dewas, Madhya Pradesh.",
    keywords:
      "JMK GROUP Dewas, property Dewas, finance services Dewas, solar solutions Dewas",
  },

  "/assets": {
    title:
      "JMK Assets | Residential & Commercial Property in Dewas",
    description:
      "Explore residential plots, row houses and commercial property opportunities in Dewas with professional guidance from JMK Assets.",
    keywords:
      "JMK Assets, property in Dewas, commercial property Dewas, residential plot Dewas, row house Dewas",
  },

  "/financial": {
    title:
      "JMK Financial Servicess | Loan Guidance in Dewas",
    description:
      "Get professional guidance for home loans, business loans, personal loans, vehicle finance and loan against property.",
    keywords:
      "JMK Financial Servicess, home loan Dewas, business loan Dewas, personal loan Dewas, mortgage loan Dewas",
  },

  "/finance": {
    title:
      "JMK Financial Servicess | Loan Guidance in Dewas",
    description:
      "Get professional guidance for home loans, business loans, personal loans, vehicle finance and loan against property.",
    keywords:
      "JMK Financial Servicess, home loan Dewas, business loan Dewas, personal loan Dewas",
  },

  "/solar": {
    title:
      "JMK Solar Solutions | Rooftop Solar in Dewas",
    description:
      "Reduce electricity expenses with residential, commercial and agricultural solar solutions from JMK Solar Solutions.",
    keywords:
      "JMK Solar Solutions, rooftop solar Dewas, solar installation Dewas, residential solar Madhya Pradesh",
  },

  "/about": {
    title:
      "About JMK GROUP | Trust, Growth & Future",
    description:
      "Learn about JMK GROUP, founder Suresh Vishwakarma, its mission, values and integrated property, finance and solar services.",
    keywords:
      "About JMK GROUP, Suresh Vishwakarma, JMK GROUP founder, JMK GROUP Dewas",
  },

  "/contact": {
    title:
      "Contact JMK GROUP | Property, Finance & Solar Enquiry",
    description:
      "Contact JMK GROUP in Dewas for property consultation, financial servicess and solar installation enquiries.",
    keywords:
      "Contact JMK GROUP, property enquiry Dewas, finance enquiry Dewas, solar enquiry Dewas",
  },
};

function upsertMetaTag(attribute, key, content) {
  let tag = document.querySelector(
    `meta[${attribute}="${key}"]`,
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updateCanonicalUrl(url) {
  let canonical = document.querySelector(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function updateStructuredData() {
  const scriptId = "jmk-organization-schema";
  let script = document.getElementById(scriptId);

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JMK GROUP",
    description:
      "Property, financial servicess and solar solutions in Dewas, Madhya Pradesh.",
    founder: {
      "@type": "Person",
      name: "Suresh Vishwakarma",
    },
    telephone: "+91-97531-09732",
    email: "info@jmk.in",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "37-B, Tilak Nagar, AB Road, Behind HDFC Bank",
      addressLocality: "Dewas",
      addressRegion: "Madhya Pradesh",
      postalCode: "455001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Madhya Pradesh",
    },
    slogan: "Trust • Growth • Future",
  });
}

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname.length > 1
        ? pathname.replace(/\/+$/, "")
        : pathname;

    const seo =
      seoData[normalizedPath] || defaultSeo;

    document.title = seo.title;

    upsertMetaTag(
      "name",
      "description",
      seo.description,
    );

    upsertMetaTag(
      "name",
      "keywords",
      seo.keywords || defaultSeo.keywords,
    );

    upsertMetaTag(
      "name",
      "robots",
      "index, follow, max-image-preview:large",
    );

    upsertMetaTag(
      "name",
      "author",
      "JMK GROUP",
    );

    upsertMetaTag(
      "name",
      "theme-color",
      "#07111f",
    );

    upsertMetaTag(
      "property",
      "og:title",
      seo.title,
    );

    upsertMetaTag(
      "property",
      "og:description",
      seo.description,
    );

    upsertMetaTag(
      "property",
      "og:type",
      "website",
    );

    upsertMetaTag(
      "property",
      "og:site_name",
      "JMK GROUP",
    );

    upsertMetaTag(
      "property",
      "og:locale",
      "en_IN",
    );

    upsertMetaTag(
      "name",
      "twitter:card",
      "summary_large_image",
    );

    upsertMetaTag(
      "name",
      "twitter:title",
      seo.title,
    );

    upsertMetaTag(
      "name",
      "twitter:description",
      seo.description,
    );

    const canonicalUrl = `${window.location.origin}${normalizedPath}`;

    updateCanonicalUrl(canonicalUrl);

    upsertMetaTag(
      "property",
      "og:url",
      canonicalUrl,
    );

    updateStructuredData();
  }, [pathname]);

  return null;
}