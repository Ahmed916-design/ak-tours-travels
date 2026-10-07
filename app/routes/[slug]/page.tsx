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
import { formatPrice, whatsappLink } from "@/lib/utils";
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

  const bookMessage = `Hi, I want to book ${route.from} to ${route.to} taxi. Date: ___, Passengers: ___`;

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
              Starting {formatPrice(route.basePrice)}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={whatsappLink(bookMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fare Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Fare Table"
            title="Choose Your Car Type"
            subtitle="All prices are for one-way trip. Round-trip discounts available."
          />

          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                    Car Type
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                    Seats
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                    ₹/km
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                    Fare
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                    Book
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {FLEET.map((car) => {
                  const fare =
                    route.basePrice +
                    Math.round(
                      (route.distance * (car.pricePerKm - 13)) * 1
                    );
                  const displayFare = Math.max(fare, 1000);
                  const msg = `Hi, I want to book ${car.name} for ${route.from} to ${route.to}. Please share details.`;

                  return (
                    <tr key={car.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-semibold text-gray-900">
                        {car.name}
                      </td>
                      <td className="px-4 py-4 text-gray-600">{car.seats}</td>
                      <td className="px-4 py-4 text-gray-600">
                        ₹{car.pricePerKm}
                      </td>
                      <td className="px-4 py-4 font-bold text-green-700">
                        {formatPrice(displayFare)}
                      </td>
                      <td className="px-4 py-4">
                        <a
                          href={whatsappLink(msg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-green-700 hover:underline"
                        >
                          Book →
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            * Prices are approximate. Toll, parking, state tax extra. Round-trip discounts available on call.
          </p>
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

          <h3 className="mt-8 text-xl font-bold text-gray-900">
            Highlights
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {route.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
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
            <InquiryForm
              defaultRoute={route.to}
              defaultCar=""
            />
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
                a: `Fare starts from ${formatPrice(route.basePrice)} (Sedan). Innova and Ertiga are available at higher prices.`,
              },
              {
                q: `Is there a round-trip discount?`,
                a: `Yes, we offer discounts on round-trips. Call or WhatsApp us for the best rate.`,
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
            24x7 available. Turant confirmation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              href={whatsappLink(bookMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe57]"
            >
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
}