// app/cities/ahmedabad/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Star,
  ArrowRight,
  Car,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import RouteCard from "@/components/RouteCard";
import FleetCard from "@/components/FleetCard";
import InquirySection from "@/components/InquirySection";
import { getCityBySlug } from "@/lib/cities-data";
import { ROUTES } from "@/lib/routes-data";
import { FLEET, BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const city = getCityBySlug("ahmedabad")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDesc,
};

export default function AhmedabadPage() {
  // Get all routes that start from Ahmedabad
  const ahmedabadRoutes = ROUTES.filter((r) => r.from === "Ahmedabad");

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/ahmedabad.jpg"
            alt="Cab service in Ahmedabad"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-900/85" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        <div className="relative z-10 container-custom py-20 md:py-28">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gold-200">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              Serving Ahmedabad Since 2015
            </span>

            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cab Service in{" "}
              <span className="text-gradient-gold">Ahmedabad</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-primary-50/90 max-w-2xl leading-relaxed">
              Reliable AC cabs for airport transfers, outstation trips,
              corporate travel, and city rides. Verified drivers, transparent
              pricing, 24x7 available.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-primary-800 shadow-premium transition-all duration-300 hover:bg-primary-50 hover:scale-105 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={whatsappLink("Hi, I want to book a cab in Ahmedabad")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-premium transition-all duration-300 hover:bg-[#1ebe57] hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-50/90">
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
        </div>
      </section>

      {/* ========== ABOUT AHMEDABAD SERVICE ========== */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="About Our Service"
            title={`Cab Service in ${city.name}`}
            subtitle={city.tagline}
          />
          <p className="mt-8 text-gray-700 leading-relaxed text-lg">
            {city.longDescription}
          </p>

          {/* Quick Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-cream p-5 text-center">
              <Car className="mx-auto h-8 w-8 text-primary-600" />
              <div className="mt-3 font-display text-2xl font-bold text-primary-700">
                15+
              </div>
              <div className="text-sm text-gray-600">Cars Available</div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-cream p-5 text-center">
              <Users className="mx-auto h-8 w-8 text-primary-600" />
              <div className="mt-3 font-display text-2xl font-bold text-primary-700">
                5000+
              </div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-cream p-5 text-center">
              <Star className="mx-auto h-8 w-8 text-gold-500" />
              <div className="mt-3 font-display text-2xl font-bold text-gold-700">
                4.8★
              </div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== POPULAR ROUTES FROM AHMEDABAD ========== */}
      <section className="section-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Popular Routes"
            title={`Outstation Trips from ${city.name}`}
            subtitle="Book AC cabs for these popular routes — one-way or round-trip"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ahmedabadRoutes.slice(0, 6).map((route) => (
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

      {/* ========== AREAS COVERED ========== */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="Service Coverage"
            title={`Areas We Cover in ${city.name}`}
            subtitle="Pickup and drop from anywhere in the city"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {city.areasCovered.map((area) => (
              <div
                key={area}
                className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-all duration-300 hover:border-primary-200 hover:shadow-soft hover:-translate-y-0.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 transition-colors duration-300 group-hover:bg-primary-600 shrink-0">
                  <MapPin className="h-4 w-4 text-primary-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* Landmarks */}
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-5">
              Popular Landmarks Near Our Service
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.landmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3.5 py-1.5 text-sm font-medium text-gold-700"
                >
                  <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FLEET ========== */}
      <section className="section-cream">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Fleet"
            title={`Cars Available in ${city.name}`}
            subtitle="Sedans, SUVs, and Mini Buses — all AC with verified drivers"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((car) => (
              <FleetCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why We're ${city.name}'s Preferred Cab Service`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Drivers",
                desc: "Licensed, background-checked professionals",
              },
              {
                icon: Clock,
                title: "On-Time Pickup",
                desc: "Punctual service — guaranteed",
              },
              {
                icon: Car,
                title: "Clean AC Cars",
                desc: "Well-maintained, sanitized fleet",
              },
              {
                icon: Phone,
                title: "24x7 Support",
                desc: "Call anytime — we're available",
              },
            ].map((item) => {
              const Icon = item.icon;
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

      {/* ========== INQUIRY FORM ========== */}
      <InquirySection
        title={`Book a Cab in ${city.name}`}
        subtitle="Fill the form — we'll send the best rate on WhatsApp within minutes"
        bg="bg-cream"
      />

      {/* ========== FAQ ========== */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title={`${city.name} — Common Questions`}
          />
          <div className="mt-10 space-y-4">
            {city.faqs.map((faq, i) => (
              <details key={i} className="group card cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-primary-600 text-2xl transition group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative z-10 container-custom py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Book Your Cab in {city.name} Now
          </h2>
          <p className="mt-4 text-primary-100 max-w-2xl mx-auto text-lg">
            24x7 available. Instant confirmation on call.
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
              href={whatsappLink("Hi, I want to book a cab in Ahmedabad")}
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