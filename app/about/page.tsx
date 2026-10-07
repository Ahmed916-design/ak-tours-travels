// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Users,
  Car,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | A K Tours and Travels Palanpur",
  description:
    "A K Tours and Travels is Palanpur's trusted cab service since 2015. Owned by Ammar Khorajiya. Serving local, outstation, airport transfers and tour packages.",
};

export default function AboutPage() {
  const stats = [
    { icon: Car, value: "15+", label: "Cars in Fleet" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Clock, value: "24x7", label: "Available" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="About Us"
            title="Palanpur's Trusted Cab Service Since 2015"
            subtitle="Serving locals, tourists, and businesses with reliable, transparent, and comfortable rides"
          />
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-custom grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>A K Tours and Travels</strong> was founded in{" "}
                {BUSINESS.established} with a simple mission — to provide
                Palanpur and North Gujarat with a cab service people can
                truly trust.
              </p>
              <p>
                Owned and managed by <strong>{BUSINESS.owner}</strong>, we
                started with just one car and a commitment to punctuality,
                safety, and honest pricing. Today, we serve thousands of
                customers every year — from daily commuters to families on
                pilgrimage tours.
              </p>
              <p>
                Our fleet includes Hyundai Aura, Maruti Ertiga, Toyota Innova
                Crysta, and Force Urbania — all AC, well-maintained, and
                driven by verified, professional drivers.
              </p>
              <p>
                Whether it's an airport drop at 4 AM, an Ambaji darshan trip,
                or a multi-day Rajasthan tour, we're here for you —{" "}
                <strong>24x7, 365 days</strong>.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-green-100 p-8">
            <h3 className="text-xl font-bold text-gray-900">
              Meet the Owner
            </h3>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                {BUSINESS.owner.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {BUSINESS.owner}
                </div>
                <div className="text-sm text-gray-600">Founder & Owner</div>
              </div>
            </div>
            <p className="mt-6 text-gray-700 italic">
              "We treat every customer like family. Whether it's a short city
              ride or a long pilgrimage, our goal is to make your journey
              comfortable, safe, and memorable."
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="card text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Icon className="h-7 w-7 text-green-700" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-green-700">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="Visit Us"
            title="Our Office"
            subtitle="Come meet us in person or call anytime"
          />

          <div className="mt-10 card space-y-5">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Address</div>
                <div className="text-gray-700 mt-1">{BUSINESS.address.full}</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Phone</div>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-green-700 hover:underline mt-1 block"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-green-700 hover:underline mt-1 block break-all"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}