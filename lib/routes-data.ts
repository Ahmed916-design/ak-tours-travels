// lib/routes-data.ts

export type RouteData = {
  slug: string;
  from: string;
  to: string;
  distance: number;
  duration: string;
  basePrice: number;
  description: string;
  highlights: string[];
  metaTitle: string;
  metaDesc: string;
};

export const ROUTES: RouteData[] = [
  {
    slug: "palanpur-to-ambaji",
    from: "Palanpur",
    to: "Ambaji",
    distance: 45,
    duration: "1 hour",
    basePrice: 1800,
    description:
      "Ambaji Temple is one of the most sacred Shakti Peethas in Gujarat, located just 45 km from Palanpur. Travel comfortably in an AC cab with A K Tours and Travels and make your pilgrimage hassle-free.",
    highlights: ["Ambaji Temple", "Gabbar Hill", "Mansarovar", "Kumbhariya Jain Temple"],
    metaTitle: "Palanpur to Ambaji Taxi | ₹1,800 onwards | A K Tours",
    metaDesc:
      "Book Palanpur to Ambaji taxi at the best price. AC cabs, verified drivers, 24x7 service. Call +91 99793 57086 for booking.",
  },
  {
    slug: "palanpur-to-mount-abu",
    from: "Palanpur",
    to: "Mount Abu",
    distance: 120,
    duration: "2.5 hours",
    basePrice: 3200,
    description:
      "Mount Abu is the only hill station in Rajasthan. Located 120 km from Palanpur, it's the perfect weekend getaway with Nakki Lake, Dilwara Temple, Guru Shikhar, and breathtaking sunset points.",
    highlights: ["Nakki Lake", "Dilwara Temple", "Guru Shikhar", "Sunset Point"],
    metaTitle: "Palanpur to Mount Abu Taxi | ₹3,200 onwards | A K Tours",
    metaDesc:
      "Palanpur to Mount Abu cab booking at affordable rates. AC Innova, Ertiga available. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-ahmedabad",
    from: "Palanpur",
    to: "Ahmedabad",
    distance: 135,
    duration: "2.5 hours",
    basePrice: 2500,
    description:
      "Reliable cab service from Palanpur to Ahmedabad airport, railway station, or city. Visit Sabarmati Ashram, Kankaria Lake, and Adalaj Stepwell along the way.",
    highlights: ["Ahmedabad Airport", "Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
    metaTitle: "Palanpur to Ahmedabad Cab | ₹2,500 onwards | A K Tours",
    metaDesc:
      "Book Palanpur to Ahmedabad taxi or airport drop. Verified drivers, clean AC cars. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-udaipur",
    from: "Palanpur",
    to: "Udaipur",
    distance: 180,
    duration: "3.5 hours",
    basePrice: 3800,
    description:
      "Udaipur — the City of Lakes. Located 180 km from Palanpur, it's the perfect trip for Lake Pichola, City Palace, Jag Mandir, and other iconic spots.",
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Saheliyon Ki Bari"],
    metaTitle: "Palanpur to Udaipur Taxi | ₹3,800 onwards | A K Tours",
    metaDesc:
      "Palanpur to Udaipur cab service at the best rates. Comfortable AC cars, experienced drivers. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-dwarka",
    from: "Palanpur",
    to: "Dwarka",
    distance: 520,
    duration: "9 hours",
    basePrice: 9500,
    description:
      "Dwarkadhish Temple is one of the four sacred Char Dhams of Gujarat. Located 520 km from Palanpur, ideal for an overnight or 2-day pilgrimage trip.",
    highlights: ["Dwarkadhish Temple", "Bet Dwarka", "Nageshwar Jyotirlinga", "Rukmini Devi Temple"],
    metaTitle: "Palanpur to Dwarka Taxi | ₹9,500 onwards | A K Tours",
    metaDesc:
      "Palanpur to Dwarka yatra cab booking. AC Innova, Tempo Traveller available. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-somnath",
    from: "Palanpur",
    to: "Somnath",
    distance: 580,
    duration: "10 hours",
    basePrice: 10500,
    description:
      "Somnath Temple — a revered Jyotirlinga and the pride of Gujarat. Located 580 km from Palanpur, ideal to combine with a complete Gujarat tour.",
    highlights: ["Somnath Temple", "Bhalka Tirth", "Triveni Sangam", "Prabhas Patan Museum"],
    metaTitle: "Palanpur to Somnath Taxi | ₹10,500 onwards | A K Tours",
    metaDesc:
      "Palanpur to Somnath cab with experienced drivers. Best rates, AC cars. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-kutch",
    from: "Palanpur",
    to: "Rann of Kutch",
    distance: 400,
    duration: "7 hours",
    basePrice: 7500,
    description:
      "The White Rann of Kutch — a world-famous salt desert. Best visited during Rann Utsav (Nov-Feb). Located 400 km from Palanpur.",
    highlights: ["White Rann", "Kalo Dungar", "Bhuj", "Mandvi Beach"],
    metaTitle: "Palanpur to Kutch Taxi | ₹7,500 onwards | A K Tours",
    metaDesc:
      "Palanpur to Rann of Kutch cab booking. Rann Utsav packages available. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-deesa",
    from: "Palanpur",
    to: "Deesa",
    distance: 30,
    duration: "40 min",
    basePrice: 1000,
    description:
      "Deesa — the second largest city in Banaskantha. Just 30 km from Palanpur, perfect for daily commutes and business trips.",
    highlights: ["Deesa City", "Local Market", "Business Hub"],
    metaTitle: "Palanpur to Deesa Taxi | ₹1,000 onwards | A K Tours",
    metaDesc: "Palanpur to Deesa cab at the best price. Quick, reliable service. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-chhapi",
    from: "Palanpur",
    to: "Chhapi",
    distance: 35,
    duration: "45 min",
    basePrice: 1100,
    description:
      "Chhapi sits on the Gujarat-Rajasthan border. Located 35 km from Palanpur — a convenient cab stop on the highway.",
    highlights: ["Chhapi Town", "Highway Rest Point"],
    metaTitle: "Palanpur to Chhapi Taxi | ₹1,100 onwards | A K Tours",
    metaDesc: "Book Palanpur to Chhapi cab. Reliable service, fair rates. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-vadgam",
    from: "Palanpur",
    to: "Vadgam",
    distance: 20,
    duration: "30 min",
    basePrice: 800,
    description:
      "Vadgam — a historic town near Palanpur. Affordable cab for local rides.",
    highlights: ["Vadgam Town"],
    metaTitle: "Palanpur to Vadgam Taxi | ₹800 onwards | A K Tours",
    metaDesc: "Palanpur to Vadgam cab booking. Fast, affordable. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-airport-transfer",
    from: "Palanpur",
    to: "Ahmedabad Airport",
    distance: 145,
    duration: "3 hours",
    basePrice: 2800,
    description:
      "On-time airport transfer from Palanpur to Ahmedabad International Airport. Early morning and late-night pickups available with guaranteed punctuality.",
    highlights: ["Ahmedabad Airport", "On-Time Pickup", "24x7 Available"],
    metaTitle: "Palanpur to Ahmedabad Airport Taxi | ₹2,800 | A K Tours",
    metaDesc:
      "Palanpur to Ahmedabad airport transfer. On-time, comfortable, 24x7. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-railway-station",
    from: "Palanpur",
    to: "Palanpur Railway Station",
    distance: 5,
    duration: "10 min",
    basePrice: 300,
    description:
      "Quick pickup and drop service to Palanpur Railway Station. Ideal for local transfers.",
    highlights: ["Railway Station Pickup", "Local Transfer"],
    metaTitle: "Palanpur Railway Station Taxi | A K Tours",
    metaDesc: "Palanpur railway station pickup/drop cab. Quick booking. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-mumbai",
    from: "Palanpur",
    to: "Mumbai",
    distance: 720,
    duration: "12 hours",
    basePrice: 13000,
    description:
      "Palanpur to Mumbai outstation cab. One-way or round-trip, comfortable overnight journey.",
    highlights: ["Mumbai City", "Airport Drop", "Overnight Trip"],
    metaTitle: "Palanpur to Mumbai Taxi | ₹13,000 onwards | A K Tours",
    metaDesc: "Palanpur to Mumbai cab service. AC cars, experienced drivers. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-goa",
    from: "Palanpur",
    to: "Goa",
    distance: 1200,
    duration: "20 hours",
    basePrice: 22000,
    description:
      "Multi-day Palanpur to Goa trip. Tempo Traveller and Innova available for families and groups.",
    highlights: ["Goa Beaches", "Multi-Day Trip", "Tempo Available"],
    metaTitle: "Palanpur to Goa Taxi | ₹22,000 onwards | A K Tours",
    metaDesc: "Palanpur to Goa cab package. Group travel, AC tempo. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-jaipur",
    from: "Palanpur",
    to: "Jaipur",
    distance: 550,
    duration: "9 hours",
    basePrice: 10500,
    description:
      "Palanpur to Jaipur — the Pink City. A perfect start to a Rajasthan tour. Visit Amber Fort, Hawa Mahal, and City Palace.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"],
    metaTitle: "Palanpur to Jaipur Taxi | ₹10,500 onwards | A K Tours",
    metaDesc: "Palanpur to Jaipur cab booking. Rajasthan tour packages. Call +91 99793 57086.",
  },
];

export function getRouteBySlug(slug: string) {
  return ROUTES.find((r) => r.slug === slug);
}