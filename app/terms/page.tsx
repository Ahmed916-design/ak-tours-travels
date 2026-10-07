// app/terms/page.tsx
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | A K Tours and Travels",
  description:
    "Terms and conditions for booking cabs and tour packages with A K Tours and Travels, Palanpur.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Legal"
            title="Terms & Conditions"
            subtitle="Please read carefully before booking"
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-3xl prose prose-gray">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            1. Booking & Confirmation
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            All bookings are subject to vehicle availability. A booking is
            confirmed only after verbal or written confirmation from{" "}
            {BUSINESS.name}. Token advance may be required for outstation and
            tour packages.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            2. Fare & Payment
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Fares quoted are estimates based on distance. Actual fare may vary
            due to route changes, waiting time, extra stops, or unforeseen
            circumstances. Toll, parking, state tax, and entry fees are extra
            at actuals. Payment accepted via Cash, UPI, or Bank Transfer.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            3. Cancellation Policy
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Cancellations made 4 or more hours before pickup are free. For
            cancellations within 4 hours of pickup, a cancellation fee may
            apply. No-shows will be charged in full.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            4. Passenger Responsibilities
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Passengers must provide accurate pickup and drop details. Illegal
            items, smoking, and consumption of alcohol inside the vehicle are
            strictly prohibited. Any damage to the vehicle caused by the
            passenger will be charged.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            5. Driver & Vehicle
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We reserve the right to change the assigned driver or vehicle at
            any time due to operational reasons. All drivers are licensed and
            verified.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            6. Delays & Liability
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            While we strive for punctuality, {BUSINESS.name} is not liable for
            delays caused by traffic, weather, vehicle breakdown, or other
            events beyond our control. In case of a breakdown, we will arrange
            an alternate vehicle as soon as possible.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            7. Tour Packages
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Tour packages include car, driver, fuel, and driver allowance.
            Hotel bookings, food, entry tickets, and personal expenses are not
            included unless explicitly mentioned.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            8. Changes to Terms
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We may update these terms from time to time. Continued use of our
            services implies acceptance of the updated terms.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            9. Contact
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            For any questions about these terms, contact us at{" "}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-green-700 hover:underline"
            >
              {BUSINESS.email}
            </a>{" "}
            or call {BUSINESS.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}