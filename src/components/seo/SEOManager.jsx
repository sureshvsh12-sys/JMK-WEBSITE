import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import properties from "../../data/properties";
import { JMK_CONTACT } from "../../config/contact";

const SITE_NAME = "JMK GROUP";
const DEFAULT_IMAGE = "/src/assets/brand/jmk-original-logo.png";

const defaultSeo = {
  title: "JMK GROUP | Property, Finance & Solar Solutions in Dewas",
  description:
    "JMK GROUP provides trusted property services, financial servicess and solar solutions in Dewas, Madhya Pradesh.",
  keywords:
    "JMK GROUP, JMK Assets, JMK Financial Servicess, JMK Solar Solutions, property in Dewas, home loan Dewas, business loan Dewas, solar installation Dewas",
  image: DEFAULT_IMAGE,
};

const seoData = {
  "/": {
    title: "JMK GROUP | Property, Finance & Solar Solutions in Dewas",
    description:
      "Explore trusted property opportunities, financial servicess and solar solutions from JMK GROUP in Dewas, Madhya Pradesh.",
    keywords:
      "JMK GROUP Dewas, property Dewas, finance services Dewas, solar solutions Dewas",
  },
  "/assets": {
    title: "JMK Assets | Residential & Commercial Property in Dewas",
    description:
      "Explore residential plots, row houses and commercial property opportunities in Dewas with professional guidance from JMK Assets.",
    keywords:
      "JMK Assets, property in Dewas, commercial property Dewas, residential plot Dewas, row house Dewas",
  },
  "/financial": {
    title: "JMK Financial Servicess | Loan Guidance in Dewas",
    description:
      "Get professional guidance for home loans, business loans, personal loans, vehicle finance and loan against property in Dewas.",
    keywords:
      "JMK Financial Servicess, home loan Dewas, business loan Dewas, personal loan Dewas, mortgage loan Dewas",
  },
  "/finance": {
    title: "JMK Financial Servicess | Loan Guidance in Dewas",
    description:
      "Get professional guidance for home loans, business loans, personal loans, vehicle finance and loan against property in Dewas.",
    keywords:
      "JMK Financial Servicess, home loan Dewas, business loan Dewas, personal loan Dewas",
  },
  "/solar": {
    title: "JMK Solar Solutions | Rooftop Solar in Dewas",
    description:
      "Reduce electricity expenses with residential, commercial and agricultural solar solutions from JMK Solar Solutions.",
    keywords:
      "JMK Solar Solutions, rooftop solar Dewas, solar installation Dewas, residential solar Madhya Pradesh",
  },
  "/about": {
    title: "About JMK GROUP | Trust, Growth & Future",
    description:
      "Learn about JMK GROUP, founder Suresh Vishwakarma, its mission, values and integrated property, finance and solar services.",
    keywords:
      "About JMK GROUP, Suresh Vishwakarma, JMK GROUP founder, JMK GROUP Dewas",
  },
  "/contact": {
    title: "Contact JMK GROUP | Property, Finance & Solar Enquiry",
    description:
      "Contact JMK GROUP in Dewas for property consultation, financial servicess and solar installation enquiries.",
    keywords:
      "Contact JMK GROUP, property enquiry Dewas, finance enquiry Dewas, solar enquiry Dewas",
  },
};

