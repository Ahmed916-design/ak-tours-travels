// app/privacy/page.tsx
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | A K Tours and Travels",
  description:
    "How A K Tours and Travels collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="Your privacy matters to us"
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            1. Information We Collect
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            When you book with us, we collect your name, mobile number, email
            (optional), pickup and drop addresses, travel dates, and payment
            details. This information is necessary to provide our services.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            2. How We Use Your Information
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• To confirm and manage your booking</li>
            <li>• To contact you regarding your trip</li>
            <li>• To send booking confirmations via SMS, WhatsApp, or email</li>
            <li>• To improve our services and customer experience</li>
            <li>• To comply with legal requirements</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            3. Information Sharing
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We do not sell or rent your personal information to third parties.
            We may share limited details (name and pickup location) with the
            assigned driver solely to complete your trip.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            4. Data Security
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or misuse. Our website uses
            HTTPS encryption for all data transmission.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            5. Cookies
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Our website may use basic cookies and analytics tools (such as
            Google Analytics) to understand visitor behavior and improve our
            site. You can disable cookies in your browser settings.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            6. Third-Party Links
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Our website may contain links to third-party sites (such as Google
            Maps, WhatsApp). We are not responsible for the privacy practices
            of these external sites.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            7. Your Rights
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            8. Contact Us
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            For any privacy-related questions, contact us at{" "}
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