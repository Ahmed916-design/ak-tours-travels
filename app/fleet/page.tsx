// app/fleet/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FleetCard from "@/components/FleetCard";
import InquirySection from "@/components/InquirySection";
import { FLEET, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Fleet | AC Cars for Rent in Palanpur",
  description:
    "Choose from Hyundai Aura, Maruti Ertiga, Toyota Innova Crysta, Force Urbania. AC cabs with verified drivers. Book now at +91 99793 57086.",
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
            subtitle="AC cars from budget to premium — all with verified, professional drivers"
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
        subtitle="Tell us your route and passengers — we'll suggest the perfect car"
        bg="bg-white"/>

      {/* Pricing Info */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="Pricing Rules"
            title="Transparent Pricing — No Hidden Charges"
          />
          <div className="mt-10 card">
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <strong>Outstation:</strong> Minimum 250 km/day
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <strong>Driver Allowance:</strong> ₹300/day
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <strong>Night Charge:</strong> ₹300 (10 PM – 6 AM)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <strong>Toll, Parking, State Tax:</strong> Extra (actual)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  <strong>Local Package:</strong> 8hr/80km from ₹1,800
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Confusion? Call ya WhatsApp karo — hum sahi car suggest karenge
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <Link href="/contact" className="btn-secondary">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}