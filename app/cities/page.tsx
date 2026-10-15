// app/cities/page.tsx
import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CityCard from "@/components/CityCard";
import InquirySection from "@/components/InquirySection";
import { CITIES } from "@/lib/cities-data";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cities We Serve | A K Tours and Travels",
  description:
    "Reliable cab service in Ahmedabad, Palanpur, Deesa, and across Gujarat. Verified drivers, AC cars, 24x7 available. Call +91 99793 57086.",
};

const CITY_IMAGES: Record<string, string> = {
  ahmedabad: "/images/destinations/ahmedabad.jpg",
  palanpur: "/images/destinations/palanpur.jpg",
  deesa: "/images/destinations/deesa.jpg",
};

export default function CitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-800">
            <MapPin className="h-4 w-4" />
            Service Areas
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold text-gray-900">
            Cities We Serve
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable cab service across Gujarat — Palanpur, Ahmedabad, Deesa,
            and many more cities. Verified drivers, AC cars, 24x7 available.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city) => (
              <CityCard
                key={city.slug}
                city={city}
                image={CITY_IMAGES[city.slug] || "/images/destinations/ahmedabad.jpg"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-cream">
        <div className="container-custom max-w-3xl text-center">
          <SectionHeading
            eyebrow="Coming Soon"
            title="More Cities on the Way"
            subtitle="We're expanding our service to more cities across Gujarat and India"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Gandhinagar",
              "Mehsana",
              "Mount Abu",
              "Udaipur",
              "Himmatnagar",
              "Patan",
            ].map((cityName) => (
              <span
                key={cityName}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
              >
                <MapPin className="h-3.5 w-3.5 text-primary-600" />
                {cityName}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquirySection
        title="Can't Find Your City?"
        subtitle="We serve all of India — tell us your route and we'll send the best rate on WhatsApp"
        bg="bg-white"
      />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative z-10 container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Need a Cab Anywhere in India?
          </h2>
          <p className="mt-4 text-primary-100 max-w-2xl mx-auto text-lg">
            From Palanpur to Kashmir, from Ahmedabad to Kerala — we cover it all.
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
              href={whatsappLink("Hi, I want to book a cab")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-premium transition-all duration-300 hover:bg-[#1ebe57] hover:scale-105 active:scale-95"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}