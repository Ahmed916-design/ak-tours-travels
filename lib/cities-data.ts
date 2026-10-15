// lib/cities-data.ts

export type CityData = {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  longDescription: string;
  popularRoutes: { from: string; to: string; slug: string }[];
  areasCovered: string[];
  landmarks: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
};

export const CITIES: CityData[] = [
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    tagline: "Gujarat's Largest City — Reliable Cab Service",
    description:
      "Book reliable cab service in Ahmedabad for airport transfers, outstation trips, corporate travel, and city rides. Verified drivers, AC cars, available 24x7.",
    longDescription:
      "Ahmedabad is Gujarat's largest city and a major business hub. Every day, travelers depart from here for outstation trips — to Palanpur, Mount Abu, Udaipur, Ambaji, Dwarka, and Somnath. A K Tours and Travels offers reliable cab service in Ahmedabad with verified drivers, clean AC cars, and transparent pricing. Whether you need an early morning airport pickup, a corporate monthly rental, or a weekend trip to Mount Abu — we're just a call away.",
    popularRoutes: [
      { from: "Ahmedabad", to: "Palanpur", slug: "ahmedabad-to-palanpur" },
      { from: "Ahmedabad", to: "Mount Abu", slug: "ahmedabad-to-mount-abu" },
      { from: "Ahmedabad", to: "Udaipur", slug: "ahmedabad-to-udaipur" },
      { from: "Ahmedabad", to: "Ambaji", slug: "ahmedabad-to-ambaji" },
      { from: "Ahmedabad", to: "Dwarka", slug: "ahmedabad-to-dwarka" },
      { from: "Ahmedabad", to: "Somnath", slug: "ahmedabad-to-somnath" },
    ],
    areasCovered: [
      "Sardar Vallabhbhai Patel International Airport",
      "Ahmedabad Railway Station (Kalupur)",
      "SG Highway",
      "Maninagar",
      "Satellite",
      "Bopal",
      "Vastrapur",
      "Gota",
      "Chandkheda",
      "Naranpura",
      "Paldi",
      "Navrangpura",
      "Thaltej",
      "Prahlad Nagar",
      "Bodakdev",
    ],
    landmarks: [
      "Sabarmati Ashram",
      "Kankaria Lake",
      "Adalaj Stepwell",
      "Sidi Saiyyed Mosque",
      "Akshardham Temple",
      "Auto World Vintage Car Museum",
    ],
    faqs: [
      {
        q: "How do I book a cab in Ahmedabad?",
        a: "Call us at +91 99793 57086 or +91 99257 63146, or send a WhatsApp message. We confirm your booking within 2 minutes.",
      },
      {
        q: "What is the charge for an Ahmedabad airport pickup?",
        a: "The Ahmedabad airport pickup rate depends on the car type and destination. Call or WhatsApp us for the best rate — we'll send an instant quote.",
      },
      {
        q: "How long does it take from Ahmedabad to Palanpur?",
        a: "Ahmedabad to Palanpur takes approximately 2.5 hours (135 km). Comfortable journey in an AC cab.",
      },
      {
        q: "Do you offer corporate monthly rentals in Ahmedabad?",
        a: "Yes, we offer corporate monthly car rental service in Ahmedabad — with driver. Call us for a custom quote.",
      },
      {
        q: "Do you provide outstation trips from Ahmedabad?",
        a: "Yes, we provide outstation cab service from Ahmedabad to Palanpur, Mount Abu, Udaipur, Ambaji, Dwarka, Somnath, and anywhere in India.",
      },
      {
        q: "Are your cars AC in Ahmedabad?",
        a: "Yes, all our cars are AC — Swift Dzire, Hyundai Aura, Maruti Ertiga, Toyota Innova Crysta, and Force Urbania.",
      },
    ],
    metaTitle: "Cab Service in Ahmedabad | A K Tours and Travels",
    metaDesc:
      "Book reliable cab service in Ahmedabad for airport transfers, outstation, and corporate travel. AC cars, verified drivers, 24x7. Call +91 99793 57086.",
  },
  {
    slug: "palanpur",
    name: "Palanpur",
    state: "Gujarat",
    tagline: "Banaskantha's Trusted Cab Service Since 2015",
    description:
      "A K Tours and Travels — Palanpur's most trusted cab service. Local rides, outstation trips, airport transfers, and All India tour packages.",
    longDescription:
      "Palanpur is the headquarters of Banaskantha district and an important city in North Gujarat. Our head office is located in Kanoder, Palanpur. Since 2015, we've been providing reliable cab service in Palanpur and surrounding areas — local city rides, Ambaji darshan, Mount Abu weekend trips, and Ahmedabad airport transfers. Verified drivers, clean AC cars, and transparent pricing — this is our identity.",
    popularRoutes: [
      { from: "Palanpur", to: "Ambaji", slug: "palanpur-to-ambaji" },
      { from: "Palanpur", to: "Mount Abu", slug: "palanpur-to-mount-abu" },
      { from: "Palanpur", to: "Ahmedabad", slug: "palanpur-to-ahmedabad" },
      { from: "Palanpur", to: "Udaipur", slug: "palanpur-to-udaipur" },
      { from: "Palanpur", to: "Dwarka", slug: "palanpur-to-dwarka" },
      { from: "Palanpur", to: "Rajasthan", slug: "palanpur-to-rajasthan" },
    ],
    areasCovered: [
      "Kanoder",
      "Palanpur City",
      "Palanpur Railway Station",
      "Palanpur Bus Stand",
      "Deesa Road",
      "Abu Road Highway",
      "Chhapi",
      "Vadgam",
      "Danta",
    ],
    landmarks: [
      "Palanpur Railway Station",
      "Palanpur Bus Stand",
      "Kanoder Chowk",
      "Swad Hotel",
      "Palanpur Clock Tower",
    ],
    faqs: [
      {
        q: "How do I book a cab in Palanpur?",
        a: "Call us at +91 99793 57086, or send a WhatsApp message. We confirm your booking within 2 minutes.",
      },
      {
        q: "What is the rate for a Palanpur to Ambaji taxi?",
        a: "The Palanpur to Ambaji fare depends on the car type. Call or WhatsApp us for the best rate.",
      },
      {
        q: "Where is your office in Palanpur?",
        a: "Our office is in Kanoder, Behind Swad Hotel, Palanpur. You can also visit us in person.",
      },
      {
        q: "Is 24x7 cab service available in Palanpur?",
        a: "Yes, we're available 24x7. We even handle 4 AM airport drops.",
      },
      {
        q: "How long does it take from Palanpur to Ahmedabad airport?",
        a: "Palanpur to Ahmedabad airport takes approximately 3 hours (145 km).",
      },
    ],
    metaTitle: "Cab Service in Palanpur | A K Tours and Travels",
    metaDesc:
      "Palanpur's most trusted cab service since 2015. Local rides, outstation, airport transfers, tour packages. Call +91 99793 57086.",
  },
  {
    slug: "deesa",
    name: "Deesa",
    state: "Gujarat",
    tagline: "Banaskantha's Second Largest City — Reliable Cab Service",
    description:
      "Book cab service in Deesa for local rides, outstation trips, and airport transfers. Serving Deesa since 2015 with verified drivers and AC cars.",
    longDescription:
      "Deesa is the second largest city in Banaskantha district, just 30 km from Palanpur. A K Tours and Travels provides reliable cab service in Deesa — local city rides, Palanpur trips, Ambaji darshan, Ahmedabad airport transfers, and outstation packages. Verified drivers, AC cars, 24x7 service.",
    popularRoutes: [
      { from: "Deesa", to: "Palanpur", slug: "deesa-to-palanpur" },
      { from: "Deesa", to: "Ambaji", slug: "deesa-to-ambaji" },
      { from: "Deesa", to: "Ahmedabad", slug: "deesa-to-ahmedabad" },
      { from: "Deesa", to: "Mount Abu", slug: "deesa-to-mount-abu" },
    ],
    areasCovered: [
      "Deesa City",
      "Deesa Bus Stand",
      "Deesa Market",
      "Deesa Highway",
      "Palanpur Road",
      "Banas River Area",
    ],
    landmarks: [
      "Deesa Bus Stand",
      "Deesa Market",
      "Jain Temple",
      "Banas River",
    ],
    faqs: [
      {
        q: "How do I book a cab in Deesa?",
        a: "Call us at +91 99793 57086, or send a WhatsApp message. We confirm your booking instantly.",
      },
      {
        q: "How long does it take from Deesa to Palanpur?",
        a: "Deesa to Palanpur takes approximately 40 minutes (30 km).",
      },
      {
        q: "Is a Deesa to Ambaji taxi available?",
        a: "Yes, we provide AC cabs from Deesa to Ambaji. Call us for the best rate.",
      },
      {
        q: "Is 24x7 service available in Deesa?",
        a: "Yes, we provide 24x7 cab service in Deesa — including early morning airport transfers.",
      },
    ],
    metaTitle: "Cab Service in Deesa | A K Tours and Travels",
    metaDesc:
      "Book reliable cab service in Deesa for local rides, outstation, and airport transfers. Call +91 99793 57086.",
  },
];

export function getCityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}