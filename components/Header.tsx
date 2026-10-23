// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  {
    href: "/routes",
    label: "Routes",
    categories: [
      {
        id: "outstation",
        label: "Outstation",
        emoji: "🏔️",
        routes: [
          { href: "/routes/palanpur-to-mumbai", label: "Palanpur → Mumbai" },
          { href: "/routes/palanpur-to-delhi", label: "Palanpur → Delhi" },
          { href: "/routes/palanpur-to-srinagar-kashmir", label: "Palanpur → Kashmir" },
          { href: "/routes/palanpur-to-kerala", label: "Palanpur → Kerala" },
          { href: "/routes/palanpur-to-jaipur", label: "Palanpur → Jaipur" },
          { href: "/routes/palanpur-to-rajasthan", label: "Palanpur → Rajasthan" },
        ],
      },
      {
        id: "local",
        label: "Local & Short Trips",
        emoji: "🏙️",
        routes: [
          { href: "/routes/ahmedabad-to-palanpur", label: "Ahmedabad → Palanpur" },
          { href: "/routes/ahmedabad-to-mumbai", label: "Ahmedabad → Mumbai" },
          { href: "/routes/vadodara-to-mumbai", label: "Vadodara → Mumbai" },
          { href: "/routes/mumbai-to-ahmedabad", label: "Mumbai → Ahmedabad" },
          { href: "/routes/surat-to-mumbai", label: "Surat → Mumbai" },
          { href: "/routes/mumbai-to-surat", label: "Mumbai → Surat" },
        ],
      },
    ],
  },
  { href: "/packages", label: "Tour Packages" },
  { href: "/cities", label: "Cities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-sm">
        <div className="container-custom flex items-center justify-between py-2 gap-3">
          <span className="hidden sm:inline">
            🚕 24x7 Cab Service | All India Tours Available
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`tel:${BUSINESS.phone2}`}
              className="hidden md:flex items-center gap-2 hover:underline"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone2Display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container-custom flex items-center justify-between py-3">
        {/* Logo */}
                <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/images/logo/logo.png"
            alt={BUSINESS.name}
            width={80}
            height={80}
            priority
            className="h-14 w-14 md:h-16 md:w-16 rounded-lg"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-base md:text-lg font-bold text-gray-900">
              A K Tours
            </div>
            <div className="text-[10px] md:text-xs font-semibold tracking-wider text-primary-700 uppercase">
              and Travels
            </div>
            <div className="text-[9px] md:text-[10px] text-gray-500 mt-0.5">
              Trusted Across India
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            if (item.categories) {
              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-primary-50 hover:text-primary-700"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="w-[560px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-premium animate-fade-in">
                        <div className="grid grid-cols-2 gap-0">
                          {item.categories.map((category) => (
                            <div
                              key={category.id}
                              className="border-r border-gray-100 p-4 last:border-r-0"
                            >
                              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                                <span className="text-xl">{category.emoji}</span>
                                <span className="font-display text-sm font-bold text-gray-900">
                                  {category.label}
                                </span>
                              </div>
                              <ul className="space-y-0.5">
                                {category.routes.map((route) => (
                                  <li key={route.href}>
                                    <Link
                                      href={route.href}
                                      onClick={() => setDropdownOpen(false)}
                                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-all hover:bg-primary-50 hover:text-primary-700 hover:pl-4"
                                    >
                                      {route.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                          <Link
                            href="/routes"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center justify-between text-sm font-semibold text-primary-700 hover:text-primary-800"
                          >
                            View All Routes
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact#inquiry"
            className="ml-2 rounded-xl border-2 border-primary-600 px-4 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
          >
            Send Inquiry
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="ml-1 inline-flex items-center gap-1.5 rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700 hover:shadow-premium active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-105px)] overflow-y-auto border-t border-gray-100 bg-white animate-fade-in shadow-lg pb-10">
          <nav className="container-custom flex flex-col py-4">
            {NAV.map((item) => {
              if (item.categories) {
                return (
                  <div key={item.href} className="border-b border-gray-50 py-2">
                    <div className="py-2 px-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                      {item.label}
                    </div>
                    {item.categories.map((category) => (
                      <div key={category.id} className="mb-3">
                        <div className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-900">
                          <span>{category.emoji}</span>
                          <span>{category.label}</span>
                        </div>
                        {category.routes.map((route) => (
                          <Link
                            key={route.href}
                            href={route.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 px-6 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {route.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-gray-50 py-3 text-sm font-medium text-gray-700 hover:text-primary-700"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact#inquiry"
              onClick={() => setOpen(false)}
              className="btn-secondary mt-4 text-sm"
            >
              Send Inquiry
            </Link>
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