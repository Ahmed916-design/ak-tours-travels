// app/contact/page.tsx
import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | A K Tours and Travels Palanpur",
  description:
    "Contact A K Tours and Travels in Palanpur. Call +91 99793 57086 or WhatsApp for instant booking. Office: Kanoder, Behind Swad Hotel, Palanpur.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Contact Us"
            title="Get in Touch"
            subtitle="Call, WhatsApp, or visit our office — we're here 24x7 to help you"
          />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-5">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="card flex items-start gap-4 hover:border-green-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 shrink-0">
                  <Phone className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Call Us
                  </div>
                  <div className="mt-1 text-lg font-bold text-green-700">
                    {BUSINESS.phoneDisplay}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Available 24x7
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink("Hi, I want to book a cab")}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-start gap-4 hover:border-green-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    WhatsApp
                  </div>
                  <div className="mt-1 text-lg font-bold text-[#25D366]">
                    {BUSINESS.phoneDisplay}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Fastest response
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="card flex items-start gap-4 hover:border-green-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 shrink-0">
                  <Mail className="h-6 w-6 text-green-700" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="mt-1 text-green-700 break-all">
                    {BUSINESS.email}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Reply within 24 hours
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="card flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 shrink-0">
                  <MapPin className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Office Address
                  </div>
                  <div className="mt-1 text-gray-700">
                    {BUSINESS.address.full}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 shrink-0">
                  <Clock className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Working Hours
                  </div>
                  <div className="mt-1 text-gray-700">
                    {BUSINESS.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 min-h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Kanoder+Palanpur+Gujarat&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A K Tours and Travels Office Location"
              />
            </div>
          </div>
        </div>
      </section>

            {/* INQUIRY FORM */}
      <section className="section bg-green-50" id="inquiry">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="Send Inquiry"
            title="Send Us Your Booking Request"
            subtitle="Fill the form — we'll get back on WhatsApp within minutes"
          />
          <div className="mt-10 card !p-6 md:!p-8">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-14">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Book Your Ride?
          </h2>
          <p className="mt-3 text-green-100">
            One call — and your cab is on the way.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              📞 Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi, I want to book a cab")}
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