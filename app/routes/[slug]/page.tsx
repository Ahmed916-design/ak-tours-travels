// app/routes/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { ROUTES, getRouteBySlug } from "@/lib/routes-data";
import { FLEET, BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";

type Params = { slug: string };

export async function generateStaticParams() {
  return ROUTES.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    return { title: "Route Not Found" };
  }

  return {
    title: route.metaTitle,
    description: route.metaDesc,
  };
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const bookMessage = `Hi, I want to book ${route.from} to ${route.to} taxi. Please share the best rate.`;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-12 md:py-16">
        <div className="container-custom">
          <Link
            href="/routes"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All Routes
          </Link>

        {/* Badges — Only for top routes */}
          <div className="flex flex-wrap gap-2 mb-4">
            {route.isTopRoute && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1.5 text-xs font-bold text-white shadow-gold">
                ⭐ Top Booked Route
              </span>
            )}
            {route.multiDay && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-3 py-1.5 text-xs font-bold text-white shadow-premium">
                🗓️ Multi-Day Tour
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            {route.from} to {route.to} Taxi
          </h1>

          <div className="mt-4 flex flex-wrap gap-6 text-gray-600">
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              {route.distance} km
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              {route.duration}
            </span>
            <span className="flex items-center gap-2 font-semibold text-green-700">
              💰 Call for Best Rate
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a href={`tel:${BUSINESS.phone2}`} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone2Display}
            </a>
            <a
              href={whatsappLink(bookMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Get Best Rate Card */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="Best Rate Guaranteed"
            title="Get Best Rate for This Route"
            subtitle="Call us for current pricing — we offer discounts on round-trips and long trips"
          />

          <div className="mt-10 card !p-8 text-center bg-gradient-to-br from-green-50 to-white">
            <div className="text-lg font-semibold text-gray-900 mb-6">
              📞 Call us now for the best rate on{" "}
              <span className="text-green-700">
                {route.from} → {route.to}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                {BUSINESS.phoneDisplay}
              </a>
              <a href={`tel:${BUSINESS.phone2}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                {BUSINESS.phone2Display}
              </a>
            </div>

            <div className="mt-4">
              <a
                href={whatsappLink(bookMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full max-w-md mx-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Get Quote on WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 grid gap-4 sm:grid-cols-2 text-left max-w-xl mx-auto">
              <div className="flex gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>No hidden charges</span>
              </div>
              <div className="flex gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>Verified drivers</span>
              </div>
              <div className="flex gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>AC cars available</span>
              </div>
              <div className="flex gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>Round-trip discounts</span>
              </div>
            </div>
          </div>

          {/* Available Cars */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
              Available Car Types
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FLEET.map((car) => {
                const msg = `Hi, I want to book ${car.name} for ${route.from} to ${route.to}. Please share the best rate.`;
                return (
                  <div key={car.id} className="card">
                    <div className="font-semibold text-gray-900">
                      {car.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {car.type} • {car.seats} Seats • AC
                    </div>
                    <a
                      href={whatsappLink(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-green-700 hover:underline"
                    >
                      Get Quote →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About {route.to}
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {route.description}
          </p>

        <h3 className="mt-8 text-xl font-bold text-gray-900">Highlights</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {route.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>

          {/* Best Time to Visit — Only for top routes */}
          {route.bestTimeToVisit && (
            <div className="mt-8 rounded-2xl border border-gold-200 bg-gold-50 p-5">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-gold-600">🌤️</span>
                Best Time to Visit
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {route.bestTimeToVisit}
              </p>
            </div>
          )}

          {/* What's Included — Only for top routes */}
          {route.whatIncluded && route.whatIncluded.length > 0 && (
            <div className="mt-8 rounded-2xl border border-primary-200 bg-primary-50 p-5">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-primary-600">📦</span>
                What's Included
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {route.whatIncluded.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="section bg-green-50" id="inquiry">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="Send Inquiry"
            title={`Book ${route.from} to ${route.to}`}
            subtitle="Fill the form — we'll send you an instant WhatsApp quote"
          />
          <div className="mt-10 card !p-6 md:!p-8">
            <InquiryForm defaultRoute={route.to} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title={`${route.from} to ${route.to} — Common Questions`}
          />
          <div className="mt-10 space-y-4">
            {[
              {
                q: `How long does it take from ${route.from} to ${route.to}?`,
                a: `Approximately ${route.duration} (about ${route.distance} km).`,
              },
              {
                q: `What is the fare for ${route.from} to ${route.to} taxi?`,
                a: `Pricing depends on the car type, trip type (one-way/round-trip), and season. Call us at ${BUSINESS.phoneDisplay} or ${BUSINESS.phone2Display} for the best rate.`,
              },
              {
                q: `Is there a round-trip discount?`,
                a: `Yes, we offer discounts on round-trips and multi-day trips. Call or WhatsApp us for the best rate.`,
              },
              {
                q: `Who pays for toll and parking?`,
                a: `Toll, parking, and state tax are to be paid by the customer (at actuals). These are not included in the fare.`,
              },
            ].map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 text-white py-14">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Book Your {route.from} → {route.to} Taxi Now
          </h2>
          <p className="mt-3 text-green-100">
            24x7 available. Instant confirmation on call.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`tel:${BUSINESS.phone2}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 {BUSINESS.phone2Display}
            </a>
            <a
              href={whatsappLink(bookMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe57]"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}