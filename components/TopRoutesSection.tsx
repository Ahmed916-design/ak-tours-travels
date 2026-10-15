// components/TopRoutesSection.tsx
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TOP_ROUTES } from "@/lib/top-routes-data";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function TopRoutesSection() {
  return (
    <section className="section-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Top Long-Distance Routes"
          title="Most Booked Outstation Trips"
          subtitle="From Palanpur to Mumbai, Delhi, Kashmir & Kerala — the routes our customers trust most"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TOP_ROUTES.map((route) => {
            const badgeClasses =
              route.badgeColor === "gold"
                ? "from-gold-500 to-gold-600 shadow-gold"
                : "from-primary-500 to-primary-600 shadow-premium";

            return (
              <div
                key={route.slug}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={route.image}
                    alt={`${route.from} to ${route.to} taxi`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${badgeClasses} px-3 py-1.5 text-xs font-bold text-white`}
                  >
                    <Sparkles className="h-3 w-3" />
                    {route.badge}
                  </div>

                  {/* Distance + Duration pills */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-soft">
                      <MapPin className="h-3 w-3 text-primary-600" />
                      {route.distance} km
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-soft">
                      <Clock className="h-3 w-3 text-primary-600" />
                      {route.duration}
                    </span>
                  </div>

                  {/* Route name on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                      From {route.from}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                      {route.to}
                    </h3>
                    <p className="mt-1 text-sm text-white/90 font-medium">
                      {route.tagline}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 md:p-6">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {route.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {route.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-5 flex gap-2">
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-600 px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-premium active:scale-95"
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href={whatsappLink(
                        `Hi, I want to book ${route.from} to ${route.to}. Please share the best rate.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1ebe57] hover:shadow-premium active:scale-95"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>

                  {/* View Route Details */}
                  <Link
                    href={`/routes/${route.slug}`}
                    className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4"
                  >
                    <div className="text-sm font-semibold text-primary-700">
                      View Route Details
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-600">
                      <ArrowRight className="h-4 w-4 text-primary-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-10 text-center">
          <Link href="/routes" className="btn-secondary">
            View All Routes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}