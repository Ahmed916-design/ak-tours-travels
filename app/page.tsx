// app/page.tsx
import Link from "next/link";
import {
  ShieldCheck,
  IndianRupee,
  Car,
  Headset,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FleetCard from "@/components/FleetCard";
import RouteCard from "@/components/RouteCard";
import InquirySection from "@/components/InquirySection";
import { FLEET, PACKAGES, WHY_US, BUSINESS } from "@/lib/constants";
import { ROUTES } from "@/lib/routes-data";
import { formatPrice } from "@/lib/utils";

const ICONS: Record<string, any> = {
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
              const Icon = ICONS[item.icon] || Car;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Icon className="h-7 w-7 text-green-700" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Choose Your Ride"
            subtitle="AC cars from budget to premium — all with verified drivers"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.slice(0, 6).map((car) => (
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

      {/* TOUR PACKAGES */}
      <section className="section bg-green-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Tour Packages"
            title="Curated Tour Packages"
            subtitle="Complete tours for families and groups — car + driver + itinerary"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="card !p-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-green-800 font-semibold">
                    {pkg.title}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-500">{pkg.duration}</div>
                  <h3 className="mt-1 font-bold text-gray-900">{pkg.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600">
                    {pkg.places.slice(0, 3).map((place) => (
                      <li key={place} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        {place}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div className="text-lg font-bold text-green-700">
                      {formatPrice(pkg.price)}
                    </div>
                    <Link
                      href={`/packages#${pkg.id}`}
                      className="text-sm font-semibold text-green-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="5000+ Happy Customers"
            subtitle="Trusted by people across Palanpur and nearby areas"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Patel",
                city: "Palanpur",
                text: "Best cab service in Palanpur. Driver was very polite and the car was clean. Highly recommended!",
              },
              {
                name: "Priya Shah",
                city: "Deesa",
                text: "Booked the Ambaji tour package for my family. Great experience, fair pricing. Thank you A K Tours!",
              },
              {
                name: "Mehul Joshi",
                city: "Palanpur",
                text: "On-time drop to Ahmedabad airport. Safe driving, clean AC car. Will definitely book again.",
              },
            ].map((r) => (
              <div key={r.name} className="card">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-gray-700 italic">"{r.text}"</p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-gray-500">{r.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-700 text-white">
        <div className="container-custom py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Book Your Cab?
          </h2>
          <p className="mt-3 text-green-100 max-w-2xl mx-auto">
            Call or WhatsApp us — get instant confirmation. Available 24x7.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe57]"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}