// components/Footer.tsx
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Car,
  MessageCircle,
  Clock,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

// Social Icons (SVG inline — Lucide me nahi hain)
const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/routes", label: "Popular Routes" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const POPULAR_ROUTES = [
  { href: "/routes/palanpur-to-ambaji", label: "Palanpur → Ambaji" },
  { href: "/routes/palanpur-to-mount-abu", label: "Palanpur → Mount Abu" },
  { href: "/routes/palanpur-to-ahmedabad", label: "Palanpur → Ahmedabad" },
  { href: "/routes/palanpur-to-udaipur", label: "Palanpur → Udaipur" },
  { href: "/routes/palanpur-to-dwarka", label: "Palanpur → Dwarka" },
  { href: "/routes/palanpur-to-rajasthan", label: "Palanpur → Rajasthan" },
];

const SERVICES = [
  "One Way Cab Service",
  "Round Trip Cab Service",
  "Airport Pickup & Drop",
  "Railway Pickup & Drop",
  "All India Tour Service",
  "24x7 Available",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-gold-500 to-primary-500" />

      {/* Top CTA Strip */}
      <div className="relative border-b border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="font-display text-xl md:text-2xl font-bold text-white">
                Ready to Book Your Ride?
              </div>
              <div className="mt-1 text-sm text-gray-400">
                Call or WhatsApp — instant confirmation, 24x7 available
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 active:scale-95"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={whatsappLink("Hi, I want to book a cab")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1ebe57] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container-custom py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-premium transition-transform duration-300 group-hover:scale-105">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-base">
                  {BUSINESS.name}
                </div>
                <div className="text-xs text-gray-400">Palanpur, Gujarat</div>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Palanpur's most trusted cab service since {BUSINESS.established}.
              Local rides, outstation trips, airport transfers, and All India
              tour packages.
            </p>

            {/* Trust Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-300">
                <Star className="h-3 w-3 fill-gold-500 text-gold-500" />
                4.8★ Rated
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-300">
                <ShieldCheck className="h-3 w-3 text-primary-400" />
                Verified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-300">
                <Clock className="h-3 w-3 text-primary-400" />
                24x7
              </span>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href={BUSINESS.social.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-primary-600 hover:text-white hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.social.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.social.youtube || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-red-600 hover:text-white hover:scale-110"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink("Hi, I want to book a cab")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-[#25D366] hover:text-white hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base">
              Quick Links
            </h3>
            <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-gold-500 to-transparent" />
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Routes */}
          <div>
            <h3 className="font-display font-bold text-white text-base">
              Popular Routes
            </h3>
            <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-gold-500 to-transparent" />
            <ul className="mt-5 space-y-3 text-sm">
              {POPULAR_ROUTES.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base">
              Get In Touch
            </h3>
            <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-gold-500 to-transparent" />

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">{BUSINESS.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone2}`}
                  className="flex gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                  {BUSINESS.phone2Display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex gap-3 text-gray-400 hover:text-primary-400 transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Strip */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Our Services
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 bg-black/20">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-gray-500 md:flex-row">
          <p>
            © {currentYear} <span className="text-gray-400 font-medium">{BUSINESS.name}</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-primary-400 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-primary-400 transition-colors">
              Contact
            </Link>
          </div>
          <p className="text-gray-600">
            Owned by <span className="text-gray-400">{BUSINESS.owner}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}