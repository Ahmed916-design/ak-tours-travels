// lib/popular-routes-data.ts

export type PopularCategory = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  routes: string[]; // slugs from ROUTES
};

export const POPULAR_CATEGORIES: PopularCategory[] = [
  {
    id: "outstation",
    label: "Outstation",
    emoji: "🏔️",
    description: "Long-distance trips — Mumbai, Delhi, Kashmir, Kerala & more",
    routes: [
      "palanpur-to-mumbai",
      "palanpur-to-delhi",
      "palanpur-to-srinagar-kashmir",
      "palanpur-to-kerala",
      "palanpur-to-jaipur",
      "palanpur-to-rajasthan",
    ],
  },
  {
    id: "local",
    label: "Local & Short Trips",
    emoji: "🏙️",
    description: "Inter-city and short trips — Ahmedabad, Vadodara, Surat & more",
    routes: [
      "ahmedabad-to-palanpur",
      "ahmedabad-to-mumbai",
      "vadodara-to-mumbai",
      "mumbai-to-ahmedabad",
      "surat-to-mumbai",
      "ahmedabad-to-udaipur",
    ],
  },
  {
    id: "nearby",
    label: "Nearby Getaways",
    emoji: "🛕",
    description: "Quick trips from Palanpur — perfect for day tours",
    routes: [
      "palanpur-to-ambaji",
      "palanpur-to-mount-abu",
      "palanpur-to-udaipur",
      "palanpur-to-deesa",
      "palanpur-to-chhapi",
      "palanpur-airport-transfer",
    ],
  },
];