// lib/constants.ts

export const BUSINESS = {
  name: "A K Tours and Travels",
  shortName: "A K Tours",
  owner: "Ammar Khorajiya",
  tagline: "India's Trusted Cab Service",
  phone: "+919979357086",
  phone2: "+919925763146",
  phoneDisplay: "+91 99793 57086",
  phone2Display: "+91 99257 63146",
  whatsapp: "919979357086",
  email: "aktoursandtravelskanoder@gmail.com",
  address: {
    street: "Kanoder, Behind Swad Hotel",
    city: "Palanpur",
    state: "Gujarat",
    pincode: "385001",
    country: "India",
    full: "Kanoder, Behind Swad Hotel, Palanpur, Banaskantha, Gujarat 385001",
  },
  hours: "24x7 Available",
  established: "2015",
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const FLEET = [
  {
    id: "dzire",
    name: "Swift Dzire",
    type: "Sedan",
    seats: 4,
    ac: true,
    image: "/images/cars/dzire.jpg",
    features: ["AC", "4 Seater", "Comfortable"],
    popular: true,
  },
  {
    id: "aura",
    name: "Hyundai Aura",
    type: "Sedan",
    seats: 4,
    ac: true,
    image: "/images/cars/aura.jpg",
    features: ["AC", "4 Seater", "Comfortable"],
    popular: true,
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    type: "SUV",
    seats: 6,
    ac: true,
    image: "/images/cars/ertiga.jpg",
    features: ["AC", "6 Seater", "Family friendly"],
    popular: true,
  },
  {
    id: "innova",
    name: "Toyota Innova Crysta",
    type: "SUV",
    seats: 7,
    ac: true,
    image: "/images/cars/innova.jpg",
    features: ["AC", "7 Seater", "Premium"],
    popular: true,
  },
  {
    id: "urbania",
    name: "Force Urbania",
    type: "Mini Bus",
    seats: 13,
    ac: true,
    image: "/images/cars/urbania.jpg",
    features: ["AC", "13+ Seater", "Group travel"],
    popular: false,
  },
] as const;

export const SERVICES = [
  {
    icon: "Car",
    title: "One Way Cab Service",
    desc: "Pay only for one side — perfect for one-direction trips",
  },
  {
    icon: "Repeat",
    title: "Round Trip Cab Service",
    desc: "Comfortable round trips with the same driver throughout",
  },
  {
    icon: "Plane",
    title: "Airport Pick-up & Drop",
    desc: "On-time transfers to Ahmedabad & Udaipur airports",
  },
  {
    icon: "Train",
    title: "Railway Pick-up & Drop",
    desc: "Quick pickups and drops at Palanpur & Abu Road stations",
  },
  {
    icon: "MapPin",
    title: "All India Tour Service",
    desc: "Custom tours anywhere in India — Delhi, Kashmir, Kerala & more",
  },
  {
    icon: "Clock",
    title: "24/7 Available",
    desc: "Book anytime — day or night, we're always ready",
  },
] as const;

export const ALL_INDIA_DESTINATIONS = [
  "Palanpur to Mumbai",
  "Palanpur to Delhi",
  "Palanpur to Srinagar (Kashmir)",
  "Palanpur to Kerala",
  "Palanpur to Rajasthan",
  "Palanpur to Goa",
  "Palanpur to Jaipur",
  "Palanpur to Dwarka",
  "Palanpur to Somnath",
  "Palanpur to Udaipur",
  "Palanpur to Mount Abu",
  "Palanpur to Ambaji",
] as const;

export const PACKAGES = [
  {
    id: "ambaji-1day",
    title: "Ambaji Darshan",
    duration: "1 Day",
    image: "/images/packages/ambaji.jpg",
    places: ["Palanpur", "Ambaji Temple", "Gabbar Hill", "Mansarovar", "Return"],
    description:
      "Complete one-day darshan of the sacred Ambaji Temple and Gabbar Hill. Comfortable AC cab with experienced driver.",
  },
  {
    id: "mountabu-2day",
    title: "Mount Abu Tour",
    duration: "2 Days",
    image: "/images/packages/mountabu.jpg",
    places: ["Nakki Lake", "Dilwara Temple", "Guru Shikhar", "Sunset Point", "Honeymoon Point"],
    description:
      "Explore Rajasthan's only hill station — Nakki Lake, Dilwara temples, Guru Shikhar, and breathtaking sunset views.",
  },
  {
    id: "dwarka-somnath-3day",
    title: "Dwarka - Somnath",
    duration: "3 Days",
    image: "/images/packages/dwarka.jpg",
    places: ["Dwarkadhish Temple", "Nageshwar Jyotirlinga", "Somnath Temple", "Bet Dwarka", "Rukmini Temple"],
    description:
      "Sacred pilgrimage covering two of Gujarat's most revered temples — Dwarkadhish and Somnath Jyotirlinga.",
  },
  {
    id: "rajasthan-tour",
    title: "Rajasthan Tour",
    duration: "5-7 Days",
    image: "/images/packages/rajasthan.jpg",
    places: ["Jaipur", "Udaipur", "Mount Abu", "Jodhpur", "Jaisalmer", "Pushkar"],
    description:
      "Complete Rajasthan experience — Pink City, City of Lakes, Blue City, Golden City, and the only hill station. Fully customizable.",
  },
] as const;

export const WHY_US = [
  {
    icon: "ShieldCheck",
    title: "Verified Drivers",
    desc: "Background-checked, licensed professionals",
  },
  {
    icon: "IndianRupee",
    title: "Transparent Pricing",
    desc: "No hidden charges, honest rates",
  },
  {
    icon: "Car",
    title: "Clean AC Cars",
    desc: "Well-maintained, sanitized fleet",
  },
  {
    icon: "Headset",
    title: "24x7 Support",
    desc: "Available anytime, any day",
  },
] as const;

export const SEO = {
  siteUrl: "https://ak-tours-travels.vercel.app/",
  defaultTitle: "A K Tours and Travels | Trusted Cab Service Across India",
  defaultDesc:
    "Book reliable cab service in Palanpur & Ahmedabad. Local rides, outstation, airport transfer & All India tour packages. Verified drivers, transparent pricing. Call +91 99793 57086",
  keywords: [
    "cab service in Palanpur",
    "taxi in Palanpur",
    "Palanpur car rental",
    "Palanpur to Ambaji taxi",
    "Palanpur to Ahmedabad cab",
    "Palanpur to Mount Abu taxi",
    "Palanpur to Udaipur cab",
    "Palanpur to Delhi taxi",
    "Palanpur to Mumbai cab",
    "airport taxi Palanpur",
    "outstation cab Palanpur",
    "Innova rental Palanpur",
    "Urbania rental Palanpur",
    "mini bus rental Palanpur",
  ],
} as const;