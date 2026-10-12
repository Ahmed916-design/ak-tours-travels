// app/routes/page.tsx
import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import RouteCard from "@/components/RouteCard";
import InquirySection from "@/components/InquirySection";
import { ROUTES } from "@/lib/routes-data";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Popular Routes | Palanpur Taxi Service | A K Tours and Travels",
  description:
    "All popular cab routes from Palanpur — Ambaji, Mount Abu, Ahmedabad, Udaipur, Dwarka, Somnath, Delhi, Mumbai, Kashmir, Kerala, Rajasthan. Best rates.",
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
            subtitle="From short local trips to All India tours — we cover it all"
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
        subtitle="Fill the form — get instant WhatsApp quote for any route in India"
        bg="bg-gray-50"
      />

      {/* CTA */}
      <section className="bg-green-700 text-white py-14">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a Custom Destination?
          </h2>
          <p className="mt-3 text-green-100">
            Custom route? Call or WhatsApp us — get an instant quote for any
            city in India.
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
              href={whatsappLink("Hi, I want a custom route quote")}
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