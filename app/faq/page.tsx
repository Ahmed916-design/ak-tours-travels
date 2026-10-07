// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ | Cab Booking Questions | A K Tours Palanpur",
  description:
    "Frequently asked questions about cab booking in Palanpur — payment, cancellation, driver verification, outstation rules, and more.",
};

const FAQS = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a cab with A K Tours and Travels?",
        a: "You can book by calling us at +91 99793 57086, sending a WhatsApp message, or filling the contact form on our website. We confirm your booking within minutes.",
      },
      {
        q: "How far in advance should I book?",
        a: "For local rides, 30 minutes in advance is enough. For outstation trips and airport transfers, we recommend booking at least 4-6 hours in advance. For tour packages, 2-3 days advance is ideal.",
      },
      {
        q: "Do you provide one-way and round-trip cabs?",
        a: "Yes, we offer both one-way and round-trip options for all outstation routes. Round-trip bookings usually come with better per-km rates.",
      },
      {
        q: "Can I book a cab for multiple days?",
        a: "Absolutely. We offer multi-day tour packages and corporate monthly rentals. Call us to discuss your requirements and get a custom quote.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How is the fare calculated?",
        a: "For local rides, we charge by package (e.g., 8hr/80km) or per km. For outstation, the fare is distance × per-km rate + driver allowance (₹300/day) + night charge (₹300 if applicable). Toll, parking, and state tax are extra at actuals.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No. We believe in fully transparent pricing. All charges are told upfront before booking confirmation. Toll, parking, and state tax are the only extras and are charged at actuals.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Cash, UPI (GPay, PhonePe, Paytm), and Bank Transfer. For advance booking, you can pay a small token amount to confirm.",
      },
      {
        q: "Do I need to pay in advance?",
        a: "For local rides, no advance is needed. For outstation and tour packages, a small token advance (10-20%) may be requested to confirm the booking. Balance is paid after the trip.",
      },
    ],
  },
  {
    category: "Cancellation & Changes",
    items: [
      {
        q: "Can I cancel my booking?",
        a: "Yes. Cancellations made 4+ hours before pickup are free. Cancellations within 4 hours may attract a small fee. Call us to cancel — no cancellation through the website yet.",
      },
      {
        q: "Can I change my pickup time or date?",
        a: "Yes, subject to availability. Call us as early as possible so we can adjust the schedule and assign a driver accordingly.",
      },
      {
        q: "What if my flight or train is delayed?",
        a: "No worries. For airport and railway pickups, we track your arrival time and adjust the pickup accordingly at no extra charge.",
      },
    ],
  },
  {
    category: "Drivers & Safety",
    items: [
      {
        q: "Are your drivers verified?",
        a: "Yes. All our drivers are licensed, background-checked, and experienced. They know local routes and major highways well.",
      },
      {
        q: "Are your cars AC and clean?",
        a: "Yes. Every car in our fleet is AC, regularly serviced, and cleaned before every trip.",
      },
      {
        q: "What if I have a complaint about a driver?",
        a: "Call us immediately at +91 99793 57086. We take every complaint seriously and will resolve the issue promptly.",
      },
      {
        q: "Do you allow pets in the cab?",
        a: "Small pets are allowed in some cars. Please inform us at the time of booking so we can arrange an appropriate vehicle.",
      },
    ],
  },
  {
    category: "Tour Packages",
    items: [
      {
        q: "What is included in a tour package?",
        a: "Our tour packages include the car, driver, fuel, and driver allowance. The itinerary of major spots is planned. Toll, parking, state tax, and your personal expenses (food, hotel, entry fees) are extra.",
      },
      {
        q: "Can I customize a tour package?",
        a: "Yes, we love creating custom packages. Tell us your preferred destinations, days, and budget — we'll design an itinerary for you.",
      },
      {
        q: "Do you arrange hotels?",
        a: "We can recommend trusted hotels at your destination, but the booking and payment are handled by you. This keeps pricing transparent.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking a cab with A K Tours and Travels"
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl space-y-12">
          {FAQS.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((faq, i) => (
                  <details
                    key={i}
                    className="group card cursor-pointer"
                  >
                    <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                      <span>{faq.q}</span>
                      <span className="text-green-600 text-2xl transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-gray-600">
            Call or WhatsApp us — we'll answer within minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi, I have a question about booking")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:underline"
          >
            Or send us a message <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}