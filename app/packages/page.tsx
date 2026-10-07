// app/packages/page.tsx
import type { Metadata } from "next";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InquirySection from "@/components/InquirySection";
import { PACKAGES, BUSINESS } from "@/lib/constants";
import { formatPrice, whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tour Packages | Palanpur to Ambaji, Mount Abu, Dwarka",
  description:
    "Curated tour packages from Palanpur — Ambaji, Mount Abu, Dwarka-Somnath, Rann of Kutch. Car + driver + itinerary. Best rates.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Tour Packages"
            title="Complete Tour Packages"
            subtitle="Car + driver + itinerary — everything included. Perfect for families and groups."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom space-y-12">
          {PACKAGES.map((pkg, index) => {
            const msg = `Hi, I want to book the "${pkg.title}" package. Please share details.`;
            const isEven = index % 2 === 0;

            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`grid gap-8 md:grid-cols-2 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-800">
                    {pkg.title}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-semibold text-green-600">
                    {pkg.duration}
                  </div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                    {pkg.title}
                  </h2>
                  <div className="mt-4 text-3xl font-bold text-green-700">
                    {formatPrice(pkg.price)}
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      onwards
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {pkg.places.map((place) => (
                      <li
                        key={place}
                        className="flex gap-2 text-gray-700"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        {place}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="btn-primary"
                    >
                      <Phone className="h-5 w-5" />
                      Call Now
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
        bg="bg-gray-50"
      />

      <section className="bg-green-700 text-white py-14">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a Custom Tour Package?
          </h2>
          <p className="mt-3 text-green-100">
            We'll design a package tailored to your family, budget, and schedule.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 {BUSINESS.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi, I want a custom tour package")}
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