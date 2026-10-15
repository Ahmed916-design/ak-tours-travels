// lib/top-routes-data.ts

export type TopRoute = {
  slug: string;
  from: string;
  to: string;
  distance: number;
  duration: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  badge: string;
  badgeColor: "gold" | "green";
};

export const TOP_ROUTES: TopRoute[] = [
  {
    slug: "palanpur-to-mumbai",
    from: "Palanpur",
    to: "Mumbai",
    distance: 720,
    duration: "12 hours",
    image: "/images/destinations/mumbai.jpg",
    tagline: "Business & Family Trips",
    description:
      "Comfortable overnight journey from Palanpur to Mumbai. Perfect for business trips, family visits, and airport drops. AC cars with experienced drivers.",
    highlights: ["Marine Drive", "Gateway of India", "Airport Drop", "Overnight Trip"],
    badge: "Most Booked",
    badgeColor: "gold",
  },
  {
    slug: "palanpur-to-delhi",
    from: "Palanpur",
    to: "Delhi",
    distance: 950,
    duration: "16 hours",
    image: "/images/destinations/delhi.jpg",
    tagline: "Capital City Tours",
    description:
      "Long-distance comfortable journey from Palanpur to Delhi. Multi-day tours available. AC Innova and Mini Bus options with experienced drivers.",
    highlights: ["India Gate", "Red Fort", "Airport Drop", "Multi-Day Tour"],
    badge: "Best Value",
    badgeColor: "green",
  },
  {
    slug: "palanpur-to-srinagar-kashmir",
    from: "Palanpur",
    to: "Srinagar (Kashmir)",
    distance: 1700,
    duration: "Multi-Day",
    image: "/images/destinations/kashmir.jpg",
    tagline: "Dream Destination",
    description:
      "All India tour service — Palanpur to Srinagar, Kashmir. Multi-day tour with comfortable AC vehicles. Fully customizable itinerary for families and groups.",
    highlights: ["Dal Lake", "Mughal Gardens", "Gulmarg", "Pahalgam"],
    badge: "Premium Tour",
    badgeColor: "gold",
  },
  {
    slug: "palanpur-to-kerala",
    from: "Palanpur",
    to: "Kerala",
    distance: 2100,
    duration: "Multi-Day",
    image: "/images/destinations/kerala.jpg",
    tagline: "God's Own Country",
    description:
      "All India tour service — Palanpur to Kerala. Multi-day tour covering Munnar, Alleppey, Kochi, and Thekkady. Customizable with AC vehicles.",
    highlights: ["Munnar", "Alleppey Backwaters", "Kochi", "Thekkady"],
    badge: "Long Tour",
    badgeColor: "green",
  },
];