function upsertMetaTag(attribute, key, content) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLinkTag(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function upsertStructuredData(id, data) {
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function removeStructuredData(id) {
  document.getElementById(id)?.remove();
}

function getAbsoluteUrl(value) {
  if (!value) return window.location.origin;

  try {
    return new URL(value, window.location.origin).href;
  } catch {
    return window.location.origin;
  }
}

function getPropertySeo(pathname) {
  const propertyId = pathname.split("/").filter(Boolean).at(-1);
  const property = properties.find(
    (item) => String(item.id) === String(propertyId),
  );

  if (!property) return null;

  return {
    property,
    title: `${property.title} | JMK Assets Dewas`,
    description: `${property.description} Location: ${property.location}. Area: ${property.area}. Contact JMK Assets for details and site visit.`,
    keywords: `${property.title}, ${property.type} property Dewas, property in ${property.location}, JMK Assets`,
    image: property.image || DEFAULT_IMAGE,
  };
}

function getBaseSchemas(canonicalUrl) {
  const address = JMK_CONTACT?.address ||
    "37-B, Tilak Nagar, AB Road, Behind HDFC Bank, Dewas, Madhya Pradesh 455001";

  return {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${window.location.origin}/#organization`,
      name: SITE_NAME,
      url: window.location.origin,
      logo: getAbsoluteUrl(DEFAULT_IMAGE),
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
        streetAddress: address,
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
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${window.location.origin}/#website`,
      name: SITE_NAME,
      url: window.location.origin,
      publisher: {
        "@id": `${window.location.origin}/#organization`,
      },
      inLanguage: "en-IN",
    },
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: document.title,
      isPartOf: {
        "@id": `${window.location.origin}/#website`,
      },
      about: {
        "@id": `${window.location.origin}/#organization`,
      },
      inLanguage: "en-IN",
    },
  };
}

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

    const propertySeo = normalizedPath.startsWith("/assets/")
      ? getPropertySeo(normalizedPath)
      : null;

    const seo = propertySeo || seoData[normalizedPath] || defaultSeo;
    const canonicalUrl = `${window.location.origin}${normalizedPath}`;
    const imageUrl = getAbsoluteUrl(seo.image || DEFAULT_IMAGE);

    document.title = seo.title;
    document.documentElement.lang = "en-IN";

    upsertMetaTag("name", "description", seo.description);
    upsertMetaTag("name", "keywords", seo.keywords || defaultSeo.keywords);
    upsertMetaTag("name", "robots", "index, follow, max-image-preview:large");
    upsertMetaTag("name", "author", SITE_NAME);
    upsertMetaTag("name", "theme-color", "#07111f");

    upsertMetaTag("property", "og:title", seo.title);
    upsertMetaTag("property", "og:description", seo.description);
    upsertMetaTag("property", "og:type", propertySeo ? "product" : "website");
    upsertMetaTag("property", "og:site_name", SITE_NAME);
    upsertMetaTag("property", "og:locale", "en_IN");
    upsertMetaTag("property", "og:url", canonicalUrl);
    upsertMetaTag("property", "og:image", imageUrl);
    upsertMetaTag("property", "og:image:alt", seo.title);

    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", seo.title);
    upsertMetaTag("name", "twitter:description", seo.description);
    upsertMetaTag("name", "twitter:image", imageUrl);

    upsertLinkTag("canonical", canonicalUrl);

    const schemas = getBaseSchemas(canonicalUrl);
    schemas.webpage.name = seo.title;
    schemas.webpage.description = seo.description;
    schemas.webpage.primaryImageOfPage = {
      "@type": "ImageObject",
      url: imageUrl,
    };

    upsertStructuredData("jmk-organization-schema", schemas.organization);
    upsertStructuredData("jmk-website-schema", schemas.website);
    upsertStructuredData("jmk-webpage-schema", schemas.webpage);

    if (propertySeo) {
      const { property } = propertySeo;

      upsertStructuredData("jmk-property-schema", {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        name: property.title,
        description: property.description,
        url: canonicalUrl,
        image: (property.images?.length ? property.images : [property.image])
          .filter(Boolean)
          .map(getAbsoluteUrl),
        datePosted: new Date().toISOString().slice(0, 10),
        mainEntity: {
          "@type": "Place",
          name: property.title,
          address: {
            "@type": "PostalAddress",
            addressLocality: property.location,
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: property.priceValue > 0 ? property.priceValue : undefined,
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          seller: {
            "@id": `${window.location.origin}/#organization`,
          },
        },
      });
    } else {
      removeStructuredData("jmk-property-schema");
    }
  }, [pathname]);

  return null;
}
