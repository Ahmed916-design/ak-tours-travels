// app/packages/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Star,
  Calendar,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InquirySection from "@/components/InquirySection";
import { PACKAGES, BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tour Packages | Palanpur to Ambaji, Mount Abu, Dwarka, Rajasthan",
  description:
    "Curated tour packages from Palanpur — Ambaji, Mount Abu, Dwarka-Somnath, Rajasthan. Car + driver + itinerary. Call +91 99793 57086 for best rate.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative z-10 container-custom text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gold-200">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            Curated Tour Packages
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Complete Tour Packages
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            Car + driver + itinerary — everything included. Perfect for families
            and groups.
          </p>
        </div>
      </section>

      {/* Packages List */}
      <section className="section bg-white">
        <div className="container-custom space-y-16 md:space-y-24">
          {PACKAGES.map((pkg, index) => {
            const msg = `Hi, I want to book the "${pkg.title}" package. Please share the best rate.`;
            const isEven = index % 2 === 0;

            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`grid gap-8 md:gap-12 md:grid-cols-2 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium group">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.title} tour package`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-gold">
                    <Clock className="h-3.5 w-3.5" />
                    {pkg.duration}
                  </div>

                  {/* Package title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
                    <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                    Best Seller
                  </div>

                  <h2 className="mt-4 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    {pkg.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Package Info */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
                      <Calendar className="h-3.5 w-3.5 text-primary-600" />
                      {pkg.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
                      <Users className="h-3.5 w-3.5 text-primary-600" />
                      Family / Group
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
                      <MapPin className="h-3.5 w-3.5 text-primary-600" />
                      {pkg.places.length}+ Places
                    </span>
                  </div>

                  {/* Places Covered */}
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-gray-900 mb-3">
                      Places Covered:
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {pkg.places.map((place) => (
                        <li
                          key={place}
                          className="flex gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="btn-primary"
                    >
                      <Phone className="h-5 w-5" />
                      {BUSINESS.phoneDisplay}
                    </a>
                    <a
                      href={whatsappLink(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    💰 Custom pricing — Call for the best rate
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquirySection
        title="Inquire About a Tour Package"
        subtitle="Tell us your destination and dates — we'll send a custom quote on WhatsApp"
        bg="bg-cream"
      />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />

        <div className="relative z-10 container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Need a Custom Tour Package?
          </h2>
          <p className="mt-4 text-primary-100 max-w-2xl mx-auto text-lg">
            We'll design a package tailored to your family, budget, and
            schedule. Any destination in India — Delhi, Kashmir, Kerala,
            Rajasthan, Goa & more.
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
              href={whatsappLink("Hi, I want a custom tour package")}
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