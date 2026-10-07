// components/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Car } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
              <Car className="h-5 w-5" />
            </div>
            <span className="font-bold">{BUSINESS.name}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            Palanpur ki sabse bharosemand cab service. Local, outstation,
            airport transfer aur tour packages.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/fleet" className="hover:text-green-400">Our Fleet</Link></li>
            <li><Link href="/routes" className="hover:text-green-400">Popular Routes</Link></li>
            <li><Link href="/packages" className="hover:text-green-400">Tour Packages</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-green-400">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Popular Routes</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/routes/palanpur-to-ambaji" className="hover:text-green-400">Palanpur → Ambaji</Link></li>
            <li><Link href="/routes/palanpur-to-mount-abu" className="hover:text-green-400">Palanpur → Mount Abu</Link></li>
            <li><Link href="/routes/palanpur-to-ahmedabad" className="hover:text-green-400">Palanpur → Ahmedabad</Link></li>
            <li><Link href="/routes/palanpur-to-udaipur" className="hover:text-green-400">Palanpur → Udaipur</Link></li>
            <li><Link href="/routes/palanpur-to-dwarka" className="hover:text-green-400">Palanpur → Dwarka</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              <span>{BUSINESS.address.full}</span>
            </li>
            <li>
              <a href={`tel:${BUSINESS.phone}`} className="flex gap-2 hover:text-green-400">
                <Phone className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex gap-2 hover:text-green-400 break-all">
                <Mail className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-green-400">Terms</Link>
            <Link href="/privacy" className="hover:text-green-400">Privacy</Link>
            <Link href="/contact" className="hover:text-green-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}