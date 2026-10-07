// components/Hero.tsx
import { Phone, MessageCircle, Star, ShieldCheck, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container-custom py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Palanpur's Trusted Cab Service
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Book Your Ride in{" "}
              <span className="text-green-600">Palanpur</span> in 2 Minutes
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Local, outstation, airport transfers, and tour packages.
              Verified drivers, transparent pricing, available 24x7.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-primary text-base py-3 px-6"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={whatsappLink("Hi, I want to book a cab in Palanpur")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base py-3 px-6"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" /> Verified Drivers
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" /> 24x7 Service
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-5 w-5 text-green-600" /> 4.8★ Rated
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
              <h3 className="text-xl font-bold text-gray-900">Quick Booking</h3>
              <p className="mt-1 text-sm text-gray-500">
                Call or WhatsApp us — confirmed in 2 minutes
              </p>

              <div className="mt-6 space-y-3">
                <a href={`tel:${BUSINESS.phone}`} className="btn-primary w-full">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={whatsappLink(
                    "Hi, I want to book a cab. Pickup: ___, Drop: ___, Date: ___"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Booking
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-green-50 p-3">
                  <div className="text-xl font-bold text-green-700">15+</div>
                  <div className="text-xs text-gray-600">Cars</div>
                </div>
                <div className="rounded-lg bg-green-50 p-3">
                  <div className="text-xl font-bold text-green-700">5000+</div>
                  <div className="text-xs text-gray-600">Trips</div>
                </div>
                <div className="rounded-lg bg-green-50 p-3">
                  <div className="text-xl font-bold text-green-700">4.8★</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}