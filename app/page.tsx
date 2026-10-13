// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  IndianRupee,
  Car,
  Headset,
  CheckCircle2,
  Star,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FleetCard from "@/components/FleetCard";
import RouteCard from "@/components/RouteCard";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import InquirySection from "@/components/InquirySection";
import {
  FLEET,
  PACKAGES,
  WHY_US,
  SERVICES,
  ALL_INDIA_DESTINATIONS,
  BUSINESS,
} from "@/lib/constants";
import { ROUTES } from "@/lib/routes-data";

const WHY_ICONS: Record<string, any> = {
  ShieldCheck,
  IndianRupee,
  Car,
  Headset,
};

export default function HomePage() {
  const popularRoutes = ROUTES.slice(0, 6);

  return (
    <>
      <Hero />

      {/* WHY CHOOSE US */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Palanpur's Most Trusted Cab Service"
            subtitle="Trusted by locals, preferred by tourists"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => {
              const Icon = WHY_ICONS[item.icon] || Car;
              return (
                <div
                  key={item.title}
                  className="group text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:scale-110 group-hover:shadow-premium">
                    <Icon className="h-8 w-8 text-primary-700 transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything You Need for Your Journey"
            subtitle="One way, round trip, airport, railway, and All India tours"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Choose Your Ride"
            subtitle="Sedans, SUVs, and Mini Buses — all AC with verified drivers"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((car) => (
              <FleetCard key={car.id} car={car} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/fleet" className="btn-secondary">
              View Full Fleet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquirySection
        title="Get a Quick Quote"
        subtitle="Fill the form — we'll send the best price on WhatsApp within minutes"
      />

      {/* POPULAR ROUTES */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Where Would You Like To Go?"
            subtitle="Best rates to all popular destinations from Palanpur"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/routes" className="btn-secondary">
              View All Routes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ALL INDIA TOUR */}
      <section className="section-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="All India Tour Service"
            title="Travel Anywhere in India"
            subtitle="Delhi, Kashmir, Kerala, Rajasthan, Mumbai, Goa & more"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_INDIA_DESTINATIONS.map((dest) => (
              <div
                key={dest}
                className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all duration-300 hover:border-primary-200 hover:shadow-soft hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 transition-colors duration-300 group-hover:bg-primary-600">
                  <MapPin className="h-4 w-4 text-primary-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <span className="font-medium text-gray-800">{dest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* TOUR PACKAGES */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Tour Packages"
            title="Curated Tour Packages"
            subtitle="Complete tours for families and groups — car + driver + itinerary"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/packages#${pkg.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.title} tour package`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-2.5 py-1 text-xs font-bold text-white shadow-gold">
                    {pkg.duration}
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-lg leading-tight">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {pkg.places.slice(0, 3).map((place) => (
                      <li key={place} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                        {place}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between border-t pt-3">
                    <div className="text-xs font-semibold text-primary-700">
                      Call for Best Rate
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* REVIEWS */}
      <section className="section-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="5000+ Happy Customers"
            subtitle="Trusted by people across Palanpur and nearby areas"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ReviewCard
              name="Rajesh Patel"
              city="Palanpur"
              text="Best cab service in Palanpur. Driver was very polite and the car was clean. Highly recommended!"
              date="1 week ago"
            />
            <ReviewCard
              name="Priya Shah"
              city="Deesa"
              text="Booked the Ambaji tour package for my family. Great experience, fair pricing. Thank you A K Tours!"
              date="2 weeks ago"
            />
            <ReviewCard
              name="Mehul Joshi"
              city="Palanpur"
              text="On-time drop to Ahmedabad airport. Safe driving, clean AC car. Will definitely book again."
              date="3 weeks ago"
            />
            <ReviewCard
              name="Kiran Desai"
              city="Palanpur"
              text="Booked Innova for Rajasthan trip. Driver was excellent, very knowledgeable about routes. Great experience."
              date="1 month ago"
            />
            <ReviewCard
              name="Anjali Mehta"
              city="Ahmedabad"
              text="Used their service for Ahmedabad airport pickup. Very professional and on-time. Will recommend to friends."
              date="1 month ago"
            />
            <ReviewCard
              name="Suresh Kumar"
              city="Mount Abu"
              text="Excellent service for Mount Abu trip. Comfortable car, courteous driver, and reasonable pricing."
              date="1 month ago"
            />
          </div>

          {/* Trust Footer */}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold">
                <Star className="h-7 w-7 fill-white text-white" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-gray-900">
                  4.8 / 5.0
                </div>
                <div className="text-sm text-gray-500">
                  Based on Google Reviews
                </div>
              </div>
            </div>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%2C%20I%20want%20to%20share%20my%20feedback`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Share Your Feedback
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />

        <div className="relative z-10 container-custom py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Book Your Cab?
          </h2>
          <p className="mt-4 text-primary-100 max-w-2xl mx-auto text-lg">
            Call or WhatsApp us — get instant confirmation. Available 24x7.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-primary-700 shadow-premium transition-all duration-300 hover:bg-primary-50 hover:scale-105 active:scale-95"
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`tel:${BUSINESS.phone2}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-primary-700 shadow-premium transition-all duration-300 hover:bg-primary-50 hover:scale-105 active:scale-95"
            >
              📞 {BUSINESS.phone2Display}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-premium transition-all duration-300 hover:bg-[#1ebe57] hover:scale-105 active:scale-95"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}