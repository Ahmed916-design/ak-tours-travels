// lib/routes-data.ts

export type RouteData = {
  slug: string;
  from: string;
  to: string;
  distance: number;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  metaTitle: string;
  metaDesc: string;
  // Optional fields for enhanced routes (top long-distance)
  isTopRoute?: boolean;
  bestTimeToVisit?: string;
  whatIncluded?: string[];
  multiDay?: boolean;
};

export const ROUTES: RouteData[] = [
  {
    slug: "palanpur-to-ambaji",
    from: "Palanpur",
    to: "Ambaji",
    distance: 45,
    duration: "1 hour",
    image: "/images/destinations/ambaji.jpg",
    description:
      "Ambaji Temple is one of the most sacred Shakti Peethas in Gujarat, located just 45 km from Palanpur. Travel comfortably in an AC cab with A K Tours and Travels and make your pilgrimage hassle-free.",
    highlights: ["Ambaji Temple", "Gabbar Hill", "Mansarovar", "Kumbhariya Jain Temple"],
    metaTitle: "Palanpur to Ambaji Taxi | A K Tours and Travels",
    metaDesc:
      "Book Palanpur to Ambaji taxi at the best price. AC cabs, verified drivers, 24x7 service. Call +91 99793 57086 for booking.",
  },
  {
    slug: "palanpur-to-mount-abu",
    from: "Palanpur",
    to: "Mount Abu",
    distance: 120,
    duration: "2.5 hours",
    image: "/images/destinations/mount-abu.jpg",
    description:
      "Mount Abu is the only hill station in Rajasthan. Located 120 km from Palanpur, it's the perfect weekend getaway with Nakki Lake, Dilwara Temple, Guru Shikhar, and breathtaking sunset points.",
    highlights: ["Nakki Lake", "Dilwara Temple", "Guru Shikhar", "Sunset Point"],
    metaTitle: "Palanpur to Mount Abu Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Mount Abu cab booking at affordable rates. AC Innova, Ertiga available. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-ahmedabad",
    from: "Palanpur",
    to: "Ahmedabad",
    distance: 135,
    duration: "2.5 hours",
    image: "/images/destinations/ahmedabad.jpg",
    description:
      "Reliable cab service from Palanpur to Ahmedabad airport, railway station, or city. Visit Sabarmati Ashram, Kankaria Lake, and Adalaj Stepwell along the way.",
    highlights: ["Ahmedabad Airport", "Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
    metaTitle: "Palanpur to Ahmedabad Cab | A K Tours and Travels",
    metaDesc:
      "Book Palanpur to Ahmedabad taxi or airport drop. Verified drivers, clean AC cars. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-udaipur",
    from: "Palanpur",
    to: "Udaipur",
    distance: 180,
    duration: "3.5 hours",
    image: "/images/destinations/udaipur.jpg",
    description:
      "Udaipur — the City of Lakes. Located 180 km from Palanpur, it's the perfect trip for Lake Pichola, City Palace, Jag Mandir, and other iconic spots.",
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Saheliyon Ki Bari"],
    metaTitle: "Palanpur to Udaipur Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Udaipur cab service at the best rates. Comfortable AC cars, experienced drivers. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-dwarka",
    from: "Palanpur",
    to: "Dwarka",
    distance: 520,
    duration: "9 hours",
    image: "/images/destinations/dwarka.jpg",
    description:
      "Dwarkadhish Temple is one of the four sacred Char Dhams of Gujarat. Located 520 km from Palanpur, ideal for an overnight or 2-day pilgrimage trip.",
    highlights: ["Dwarkadhish Temple", "Bet Dwarka", "Nageshwar Jyotirlinga", "Rukmini Devi Temple"],
    metaTitle: "Palanpur to Dwarka Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Dwarka yatra cab booking. AC Innova, Mini Bus available. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-somnath",
    from: "Palanpur",
    to: "Somnath",
    distance: 580,
    duration: "10 hours",
    image: "/images/destinations/somnath.jpg",
    description:
      "Somnath Temple — a revered Jyotirlinga and the pride of Gujarat. Located 580 km from Palanpur, ideal to combine with a complete Gujarat tour.",
    highlights: ["Somnath Temple", "Bhalka Tirth", "Triveni Sangam", "Prabhas Patan Museum"],
    metaTitle: "Palanpur to Somnath Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Somnath cab with experienced drivers. Best rates, AC cars. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-kutch",
    from: "Palanpur",
    to: "Rann of Kutch",
    distance: 400,
    duration: "7 hours",
    image: "/images/destinations/kutch.jpg",
    description:
      "The White Rann of Kutch — a world-famous salt desert. Best visited during Rann Utsav (Nov-Feb). Located 400 km from Palanpur.",
    highlights: ["White Rann", "Kalo Dungar", "Bhuj", "Mandvi Beach"],
    metaTitle: "Palanpur to Kutch Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Rann of Kutch cab booking. Rann Utsav packages available. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-deesa",
    from: "Palanpur",
    to: "Deesa",
    distance: 30,
    duration: "40 min",
    image: "/images/destinations/deesa.jpg",
    description:
      "Deesa — the second largest city in Banaskantha. Just 30 km from Palanpur, perfect for daily commutes and business trips.",
    highlights: ["Deesa City", "Local Market", "Business Hub"],
    metaTitle: "Palanpur to Deesa Taxi | A K Tours and Travels",
    metaDesc: "Palanpur to Deesa cab at the best price. Quick, reliable service. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-chhapi",
    from: "Palanpur",
    to: "Chhapi",
    distance: 35,
    duration: "45 min",
    image: "/images/destinations/chhapi.jpg",
    description:
      "Chhapi sits on the Gujarat-Rajasthan border. Located 35 km from Palanpur — a convenient cab stop on the highway.",
    highlights: ["Chhapi Town", "Highway Rest Point"],
    metaTitle: "Palanpur to Chhapi Taxi | A K Tours and Travels",
    metaDesc: "Book Palanpur to Chhapi cab. Reliable service, fair rates. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-vadgam",
    from: "Palanpur",
    to: "Vadgam",
    distance: 20,
    duration: "30 min",
    image: "/images/destinations/vadgam.jpg",
    description:
      "Vadgam — a historic town near Palanpur. Affordable cab for local rides.",
    highlights: ["Vadgam Town"],
    metaTitle: "Palanpur to Vadgam Taxi | A K Tours and Travels",
    metaDesc: "Palanpur to Vadgam cab booking. Fast, affordable. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-airport-transfer",
    from: "Palanpur",
    to: "Ahmedabad Airport",
    distance: 145,
    duration: "3 hours",
    image: "/images/destinations/airport.jpg",
    description:
      "On-time airport transfer from Palanpur to Ahmedabad International Airport. Early morning and late-night pickups available with guaranteed punctuality.",
    highlights: ["Ahmedabad Airport", "On-Time Pickup", "24x7 Available"],
    metaTitle: "Palanpur to Ahmedabad Airport Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Ahmedabad airport transfer. On-time, comfortable, 24x7. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-railway-station",
    from: "Palanpur",
    to: "Palanpur Railway Station",
    distance: 5,
    duration: "10 min",
    image: "/images/destinations/railway.jpg",
    description:
      "Quick pickup and drop service to Palanpur Railway Station. Ideal for local transfers.",
    highlights: ["Railway Station Pickup", "Local Transfer"],
    metaTitle: "Palanpur Railway Station Taxi | A K Tours and Travels",
    metaDesc: "Palanpur railway station pickup/drop cab. Quick booking. Call +91 99793 57086.",
  },
  {
    slug: "palanpur-to-mumbai",
    from: "Palanpur",
    to: "Mumbai",
    distance: 720,
    duration: "12 hours",
    image: "/images/destinations/mumbai.jpg",
    description:
      "Palanpur to Mumbai outstation cab. One-way or round-trip, comfortable overnight journey. Perfect for business trips, family visits, and airport drops.",
    highlights: ["Mumbai City", "Airport Drop", "Overnight Trip", "Business Travel"],
    metaTitle: "Palanpur to Mumbai Taxi | A K Tours and Travels",
    metaDesc: "Palanpur to Mumbai cab service. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round — Mumbai is a metro city with no specific season. Monsoon (Jun-Sep) offers scenic views but slower traffic.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Palanpur",
      "Drop at any location in Mumbai",
    ],
  },
    {
    slug: "palanpur-to-delhi",
    from: "Palanpur",
    to: "Delhi",
    distance: 950,
    duration: "16 hours",
    image: "/images/destinations/delhi.jpg",
    description:
      "Palanpur to Delhi outstation cab. Long-distance comfortable journey with experienced drivers. One-way or round-trip available. Perfect for business, family, and tourist travel to the capital.",
    highlights: ["Delhi City", "India Gate", "Red Fort", "Airport Drop"],
    metaTitle: "Palanpur to Delhi Taxi | A K Tours and Travels",
    metaDesc: "Palanpur to Delhi cab service. AC Innova, Mini Bus available. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "October to March — pleasant weather. Avoid May-June (extreme heat) and monsoon traffic.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Palanpur",
      "Drop at any location in Delhi NCR",
    ],
  },
 {
    slug: "palanpur-to-srinagar-kashmir",
    from: "Palanpur",
    to: "Srinagar (Kashmir)",
    distance: 1700,
    duration: "Multi-Day Tour",
    image: "/images/destinations/kashmir.jpg",
    description:
      "All India tour service — Palanpur to Srinagar, Kashmir. Multi-day tour with comfortable AC vehicles. Fully customizable itinerary for families and groups. A dream destination for travelers.",
    highlights: ["Dal Lake", "Mughal Gardens", "Gulmarg", "Pahalgam", "Sonmarg"],
    metaTitle: "Palanpur to Kashmir Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Srinagar Kashmir tour package. Multi-day trips, AC cars. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: true,
    bestTimeToVisit: "April to October — pleasant weather, blooming gardens. Avoid December-February (heavy snowfall, road closures).",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "Customizable multi-day itinerary",
      "Doorstep pickup from Palanpur",
      "All-India permit assistance",
      "Hotel recommendations on request",
    ],
  },
  {
    slug: "palanpur-to-kerala",
    from: "Palanpur",
    to: "Kerala",
    distance: 2100,
    duration: "Multi-Day Tour",
    image: "/images/destinations/kerala.jpg",
    description:
      "All India tour service — Palanpur to Kerala. Multi-day tour covering God's Own Country — Munnar, Alleppey, Kochi, and Thekkady. Fully customizable itinerary with AC vehicles.",
    highlights: ["Munnar", "Alleppey Backwaters", "Kochi", "Thekkady", "Kovalam"],
    metaTitle: "Palanpur to Kerala Taxi | A K Tours and Travels",
    metaDesc:
      "Palanpur to Kerala cab tour package. Multi-day trips, AC cars. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: true,
    bestTimeToVisit: "September to March — best weather. Avoid June-August (heavy monsoon).",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "Customizable multi-day itinerary",
      "Doorstep pickup from Palanpur",
      "All-India permit assistance",
      "Backwater & hill station routes",
    ],
  },
  {
    slug: "palanpur-to-rajasthan",
    from: "Palanpur",
    to: "Rajasthan",
    distance: 500,
    duration: "9 hours",
    image: "/images/destinations/rajasthan.jpg",
    description:
      "Complete Rajasthan tour from Palanpur. Cover Jaipur, Udaipur, Jodhpur, Jaisalmer, and Mount Abu with a customizable multi-day package.",
    highlights: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    metaTitle: "Palanpur to Rajasthan Tour | A K Tours and Travels",
    metaDesc:
      "Palanpur to Rajasthan tour package. Customizable multi-day trips. Call +91 99793 57086.",
  },
    // ============ AHMEDABAD ROUTES ============
  {
    slug: "ahmedabad-to-palanpur",
    from: "Ahmedabad",
    to: "Palanpur",
    distance: 135,
    duration: "2.5 hours",
    image: "/images/destinations/ahmedabad.jpg",
    description:
      "Reliable cab service from Ahmedabad to Palanpur. Comfortable AC cars, experienced drivers, and 24x7 availability. Perfect for business trips, family visits, and airport transfers.",
    highlights: ["Palanpur City", "Kanoder", "Banaskantha District", "On-Time Drop"],
    metaTitle: "Ahmedabad to Palanpur Taxi | A K Tours and Travels",
    metaDesc:
      "Book Ahmedabad to Palanpur taxi at best price. AC cars, verified drivers, 24x7. Call +91 99793 57086.",
  },
  {
    slug: "ahmedabad-to-mount-abu",
    from: "Ahmedabad",
    to: "Mount Abu",
    distance: 220,
    duration: "4 hours",
    image: "/images/destinations/mount-abu.jpg",
    description:
      "Ahmedabad to Mount Abu cab service — Rajasthan's only hill station. Perfect weekend getaway from Ahmedabad with comfortable AC cars and scenic drive through the Aravalli Hills.",
    highlights: ["Nakki Lake", "Dilwara Temple", "Guru Shikhar", "Sunset Point"],
    metaTitle: "Ahmedabad to Mount Abu Taxi | A K Tours and Travels",
    metaDesc:
      "Book Ahmedabad to Mount Abu cab at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
  },
  {
    slug: "ahmedabad-to-udaipur",
    from: "Ahmedabad",
    to: "Udaipur",
    distance: 260,
    duration: "4.5 hours",
    image: "/images/destinations/udaipur.jpg",
    description:
      "Ahmedabad to Udaipur cab service — the City of Lakes. Comfortable AC cars, verified drivers, and a scenic drive through the Aravalli range. Ideal for weekend trips and family vacations.",
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Saheliyon Ki Bari"],
    metaTitle: "Ahmedabad to Udaipur Taxi | A K Tours and Travels",
    metaDesc:
      "Book Ahmedabad to Udaipur taxi at best rates. AC Innova, Ertiga available. Call +91 99793 57086.",
  },
  {
    slug: "ahmedabad-to-ambaji",
    from: "Ahmedabad",
    to: "Ambaji",
    distance: 180,
    duration: "3.5 hours",
    image: "/images/destinations/ambaji.jpg",
    description:
      "Ahmedabad to Ambaji taxi service — the sacred Shakti Peetha of Gujarat. Comfortable AC cars for your pilgrimage. Round-trip packages available at best rates.",
    highlights: ["Ambaji Temple", "Gabbar Hill", "Mansarovar", "Kumbhariya Jain Temple"],
    metaTitle: "Ahmedabad to Ambaji Taxi | A K Tours and Travels",
    metaDesc:
      "Ahmedabad to Ambaji taxi booking at best price. AC cars, verified drivers. Call +91 99793 57086.",
  },
  {
    slug: "ahmedabad-to-dwarka",
    from: "Ahmedabad",
    to: "Dwarka",
    distance: 440,
    duration: "7.5 hours",
    image: "/images/destinations/dwarka.jpg",
    description:
      "Ahmedabad to Dwarka cab service — the sacred Char Dham of Gujarat. Multi-day trips available with comfortable AC cars and experienced drivers.",
    highlights: ["Dwarkadhish Temple", "Bet Dwarka", "Nageshwar Jyotirlinga", "Rukmini Devi Temple"],
    metaTitle: "Ahmedabad to Dwarka Taxi | A K Tours and Travels",
    metaDesc:
      "Ahmedabad to Dwarka yatra cab booking. AC Innova, Mini Bus available. Call +91 99793 57086.",
  },
  {
    slug: "ahmedabad-to-somnath",
    from: "Ahmedabad",
    to: "Somnath",
    distance: 410,
    duration: "7 hours",
    image: "/images/destinations/somnath.jpg",
    description:
      "Ahmedabad to Somnath taxi service — the revered Jyotirlinga of Gujarat. Comfortable AC cars for a peaceful pilgrimage trip.",
    highlights: ["Somnath Temple", "Bhalka Tirth", "Triveni Sangam", "Prabhas Patan Museum"],
    metaTitle: "Ahmedabad to Somnath Taxi | A K Tours and Travels",
    metaDesc:
      "Ahmedabad to Somnath cab service. AC cars, experienced drivers. Call +91 99793 57086.",
  },
  {
    slug: "ahmedabad-airport-transfer",
    from: "Ahmedabad",
    to: "Ahmedabad Airport",
    distance: 15,
    duration: "30 min",
    image: "/images/destinations/airport.jpg",
    description:
      "On-time airport pickup and drop service at Sardar Vallabhbhai Patel International Airport, Ahmedabad. Early morning and late-night transfers available with guaranteed punctuality.",
    highlights: ["Ahmedabad Airport", "On-Time Pickup", "24x7 Available", "Meet & Greet"],
    metaTitle: "Ahmedabad Airport Taxi Service | A K Tours and Travels",
    metaDesc:
      "Book Ahmedabad airport pickup/drop taxi. On-time, comfortable, 24x7. Call +91 99793 57086.",
  },

  // ============ DEESA ROUTES ============
  {
    slug: "deesa-to-palanpur",
    from: "Deesa",
    to: "Palanpur",
    distance: 30,
    duration: "40 min",
    image: "/images/destinations/deesa.jpg",
    description:
      "Quick and reliable cab service from Deesa to Palanpur. Just 30 km — perfect for daily commutes, business trips, and onward travel connections.",
    highlights: ["Palanpur City", "Railway Station Drop", "Quick Service"],
    metaTitle: "Deesa to Palanpur Taxi | A K Tours and Travels",
    metaDesc:
      "Book Deesa to Palanpur cab at best price. Quick, reliable service. Call +91 99793 57086.",
  },
  {
    slug: "deesa-to-ambaji",
    from: "Deesa",
    to: "Ambaji",
    distance: 75,
    duration: "1.5 hours",
    image: "/images/destinations/ambaji.jpg",
    description:
      "Deesa to Ambaji taxi service — comfortable AC cars for your darshan trip. Round-trip packages available at best rates.",
    highlights: ["Ambaji Temple", "Gabbar Hill", "Mansarovar", "Round Trip Available"],
    metaTitle: "Deesa to Ambaji Taxi | A K Tours and Travels",
    metaDesc:
      "Deesa to Ambaji taxi booking at best price. AC cars, verified drivers. Call +91 99793 57086.",
  },
  {
    slug: "deesa-to-ahmedabad",
    from: "Deesa",
    to: "Ahmedabad",
    distance: 165,
    duration: "3 hours",
    image: "/images/destinations/ahmedabad.jpg",
    description:
      "Deesa to Ahmedabad cab service — reliable outstation trip with comfortable AC cars. Perfect for airport drops and business travel.",
    highlights: ["Ahmedabad Airport", "SG Highway", "Business Travel"],
    metaTitle: "Deesa to Ahmedabad Taxi | A K Tours and Travels",
    metaDesc:
      "Book Deesa to Ahmedabad cab. AC cars, experienced drivers. Call +91 99793 57086.",
  },
  {
    slug: "deesa-to-mount-abu",
    from: "Deesa",
    to: "Mount Abu",
    distance: 100,
    duration: "2 hours",
    image: "/images/destinations/mount-abu.jpg",
    description:
      "Deesa to Mount Abu cab service — Rajasthan's only hill station, just 100 km away. Perfect weekend getaway with comfortable AC cars.",
    highlights: ["Nakki Lake", "Dilwara Temple", "Guru Shikhar", "Sunset Point"],
    metaTitle: "Deesa to Mount Abu Taxi | A K Tours and Travels",
    metaDesc:
      "Book Deesa to Mount Abu cab at best rates. AC cars available. Call +91 99793 57086.",
  },
   // ============ NEW OUTSTATION ROUTES ============
  {
    slug: "palanpur-to-jaipur",
    from: "Palanpur",
    to: "Jaipur",
    distance: 550,
    duration: "9 hours",
    image: "/images/destinations/jaipur.jpg",
    description:
      "Palanpur to Jaipur cab service — the Pink City of India. Visit Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar. Perfect for Rajasthan tour and weekend trips. Comfortable AC cars with experienced drivers.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort"],
    metaTitle: "Palanpur to Jaipur Taxi | A K Tours and Travels",
    metaDesc:
      "Book Palanpur to Jaipur taxi at best rates. AC cars, experienced drivers, 24x7. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "October to March — pleasant weather for sightseeing. Avoid May-June (extreme heat).",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Palanpur",
      "Drop at any location in Jaipur",
    ],
  },

  // ============ LOCAL & SHORT TRIPS ============
  {
    slug: "ahmedabad-to-mumbai",
    from: "Ahmedabad",
    to: "Mumbai",
    distance: 530,
    duration: "8 hours",
    image: "/images/destinations/mumbai.jpg",
    description:
      "Ahmedabad to Mumbai cab service — reliable outstation trip between Gujarat's business capital and India's financial capital. Perfect for business trips, airport drops, and family visits. Comfortable AC cars with experienced drivers.",
    highlights: ["Mumbai City", "Airport Drop", "Business Travel", "Overnight Trip"],
    metaTitle: "Ahmedabad to Mumbai Taxi | A K Tours and Travels",
    metaDesc:
      "Book Ahmedabad to Mumbai cab at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round — Mumbai is a metro city. Monsoon (Jun-Sep) offers scenic views but slower traffic.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Ahmedabad",
      "Drop at any location in Mumbai",
    ],
  },
  {
    slug: "vadodara-to-mumbai",
    from: "Vadodara",
    to: "Mumbai",
    distance: 420,
    duration: "7 hours",
    image: "/images/destinations/mumbai.jpg",
    description:
      "Vadodara to Mumbai cab service — reliable outstation trip from Gujarat's cultural capital to Mumbai. Perfect for business trips, airport drops, and family visits. AC cars with professional drivers.",
    highlights: ["Mumbai City", "Airport Drop", "Business Travel", "Expressway Route"],
    metaTitle: "Vadodara to Mumbai Taxi | A K Tours and Travels",
    metaDesc:
      "Book Vadodara to Mumbai cab at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round — Mumbai is a metro city. Best weather: October to March.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Vadodara",
      "Drop at any location in Mumbai",
    ],
  },
  {
    slug: "mumbai-to-ahmedabad",
    from: "Mumbai",
    to: "Ahmedabad",
    distance: 530,
    duration: "8 hours",
    image: "/images/destinations/ahmedabad.jpg",
    description:
      "Mumbai to Ahmedabad cab service — reliable outstation trip. Perfect for business travel, family visits, and Gujarat tours. Comfortable AC cars with experienced drivers, available 24x7.",
    highlights: ["Ahmedabad City", "Sabarmati Riverfront", "Business Travel", "Expressway Route"],
    metaTitle: "Mumbai to Ahmedabad Taxi | A K Tours and Travels",
    metaDesc:
      "Book Mumbai to Ahmedabad cab at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round — October to March offers the best weather for both cities.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Mumbai",
      "Drop at any location in Ahmedabad",
    ],
  },
  {
    slug: "ahmedabad-to-udaipur",
    from: "Ahmedabad",
    to: "Udaipur",
    distance: 260,
    duration: "4.5 hours",
    image: "/images/destinations/udaipur.jpg",
    description:
      "Ahmedabad to Udaipur cab service — the City of Lakes. Visit Lake Pichola, City Palace, Jag Mandir, and Saheliyon Ki Bari. Perfect weekend getaway from Ahmedabad. Comfortable AC cars.",
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Saheliyon Ki Bari", "Fateh Sagar Lake"],
    metaTitle: "Ahmedabad to Udaipur Taxi | A K Tours and Travels",
    metaDesc:
      "Book Ahmedabad to Udaipur taxi at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "October to March — pleasant weather for sightseeing. September-February for festivals.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Ahmedabad",
      "Drop at any location in Udaipur",
    ],
  },
  {
    slug: "surat-to-mumbai",
    from: "Surat",
    to: "Mumbai",
    distance: 280,
    duration: "4.5 hours",
    image: "/images/destinations/mumbai.jpg",
    description:
      "Surat to Mumbai cab service — reliable outstation trip from the Diamond City to Mumbai. Perfect for business trips, airport drops, and family visits. Comfortable AC cars with experienced drivers.",
    highlights: ["Mumbai City", "Airport Drop", "Business Travel", "Expressway Route"],
    metaTitle: "Surat to Mumbai Taxi | A K Tours and Travels",
    metaDesc:
      "Book Surat to Mumbai cab at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round — Mumbai is a metro city. Best weather: October to March.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Surat",
      "Drop at any location in Mumbai",
    ],
  },
  {
    slug: "mumbai-to-surat",
    from: "Mumbai",
    to: "Surat",
    distance: 280,
    duration: "4.5 hours",
    image: "/images/destinations/surat.jpg",
    description:
      "Mumbai to Surat cab service — reliable outstation trip to the Diamond City of India. Perfect for business travel, family visits, and Gujarat tours. AC cars with experienced drivers.",
    highlights: ["Surat City", "Diamond Market", "Textile Market", "Business Travel"],
    metaTitle: "Mumbai to Surat Taxi | A K Tours and Travels",
    metaDesc:
      "Book Mumbai to Surat cab at best rates. AC cars, experienced drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "October to March — pleasant weather. Year-round business travel possible.",
    whatIncluded: [
      "AC cab with experienced driver",
      "Fuel charges included",
      "One-way or round-trip options",
      "Doorstep pickup from Mumbai",
      "Drop at any location in Surat",
    ],
  }, 
];

export function getRouteBySlug(slug: string) {
  return ROUTES.find((r) => r.slug === slug);
}