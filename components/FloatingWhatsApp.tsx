// components/FloatingWhatsApp.tsx
"use client";

import { MessageCircle, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  // Hide pulse after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expandable Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          {/* Call Card */}
          <div className="rounded-2xl bg-white p-4 shadow-2xl border border-gray-100 max-w-xs">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="font-display font-bold text-gray-900">
                  Need a Cab?
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  We reply within 2 minutes
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href={whatsappLink("Hi, I want to book a cab")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1ebe57] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Booking
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 w-full rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 active:scale-95"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`tel:${BUSINESS.phone2}`}
                className="flex items-center gap-2 w-full rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 active:scale-95"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phone2Display}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1ebe57] active:scale-95"
        aria-label="Contact us"
      >
        {/* Pulse ring */}
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        )}
        {isOpen ? (
          <X className="h-6 w-6 relative z-10" />
        ) : (
          <MessageCircle className="h-6 w-6 relative z-10" />
        )}
      </button>
    </div>
  );
}