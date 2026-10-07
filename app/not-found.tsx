// app/not-found.tsx
import Link from "next/link";
import { Home, Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container-custom max-w-2xl text-center">
        <div className="text-8xl md:text-9xl font-bold text-green-600">
          404
        </div>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn-secondary">
            <Phone className="h-5 w-5" />
            Call Us
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Need to book a cab? Call us directly on{" "}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="font-semibold text-green-700 hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>{" "}
          or{" "}
          <a
            href={whatsappLink("Hi, I want to book a cab")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-green-700 hover:underline"
          >
            <MessageCircle className="h-3 w-3" /> WhatsApp us
          </a>
        </p>
      </div>
    </section>
  );
}