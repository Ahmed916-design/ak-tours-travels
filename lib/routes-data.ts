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
  isTopRoute?: boolean;
  bestTimeToVisit?: string;
  whatIncluded?: string[];
  multiDay?: boolean;
  longContent?: string; // NAYA
  faqs?: { q: string; a: string }[]; // NAYA
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
      "Traveling from Palanpur to Mumbai is now comfortable and hassle-free with A K Tours and Travels. Whether you are traveling for business, a family vacation, or catching a flight, our 24x7 outstation cab service ensures a smooth journey. We offer well-maintained AC cars including Toyota Innova Crysta, Maruti Ertiga, and Swift Dzire. Our experienced drivers know the best routes via the Ahmedabad-Mumbai highway, ensuring your safety and punctuality.",
    highlights: [
      "Doorstep pickup from anywhere in Palanpur",
      "Experienced highway drivers",
      "AC Sedans, SUVs & Innova available",
      "Overnight comfortable journey",
      "Toll & State Tax assistance"
    ],
    metaTitle: "Palanpur to Mumbai Cab Service | Book AC Taxi | A K Tours",
    metaDesc:
      "Book Palanpur to Mumbai taxi at the best rates. 24x7 outstation cab service with verified drivers, AC cars (Innova, Ertiga), and doorstep pickup. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Mumbai can be visited year-round. However, October to March offers the most pleasant weather for sightseeing. Avoid traveling during peak monsoon (July-August) due to heavy rains.",
    whatIncluded: [
      "AC cab with a professional, verified driver",
      "Fuel charges included (No hidden charges)",
      "One-way or round-trip options available",
      "Doorstep pickup from Palanpur (Kanoder, Chhapi, etc.)",
      "Drop at any location in Mumbai (Airport, Dadar, Andheri, etc.)",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Why Book a Cab from Palanpur to Mumbai?</h3>
      <p>Palanpur to Mumbai is a long-distance route of approximately 720 km. While trains and buses are available, a private cab offers unmatched comfort, privacy, and flexibility. With A K Tours and Travels, you don't have to worry about changing trains or crowded buses. Our door-to-door service picks you up right from your home in Palanpur and drops you safely at your destination in Mumbai.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Our Fleet for Palanpur to Mumbai Route</h3>
      <ul class="list-disc pl-6 space-y-2 mt-3">
        <li><strong>Swift Dzire / Hyundai Aura (Sedan):</strong> Perfect for small families (up to 4 passengers) or business travelers.</li>
        <li><strong>Maruti Ertiga (SUV):</strong> Ideal for families of 5-6 people with moderate luggage.</li>
        <li><strong>Toyota Innova Crysta (Premium SUV):</strong> The best choice for long journeys. Offers maximum legroom and a premium feel.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">What is the fare for Palanpur to Mumbai Taxi?</h3>
      <p>The fare depends on the car type, whether you choose a one-way or round-trip, and the total distance. We believe in 100% transparent pricing. Toll taxes, state taxes, and parking charges are extra at actuals, but our driver will provide you with all the receipts. Call us at <strong>+91 99793 57086</strong> for the most competitive quote today.</p>
    `,
    faqs: [
      {
        q: "How long does it take to travel from Palanpur to Mumbai by car?",
        a: "The journey takes approximately 11 to 12 hours depending on traffic conditions and your halts. Our drivers plan the route efficiently to ensure a smooth ride.",
      },
      {
        q: "Do you provide one-way cab service to Mumbai?",
        a: "Yes, we offer both one-way and round-trip options. A one-way drop is highly cost-effective if you are not returning immediately.",
      },
      {
        q: "Is it safe to travel overnight from Palanpur to Mumbai?",
        a: "Absolutely. All our drivers are well-rested, highly experienced on highways, and we track every vehicle. Your safety is our top priority.",
      },
      {
        q: "Are toll taxes and state taxes included in the fare?",
        a: "Toll taxes, state border taxes, and parking are charged extra at actuals. The base fare covers the vehicle rent and driver allowance.",
      }
    ]
  },
  {
    slug: "palanpur-to-delhi",
    from: "Palanpur",
    to: "Delhi",
    distance: 950,
    duration: "16 hours",
    image: "/images/destinations/delhi.jpg",
    description:
      "Traveling from Palanpur to Delhi for business, tourism, or a family event? A K Tours and Travels provides reliable, comfortable, and safe outstation cab services to the capital city. Covering approximately 950 km, our professional drivers ensure a smooth journey on the national highways. Choose from our premium fleet of AC cars including Toyota Innova Crysta and Maruti Ertiga. We offer both one-way drops and round-trip packages.",
    highlights: [
      "Experienced drivers for long highway routes",
      "Doorstep pickup in Palanpur",
      "AC Sedans, SUVs & Tempo available",
      "Safe overnight journey",
      "Transparent toll & tax billing"
    ],
    metaTitle: "Palanpur to Delhi Cab Service | Outstation Taxi | A K Tours",
    metaDesc:
      "Book Palanpur to Delhi taxi at the best price. 24x7 outstation cab with verified drivers, AC Innova & Ertiga. Doorstep pickup. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "October to March is the best time to visit Delhi. The weather is pleasant for sightseeing. Avoid the peak summer months of May and June.",
    whatIncluded: [
      "AC cab with an experienced highway driver",
      "Fuel charges included",
      "One-way and round-trip options",
      "Pickup from anywhere in Palanpur",
      "Drop at any location in Delhi NCR",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Why Choose Our Palanpur to Delhi Cab?</h3>
      <p>Delhi is a major hub for business and tourism. Whether you are catching a flight from IGI Airport, attending a wedding, or visiting family, traveling by a private cab gives you the flexibility that trains and buses cannot offer. With A K Tours, your journey is completely door-to-door. You don't have to deal with the hassle of changing trains or carrying luggage in crowded stations.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Our Fleet for Long-Distance Travel</h3>
      <p>For a 16-hour journey, comfort is the top priority. We recommend our <strong>Toyota Innova Crysta</strong> for maximum comfort and legroom. For smaller groups, the <strong>Maruti Ertiga</strong> is a highly economical and comfortable SUV. If you have a large family, we also offer <strong>Force Urbania</strong> (Mini Bus).</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Fare & Booking Details</h3>
      <p>Our Palanpur to Delhi taxi fares are highly competitive. The fare includes the vehicle rent and driver allowance. Toll taxes, state permits, and parking are charged at actuals. For the best quote and to discuss round-trip discounts, call us directly at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "How many hours does it take to reach Delhi from Palanpur?",
        a: "It takes approximately 15 to 17 hours depending on traffic, weather, and your halts. We plan the journey with adequate rest stops for the driver.",
      },
      {
        q: "Do you provide cabs for one-way drops to Delhi?",
        a: "Yes, we provide one-way drop services. This is very cost-effective for customers who are not returning to Palanpur immediately.",
      },
      {
        q: "Will the driver know the routes in Delhi?",
        a: "Yes, our drivers are highly experienced with outstation routes and are familiar with major areas in Delhi NCR, including the airport and railway stations.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No, we provide complete transparency. You will be informed about the estimated toll and state tax amount in advance before booking.",
      },
    ]
  },
  {
    slug: "palanpur-to-srinagar-kashmir",
    from: "Palanpur",
    to: "Srinagar (Kashmir)",
    distance: 1700,
    duration: "Multi-Day Tour",
    image: "/images/destinations/kashmir.jpg",
    description:
      "A trip to Kashmir is a dream for many. A K Tours and Travels makes this dream accessible with our customized multi-day All India tour packages. Starting from Palanpur, we take you on a memorable journey to Srinagar, Gulmarg, Pahalgam, and Sonmarg. We provide well-maintained AC vehicles (Innova Crysta and Force Urbania) and highly experienced drivers who know the mountain terrains perfectly. Enjoy a stress-free vacation with your family.",
    highlights: [
      "Customizable multi-day itinerary",
      "Experienced hill-station drivers",
      "Comfortable AC Innova & Urbania",
      "Doorstep pickup from Palanpur",
      "All India permit assistance"
    ],
    metaTitle: "Palanpur to Kashmir Tour Package | Cab Service | A K Tours",
    metaDesc:
      "Book Palanpur to Srinagar Kashmir cab tour. Multi-day family packages, AC Innova & Tempo Traveller. Safe mountain driving. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: true,
    bestTimeToVisit: "April to October is the best time for tourism. The weather is pleasant and gardens are in full bloom. If you love snow, visit between December and February.",
    whatIncluded: [
      "AC cab with an expert hill-driver",
      "Fuel charges included for the entire trip",
      "Flexible itinerary as per your schedule",
      "Pickup and drop from your home in Palanpur",
      "Assistance with local sightseeing routes",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Plan Your Dream Kashmir Trip with Us</h3>
      <p>Traveling to Kashmir from Gujarat is a long journey, but with our private cab service, it becomes a beautiful road trip. You get to witness the changing landscapes—from the plains of Gujarat to the mountains of Jammu and the breathtaking valleys of Kashmir. Our multi-day packages are designed to be flexible. You can decide how many days you want to spend in Srinagar, Gulmarg, or Pahalgam.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Why Book a Cab Instead of a Tour Bus?</h3>
      <p>A private cab gives you complete privacy and freedom. You don't have to wait for other tourists or stick to a rigid schedule. Our drivers act as your local guides, taking you to the best spots, whether it's the Dal Lake, Mughal Gardens, or the snowy slopes of Sonmarg. We recommend our <strong>Toyota Innova Crysta</strong> for the best mountain driving experience.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Booking & Customization</h3>
      <p>Kashmir trips require careful planning. We help you design the perfect itinerary based on the number of days you have. All-India permits and toll taxes are handled by us (charged at actuals). To plan your custom Kashmir tour and get a special quote, call us at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "How many days are required for a Palanpur to Kashmir trip?",
        a: "We recommend a minimum of 7 to 10 days for the round trip from Palanpur, so you have enough time to rest and enjoy the local sightseeing in Kashmir.",
      },
      {
        q: "Are your cars and drivers equipped for hilly terrain?",
        a: "Absolutely. We only assign drivers who have years of experience driving in the Himalayas. Our vehicles are fully serviced and checked before such long trips.",
      },
      {
        q: "Does the fare include hotels and food?",
        a: "The cab fare covers the vehicle, fuel, and driver. Hotels, food, and entry tickets to tourist spots are not included, giving you the freedom to choose your own stays.",
      },
      {
        q: "Can we customize the itinerary?",
        a: "Yes, our multi-day tours are 100% customizable. Tell us which places you want to cover, and our team will plan the route accordingly.",
      },
    ]
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
    duration: "Multi-Day Tour",
    image: "/images/destinations/rajasthan.jpg",
    description:
      "Plan a complete Rajasthan tour with A K Tours and Travels. Starting from Palanpur, explore the majestic cities of Jaipur, Udaipur, Jodhpur, and Jaisalmer. We provide customized multi-day tour packages in AC vehicles like Toyota Innova Crysta and Force Urbania (Mini Bus) for large groups. Experience the royal heritage with our experienced drivers.",
    highlights: [
      "Customizable multi-day tour",
      "Cover Jaipur, Udaipur, Jodhpur",
      "AC Innova & Urbania available",
      "Experienced tour drivers",
      "Perfect for families & groups"
    ],
    metaTitle: "Palanpur to Rajasthan Tour Package | Multi-Day Cab | A K Tours",
    metaDesc:
      "Book Palanpur to Rajasthan tour package. Customizable multi-day trips to Jaipur, Udaipur, Jodhpur. AC cabs & Tempo. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: true,
    bestTimeToVisit: "October to March is the peak tourist season in Rajasthan. The weather is ideal for exploring forts and palaces.",
    whatIncluded: [
      "AC cab with a professional driver",
      "Fuel charges included for the entire itinerary",
      "Flexible multi-day schedule",
      "Doorstep pickup from Palanpur",
      "Assistance with route planning",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Explore the Royal State of Rajasthan</h3>
      <p>Rajasthan is a land of kings, offering a mix of grand forts, beautiful palaces, and vibrant deserts. Booking a private cab from Palanpur is the best way to explore this state at your own pace. Our multi-day packages are fully customizable. Whether you want to spend two days in Udaipur or three days in Jaipur, our driver will be with you throughout the journey.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Best Vehicles for Rajasthan Tours</h3>
      <p>For families of 4-6 people, the <strong>Toyota Innova Crysta</strong> is the best choice, offering excellent comfort on Rajasthan highways. For larger groups or corporate tours, we highly recommend the <strong>Force Urbania</strong> Mini Bus, which provides a luxurious, bus-like experience.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Customize Your Tour</h3>
      <p>We don't sell fixed packages; we build them around your needs. Tell us your travel dates, budget, and preferred destinations. Call us at <strong>+91 99793 57086</strong> to design your dream Rajasthan vacation.</p>
    `,
    faqs: [
      {
        q: "What is the minimum duration for a Rajasthan tour from Palanpur?",
        a: "We recommend at least a 4 to 5-day tour to comfortably cover cities like Jaipur, Jodhpur, and Udaipur.",
      },
      {
        q: "Does the tour package include hotels?",
        a: "Our cab package covers the vehicle, fuel, and driver. Hotels are not included, but we can recommend trusted hotels for your stay.",
      },
      {
        q: "Can we book a Tempo Traveller or Urbania?",
        a: "Yes, we have Force Urbania Mini Buses available for large families and group tours.",
      },
      {
        q: "Are tolls and state taxes included in the multi-day fare?",
        a: "Tolls, parking, and interstate permits for Rajasthan are extra at actuals. We provide an estimate before you book.",
      },
    ]
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
      "Need a quick and reliable cab from Ahmedabad to Palanpur? A K Tours and Travels specializes in this route. Whether you are arriving at Ahmedabad Airport, Railway Station, or traveling from the city for a family function in Palanpur, we provide on-time pickup and safe drop. Enjoy a smooth 2.5-hour drive on the highway in our clean AC cars with professional drivers.",
    highlights: [
      "24x7 Airport & Railway pickup",
      "Clean AC Sedans & SUVs",
      "On-time guaranteed service",
      "Experienced highway drivers",
      "Best rates for Ahmedabad-Palanpur"
    ],
    metaTitle: "Ahmedabad to Palanpur Cab | Airport Taxi | A K Tours",
    metaDesc:
      "Book Ahmedabad to Palanpur taxi at best rates. 24x7 airport and railway pickup. Clean AC cars, verified drivers. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "This is an all-year route. It is highly popular for business travel and family visits.",
    whatIncluded: [
      "AC cab with a professional driver",
      "Fuel and highway charges included",
      "Pickup from Ahmedabad Airport or any location in the city",
      "Drop at Kanoder, Palanpur, or anywhere in Palanpur",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Ahmedabad to Palanpur Cab Service - Reliable & Fast</h3>
      <p>The route from Ahmedabad to Palanpur is one of the most busy routes for us. We frequently serve passengers arriving at Sardar Vallabhbhai Patel International Airport who need to reach Palanpur. Our drivers track your flight status. Even if your flight is delayed, our cab will be waiting for you at the airport.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Airport Pickup & Railway Station Pickup</h3>
      <p>We provide meet-and-greet services at the Ahmedabad Airport. For railway passengers arriving at Kalupur or Gandhigram station, we ensure the driver is waiting at the designated pickup point. You don't have to haggle with local taxi drivers; book with us in advance for a fixed, transparent price.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Best Cars for This Route</h3>
      <p>For a 2.5-hour journey, our <strong>Swift Dzire</strong> or <strong>Hyundai Aura</strong> are the most popular choices for small families and executives. If you have extra luggage, the <strong>Maruti Ertiga</strong> or <strong>Toyota Innova</strong> is perfect. To book your Ahmedabad to Palanpur drop, call us at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "How much time does it take from Ahmedabad to Palanpur?",
        a: "It usually takes 2.5 to 3 hours depending on traffic while exiting Ahmedabad city and your exact drop location in Palanpur.",
      },
      {
        q: "Do you offer pickups from Ahmedabad Airport late at night?",
        a: "Yes, we operate 24x7. Our drivers are available for late-night and early-morning airport pickups.",
      },
      {
        q: "What is the luggage capacity of your cabs?",
        a: "A sedan can comfortably carry 2 large bags and 1 small bag. For more luggage, we recommend upgrading to an Ertiga or Innova.",
      },
      {
        q: "Are there any extra charges for airport pickup?",
        a: "We charge a nominal airport entry fee as per the actual government rates, which we inform you about in advance.",
      },
    ]
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
      "Explore the Pink City with A K Tours and Travels. Book a comfortable AC cab from Palanpur to Jaipur for your family vacation or business trip. We cover the 550 km distance in approximately 9 hours. Visit the iconic Amber Fort, Hawa Mahal, and City Palace. Our experienced drivers ensure a safe journey through the Rajasthan highways.",
    highlights: [
      "Tourist friendly cab service",
      "Visit Amber Fort, Hawa Mahal",
      "Comfortable AC SUV & Innova",
      "Doorstep pickup from Palanpur",
      "Safe and scenic drive"
    ],
    metaTitle: "Palanpur to Jaipur Taxi | Rajasthan Tour Cab | A K Tours",
    metaDesc:
      "Book Palanpur to Jaipur cab at best rates. 24x7 outstation taxi for Rajasthan tour. AC Innova, Ertiga available. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "October to March is the best time to visit Jaipur. The weather is cool and pleasant for sightseeing.",
    whatIncluded: [
      "AC cab with an experienced driver",
      "Fuel charges included",
      "One-way drop or round-trip",
      "Pickup from Kanoder, Palanpur, or nearby areas",
      "Drop at your hotel or any location in Jaipur",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Palanpur to Jaipur - Your Gateway to Rajasthan</h3>
      <p>Jaipur, the capital of Rajasthan, is famous for its rich history, forts, and vibrant culture. A road trip from Palanpur to Jaipur is a beautiful experience. We offer well-maintained vehicles like the <strong>Maruti Ertiga</strong> and <strong>Toyota Innova Crysta</strong> for your family. Our drivers are familiar with the Rajasthan routes and can also act as your local guides for places like Amber Fort and Jal Mahal.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Plan Your Rajasthan Tour</h3>
      <p>Many customers book this cab for a one-way drop to Jaipur and then continue their Rajasthan tour to Udaipur or Jodhpur. We also offer multi-day round-trip packages. To customize your Rajasthan itinerary and get a special tour rate, call us at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "What is the distance and time from Palanpur to Jaipur?",
        a: "The distance is approximately 550 km, and the journey takes about 8.5 to 9 hours.",
      },
      {
        q: "Can I book this cab for a round trip?",
        a: "Yes, we offer very competitive round-trip packages for Jaipur. You can keep the cab with you for 2-3 days for local sightseeing.",
      },
      {
        q: "Which car is best for this route?",
        a: "An Innova Crysta or Ertiga is highly recommended for the highway journey, providing good comfort for your family.",
      },
      {
        q: "Are toll taxes and parking included?",
        a: "Toll taxes and state border taxes are extra. Parking fees at monuments are also to be paid by the customer.",
      },
    ]
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
      "Traveling from Ahmedabad to Mumbai is now fast and comfortable with A K Tours and Travels. Whether you are heading to the financial capital for a business meeting, catching a flight, or visiting family, our outstation cab service ensures a smooth journey. We take the Ahmedabad-Mumbai Expressway and use premium vehicles like Toyota Innova Crysta and Maruti Ertiga to make your 8-hour journey relaxing.",
    highlights: [
      "Fast travel via Expressway",
      "AC Sedans, SUVs & Innova",
      "Corporate & Business travel",
      "Doorstep pickup in Ahmedabad",
      "Safe overnight journey"
    ],
    metaTitle: "Ahmedabad to Mumbai Cab Service | Expressway Taxi | A K Tours",
    metaDesc:
      "Book Ahmedabad to Mumbai taxi at best rates. 24x7 outstation cab via Expressway. AC cars, verified drivers, and doorstep pickup. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "This is an all-year route, highly popular for business travel. The Expressway is excellent for driving year-round.",
    whatIncluded: [
      "AC cab with an experienced Expressway driver",
      "Fuel and Expressway tolls (at actuals)",
      "One-way and round-trip options",
      "Pickup from any area in Ahmedabad (SG Highway, Bopal, etc.)",
      "Drop at any location in Mumbai or Navi Mumbai",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Ahmedabad to Mumbai Cab Service - Fast & Reliable</h3>
      <p>The route from Ahmedabad to Mumbai is one of the busiest corporate routes in India. Thanks to the Ahmedabad-Mumbai Expressway, the journey is now much faster and smoother. We specialize in providing comfortable, AC cabs for business executives and families alike. Our drivers are well-versed with the Expressway routes and ensure a safe, timely drop.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">One-Way Drop & Round-Trip Options</h3>
      <p>Many customers need a one-way drop to Mumbai for business or to catch a flight at Chhatrapati Shivaji Maharaj International Airport. We offer highly competitive one-way rates. For those returning to Ahmedabad, we offer discounted round-trip packages.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Booking Your Ride</h3>
      <p>To ensure a comfortable journey, we recommend the <strong>Toyota Innova Crysta</strong> or <strong>Maruti Ertiga</strong>. For solo travelers or small families, our <strong>Swift Dzire</strong> is the most economical choice. Call us at <strong>+91 99793 57086</strong> to book your ride.</p>
    `,
    faqs: [
      {
        q: "How long does it take from Ahmedabad to Mumbai by cab?",
        a: "It takes approximately 7.5 to 8.5 hours via the Expressway, depending on traffic conditions while entering Mumbai city.",
      },
      {
        q: "Do you provide airport drops in Mumbai from Ahmedabad?",
        a: "Yes, we provide direct drops to Mumbai Airport (T1 and T2). Just inform us while booking so we can plan the route accordingly.",
      },
      {
        q: "What are the toll charges on this route?",
        a: "Toll charges on the Expressway are extra and charged at actuals. You can pay them directly or we can include them in your estimated quote.",
      },
      {
        q: "Is it safe for a family to travel at night?",
        a: "Yes, our drivers are highly experienced, and the Expressway is well-lit and safe for overnight journeys.",
      },
    ]
  },
  {
    slug: "vadodara-to-mumbai",
    from: "Vadodara",
    to: "Mumbai",
    distance: 420,
    duration: "7 hours",
    image: "/images/destinations/mumbai.jpg",
    description:
      "Book a reliable cab from Vadodara to Mumbai with A K Tours and Travels. Whether you are a corporate professional traveling to Mumbai for work, or a family catching a flight, our AC outstation cabs offer maximum comfort. We cover the 420 km distance via the Vadodara-Mumbai Expressway in approximately 7 hours. Choose from our fleet of Innova Crysta, Ertiga, and Dzire.",
    highlights: [
      "Smooth Expressway journey",
      "Corporate travel specialists",
      "Clean AC Cars",
      "On-time pickup from Vadodara",
      "Drop at Mumbai Airport or City"
    ],
    metaTitle: "Vadodara to Mumbai Cab | Outstation Taxi Service | A K Tours",
    metaDesc:
      "Book Vadodara to Mumbai cab at best rates. 24x7 outstation taxi with verified drivers. AC cars, doorstep pickup. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round travel is comfortable. The Expressway makes the journey smooth in all seasons.",
    whatIncluded: [
      "AC cab with a professional driver",
      "Fuel charges included",
      "One-way drop or round-trip",
      "Pickup from your location in Vadodara",
      "Drop anywhere in Mumbai, Navi Mumbai, or Thane",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Comfortable Vadodara to Mumbai Outstation Cab</h3>
      <p>Vadodara, known as the cultural capital of Gujarat, has strong business and family ties with Mumbai. Our Vadodara to Mumbai cab service is designed for maximum comfort. Instead of navigating crowded trains or dealing with bus delays, you can relax in our clean AC cars and let our professional drivers handle the Expressway traffic.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Airport & Railway Station Drops</h3>
      <p>A large number of our customers book this route to catch early morning or late-night flights from Mumbai Airport. We track your flight timings and ensure you reach the terminal on time. We also drop passengers at Dadar, Andheri, Borivali, and other major railway stations in Mumbai.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Fare & Booking</h3>
      <p>Our rates are highly competitive. Toll taxes and state border taxes are extra at actuals. For the best quote on a one-way drop or a round-trip, call us at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "How many hours from Vadodara to Mumbai by cab?",
        a: "It takes around 6 to 7 hours depending on traffic near the Mumbai entry points like Vashi or Dahisar.",
      },
      {
        q: "Can I book an Innova for this route?",
        a: "Yes, we have Toyota Innova Crysta available. It is highly recommended for this 7-hour journey for extra comfort and luggage space.",
      },
      {
        q: "Are there any night charges for traveling?",
        a: "A nominal night charge may apply if your pickup is between 10 PM and 6 AM. This will be communicated clearly upfront.",
      },
      {
        q: "Do you provide one-way cabs to Mumbai?",
        a: "Yes, one-way drop is our most popular service for this route, saving you the cost of a round trip.",
      },
    ]
  },
  {
    slug: "mumbai-to-ahmedabad",
    from: "Mumbai",
    to: "Ahmedabad",
    distance: 530,
    duration: "8 hours",
    image: "/images/destinations/ahmedabad.jpg",
    description:
      "Traveling from Mumbai to Ahmedabad? A K Tours and Travels provides reliable and comfortable outstation cab services on this busy route. Whether you are returning home, traveling for business, or visiting family, our AC cabs (Innova Crysta, Ertiga, Dzire) ensure a smooth journey via the Mumbai-Ahmedabad Expressway. Book with us for on-time pickup from anywhere in Mumbai and a safe drop in Ahmedabad.",
    highlights: [
      "On-time pickup from Mumbai (Airport, Railway, City)",
      "Smooth Expressway journey",
      "AC Sedans, SUVs & Innova available",
      "Safe and secure travel",
      "Drop at any location in Ahmedabad"
    ],
    metaTitle: "Mumbai to Ahmedabad Cab Service | Expressway Taxi | A K Tours",
    metaDesc:
      "Book Mumbai to Ahmedabad taxi at best rates. 24x7 outstation cab service. AC cars, verified drivers, Expressway route. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "This is a year-round business and family route. The Expressway ensures a smooth journey in all seasons.",
    whatIncluded: [
      "AC cab with an experienced driver",
      "Fuel charges included",
      "One-way drop or round-trip",
      "Pickup from Mumbai Airport, Dadar, Andheri, or any location",
      "Drop at SG Highway, Bopal, or anywhere in Ahmedabad",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Mumbai to Ahmedabad Outstation Cab</h3>
      <p>Our Mumbai to Ahmedabad cab service is designed for maximum comfort and reliability. We understand that after a long flight or train journey to Mumbai, you want a hassle-free ride home. Our drivers provide meet-and-greet services at the airport and railway stations. The drive via the Expressway is scenic and fast, taking about 8 hours.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Choose the Right Car for Your Journey</h3>
      <p>If you are traveling solo or with one passenger, our <strong>Swift Dzire</strong> is the most economical choice. Families traveling with luggage should opt for the <strong>Maruti Ertiga</strong> or the premium <strong>Toyota Innova Crysta</strong> for maximum legroom. We also provide <strong>Force Urbania Mini Bus</strong> for large groups.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Transparent Pricing</h3>
      <p>We offer competitive one-way and round-trip fares. Toll taxes and state permits are extra at actuals. To get an exact quote for your Mumbai to Ahmedabad trip, call us at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "How long does it take from Mumbai to Ahmedabad?",
        a: "It takes approximately 8 hours via the Expressway, depending on the traffic while exiting Mumbai.",
      },
      {
        q: "Can I book a cab from Mumbai Airport to Ahmedabad?",
        a: "Yes, we specialize in airport pickups. Our driver will be waiting for you at the arrival terminal with a name placard.",
      },
      {
        q: "Are toll charges included?",
        a: "Toll charges are not included in the base fare and are to be paid at actuals. Receipts will be provided by the driver.",
      },
      {
        q: "Do you provide child seats?",
        a: "We can arrange a child seat upon special request. Please inform us at least 24 hours before your pickup.",
      },
    ]
  },

  {
    slug: "surat-to-mumbai",
    from: "Surat",
    to: "Mumbai",
    distance: 280,
    duration: "4.5 hours",
    image: "/images/destinations/mumbai.jpg",
    description:
      "Surat to Mumbai is a highly active route for business professionals, especially those in the textile and diamond industries. A K Tours and Travels provides fast, secure, and comfortable cab services from Surat to Mumbai. We cover the 280 km distance in just about 4.5 hours. Travel in our sanitized AC cars with experienced drivers who know the best routes to avoid city traffic in Mumbai.",
    highlights: [
      "Fast 4.5-hour journey",
      "Business class comfort",
      "AC Sedans & SUVs",
      "Secure & safe travel",
      "Doorstep pickup in Surat"
    ],
    metaTitle: "Surat to Mumbai Cab Service | Fast Outstation Taxi | A K Tours",
    metaDesc:
      "Book Surat to Mumbai cab at affordable rates. Fast 4.5-hour journey, AC cars, verified drivers. 24x7 service. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "This route is ideal for travel throughout the year, especially for business trips.",
    whatIncluded: [
      "AC cab with an expert driver",
      "Fuel charges included",
      "One-way drop or round-trip",
      "Pickup from anywhere in Surat",
      "Drop at Mumbai Airport, Railway Station, or home",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Fast & Secure Surat to Mumbai Cab</h3>
      <p>Surat is a bustling business hub, and Mumbai is the financial capital. We understand that time is money for business travelers. Our Surat to Mumbai cab service is optimized for speed and comfort. We use well-maintained vehicles and highly experienced drivers who know how to navigate the highway and the busy Mumbai entry points efficiently.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Why Choose A K Tours for this Route?</h3>
      <p>We offer clean, AC cars that are perfect for a quick business trip. You can work on the go or relax before your meeting. Our drivers are polite, professionally dressed, and maintain strict punctuality. We also offer reliable drops to Mumbai Airport for travelers flying out.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Booking Details</h3>
      <p>Our fares are transparent, covering vehicle rent and driver allowance. Toll taxes are extra. For corporate accounts or regular monthly bookings on this route, please call us directly at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "What is the distance and time from Surat to Mumbai?",
        a: "The distance is approximately 280 km, and it takes about 4.5 to 5 hours depending on Mumbai's local traffic.",
      },
      {
        q: "Do you offer corporate packages for this route?",
        a: "Yes, we offer special packages for companies and regular business travelers. Contact us for a customized corporate quote.",
      },
      {
        q: "Are the toll taxes included in the fare?",
        a: "No, toll taxes and state border taxes are charged extra at actuals. You will receive receipts for all toll payments.",
      },
      {
        q: "Can I get a sedan for a solo business trip?",
        a: "Yes, our Swift Dzire or Hyundai Aura are perfect for solo travelers or small groups of up to 3 people.",
      },
    ]
  },
  {
    slug: "mumbai-to-surat",
    from: "Mumbai",
    to: "Surat",
    distance: 280,
    duration: "4.5 hours",
    image: "/images/destinations/surat.jpg",
    description:
      "Book a fast and secure cab from Mumbai to Surat with A K Tours and Travels. Ideal for business travelers in the textile and diamond industries, or families heading home. We cover the 280 km distance in about 4.5 hours via the Mumbai-Surat highway. Our professional drivers ensure a safe journey in well-maintained AC cars.",
    highlights: [
      "Fast 4.5-hour drive",
      "Ideal for business travelers",
      "Pickup from Mumbai Airport or City",
      "Clean AC Cars",
      "Experienced highway drivers"
    ],
    metaTitle: "Mumbai to Surat Cab | Fast Outstation Taxi | A K Tours",
    metaDesc:
      "Book Mumbai to Surat cab at affordable rates. 24x7 service, AC cars, verified drivers. Fast highway travel. Call +91 99793 57086.",
    isTopRoute: true,
    multiDay: false,
    bestTimeToVisit: "Year-round travel is comfortable on this highway route.",
    whatIncluded: [
      "AC cab with a professional driver",
      "Fuel charges included",
      "One-way drop",
      "Doorstep pickup from any area in Mumbai",
      "Drop at any location in Surat",
    ],
    longContent: `
      <h3 class="text-xl font-bold mt-6 mb-3">Quick and Comfortable Mumbai to Surat Cab</h3>
      <p>Surat is a booming business hub, and many professionals travel between Mumbai and Surat regularly. Our cab service is designed to save your time while providing maximum comfort. We use premium highway cars like the <strong>Toyota Innova Crysta</strong> and <strong>Swift Dzire</strong> for this route. You can relax or work during the journey while our expert driver handles the highway traffic.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Airport & Station Drops</h3>
      <p>If you have a late-night flight from Mumbai Airport, we ensure our driver is there at the right time. Similarly, we provide on-time drops at Surat Railway Station and Surat Airport. Booking is simple: just call us at <strong>+91 99793 57086</strong>.</p>
    `,
    faqs: [
      {
        q: "How much time does it take from Mumbai to Surat?",
        a: "It usually takes 4.5 to 5 hours depending on traffic while leaving Mumbai.",
      },
      {
        q: "What is the best car for this route?",
        a: "The Toyota Innova Crysta is highly recommended for this journey due to its superior comfort and suspension on the highway.",
      },
      {
        q: "Are state taxes included?",
        a: "State border taxes (if applicable) and tolls are charged extra at actuals.",
      },
      {
        q: "Do you offer a one-way drop to Surat?",
        a: "Yes, a one-way drop is our most popular option for this route, as it saves you money.",
      },
    ]
  },
];

export function getRouteBySlug(slug: string) {
  return ROUTES.find((r) => r.slug === slug);
}