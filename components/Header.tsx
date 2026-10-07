// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Car } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/routes", label: "Routes" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="bg-green-700 text-white text-sm">
        <div className="container-custom flex items-center justify-between py-2">
          <span className="hidden sm:inline">
            🚕 24x7 Cab Service in Palanpur
          </span>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 hover:underline"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
            <Car className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-gray-900">{BUSINESS.name}</div>
            <div className="text-xs text-gray-500">Palanpur, Gujarat</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition"
            >
              {item.label}
            </Link>
          ))}
          <a href="/contact#inquiry" className="btn-secondary text-sm py-2 px-4">
            Send Inquiry
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="btn-primary text-sm py-2 px-4"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container-custom flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-gray-700 hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/contact#inquiry"
              onClick={() => setOpen(false)}
              className="btn-secondary mt-4 text-sm"
            >
              Send Inquiry
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-primary mt-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}