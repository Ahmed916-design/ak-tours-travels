// app/routes/page.tsx
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import RouteCard from "@/components/RouteCard";
import InquirySection from "@/components/InquirySection";
import { ROUTES } from "@/lib/routes-data";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Popular Routes | Palanpur Taxi Service",
  description:
    "All popular cab routes from Palanpur. Ambaji, Mount Abu, Ahmedabad, Udaipur, Dwarka, Somnath and more. Best rates, verified drivers.",
};

export default function RoutesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Where Would You Like To Go?"
            subtitle="Palanpur se sabhi famous destinations ke liye fixed, transparent rates"
          />
        </div>
      </section>

      {/* Routes Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>

        {/* INQUIRY FORM */}
      <InquirySection
        title="Book Your Route"
        subtitle="Fill the form — get instant WhatsApp quote for any route"
      />

      {/* CTA */}
      <section className="bg-green-700 text-white py-14">
        <div className="container-custom text-center">
           <h2 className="text-2xl md:text-3xl font-bold">
            Need a Custom Destination?
          </h2>
          <p className="mt-3 text-green-100">
            Custom route? Call or WhatsApp us — get an instant quote.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
                "Hi, I want a custom route quote"
              )}`}
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