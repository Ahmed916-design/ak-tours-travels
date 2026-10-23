// components/Hero.tsx
import Image from "next/image";
import { Phone, MessageCircle, Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Premium cab service - A K Tours and Travels"
          fill
          priority
          className="object-cover object-bottom md:object-center"
          sizes="100vw"
        />
        {/* Dark Green Gradient Overlay — Lightened More */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/55 to-primary-900/80 md:from-primary-900/60 md:via-primary-800/45 md:to-primary-900/70" />
        {/* Brightness Boost */}
        <div className="absolute inset-0 bg-white/5" />
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* Content */}
    <div className="relative z-10 container-custom py-16 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          {/* LEFT SIDE — 3 columns */}
          <div className="lg:col-span-3 text-white animate-fade-in-up">
            {/* Trust Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gold-200">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              Trusted by 5000+ Travelers
            </span>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-balance">
              Book Your Ride
              <br />
              <span className="text-gradient-gold">Anywhere in India</span>
              <br />
              in 2 Minutes
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-xl text-primary-50/90 max-w-xl leading-relaxed">
              Professional & reliable drivers. Local rides, outstation trips,
              airport transfers, and All India tour packages. Available 24x7.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-primary-800 shadow-premium transition-all duration-300 hover:bg-primary-50 hover:scale-105 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={whatsappLink("Hi, I want to book a cab")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-premium transition-all duration-300 hover:bg-[#1ebe57] hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 mb-16 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-50/90 md:mb-0 md:gap-x-8">
              <span className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4 text-gold-400" />
                </div>
                Verified Drivers
              </span>
              <span className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-gold-400" />
                </div>
                24x7 Service
              </span>
              <span className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Star className="h-4 w-4 text-gold-400 fill-gold-400" />
                </div>
                4.8★ Rated
              </span>
            </div>
          </div>

          {/* RIGHT SIDE — 2 columns — Glassmorphism Booking Card */}
          <div className="lg:col-span-2 animate-fade-in-up animate-delay-200">
            <div className="rounded-3xl bg-white/55 backdrop-blur-2xl border border-white/50 p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-premium">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gray-900">
                    Quick Booking
                  </h3>
                  <p className="text-xs text-gray-500">
                    Confirmed in 2 minutes
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary-600 px-5 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-premium active:scale-95"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={`tel:${BUSINESS.phone2}`}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary-600 px-5 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-premium active:scale-95"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.phone2Display}
                </a>
                <a
                  href={whatsappLink(
                    "Hi, I want to book a cab. Pickup: ___, Drop: ___, Date: ___"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#1ebe57] hover:shadow-premium active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Booking
                </a>
              </div>

              {/* Stats Row */}
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-primary-50 p-3">
                  <div className="font-display text-lg font-bold text-primary-700">
                    15+
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-600">
                    Cars
                  </div>
                </div>
                <div className="rounded-xl bg-primary-50 p-3">
                  <div className="font-display text-lg font-bold text-primary-700">
                    5000+
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-600">
                    Trips
                  </div>
                </div>
                <div className="rounded-xl bg-gold-50 p-3">
                  <div className="font-display text-lg font-bold text-gold-700">
                    4.8★
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-600">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

           {/* Bottom Wave / Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Popular Routes Strip — BELOW Hero */}
      <div className="relative z-20 bg-white border-b border-gray-100 shadow-soft">
        <div className="container-custom py-5">
          <div className="flex items-center gap-4">
            {/* Label */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <span className="text-2xl">🚕</span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold text-gray-900">
                  Popular Routes
                </div>
                <div className="text-xs text-gray-500">Most booked by our customers</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-10 w-px bg-gray-200 shrink-0" />

                        {/* Chips — Auto Sliding */}
            <div className="flex-1 overflow-hidden relative">
              {/* Fade effect on edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              <div className="flex gap-2 min-w-max py-1 animate-marquee">
                {[
                  // Array ko 2 baar render kar rahe hain (seamless loop ke liye)
                  ...([
                    { slug: "palanpur-to-mumbai", from: "Palanpur", to: "Mumbai", emoji: "🌊" },
                    { slug: "ahmedabad-to-palanpur", from: "Ahmedabad", to: "Palanpur", emoji: "🏙️" },
                    { slug: "palanpur-to-delhi", from: "Palanpur", to: "Delhi", emoji: "🏛️" },
                    { slug: "ahmedabad-to-mumbai", from: "Ahmedabad", to: "Mumbai", emoji: "🌊" },
                    { slug: "palanpur-to-srinagar-kashmir", from: "Palanpur", to: "Kashmir", emoji: "🏔️" },
                    { slug: "vadodara-to-mumbai", from: "Vadodara", to: "Mumbai", emoji: "🌊" },
                    { slug: "palanpur-to-kerala", from: "Palanpur", to: "Kerala", emoji: "🌴" },
                    { slug: "surat-to-mumbai", from: "Surat", to: "Mumbai", emoji: "💎" },
                    { slug: "palanpur-to-ambaji", from: "Palanpur", to: "Ambaji", emoji: "🛕" },
                    { slug: "palanpur-to-mount-abu", from: "Palanpur", to: "Mount Abu", emoji: "⛰️" },
                  ]),
                  ...([
                    { slug: "palanpur-to-mumbai", from: "Palanpur", to: "Mumbai", emoji: "🌊" },
                    { slug: "ahmedabad-to-palanpur", from: "Ahmedabad", to: "Palanpur", emoji: "🏙️" },
                    { slug: "palanpur-to-delhi", from: "Palanpur", to: "Delhi", emoji: "🏛️" },
                    { slug: "ahmedabad-to-mumbai", from: "Ahmedabad", to: "Mumbai", emoji: "🌊" },
                    { slug: "palanpur-to-srinagar-kashmir", from: "Palanpur", to: "Kashmir", emoji: "🏔️" },
                    { slug: "vadodara-to-mumbai", from: "Vadodara", to: "Mumbai", emoji: "🌊" },
                    { slug: "palanpur-to-kerala", from: "Palanpur", to: "Kerala", emoji: "🌴" },
                    { slug: "surat-to-mumbai", from: "Surat", to: "Mumbai", emoji: "💎" },
                    { slug: "palanpur-to-ambaji", from: "Palanpur", to: "Ambaji", emoji: "🛕" },
                    { slug: "palanpur-to-mount-abu", from: "Palanpur", to: "Mount Abu", emoji: "⛰️" },
                  ])
                ].map((route, index) => (
                  <a
                    key={`${route.slug}-${index}`}
                    href={`/routes/${route.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 hover:shadow-soft shrink-0"
                  >
                    <span>{route.emoji}</span>
                    <span className="whitespace-nowrap">
                      {route.from} → {route.to}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}