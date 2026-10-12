// app/fleet/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FleetCard from "@/components/FleetCard";
import InquirySection from "@/components/InquirySection";
import { FLEET, BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Fleet | Sedan, SUV & Mini Bus Rental in Palanpur",
  description:
    "Choose from Swift Dzire, Hyundai Aura, Maruti Ertiga, Toyota Innova Crysta, and Force Urbania. AC cabs with verified drivers. Call +91 99793 57086.",
};

export default function FleetPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Choose Your Perfect Ride"
            subtitle="Sedans, SUVs, and Mini Buses — all AC with verified drivers"
          />
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((car) => (
              <FleetCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquirySection
        title="Not Sure Which Car to Pick?"
        subtitle="Tell us your route and passengers — we'll suggest the perfect car and best rate"
        bg="bg-gray-50"
      />

      {/* Contact CTA */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="card text-center !p-8 md:!p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Need Help Choosing?
            </h2>
            <p className="mt-3 text-gray-600">
              Call us — we'll help you pick the right car and share the best rate for your trip.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                {BUSINESS.phoneDisplay}
              </a>
              <a href={`tel:${BUSINESS.phone2}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                {BUSINESS.phone2Display}
              </a>
              <a
                href={whatsappLink("Hi, I need help choosing a car")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Why Book With Us?
              </h3>
              <ul className="space-y-2 text-left max-w-md mx-auto text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Transparent pricing — no hidden charges</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Verified, professional drivers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Well-maintained AC cars</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Discounts on long trips & round-trips</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>24x7 support — call anytime</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact#inquiry"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:underline"
            >
              Or send an inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}