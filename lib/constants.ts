// lib/constants.ts

export const BUSINESS = {
  name: "A K Tours and Travels",
  shortName: "A K Tours",
  owner: "Ammar Khorajiya",
  tagline: "Palanpur's Most Trusted Cab Service",
  phone: "+919979357086",
  phoneDisplay: "+91 99793 57086",
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
    id: "aura",
    name: "Hyundai Aura",
    type: "Sedan",
    seats: 4,
    ac: true,
    pricePerKm: 13,
    image: "/images/cars/aura.jpg",
    features: ["AC", "4 Seater", "Comfortable"],
    popular: true,
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    type: "MUV",
    seats: 6,
    ac: true,
    pricePerKm: 16,
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
    pricePerKm: 19,
    image: "/images/cars/innova.jpg",
    features: ["AC", "7 Seater", "Premium"],
    popular: true,
  },
  {
    id: "urbania",
    name: "Force Urbania",
    type: "Tempo / Van",
    seats: 13,
    ac: true,
    pricePerKm: 28,
    image: "/images/cars/urbania.jpg",
    features: ["AC", "13 Seater", "Group travel"],
    popular: false,
  },
] as const;

export const PACKAGES = [
  {
    id: "ambaji-1day",
    title: "Ambaji Darshan",
    duration: "1 Day",
    price: 2500,
    image: "/images/packages/ambaji.jpg",
    places: ["Palanpur", "Ambaji Temple", "Gabbar Hill", "Return"],
  },
  {
    id: "mountabu-2day",
    title: "Mount Abu Tour",
    duration: "2 Days",
    price: 6500,
    image: "/images/packages/mountabu.jpg",
    places: ["Nakki Lake", "Dilwara Temple", "Guru Shikhar", "Sunset Point"],
  },
  {
    id: "dwarka-somnath-3day",
    title: "Dwarka - Somnath",
    duration: "3 Days",
    price: 12000,
    image: "/images/packages/dwarka.jpg",
    places: ["Dwarkadhish Temple", "Nageshwar", "Somnath", "Bet Dwarka"],
  },
  {
    id: "kutch-3day",
    title: "Rann of Kutch",
    duration: "3 Days",
    price: 14000,
    image: "/images/packages/kutch.jpg",
    places: ["White Rann", "Kalo Dungar", "Bhuj", "Mandvi Beach"],
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
    desc: "No hidden charges, fair fixed rates",
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
  siteUrl: "https://aktoursandtravels.com",
  defaultTitle: "A K Tours and Travels | Best Cab Service in Palanpur, Gujarat",
  defaultDesc:
    "Book reliable cab service in Palanpur. Local rides, outstation, airport transfer & tour packages. Verified drivers, transparent pricing. Call +91 99793 57086",
  keywords: [
    "cab service in Palanpur",
    "taxi in Palanpur",
    "Palanpur car rental",
    "Palanpur to Ambaji taxi",
    "Palanpur to Ahmedabad cab",
    "Palanpur to Mount Abu taxi",
    "Palanpur to Udaipur cab",
    "airport taxi Palanpur",
    "outstation cab Palanpur",
    "Innova rental Palanpur",
    "Urbania rental Palanpur",
  ],
} as const;