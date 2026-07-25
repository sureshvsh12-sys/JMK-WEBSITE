export const JMK_CONTACT = {
  companyName: "JMK GROUP",
  founder: "Suresh Vishwakarma",
  phoneDisplay: "+91 97531 09732",
  phoneNumber: "919753109732",
  email: "info@jmk.in",
  address: "37-B, Tilak Nagar, AB Road, Behind HDFC Bank, Dewas, Madhya Pradesh 455001",
  shortAddress: "Dewas, Madhya Pradesh",
  workingHours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  whatsappMessage: "Hello JMK GROUP, I want more information about your services.",
};

const mapQuery = encodeURIComponent(JMK_CONTACT.address);

export const JMK_LINKS = {
  phone: `tel:+${JMK_CONTACT.phoneNumber}`,
  email: `mailto:${JMK_CONTACT.email}`,
  whatsapp: `https://wa.me/${JMK_CONTACT.phoneNumber}?text=${encodeURIComponent(JMK_CONTACT.whatsappMessage)}`,
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  googleMapsEmbed: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
};

export const JMK_SERVICES = [
  "Property Enquiry",
  "Financial Servicess",
  "Solar Solutions",
  "General Enquiry",
];
