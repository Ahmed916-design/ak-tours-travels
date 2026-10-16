// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ | Cab Booking Questions | A K Tours and Travels",
  description:
    "Frequently asked questions about cab booking in India — payment, cancellation, driver verification, outstation rules, and more. Call +91 99793 57086.",
};

const FAQS = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a cab with A K Tours and Travels?",
        a: "You can book by calling us at +91 99793 57086 or +91 99257 63146, sending a WhatsApp message, or filling the inquiry form on our website. We confirm your booking within minutes.",
      },
      {
        q: "How far in advance should I book?",
        a: "For local rides, 30 minutes in advance is enough. For outstation trips and airport transfers, we recommend booking at least 4-6 hours in advance. For multi-day tours and long-distance trips (Mumbai, Delhi, Kashmir, Kerala), 2-3 days advance is ideal.",
      },
      {
        q: "Do you provide one-way and round-trip cabs?",
        a: "Yes, we offer both one-way and round-trip options for all routes — local and outstation. Round-trip bookings usually come with better per-km rates.",
      },
      {
        q: "Can I book a cab for multiple days?",
        a: "Absolutely. We offer multi-day tour packages for Kashmir, Kerala, Rajasthan, and other destinations. We also provide corporate monthly rentals. Call us to discuss your requirements and get a custom quote.",
      },
      {
        q: "Do you serve cities other than Palanpur and Ahmedabad?",
        a: "Yes, we provide service across India — from local rides in Palanpur, Deesa, Chhapi, and Ahmedabad to outstation trips to Mumbai, Delhi, Kashmir, Kerala, Rajasthan, and anywhere in India.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How is the fare calculated?",
        a: "For local rides, we charge by package (e.g., 8hr/80km) or per km. For outstation, the fare is distance × per-km rate + driver allowance + night charge (if applicable). Toll, parking, and state tax are extra at actuals.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No. We believe in fully transparent pricing. All charges are told upfront before booking confirmation. Toll, parking, and state tax are the only extras and are charged at actuals.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Cash, UPI (GPay, PhonePe, Paytm), and Bank Transfer. For advance booking of outstation trips and multi-day tours, a small token amount may be required to confirm.",
      },
      {
        q: "Do I need to pay in advance?",
        a: "For local rides, no advance is needed. For outstation and multi-day tours, a small token advance (10-20%) may be requested to confirm the booking. Balance is paid after the trip.",
      },
      {
        q: "Do you offer discounts for round-trips or long-distance trips?",
        a: "Yes, we offer discounts on round-trips, multi-day tours, and long-distance trips. Call us for the best rate — we'll give you our most competitive quote.",
      },
    ],
  },
  {
    category: "Cancellation & Changes",
    items: [
      {
        q: "Can I cancel my booking?",
        a: "Yes. Cancellations made 4+ hours before pickup are free. Cancellations within 4 hours may attract a small fee. Call us at +91 99793 57086 to cancel.",
      },
      {
        q: "Can I change my pickup time or date?",
        a: "Yes, subject to availability. Call us as early as possible so we can adjust the schedule and assign a driver accordingly.",
      },
      {
        q: "What if my flight or train is delayed?",
        a: "No worries. For airport and railway pickups in Palanpur, Ahmedabad, and other cities, we track your arrival time and adjust the pickup accordingly at no extra charge.",
      },
    ],
  },
  {
    category: "Drivers & Safety",
    items: [
      {
        q: "Are your drivers verified?",
        a: "Yes. All our drivers are licensed, background-checked, and experienced. They know local routes and major highways well — whether it's Palanpur, Ahmedabad, or All India trips.",
      },
      {
        q: "Are your cars AC and clean?",
        a: "Yes. Every car in our fleet — Swift Dzire, Hyundai Aura, Maruti Ertiga, Toyota Innova Crysta, and Force Urbania — is AC, regularly serviced, and cleaned before every trip.",
      },
      {
        q: "What if I have a complaint about a driver?",
        a: "Call us immediately at +91 99793 57086 or +91 99257 63146. We take every complaint seriously and will resolve the issue promptly.",
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
        a: "Yes, we love creating custom packages. Tell us your preferred destinations, days, and budget — we'll design an itinerary for you. Popular: Ambaji, Mount Abu, Dwarka, Somnath, Rajasthan, Kashmir, Kerala.",
      },
      {
        q: "Do you arrange hotels?",
        a: "We can recommend trusted hotels at your destination, but the booking and payment are handled by you. This keeps pricing transparent.",
      },
      {
        q: "Do you provide cars for multi-day All India tours?",
        a: "Yes — we provide AC cars (Innova Crysta, Ertiga, and Force Urbania Mini Bus) for multi-day tours to Kashmir, Kerala, Rajasthan, and other All India destinations.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
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
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((faq, i) => (
                  <details key={i} className="group card cursor-pointer">
                    <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-primary-600 text-2xl transition group-open:rotate-45 shrink-0">
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
      <section className="section-cream">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
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
            href="/contact#inquiry"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:underline"
          >
            Or send us a message <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}